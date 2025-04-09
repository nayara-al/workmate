import Image from "next/image";
import logo from "../../../public/workmate.svg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-white font-bold text-xl">
      <Image src={logo} alt="WorkMate logo" width={40} height={40} />
      <span>WorkMate</span>
    </div>
  );
}
