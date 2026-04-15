import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TextArea } from '@/presentation/modules/form/components/fields/TextArea';

describe('<TextArea />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<TextArea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should have value "hello" when value prop provided', () => {
      render(<TextArea value="hello" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('should reflect rows attribute when provided by props', () => {
      render(<TextArea rows={3} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '3');
    });

    it('should render error when error prop provided', () => {
      render(<TextArea error="Text error" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByText('Text error')).toBeInTheDocument();
    });

    it('should update error rendering when rerendered', () => {
      const { rerender } = render(<TextArea error="Text error" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      rerender(<TextArea />);
      expect(screen.queryByText('Text error')).not.toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should update value when user types', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      await user.tab();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });
});
