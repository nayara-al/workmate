import Image from "next/image";
import logo from "../../../public/workmate.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer">
      <Image src={logo} alt="WorkMate logo" width={40} height={40} />
      <span>WorkMate</span>
    </Link>
  );
}
