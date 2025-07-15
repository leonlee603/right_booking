import Link from "next/link";
import { Button } from "../ui/button";
import { AiOutlineShop } from "react-icons/ai";

export default function Logo() {
  return (
    <Button size="icon" className="rounded-full" asChild>
      <Link href="/">
        <AiOutlineShop className="w-6 h-6" />
      </Link>
    </Button>
  );
}
