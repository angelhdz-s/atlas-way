import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from '@/presentation/modules/form/components/fields/Select';
import userEvent from '@testing-library/user-event';

describe('<Select />', () => {
  const values = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  describe('Basic Rendering', () => {
    it('should be rendered with minimum props', () => {
      render(<Select options={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should be rendered with option element', () => {
      render(<Select options={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should have correct class', () => {
      render(<Select options={[]} className="test-class" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toHaveClass('test-class');
    });

    it('should have n option elements when n values provided', () => {
      render(<Select options={values} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /option 1/i })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /option 2/i })).toBeInTheDocument();
    });

    it('should have default option selected', () => {
      render(<Select options={values} selected="option2" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toHaveValue('option2');
    });

    it('should render error text when prop provided', () => {
      render(<Select options={[]} error="Select error" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByText('Select error')).toBeInTheDocument();
    });

    it('should update error text when rerendered', () => {
      const { rerender } = render(<Select options={[]} error="Select error" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByText('Select error')).toBeInTheDocument();
      rerender(<Select options={[]} />);
      expect(screen.queryByText('Select error')).not.toBeInTheDocument();
    });
  });

  describe('Internal State', () => {
    it('should change value when differente option selected', async () => {
      const user = userEvent.setup();
      const fn = jest.fn();
      render(<Select options={values} onChange={(_e) => fn()} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();

      await user.selectOptions(screen.getByRole('combobox'), 'option2');

      expect(screen.getByRole('combobox')).toHaveValue('option2');
    });
  });

  describe('User Interactions', () => {
    it('should call onChange callback when different option selected', async () => {
      const user = userEvent.setup();
      const fn = jest.fn();
      render(<Select options={values} onChange={(_e) => fn()} />);
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();

      await user.selectOptions(select, 'option2');

      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accesibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<Select options={[]} />);
      await user.tab();
      expect(screen.getByRole('combobox')).toHaveFocus();
    });
  });

  describe('Edge Cases', () => {
    it('should have rendered default option when 0 values provided', () => {
      render(<Select options={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /no options found/i })).toBeInTheDocument();
    });
  });
});
