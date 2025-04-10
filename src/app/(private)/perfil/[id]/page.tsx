import ProfileForm from "@/components/organism/ProfileForm";

export default function Profile({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main className="flex w-full h-[calc(100vh-4rem)]">
      <ProfileForm id={id} />
    </main>
  );
}
