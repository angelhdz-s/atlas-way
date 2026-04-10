import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DropdownList } from './DropdownList';
import userEvent from '@testing-library/user-event';

describe('<DropdownList />', () => {
  const values = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  describe('Basic Rendering', () => {
    it('should be rendered with minimum props', () => {
      render(<DropdownList values={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should be rendered with option element', () => {
      render(<DropdownList values={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('should have correct class', () => {
      render(<DropdownList values={[]} className="test-class" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toHaveClass('test-class');
    });

    it('should have n option elements when n values provided', () => {
      render(<DropdownList values={values} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /option 1/i })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /option 2/i })).toBeInTheDocument();
    });

    it('should have default option selected', () => {
      render(<DropdownList values={values} selectedValue="option2" />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toHaveValue('option2');
    });

    it('should update value when rerendered', () => {
      const { rerender } = render(<DropdownList values={values} selectedValue="option2" />);
      expect(screen.getByRole('combobox')).toHaveValue('option2');
      rerender(<DropdownList values={values} selectedValue="option1" />);
      expect(screen.getByRole('combobox')).toHaveValue('option1');
    });
  });

  describe('Internal State', () => {
    it('should change value when differente option selected', async () => {
      const user = userEvent.setup();
      const fn = jest.fn();
      render(<DropdownList values={values} onChange={(_e) => fn()} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();

      await user.selectOptions(screen.getByRole('combobox'), 'option2');

      expect(screen.getByRole('combobox')).toHaveValue('option2');
    });
  });

  describe('User Interactions', () => {
    it('should call onChange callback when different option selected', async () => {
      const user = userEvent.setup();
      const fn = jest.fn();
      render(<DropdownList values={values} onChange={(_e) => fn()} />);
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();

      await user.selectOptions(select, 'option2');

      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accesibility', () => {
    it('should support keyboard navigation (focus)', async () => {
      const user = userEvent.setup();
      render(<DropdownList values={[]} />);
      await user.tab();
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('should have default option disabled when 0 values provided', () => {
      render(<DropdownList values={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /no options found/i })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /no options found/i })).toBeDisabled();
    });
  });

  describe('Edge Cases', () => {
    it('should have rendered default option when 0 values provided', () => {
      render(<DropdownList values={[]} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /no options found/i })).toBeInTheDocument();
    });
  });
});
