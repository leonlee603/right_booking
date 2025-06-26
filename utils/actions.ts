"use server";

import db from "./db";
import {
  //auth,
  clerkClient,
  currentUser,
} from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { profileSchema } from "./schemas";

export const createProfileAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    // if case for typescript
    if (!user) throw new Error("Please login to create a profile");

    // Validate form data
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    // Add user profile to database
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });

    // Add private metadata to clerk user
    (await clerkClient()).users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Profile Created" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};
