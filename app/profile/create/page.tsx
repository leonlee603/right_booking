import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FromInput";
import Button from "@/components/form/Button";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  if (firstName !== "shakeAndBake") return { message: "there was an error..." };
  return { message: "Profile Created" };
};

export default function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <Button text="Create Profile" />
        </FormContainer>
      </div>
    </section>
  );
}
