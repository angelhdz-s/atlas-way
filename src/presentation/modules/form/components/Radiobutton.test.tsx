import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radiobutton } from '@/presentation/modules/form/components/Radiobutton';
import userEvent from '@testing-library/user-event';

describe('<Radiobutton />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<Radiobutton label="Strength" value="strength" />);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should have "Strength" label text when is provided by label prop', () => {
      render(<Radiobutton label="Strength" value="strength" />);
      expect(screen.getByLabelText('Strength')).toBeInTheDocument();
    });

    it('Should have radio input checked when is provided by checked prop', () => {
      render(<Radiobutton label="Strength" value="strength" checked />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('Should not have radio input checked when checked prop is not provided', () => {
      render(<Radiobutton label="Strength" value="strength" />);
      expect(screen.getByRole('radio')).not.toBeChecked();
    });

    it('Should update radio input checked when rerendered', () => {
      const { rerender } = render(<Radiobutton label="Strength" value="strength" />);
      expect(screen.getByRole('radio')).not.toBeChecked();
      rerender(<Radiobutton label="Strength" value="strength" checked />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('Should update label text when rerendered', () => {
      const { rerender } = render(<Radiobutton label="Strength" value="strength" />);
      expect(screen.getByLabelText('Strength')).toBeInTheDocument();
      rerender(<Radiobutton label="Resistance" value="strength" />);
      expect(screen.queryByLabelText('Strength')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Resistance')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('Should trigger onChange callback when clicked', async () => {
      const fn = jest.fn();
      const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => fn();
      const user = userEvent.setup();
      render(<Radiobutton onChange={handleChange} label="Strength" value="strength" />);
      await user.click(screen.getByLabelText('Strength'));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('Should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<Radiobutton label="Strength" value="strength" />);
      await user.tab();
      expect(screen.getByRole('radio')).toHaveFocus();
    });
  });
});
