import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Link } from '@/presentation/modules/button/components/Link';

describe('<Link />', () => {
  const href = '/dashboard';

  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(
        <Link variant={{ color: 'simple', size: 'md', type: 'default' }} href={href}>
          Click
        </Link>
      );
      expect(screen.getByRole('link', { name: /click/i })).toBeInTheDocument();
    });

    it('should render the children text', () => {
      render(
        <Link variant={{ color: 'simple', size: 'md', type: 'default' }} href={href}>
          Click me
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent('Click me');
    });

    it('should have href attribute correctly', () => {
      render(
        <Link variant={{ color: 'simple', size: 'md', type: 'default' }} href={href}>
          Click me
        </Link>
      );
      expect(screen.getByRole('link')).toHaveAttribute('href', href);
    });
  });

  describe('Accessibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(
        <Link variant={{ color: 'simple', size: 'md', type: 'default' }} href={href}>
          Click
        </Link>
      );

      await user.tab();

      expect(screen.getByRole('link')).toHaveFocus();
    });

    it('should be identifiable via aria-label when provided', () => {
      render(
        <Link
          variant={{ color: 'simple', size: 'md', type: 'default' }}
          href={href}
          aria-label="Routines"
        >
          <span aria-hidden="true">+</span>
        </Link>
      );

      expect(screen.getByRole('link', { name: /routines/i })).toBeInTheDocument();
    });
  });
});
