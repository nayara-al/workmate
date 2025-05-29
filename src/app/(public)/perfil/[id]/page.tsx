import ProfileForm from "@/components/organism/ProfileForm";

type tParams = Promise<{ id: string }>;

export default async function Profile({ params }: { params: tParams }) {
  const { id } = await params;

  return (
    <main className="flex w-full">
      <ProfileForm id={id} />
    </main>
  );
}
