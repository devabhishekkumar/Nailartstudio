# The Nail Art Studio — Next.js website

A responsive nail-art studio website inspired by the *layout and visual mood* of the uploaded Nailora reference, with the **actual supplied The Nail Art Studio logo**.

## Quick start

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Features

- Next.js App Router, TypeScript, accessible responsive CSS, lightweight Lucide icons.
- Desktop and mobile navigation, working service search.
- Split-screen hero, signature services, inspiration banners, studio/about section, gallery, step-by-step experience, newsletter and footer.
- Gallery lightbox with keyboard support (left/right arrows, Escape).
- Appointment-request form with service selection, name, phone, preferred date/time and notes.
- WhatsApp chat and booking: the studio phone number is used by default. To use a different WhatsApp number, set `NEXT_PUBLIC_BOOKING_WHATSAPP` in `.env.local` with its country code. Restart the development server or rebuild for production. The floating chat button opens a panel with a WhatsApp link for general enquiries. The booking form prefills appointment details. Clients send the message in WhatsApp, and the studio confirms availability.
- Optional newsletter endpoint: set `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` to an endpoint that accepts `POST` with `{ "email": "..." }`. Otherwise the form explicitly displays demo mode and does **not** store subscribers.

## Before launching a real studio website

- Verify the studio address and contact number.
- Confirm the studio phone number accepts WhatsApp messages.
- Connect the newsletter backend, or remove the signup section.
- Replace demo photography with licensed, high-resolution studio images.
- Review service descriptions with the business owner; pricing and availability are **not** advertised or assumed.
- Add real legal pages (privacy/terms) if collecting personal data.

## Images and logo

`public/images/studio-logo.png` and `src/app/icon.png` were prepared from the **second image** supplied by the user. Images in `public/images/*.webp` are **crops of the first user-supplied visual mockup** for prototype/reference use; these are not original photos and are lower resolution than professional photography. The source reference file is not bundled.

## Build

```bash
npm run build
npm start
```

This project is frontend-ready; external booking notifications and email subscriptions require configuration of real services.
