"use client";

import { useEffect } from "react";
import { useProperty } from "@/utils/store";
import BookingCalendar from "./BookingCalendar";
import BookingContainer from "./BookingContainer";
import { Booking } from "@/utils/types";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

export default function BookingWrapper({
  propertyId,
  price,
  bookings,
}: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);
  
  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
}
