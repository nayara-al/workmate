import { cookies } from "next/headers";
import SharedLayout from "../SharedLayout";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userData = (await cookieStore).get("user")?.value;
  const user = userData ? JSON.parse(userData) : null;

  return <SharedLayout user={user}>{children}</SharedLayout>;
}
