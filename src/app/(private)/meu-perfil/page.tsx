// app/meu-perfil/page.tsx ou components/MyProfile.tsx (Server Component)
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import MyProfileForm from '@/components/organism/MyProfileForm';

export default async function MyProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const userData = cookieStore.get('user')?.value;

  if (!token || !userData) {
    redirect('/login');  // redireciona no servidor se não autenticado
  }

  const user = JSON.parse(userData);

  return (
    <main className="flex w-full h-[calc(100vh-4rem)]">
      <MyProfileForm user={user} />
    </main>
  );
}
