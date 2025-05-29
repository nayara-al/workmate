import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SharedLayout from "../SharedLayout";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  const userData = (await cookieStore).get("user")?.value;

  if (!token) {
    redirect("/login");
  }

  const user = userData ? JSON.parse(userData) : null;

  return <SharedLayout user={user}>{children}</SharedLayout>;
}
