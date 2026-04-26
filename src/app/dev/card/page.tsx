import { Link } from '@/presentation/modules/button/components/Link';
import { DevCardSizes } from './components/DevCardSizes';
import { DevCardColors } from './components/DevCardColors';
import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { IconCog } from '@/presentation/globals/components/icons/outline/IconCog';

export default function DevCardPage() {
  return (
    <>
      <Link href="/dev">Back</Link>
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-strong text-4xl">Sizes</h2>
          <DevCardSizes className="flex items-center gap-8" />
        </section>

        <section className="space-y-4">
          <h2 className="text-strong text-4xl">Colors</h2>
          <DevCardColors className="flex items-center gap-8" />
        </section>

        <section className="space-y-4">
          <h2 className="text-strong text-4xl">Types</h2>
          <main className="flex items-center gap-8">
            <Card className="h-50 space-y-4" width="md">
              <CardHeader>
                <CardTitle title="Card" Icon={IconCog} />
              </CardHeader>
              <span>Default</span>
            </Card>

            <Card type="dashboard" className="h-50 space-y-4" width="md">
              <CardHeader>
                <CardTitle title="Card" Icon={IconCog} />
              </CardHeader>
              <span>Dashboard</span>
            </Card>
          </main>
        </section>

        <section className="space-y-4">
          <h2 className="text-strong text-4xl">Highlighted Borders</h2>
          <DevCardColors border="highlighted" className="flex items-center gap-8" />
        </section>
      </div>
    </>
  );
}
