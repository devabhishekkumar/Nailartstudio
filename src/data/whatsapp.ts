const configuredNumber = process.env.NEXT_PUBLIC_BOOKING_WHATSAPP?.trim() ?? "";
const phoneNumber = configuredNumber.replace(/[+\s().-]/g, "");
const studioChatUrl = /^\+?[\d\s().-]+$/.test(configuredNumber) && /^[1-9]\d{6,14}$/.test(phoneNumber)
  ? `https://wa.me/${phoneNumber}`
  : null;

export function studioWhatsAppLink(message: string) {
  return studioChatUrl ? `${studioChatUrl}?text=${encodeURIComponent(message)}` : null;
}

export const studioInquiryLink = studioWhatsAppLink(
  "Hello! I'd like to ask about services and availability at The Nail Art Studio.",
);
