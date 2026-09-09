import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import BookingButton from "@/components/BookingButton";
import { freeIntro, sessions, packages, assessments } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Ydelser - Sikker Havn Ergoterapi",
  description: "Psykoedukation, mestringsforløb, sanseterapi, tryk behandling og udredning for børn, unge og voksne.",
};

const sessionIllustrations: Record<string, string> = {
  "foerste-behandling": "/illustrations/service-home-visit.svg",
  "tryk-behandling": "/illustrations/service-ergonomics.svg",
  "mestring-autisme-adhd-1x": "/illustrations/service-rehab.svg",
  "mestring-angst-1x": "/illustrations/service-aids.svg",
  sanseterapi: "/illustrations/service-sensory.svg",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold text-[var(--color-ink)]">Ydelser</h1>
            <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
              Alle forløb starter med en snak om din situation. Herfra
              finder vi sammen frem til den kombination af ydelser, der
              giver mest mening for dig og din familie. Se de fulde priser
              på <Link href="/priser" className="font-medium text-[var(--color-sage-dark)] hover:underline">prissiden</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="tint-panel flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-sage-dark)]">{freeIntro.duration}</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)]">{freeIntro.title}</h2>
              <p className="mt-2 max-w-lg text-sm text-[var(--color-ink-soft)]">{freeIntro.text}</p>
            </div>
            <BookingButton className="btn btn-primary sm:shrink-0">Book gratis samtale</BookingButton>
          </div>

          <h2 className="mt-16 font-display text-2xl font-semibold text-[var(--color-ink)]">
            Til dig og din familie
          </h2>

          <div className="mt-8 space-y-6">
            {sessions.map(({ id, title, text }, index) => (
              <article
                key={id}
                className={`card flex flex-col gap-6 p-6 sm:flex-row sm:items-center md:p-7 ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="tint-panel h-36 w-full shrink-0 overflow-hidden p-5 sm:h-32 sm:w-48">
                  <Image
                    src={sessionIllustrations[id]}
                    alt=""
                    width={320}
                    height={220}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">Forløbspakker</h2>
          <p className="mt-2 max-w-2xl text-[var(--color-ink-soft)]">
            Skal I have flere gange, kan I betale for et helt forløb på én
            gang.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {packages.map(({ id, title, duration, text }) => (
              <div key={id} className="card p-6">
                <dt className="font-display text-lg font-semibold text-[var(--color-ink)]">{title}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">{duration}</dd>
                <dd className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">Udredning &amp; træning</h2>
          <dl className="mt-8 grid gap-5 sm:grid-cols-3">
            {assessments.map(({ id, title, duration, text }) => (
              <div key={id} className="card p-6">
                <dt className="font-display text-lg font-semibold text-[var(--color-ink)]">{title}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">{duration}</dd>
                <dd className="mt-2 text-sm text-[var(--color-ink-soft)]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Til virksomheder
          </h2>
          <div className="tint-panel mt-8 grid gap-8 p-8 sm:grid-cols-[200px_1fr] sm:items-center md:p-10">
            <Image
              src="/illustrations/service-dysfagi.svg"
              alt=""
              width={320}
              height={220}
              className="mx-auto h-32 w-auto sm:mx-0"
            />
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                Dysfagi-konsulentydelse for virksomheder
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[var(--color-ink-soft)]">
                Vi tager opgaver som privat konsulent inden for dysfagi
                (synkebesvær), med udredning, træning og undervisning
                baseret på den nyeste evidens, til arbejdspladser på
                Sjælland og Lolland. Det er noget af det, vi brænder
                allermest for.
              </p>
              <Link href="/kontakt" className="btn btn-primary mt-5">
                Skriv til os
                <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
            Er du i tvivl om, hvad du har brug for?
          </h2>
          <p className="max-w-lg text-[var(--color-ink-soft)]">
            Book en konsultation, så finder vi sammen ud af, hvilken hjælp
            der giver bedst mening for lige netop din situation.
          </p>
          <BookingButton className="btn btn-primary btn-lg">
            Book en konsultation
            <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </BookingButton>
        </div>
      </section>
    </>
  );
}
