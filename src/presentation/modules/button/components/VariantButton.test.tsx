import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

describe('<VariantButton />', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<VariantButton variantConfig={{}}>Click</VariantButton>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should render the children text', () => {
      render(<VariantButton variantConfig={{}}>Click me</VariantButton>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('should reflect the disabled state from props', () => {
      render(
        <VariantButton variantConfig={{}} disabled>
          Click
        </VariantButton>
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should apply p-0 class based on square variantConfig type', () => {
      render(<VariantButton variantConfig={{ type: 'square' }}>Click</VariantButton>);
      expect(screen.getByRole('button')).toHaveClass('p-0');
    });

    describe('should apply class based on variantConfig color', () => {
      const cases = [
        { color: 'primary', expectedClass: 'bg-primary' },
        { color: 'simple', expectedClass: 'fg-default' },
        { color: 'subtle', expectedClass: 'bg-subtle/20' },
      ];

      test.each(cases)(
        'should apply $expectedClass when color is $color',
        ({ color, expectedClass }) => {
          render(
            <VariantButton variantConfig={{ color: color as 'simple' | 'primary' | 'subtle' }}>
              Click
            </VariantButton>
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
            <VariantButton variantConfig={{ size: size as 'xs' | 'sm' | 'md' | 'lg' }}>
              Click
            </VariantButton>
          );
          expect(screen.getByRole('button')).toHaveClass(expectedClass);
        }
      );
    });
  });

  describe('User Interactions', () => {
    it('should trigger onClick callback when clicked', () => {
      const fn = jest.fn();
      render(
        <VariantButton variantConfig={{}} onClick={fn}>
          Click
        </VariantButton>
      );
      screen.getByRole('button').click();
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<VariantButton variantConfig={{}}>Click</VariantButton>);
      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();
    });

    it('should be identifiable via aria-label when provided', async () => {
      render(
        <VariantButton variantConfig={{ type: 'square' }} aria-label="Create">
          +
        </VariantButton>
      );
      const button = screen.getByRole('button', { name: /create/i });
      expect(button).toBeInTheDocument();
    });
  });
});
