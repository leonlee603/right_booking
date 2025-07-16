export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string, payload?:FormData }>;

export type PropertyCardProps = {
  id: string;
  name: string;
  tagline: string;
  country: string;
  image: string;
  price: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};