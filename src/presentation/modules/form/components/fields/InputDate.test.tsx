import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InputDate } from '@/presentation/modules/form/components/fields/InputDate';
import userEvent from '@testing-library/user-event';

describe('<InputDate />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<InputDate />);
      expect(screen.getByTestId('input-date')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should reflect "2026-04-12" value when value prop is provided', () => {
      render(<InputDate value="2026-04-12" />);
      expect(screen.getByTestId('input-date')).toBeInTheDocument();
      expect(screen.getByTestId('input-date')).toHaveValue('2026-04-12');
    });

    it('should render error label when error prop is provided', () => {
      render(<InputDate error="Date error" />);
      expect(screen.getByText('Date error')).toBeInTheDocument();
    });

    it('should update error value when rerendered', () => {
      const { rerender } = render(<InputDate error="Date error" />);
      expect(screen.getByText('Date error')).toBeInTheDocument();
      rerender(<InputDate />);
      expect(screen.queryByText('Date error')).not.toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should update date when user types', async () => {
      const user = userEvent.setup();
      render(<InputDate />);
      expect(screen.getByTestId('input-date')).toBeInTheDocument();
      await user.type(screen.getByTestId('input-date'), '2026-04-14');
      expect(screen.getByTestId('input-date')).toHaveValue('2026-04-14');
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<InputDate />);
      await user.tab();
      expect(screen.getByTestId('input-date')).toHaveFocus();
    });
  });
});
