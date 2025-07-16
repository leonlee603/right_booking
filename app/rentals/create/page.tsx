// import FormContainer from "@/components/form/FormContainer";
// import FormInput from "@/components/form/FormInput";
// import { SubmitButton } from "@/components/form/Buttons";
// import PriceInput from "@/components/form/PriceInput";
// import CategoriesInput from "@/components/form/CategoriesInput";
// import TextAreaInput from "@/components/form/TextAreaInput";
// import CountriesInput from "@/components/form/CountriesInput";
// import ImageInput from "@/components/form/ImageInput";
// import CounterInput from "@/components/form/CounterInput";
// import AmenitiesInput from "@/components/form/AmenitiesInput";
import PropertyFormContainer from "@/components/form/PropertyFormContainer";

import { createPropertyAction } from "@/utils/actions";

export default function CreateRentalPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <PropertyFormContainer action={createPropertyAction} />
      </div>
    </section>
  );
}
