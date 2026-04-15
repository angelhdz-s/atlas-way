import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { InputText } from '@/presentation/modules/form/components/fields/InputText';

describe('<InputText />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<InputText />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should have value "hello" when value prop provided', () => {
      render(<InputText value="hello" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('should render error when error prop provided', () => {
      render(<InputText error="Text error" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByText('Text error')).toBeInTheDocument();
    });

    it('should update error rendering when rerendered', () => {
      const { rerender } = render(<InputText error="Text error" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      rerender(<InputText />);
      expect(screen.queryByText('Text error')).not.toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should update value when user types', async () => {
      const user = userEvent.setup();
      render(<InputText />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<InputText />);
      await user.tab();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });
});
