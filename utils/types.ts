export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  id: string;
  name: string;
  tagline: string;
  country: string;
  image: string;
  price: number;
};