import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';

describe('variant button', () => {
  describe('rendering', () => {
    it('render children', () => {
      render(<VariantButton variantConfig={{}}>Click</VariantButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
    it('receive props properly', () => {
      const className = 'bg-accent';
      render(
        <VariantButton variantConfig={{}} className={className}>
          Click
        </VariantButton>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass(className);
    });
  });
  describe('behavior', () => {
    it('execute onClick when clicked', () => {
      const fn = jest.fn();
      render(
        <VariantButton variantConfig={{}} onClick={fn}>
          Click
        </VariantButton>
      );
      const button = screen.getByRole('button');
      button.click();
      expect(fn).toHaveBeenCalled();
    });
  });
});
