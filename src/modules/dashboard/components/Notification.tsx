import Link from "next/link";
import {
	NotificationRelevanceType,
	NotificationType,
} from "@/mocks/notifications";
import { Trash } from "@/modules/globals/components/Icons";
import { NOTIFICATION_DEFAULT_RELEVANCE } from "@/config/defaults";

type RelevanceClassType = {
	seen: string;
	notSeen: string;
};

type RelevanceClassesType = {
	[key in Exclude<NotificationRelevanceType, "info">]: RelevanceClassType;
};

const RELEVANCE_CLASSES: RelevanceClassesType = {
	special: {
		seen: "bg-gradient-to-r from-accent/50 via-accent/30 to-accent/20 outline-accent text-accent",
		notSeen:
			"bg-gradient-to-r from-accent/50 via-accent/30 to-accent/20 outline-accent text-accent light:text-yellow-700",
	},
	error: {
		seen: "light:bg-red-200 outline-red-500",
		notSeen: "bg-red-800/50 light:bg-red-200 outline-red-700 text-red-600",
	},
	warning: {
		seen: "light:bg-yellow-100/50 outline-yellow-500/50 text-yellow-500 light:text-yellow-600",
		notSeen:
			"bg-yellow-950/50 light:bg-yellow-100/50 outline-yellow-500/50 text-yellow-500 light:text-yellow-700",
	},
};

type NotificationRelevanceMessage = {
	[key in Exclude<NotificationRelevanceType, "info">]: string;
};

const NOTIFICATION_RELEVANCE_MESSAGE: NotificationRelevanceMessage = {
	special: "Special",
	error: "Danger",
	warning: "Warning",
};

export function Notification({
	className = "",
	data,
}: {
	className?: string;
	data: NotificationType;
}) {
	const {
		title,
		description,
		date,
		notSeen,
		relevance = NOTIFICATION_DEFAULT_RELEVANCE,
		url,
	} = data;

	const relevancePilClass =
		relevance !== "info"
			? notSeen
				? RELEVANCE_CLASSES[relevance].notSeen
				: RELEVANCE_CLASSES[relevance].seen
			: "";

	const notificationClass = notSeen
		? "ld-sec-bg border-foreground/20"
		: "border-foreground/10";

	return (
		<article
			className={`cursor-pointer px-4 py-1 border-1 hover:border-foreground/50 rounded ${notificationClass} ${className}`}
		>
			<Link
				href={url || "/dashboard/notifications"}
				className="flex items-center gap-4"
			>
				<div className="grid place-content-center my-auto">
					<input type="checkbox" className="size-5" />
				</div>
				<main className="flex-1 flex flex-col gap-0">
					<header className="flex items-center gap-4">
						<h3
							className={`text-base ${notSeen ? "ld-main-fg font-bold" : ""}`}
						>
							{title}
						</h3>
						{notSeen && (
							<span className="block size-2.5 rounded-full bg-blue-500"></span>
						)}
						{relevance !== "info" && (
							<span
								className={`px-2 rounded-full outline-1 -outline-offset-1 text-sm ${relevancePilClass}`}
							>
								{NOTIFICATION_RELEVANCE_MESSAGE[relevance]}
							</span>
						)}
					</header>
					<footer>
						<p className={`text-sm ${notSeen ? "" : "text-foreground/60"}`}>
							{description}
						</p>
					</footer>
				</main>
				<aside className="w-12 text-center text-foreground/50 text-sm">
					{date}
				</aside>
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="bg-foreground/10 text-sm text-red-800/80 cursor-pointer p-2 rounded"
					>
						<Trash className="size-4" strokeWidth="2" />
					</button>
				</div>
			</Link>
		</article>
	);
}
