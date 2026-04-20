import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SelectBoxOption } from '@/presentation/modules/form/components/SelectBoxOption';
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

describe('<SelectBoxOption />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      expect(screen.getByLabelText(options[0].label)).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should have radio input checked when isSelected prop provided as "true" ', () => {
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} isSelected />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('Should not have radio input checked when isSelected prop is not provided (false)', () => {
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('Should update input check when rerendered', () => {
      const { rerender } = render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      rerender(<SelectBoxOption onSelect={() => {}} option={options[0]} isSelected />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('Should update checkbox by option prop when rerendered', () => {
      const { rerender } = render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      expect(screen.getByRole('checkbox', { name: /strength/i })).toBeInTheDocument();
      rerender(<SelectBoxOption onSelect={() => {}} option={options[1]} />);
      expect(screen.queryByRole('checkbox', { name: /strength/i })).not.toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: /health/i })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('Should trigger onChange (onSelect) callback when clicked', async () => {
      const fn = jest.fn();
      const user = userEvent.setup();
      const handleChange = (_v: string) => fn();
      render(<SelectBoxOption onSelect={handleChange} option={options[0]} />);
      await user.click(screen.getByLabelText(options[0].label));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('Should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      await user.tab();
      expect(screen.getByRole('checkbox', { name: /strength/i })).toHaveFocus();
    });

    it('Should be highlighted when isSelected prop is "true"', async () => {
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} isSelected />);
      expect(screen.getByText(options[0].label)).toHaveClass('border-complete');
    });

    it('Should not be highlighted when isSelected prop is not provided or as "false"', () => {
      render(<SelectBoxOption onSelect={() => {}} option={options[0]} />);
      expect(screen.getByText(options[0].label)).toHaveClass('border-subtle/20');
    });
  });
});
