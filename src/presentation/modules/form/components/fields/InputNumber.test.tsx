import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { InputNumber } from '@/presentation/modules/form/components/fields/InputNumber';

describe('<InputNumber />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<InputNumber />);
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should have value "5" when value prop provided', () => {
      render(<InputNumber value={5} />);
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      expect(screen.getByRole('spinbutton')).toHaveValue(5);
    });

    it('should render error when error prop provided', () => {
      render(<InputNumber error="Number error" />);
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      expect(screen.getByText('Number error')).toBeInTheDocument();
    });

    it('should update error rendering when rerendered', () => {
      const { rerender } = render(<InputNumber error="Number error" />);
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
      rerender(<InputNumber />);
      expect(screen.queryByText('Number error')).not.toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should update value when user types', async () => {
      const user = userEvent.setup();
      render(<InputNumber />);
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();

      await user.type(screen.getByRole('spinbutton'), '10');
      expect(screen.getByRole('spinbutton')).toHaveValue(10);
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<InputNumber />);
      await user.tab();
      expect(screen.getByRole('spinbutton')).toHaveFocus();
    });
  });
});
