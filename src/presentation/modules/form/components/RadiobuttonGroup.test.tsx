import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import userEvent from '@testing-library/user-event';

const options = [
  {
    label: 'Strength',
    value: 'strength',
  },
  {
    label: 'Health',
    value: 'health',
  },
  {
    label: 'Hypertrophy',
    value: 'hypertrophy',
  },
];

describe('<Radiobutton />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<RadiobuttonGroup options={[]} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('Should render radio input elements when at least one option provided', () => {
      render(<RadiobuttonGroup options={[options[0]]} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should render {n} radio input elements when {n} options provided', () => {
      render(<RadiobuttonGroup options={options} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBe(options.length);
    });

    it('Should render a radio input element with "Strength" label text when is provided by options prop', () => {
      render(<RadiobuttonGroup options={[options[0]]} />);
      expect(screen.getByRole('radio', { name: /strength/i })).toBeInTheDocument();
    });

    it('Should have radio input checked when its value is provided by checked prop', () => {
      render(<RadiobuttonGroup options={options} checked="health" />);
      expect(screen.getByRole('radio', { name: /health/i })).toBeChecked();
    });

    it('Should update radio input elements on options updating when rerendered', () => {
      const { rerender } = render(<RadiobuttonGroup options={[]} />);
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      rerender(<RadiobuttonGroup options={options} checked="health" />);
      expect(screen.getByRole('radio', { name: /health/i })).toBeInTheDocument();
      rerender(<RadiobuttonGroup options={[options[0], options[2]]} checked="strength" />);
      expect(screen.queryByRole('radio', { name: /health/i })).not.toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /strength/i })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('Should trigger onChange callback when clicked', async () => {
      const fn = jest.fn();
      const user = userEvent.setup();
      const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => fn();
      render(<RadiobuttonGroup options={options} onChange={handleChange} />);
      await user.click(screen.getByRole('radio', { name: /health/i }));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('Should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<RadiobuttonGroup options={options} />);
      await user.tab();
      expect(screen.getByRole('radio', { name: /strength/i })).toHaveFocus();
    });
  });
});
