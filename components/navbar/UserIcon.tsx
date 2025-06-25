import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return <Image src={profileImage} alt="user icon" className="w-6! h-6! rounded-full object-cover" width={24} height={24}/>
  }
  return (
    <LuUser className="w-6! h-6! bg-primary rounded-full text-white"/>
  )
}