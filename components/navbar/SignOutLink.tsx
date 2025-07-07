"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

export default function SignOutLink() {
  const handleLogout = () => {
    toast("You have been signed out.");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}
