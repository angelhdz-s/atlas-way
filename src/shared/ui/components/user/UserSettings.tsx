import { getUser } from '@/modules/user/presentation/user.actions';

export async function UserSetting() {
  const { data: user } = await getUser();
  const name = user ? user.name : 'Invitado';
  return (
    <div>
      <picture>
        <div className="bg-blue rounded-full"></div>
      </picture>
      <main>{name}</main>
    </div>
  );
}
