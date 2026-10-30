import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Button } from '@/presentation/modules/button/components/Button';

describe('<Button />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<Button variant={{ color: 'simple', size: 'md', type: 'default' }}>Click</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render the children text', () => {
      render(<Button variant={{ color: 'simple', size: 'md', type: 'default' }}>Click me</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('should default the type attribute to button', () => {
      render(<Button variant={{ color: 'simple', size: 'md', type: 'default' }}>Click</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should use the provided type attribute', () => {
      render(
        <Button variant={{ color: 'simple', size: 'md', type: 'default' }} type="submit">
          Click
        </Button>
      );
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });

  describe('State', () => {
    it('should reflect the disabled state from props', () => {
      render(
        <Button variant={{ color: 'simple', size: 'md', type: 'default' }} disabled>
          Click
        </Button>
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('User Interactions', () => {
    it('should trigger onClick callback when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(
        <Button variant={{ color: 'simple', size: 'md', type: 'default' }} onClick={handleClick}>
          Click
        </Button>
      );

      await user.click(screen.getByRole('button'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<Button variant={{ color: 'simple', size: 'md', type: 'default' }}>Click</Button>);

      await user.tab();

      expect(screen.getByRole('button')).toHaveFocus();
    });

    it('should be identifiable via aria-label when provided', () => {
      render(
        <Button variant={{ color: 'simple', size: 'md', type: 'default' }} aria-label="Create">
          <span aria-hidden="true">+</span>
        </Button>
      );

      expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument();
    });
  });
});
