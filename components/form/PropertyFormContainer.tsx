"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";

const initialState: { message: string; payload?: FormData } = {
  message: "",
};

export default function PropertyFormContainer({
  action,
}: {
  action: actionFunction;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-2 gap-8 mb-4">
        <FormInput
          name="name"
          type="text"
          label="Name (20 limit)"
          defaultValue={state.payload?.get("name") as string || ""}
        />
        <FormInput
          name="tagline"
          type="text "
          label="Tagline (30 limit)"
          defaultValue={state.payload?.get("tagline") as string || ""}
        />
        <PriceInput defaultValue={Number(state.payload?.get("price") as string) || undefined } />
        <CategoriesInput defaultValue={state.payload?.get("category") as string || undefined} />
      </div>
      <TextAreaInput
        name="description"
        labelText="Description (10 - 1000 Words)"
        defaultValue={state.payload?.get("description") as string || ""}
      />
      <div className="grid sm:grid-cols-2 gap-8 mt-4">
        <CountriesInput defaultValue={state.payload?.get("country") as string || undefined}/>
        <ImageInput />
      </div>
      <h3 className="text-lg mt-8 mb-4 font-medium">Accommodation Details</h3>
      <CounterInput detail="guests" defaultValue={Number(state.payload?.get("guests") as string) || undefined }/>
      <CounterInput detail="bedrooms" defaultValue={Number(state.payload?.get("bedrooms") as string) || undefined }/>
      <CounterInput detail="beds" defaultValue={Number(state.payload?.get("beds") as string) || undefined }/>
      <CounterInput detail="baths" defaultValue={Number(state.payload?.get("baths") as string) || undefined }/>
      <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
      <AmenitiesInput defaultValue={(state.payload?.get("amenities") as string) ? JSON.parse(state.payload?.get("amenities") as string) : undefined }/>
      <SubmitButton text="create rental" className="mt-12 cursor-pointer" />
    </form>
  );
}
