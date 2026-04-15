import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { InputCheckBox } from '@/presentation/modules/form/components/fields/InputCheckBox';

describe('<InputCheckBox />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<InputCheckBox />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
      expect(screen.getByText('Off')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should be checked when active props is true', () => {
      render(<InputCheckBox active />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
      expect(screen.getByText('On')).toBeInTheDocument();
    });

    it('should not be checked when active props is false', () => {
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  describe('Internal State', () => {
    it('should show "On" text when checkbox checked', async () => {
      render(<InputCheckBox active />);
      expect(screen.getByRole('switch')).toBeChecked();
      expect(screen.getByText('On')).toBeInTheDocument();
    });
    it('should show "Off" text when checkbox not checked', async () => {
      render(<InputCheckBox active={false} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
      expect(screen.getByText('Off')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should update active state after clicking', async () => {
      const user = userEvent.setup();
      render(<InputCheckBox active={false} />);
      expect(screen.getByText('Off')).toBeInTheDocument();
      await user.click(screen.getByTestId('input-checkbox'));
      expect(screen.getByText('On')).toBeInTheDocument();
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
