"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { X } from "@phosphor-icons/react";
import { BOOKING_URL } from "@/lib/booking";

type BookingModalContextValue = {
  openModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue>({
  openModal: () => {},
});

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <BookingModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book en tid"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius)] bg-[var(--color-surface)] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Luk booking"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink)] shadow-md hover:text-[var(--color-sage-dark)]"
            >
              <X className="h-5 w-5" weight="bold" aria-hidden="true" />
            </button>
            <iframe
              src={BOOKING_URL}
              title="Online booking"
              className="h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
