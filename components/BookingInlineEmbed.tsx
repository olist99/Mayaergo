import { BOOKING_URL } from "@/lib/booking";

export default function BookingInlineEmbed() {
  return (
    <iframe
      src={BOOKING_URL}
      className="booking-embed"
      style={{ border: 0 }}
      title="Online booking"
    />
  );
}
