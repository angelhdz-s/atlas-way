import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Button } from '@/presentation/modules/button/components/Button';

describe('<Button />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<Button>Click</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should render the children text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('should reflect the disabled state from props', () => {
      render(<Button disabled>Click</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should apply p-0 class based on square variantConfig type', () => {
      render(<Button variantConfig={{ type: 'square' }}>Click</Button>);
      expect(screen.getByRole('button')).toHaveClass('p-0');
    });

    describe('should apply class based on variantConfig color', () => {
      const cases = [
        { color: 'primary', expectedClass: 'bg-primary' },
        { color: 'simple', expectedClass: 'text-fg-default' },
        { color: 'subtle', expectedClass: 'bg-subtle/20' },
      ];

      test.each(cases)(
        'should apply $expectedClass when color is $color',
        ({ color, expectedClass }) => {
          render(
            <Button variantConfig={{ color: color as 'simple' | 'primary' | 'subtle' }}>
              Click
            </Button>
          );
          expect(screen.getByRole('button')).toHaveClass(expectedClass);
        }
      );
    });
    describe('should apply class based on variantConfig size', () => {
      const cases = [
        { size: 'xs', expectedClass: 'h-8' },
        { size: 'sm', expectedClass: 'h-9' },
        { size: 'md', expectedClass: 'h-10' },
        { size: 'lg', expectedClass: 'h-11' },
      ];

      test.each(cases)(
        'should apply $expectedClass when size is $size',
        ({ size, expectedClass }) => {
          render(
            <Button variantConfig={{ size: size as 'xs' | 'sm' | 'md' | 'lg' }}>Click</Button>
          );
          expect(screen.getByRole('button')).toHaveClass(expectedClass);
        }
      );
    });
  });

  describe('User Interactions', () => {
    it('should trigger onClick callback when clicked', () => {
      const fn = jest.fn();
      render(<Button onClick={fn}>Click</Button>);
      screen.getByRole('button').click();
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<Button>Click</Button>);
      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();
    });

    it('should be identifiable via aria-label when provided', async () => {
      render(
        <Button variantConfig={{ type: 'square' }} aria-label="Create">
          +
        </Button>
      );
      const button = screen.getByRole('button', { name: /create/i });
      expect(button).toBeInTheDocument();
    });
  });
});
