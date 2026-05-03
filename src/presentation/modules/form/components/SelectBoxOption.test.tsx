import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SelectBoxOption } from '@/presentation/modules/form/components/SelectBoxOption';
import userEvent from '@testing-library/user-event';
import { MOCK_SELECT_OPTIONS } from '@/shared/test/mocks/test.mocks.select-options';

describe('<SelectBoxOption />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />);
      expect(screen.getByLabelText(MOCK_SELECT_OPTIONS.STRENGTH.label)).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should have radio input checked when isSelected prop provided as "true" ', () => {
      render(
        <SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} isSelected />
      );
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('Should not have radio input checked when isSelected prop is not provided (false)', () => {
      render(<SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('Should update input check when rerendered', () => {
      const { rerender } = render(
        <SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />
      );
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      rerender(
        <SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} isSelected />
      );
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('Should update checkbox by option prop when rerendered', () => {
      const { rerender } = render(
        <SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />
      );
      expect(screen.getByRole('checkbox', { name: /strength/i })).toBeInTheDocument();
      rerender(<SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.HEALTH} />);
      expect(screen.queryByRole('checkbox', { name: /strength/i })).not.toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: /health/i })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('Should trigger onChange (onSelect) callback when clicked', async () => {
      const fn = jest.fn();
      const user = userEvent.setup();
      const handleChange = (_v: string) => fn();
      render(<SelectBoxOption onSelect={handleChange} option={MOCK_SELECT_OPTIONS.STRENGTH} />);
      await user.click(screen.getByLabelText(MOCK_SELECT_OPTIONS.STRENGTH.label));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('Should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />);
      await user.tab();
      expect(screen.getByRole('checkbox', { name: /strength/i })).toHaveFocus();
    });

    it('Should be highlighted when isSelected prop is "true"', async () => {
      render(
        <SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} isSelected />
      );
      expect(screen.getByText(MOCK_SELECT_OPTIONS.STRENGTH.label)).toHaveClass('border-success');
    });

    it('Should not be highlighted when isSelected prop is not provided or as "false"', () => {
      render(<SelectBoxOption onSelect={() => {}} option={MOCK_SELECT_OPTIONS.STRENGTH} />);
      expect(screen.getByText(MOCK_SELECT_OPTIONS.STRENGTH.label)).toHaveClass('border-bd-default');
    });
  });
});
