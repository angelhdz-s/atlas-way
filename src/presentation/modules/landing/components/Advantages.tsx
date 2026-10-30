import { AdvantageItem } from '@/presentation/modules/landing/components/advantages/AdvantageItem';

export function Advantages({ className = '' }: { className?: string }) {
  return (
    <section className={`mx-auto my-16 w-full max-w-5xl ${className}`}>
      <header>
        <h2 className="font-funnel-display text-fg-strong text-4xl font-bold">Why AtlasWay?</h2>
      </header>

      <main>
        <ul className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2">
          <AdvantageItem
            icon="hammer"
            tile="Highly Customizable"
            description="Tailor your workout routines and exercises plans to fit your unique needs."
          />

          <AdvantageItem
            icon="monitor"
            tile="Easy to Use"
            description="Designed with user-friendliness in mind, making it accessible for everyone."
          ></AdvantageItem>

          <AdvantageItem
            icon="monitor-up"
            tile="Comprehensive Tracking"
            description="Monitor your progress with detailed analytics and insights."
          ></AdvantageItem>

          <AdvantageItem
            icon="bell-ring"
            tile="Notifications and Alerts"
            description="Get reminders and alerts to keep you on track with your fitness goals."
          ></AdvantageItem>
        </ul>
      </main>
    </section>
  );
}
