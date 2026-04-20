import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';

describe('<ErrorMessage />', () => {
  describe('Conditional Rendering', () => {
    it('Should not be rendered when message prop is not provided', () => {
      render(<ErrorMessage />);
      expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
    });

    it('Should be rendered when error prop is provided', () => {
      render(<ErrorMessage message="Error" />);
      expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should update text when rerendered', () => {
      const { rerender } = render(<ErrorMessage message="Error" />);
      expect(screen.getByText('Error')).toBeInTheDocument();
      rerender(<ErrorMessage message="New error" />);
      expect(screen.getByText('New error')).toBeInTheDocument();
    });

    it('Should dissapear when message prop goes from text to undefined ', () => {
      const { rerender } = render(<ErrorMessage message="Error" />);
      expect(screen.getByText('Error')).toBeInTheDocument();
      rerender(<ErrorMessage />);
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });

    it('Should appear when message prop goes undefined to text ', () => {
      const { rerender } = render(<ErrorMessage />);
      expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
      rerender(<ErrorMessage message="Error" />);
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
