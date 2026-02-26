import {
	BellRinging,
	DeviceDesktop,
	DeviceDesktopAnalytics,
	Hammer,
} from '@/presentation/globals/components/Icons';

import { AdvantageItem } from './advantages/AdvantageItem';

export function Advantages({ className = '' }: { className?: string }) {
	return (
		<section className={`max-w-5xl w-full mx-auto my-16 ${className}`}>
			<header>
				<h2 className="font-funnel-display text-4xl font-bold fg-strong">Why AtlasWay?</h2>
			</header>

			<main>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
					<AdvantageItem
						Icon={Hammer}
						tile="Highly Customizable"
						description="Tailor your workout routines and exercises plans to fit your unique needs."
					/>

					<AdvantageItem
						Icon={DeviceDesktop}
						tile="Easy to Use"
						description="Designed with user-friendliness in mind, making it accessible for everyone."
					></AdvantageItem>

					<AdvantageItem
						Icon={DeviceDesktopAnalytics}
						tile="Comprehensive Tracking"
						description="Monitor your progress with detailed analytics and insights."
					></AdvantageItem>

					<AdvantageItem
						Icon={BellRinging}
						tile="Notifications and Alerts"
						description="Get reminders and alerts to keep you on track with your fitness goals."
					></AdvantageItem>
				</ul>
			</main>
		</section>
	);
}
