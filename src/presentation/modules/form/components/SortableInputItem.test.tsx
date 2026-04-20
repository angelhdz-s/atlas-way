import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SortableInputItem } from '@/presentation/modules/form/components/SortableInputItem';
import userEvent from '@testing-library/user-event';

jest.mock('@dnd-kit/react/sortable', () => ({
  SortableContext: ({ children }: any) => children,

  useSortable: ({ id }: any) => ({
    attributes: {},
    listeners: {},
    setNodeRef: jest.fn(),
    transform: null,
    transition: undefined,
    isDragging: false,
    id,
  }),

  arrayMove: (arr: any[], from: number, to: number) => {
    const copy = [...arr];
    const [item] = copy.splice(from, 1);
    copy.splice(to, 0, item);
    return copy;
  },
}));

const options = [
  {
    label: 'Strength',
    value: 'strength',
  },
  {
    label: 'Health',
    value: 'health',
  },
];

const testId = 'sortable-item';

describe('<SortableInputItem />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('Should have button drag item', () => {
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.getByRole('button', { name: /drag item/i })).toBeInTheDocument();
    });

    it('Should have button to remove item', () => {
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.getByRole('button', { name: /remove item/i })).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should have text when provided in item prop label', () => {
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.getByText(options[0].label)).toBeInTheDocument();
    });

    it('Should have number {n + 1} when n is provided by index prop', () => {
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('Should update text when rerendered', () => {
      const { rerender } = render(
        <SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />
      );
      expect(screen.getByText(options[0].label)).toBeInTheDocument();
      rerender(<SortableInputItem index={0} item={options[1]} onRemoveOption={() => {}} />);
      expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
      expect(screen.getByText(options[1].label)).toBeInTheDocument();
    });

    it('Should update number when rerendered', () => {
      const { rerender } = render(
        <SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />
      );
      expect(screen.getByText('1')).toBeInTheDocument();
      rerender(<SortableInputItem index={1} item={options[0]} onRemoveOption={() => {}} />);
      expect(screen.queryByText('1')).not.toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('Should trigger onRemove callback when remove item button clicked', async () => {
      const fn = jest.fn();
      const user = userEvent.setup();
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={fn} />);
      await user.click(screen.getByRole('button', { name: /remove item/i }));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('Should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<SortableInputItem index={0} item={options[0]} onRemoveOption={() => {}} />);
      await user.tab();
      expect(screen.getByRole('button', { name: /drag item/i })).toHaveFocus();
      await user.tab();
      expect(screen.getByRole('button', { name: /remove item/i })).toHaveFocus();
    });
  });
});
