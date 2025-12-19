import { getUser } from '@/app/_actions/user.actions';

export async function UserSetting() {
	const { data: user } = await getUser();
	const name = user ? user.name : 'Invitado';
	return (
		<div>
			<picture>
				<div className="rounded-full bg-blue"></div>
			</picture>
			<main>{name}</main>
		</div>
	);
}
