import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Prisma } from "@prisma/client";

// const name = Prisma.PropertyScalarFieldEnum.price;

type FormInputNumberProps = {
  defaultValue?: number;
};

export default function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = "price";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 0}
        required
      />
    </div>
  );
}
