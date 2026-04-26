import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Link } from '@/presentation/modules/button/components/Link';

describe('<Link />', () => {
  const href = '/dashboard';

  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<Link href={href}>Click</Link>);
      expect(screen.getByRole('link', { name: /click/i })).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should render the children text', () => {
      render(<Link href={href}>Click me</Link>);
      expect(screen.getByRole('link')).toHaveTextContent('Click me');
    });

    it('should have href attribute correctly', () => {
      render(<Link href={href}>Click me</Link>);
      expect(screen.getByRole('link')).toHaveAttribute('href', href);
    });

    it('should apply p-0 class based on square variantConfig type', () => {
      render(
        <Link href={href} variantConfig={{ type: 'square' }}>
          Click
        </Link>
      );
      expect(screen.getByRole('link')).toHaveClass('p-0');
    });

    describe('should apply class based on variantConfig color', () => {
      const cases = [
        { color: 'primary', expectedClass: 'bg-primary' },
        { color: 'simple', expectedClass: 'text-default' },
        { color: 'subtle', expectedClass: 'bg-subtle/20' },
      ];

      test.each(cases)(
        'should apply $expectedClass when color is $color',
        ({ color, expectedClass }) => {
          render(
            <Link href={href} variantConfig={{ color: color as 'simple' | 'primary' | 'subtle' }}>
              Click
            </Link>
          );
          expect(screen.getByRole('link')).toHaveClass(expectedClass);
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
            <Link href={href} variantConfig={{ size: size as 'xs' | 'sm' | 'md' | 'lg' }}>
              Click
            </Link>
          );
          expect(screen.getByRole('link')).toHaveClass(expectedClass);
        }
      );
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<Link href={href}>Click</Link>);
      await user.tab();
      expect(screen.getByRole('link')).toHaveFocus();
    });

    it('should be identifiable via aria-label when provided', async () => {
      render(
        <Link href={href} variantConfig={{ type: 'square' }} aria-label="Routines">
          +
        </Link>
      );
      const anchor = screen.getByRole('link', { name: /routines/i });
      expect(anchor).toBeInTheDocument();
    });
  });
});
