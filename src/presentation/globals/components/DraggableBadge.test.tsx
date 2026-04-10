import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DraggableBadge } from './DraggableBadge';
import userEvent from '@testing-library/user-event';

describe('<DraggableBadge />', () => {
  const dataTestId = 'draggable-badge-item';
  describe('Basic Rendering', () => {
    it('should render correctly with minimum props', () => {
      render(<DraggableBadge data-testid={dataTestId} />);
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
    it('should render correctly with children text', () => {
      render(<DraggableBadge data-testid={dataTestId}>Draggable Item</DraggableBadge>);
      expect(screen.getByTestId(dataTestId)).toHaveTextContent('Draggable Item');
    });
  });

  describe('Conditional Rendering', () => {
    it('should not render a button when onRemove callback not provided', async () => {
      render(<DraggableBadge data-testid={dataTestId} />);
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
      const button = screen.queryByLabelText('Remove item');
      expect(button).not.toBeInTheDocument();
    });

    it('should not render a button when onRemove callback provided', () => {
      render(<DraggableBadge data-testid={dataTestId} onRemove={() => {}} />);
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should integrate with Div props', () => {
      render(<DraggableBadge role="region" aria-label="Draggable item" className="test-class" />);
      const element = screen.getByLabelText('Draggable item');
      expect(element).toBeInTheDocument();
      expect(element).toHaveRole('region');
      expect(element).toHaveClass('test-class');
    });
  });

  describe('User Interaction', () => {
    it('should trigger onRemove callback when close button clicked', async () => {
      const user = userEvent.setup();
      const fn = jest.fn();
      render(<DraggableBadge data-testid={dataTestId} onRemove={fn} />);
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
      const button = screen.getByRole('button');
      await user.click(button);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have close button with aria-label when onRemove provided', () => {
      render(<DraggableBadge data-testid={dataTestId} onRemove={() => {}} />);
      const element = screen.getByTestId(dataTestId);
      expect(element).toBeInTheDocument();
      const closeBtn = screen.getByRole('button', { name: /remove item/i });
      expect(closeBtn).toBeInTheDocument();
    });
  });
});
