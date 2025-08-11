import { Notification } from "@/modules/dashboard/components/Notification";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader title="Notifications" />
			<PageContent className="flex flex-col gap-1">
				<Notification
					title="Welcome to your dashboard"
					description="Here you can manage your workouts, routines, and more."
					date="1 min"
					notSeen
				/>
				<Notification
					title="Workout Complete"
					description="You finished your morning run. Great job!"
					date="5 min"
				/>
				<Notification
					title="New Routine Added"
					description="A new HIIT routine has been added to your library."
					date="10 min"
					notSeen
				/>
				<Notification
					title="Friend Request"
					description="Alex sent you a friend request."
					date="15 min"
				/>
				<Notification
					title="Goal Achieved"
					description="You reached your weekly step goal!"
					date="20 min"
					notSeen
				/>
				<Notification
					title="Update Available"
					description="A new app update is ready to install."
					date="25 min"
				/>
				<Notification
					title="Reminder"
					description="Don’t forget your evening yoga session."
					date="30 min"
				/>
				<Notification
					title="Challenge Accepted"
					description="Sam accepted your push-up challenge."
					date="35 min"
				/>
				<Notification
					title="Milestone Unlocked"
					description="You unlocked the 'Consistency' badge."
					date="40 min"
				/>
				<Notification
					title="Workout Reminder"
					description="Your next workout is scheduled for tomorrow."
					date="45 min"
				/>
				<Notification
					title="Routine Shared"
					description="Mia shared a new routine with you."
					date="50 min"
				/>
				<Notification
					title="Progress Update"
					description="You improved your running pace by 10%."
					date="55 min"
				/>
				<Notification
					title="Friend Joined"
					description="Chris just joined your fitness group."
					date="1 hr"
				/>
				<Notification
					title="Hydration Reminder"
					description="Time to drink some water!"
					date="1 hr"
				/>
				<Notification
					title="Weekly Summary"
					description="Check out your activity summary for this week."
					date="2 hr"
				/>
			</PageContent>
		</PageContainer>
	);
}
