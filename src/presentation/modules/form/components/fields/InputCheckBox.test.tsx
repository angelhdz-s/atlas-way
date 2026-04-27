import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';

describe('<InputCheckBox />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<InputCheckBox />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should be checked when active props is true', () => {
      render(<InputCheckBox active />);
      expect(screen.getByRole('switch')).toBeChecked();
    });

    it('should not be checked when active props is false', () => {
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
    });
  });

  describe('User Interactions', () => {
    it('should update active state after clicking', async () => {
      const user = userEvent.setup();
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
      await user.click(screen.getByTestId('input-checkbox'));
      expect(screen.getByRole('switch')).toBeChecked();
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<InputCheckBox />);
      await user.tab();
      expect(screen.getByRole('switch')).toHaveFocus();
    });
    it('should toggle checkbox when Enter pressed (on focus)', async () => {
      const user = userEvent.setup();
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
      await user.tab();
      expect(screen.getByRole('switch')).toHaveFocus();
      await user.keyboard('{Enter}');
      expect(screen.getByRole('switch')).toBeChecked();
    });
    it('should toggle checkbox when Spacebar pressed (on focus)', async () => {
      const user = userEvent.setup();
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
      await user.tab();
      expect(screen.getByRole('switch')).toHaveFocus();
      await user.keyboard('{ }');
      expect(screen.getByRole('switch')).toBeChecked();
    });
  });
});
