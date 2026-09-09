"use client";

import type { ReactNode } from "react";
import { useBookingModal } from "@/components/BookingModalProvider";

type BookingButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function BookingButton({ children, className, onClick }: BookingButtonProps) {
  const { openModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={() => {
        openModal();
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
