import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormFieldSection } from '@/presentation/modules/form/components/FormFieldSection';
import { IconUser } from '@/presentation/globals/components/icons/outline/IconUser';

describe('<FormFieldSection />', () => {
  describe('Basic Rendering', () => {
    it('Should be rendered with minimum props', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('Should render a heading element', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('Should render a fieldset element', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('Should render children content', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByText('Anything')).toBeInTheDocument();
    });
  });

  describe('Conditional Rendering', () => {
    it('Should not render an icon (svg element) when Icon prop not provided', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      const component = screen.getByRole('region');
      expect(component.querySelector('svg')).not.toBeInTheDocument();
    });

    it('Should render an icon (svg element) when Icon prop provided', () => {
      render(
        <FormFieldSection title="Metrics" Icon={IconUser}>
          Anything
        </FormFieldSection>
      );
      const component = screen.getByRole('region');
      expect(component.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Integration with Props', () => {
    it('Should have "Metrics" heading text when title prop provided', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('region', { name: /metrics/i })).toBeInTheDocument();
    });

    it('Should update heading text when rerendered', () => {
      const { rerender } = render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('region', { name: /metrics/i })).toBeInTheDocument();
      rerender(<FormFieldSection title="Plan">Anything</FormFieldSection>);
      expect(screen.queryByRole('region', { name: /metrics/i })).not.toBeInTheDocument();
      expect(screen.getByRole('region', { name: /plan/i })).toBeInTheDocument();
    });

    it('Should update children content inside fieldset element when rerendered', () => {
      const { rerender } = render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('group')).toHaveTextContent('Anything');
      rerender(<FormFieldSection title="Plan">Another</FormFieldSection>);
      expect(screen.getByRole('group')).not.toHaveTextContent('Anything');
      expect(screen.getByRole('group')).toHaveTextContent('Another');
    });

    it('Should have fieldset with "bg-primary" class when provided by className prop', () => {
      render(
        <FormFieldSection title="Metrics" className="bg-primary">
          Anything
        </FormFieldSection>
      );
      expect(screen.getByRole('region')).toBeInTheDocument();
      expect(screen.getByRole('group')).toHaveClass('bg-primary');
    });
  });

  describe('Integration with Props', () => {
    it('Should have aria-label attribute with "Metrics" value', () => {
      render(<FormFieldSection title="Metrics">Anything</FormFieldSection>);
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Metrics');
    });
  });
});
