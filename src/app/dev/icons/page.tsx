import { Icon } from '@/presentation/modules/icon/components/Icon';

export default function IconsPage() {
  return (
    <div className="grid h-full min-h-full place-content-center space-y-4">
      <div className="text-ic-base-top grid grid-cols-4 gap-4">
        <Icon icon="check" variant={{ weight: 'thin', size: 'lg' }} />
        <Icon icon="check" variant={{ weight: 'moderate', size: 'lg' }} />
        <Icon icon="check" variant={{ weight: 'medium', size: 'lg' }} />
        <Icon icon="check" variant={{ weight: 'thick', size: 'lg' }} />

        <Icon icon="check" variant={{ weight: 'thin', size: 'md' }} />
        <Icon icon="check" variant={{ weight: 'moderate', size: 'md' }} />
        <Icon icon="check" variant={{ weight: 'medium', size: 'md' }} />
        <Icon icon="check" variant={{ weight: 'thick', size: 'md' }} />

        <Icon icon="check" variant={{ weight: 'thin', size: 'sm' }} />
        <Icon icon="check" variant={{ weight: 'moderate', size: 'sm' }} />
        <Icon icon="check" variant={{ weight: 'medium', size: 'sm' }} />
        <Icon icon="check" variant={{ weight: 'thick', size: 'sm' }} />
      </div>
    </div>
  );
}
