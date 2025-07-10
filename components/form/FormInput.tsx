import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function FormInput(props: FormInputProps) {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
