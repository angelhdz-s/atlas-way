import type { ButtonVariantProps } from '@/presentation/modules/button/button.config';
import { buttonVariant } from '@/presentation/modules/button/button.config';

const getClasses = (variant: ButtonVariantProps = {}) => buttonVariant(variant).split(/\s+/);

describe('buttonVariant', () => {
  it('should apply the default size classes when no variant is provided', () => {
    expect(getClasses()).toContain('h-10');
  });

  describe('size', () => {
    it.each([
      { size: 'sm', expectedClass: 'h-8' },
      { size: 'md', expectedClass: 'h-10' },
      { size: 'lg', expectedClass: 'h-12' },
    ] as const)('should apply $expectedClass when size is $size', ({ size, expectedClass }) => {
      expect(getClasses({ size })).toContain(expectedClass);
    });
  });

  describe('color', () => {
    it.each([
      { color: 'primary', expectedClass: 'bg-sf-action-default' },
      { color: 'subtle', expectedClass: 'bg-sf-base-solid' },
      { color: 'outline', expectedClass: 'border-bd-base-solid' },
    ] as const)(
      'should apply $expectedClass when color is $color',
      ({ color, expectedClass }) => {
        expect(getClasses({ color })).toContain(expectedClass);
      }
    );
  });

  describe('type', () => {
    it('should apply the icon compound classes based on size', () => {
      const classes = getClasses({ type: 'icon', size: 'sm' });

      expect(classes).toContain('aspect-square');
      expect(classes).toContain('w-8');
      expect(classes).toContain('px-0');
    });
  });

  describe('disabled', () => {
    it('should apply the disabled classes when disabled is true', () => {
      expect(getClasses({ disabled: true })).toContain('cursor-not-allowed');
    });
  });
});
