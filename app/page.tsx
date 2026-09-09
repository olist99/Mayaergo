import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import BookingButton from "@/components/BookingButton";
import FaqAccordion from "@/components/FaqAccordion";

const teaserServices = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Psykoedukation for forældre",
    text: "I lærer om jeres barns neurodivergens og får konkrete redskaber til at støtte barnet i de problemer, I oplever i hverdagen. Vi finder ud af, hvad der faktisk virker for jer, ikke en generel opskrift.",
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen neurodivergens",
    text: "Et forløb hvor du lærer din egen autisme eller ADHD at kende, og hvordan den påvirker dine hverdagsaktiviteter. Jeg ved af egen erfaring, hvor stor en forskel den forståelse gør.",
  },
  {
    image: "/illustrations/service-rehab.svg",
    title: "Angst-mestringsforløb",
    text: "Redskaber til at mestre din angst, ud fra evidensbaserede metoder. Ikke bare copingstrategier fra en bog, men noget der er tilpasset dig og din hverdag.",
  },
];

const trust = [
  "Egen erfaring med autisme",
  "Evidensbaserede metoder",
  "Virtuelt eller hjemme hos dig",
];

const faq = [
  {
    question: "Skal jeg have en lægehenvisning?",
    answer: "Nej, du kan booke en tid hos mig direkte, uden henvisning fra din læge.",
  },
  {
    question: "Er det dækket af den offentlige sygesikring?",
    answer:
      "Nej, ergoterapi er hverken omfattet af den offentlige sygesikring eller Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer giver tilskud, så spørg endelig dit forsikringsselskab, inden du booker.",
  },
  {
    question: "Foregår forløbene virtuelt eller hjemme hos mig?",
    answer:
      "Begge dele. Psykoedukation og samtaleterapi fungerer ofte fint virtuelt, og jeg kommer også gerne ud i hjemmet, hvis det giver mere mening for jer.",
  },
  {
    question: "Hvornår kan jeg booke en tid?",
    answer:
      "Fra september kan jeg bookes fredage til psykoedukation. Book gerne direkte i kalenderen her på siden, eller skriv til mig, hvis du er i tvivl om, hvad der passer bedst, jeg svarer så hurtigt jeg kan.",
  },
  {
    question: "Er det kun til børn?",
    answer:
      "Nej. Jeg arbejder med børn, unge og voksne. Nogle kommer som forældre, der vil forstå og støtte deres barn bedre, andre kommer for at lære deres egen neurodivergens at kende, eller for at få redskaber til at mestre angst.",
  },
  {
    question: "I har vist noget med dysfagi på arbejdspladser?",
    answer:
      "Ja, jeg tager også opgaver som privat konsulent inden for dysfagi (synkebesvær) til arbejdspladser på Sjælland og Lolland, med udredning, træning og undervisning. Det er noget af det, jeg brænder allermest for, skriv endelig til mig.",
  },
  {
    question: "Hvad hvis jeg bliver nødt til at aflyse?",
    answer:
      "Så sig endelig til senest 24 timer før din tid. Ved sent afbud eller udeblivelse opkræver jeg et gebyr på 300 kr.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">
              Ergoterapeut · Autisme & sanseforstyrrelser · Næstved
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
              En sikker havn for dig og din familie
            </h1>
            <p className="mt-6 max-w-md text-lg text-[var(--color-ink-soft)]">
              Jeg er ergoterapeut med en masse gode redskaber i kufferten.
              Sammen med min assistent Selina hjælper jeg børn, unge og
              voksne med neurodivergens, sanseforstyrrelser og
              belastningsreaktioner, med fokus på psykoedukation og mestring,
              virtuelt eller i dit eget hjem.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookingButton className="btn btn-primary btn-lg">
                Book en konsultation
                <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
              </BookingButton>
              <Link href="/ydelser" className="btn btn-outline btn-lg">
                Se ydelser
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-ink-soft)]">
              {trust.map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-sage-dark)]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              role="img"
              aria-label="Foto af klinikkens hus i Fuglebjerg"
            >
              <defs>
                <pattern id="heroBlobImage" patternUnits="objectBoundingBox" width="1" height="1" viewBox="0 0 1 1">
                  <image href="/images/hero-house.png" x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />
                </pattern>
              </defs>
              <path
                fill="url(#heroBlobImage)"
                d="M39.8,-51.9C54.1,-44.5,69.8,-36.1,73.9,-23.9C78.1,-11.7,70.6,4.4,65.6,21.9C60.7,39.3,58.3,58.1,47.8,67.8C37.3,77.4,18.6,78,2.2,74.9C-14.2,71.8,-28.3,65.1,-38.7,55.4C-49.1,45.7,-55.7,33,-64,18.2C-72.3,3.5,-82.2,-13.2,-79.7,-27.5C-77.2,-41.7,-62.3,-53.4,-46.9,-60.4C-31.5,-67.5,-15.8,-69.9,-1.5,-67.9C12.8,-65.9,25.6,-59.3,39.8,-51.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
              Hjælp der møder dig, hvor du er
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Uanset om det handler om at forstå dit barns neurodivergens, din
              egen, eller om at få redskaber til at mestre angst, tager jeg altid
              udgangspunkt i lige præcis din situation.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {teaserServices.map(({ image, title, text }, index) => {
              const reversed = index % 2 === 1;
              const illustration = (
                <div className="tint-panel h-48 overflow-hidden p-6 md:h-full">
                  <Image
                    src={image}
                    alt=""
                    width={300}
                    height={220}
                    className="h-full w-full object-contain"
                  />
                </div>
              );
              const copy = (
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">{text}</p>
                </div>
              );
              return (
                <div
                  key={title}
                  className={`card grid items-center gap-8 p-6 md:gap-14 md:p-8 ${
                    reversed ? "md:grid-cols-[1fr_280px]" : "md:grid-cols-[280px_1fr]"
                  }`}
                >
                  {reversed ? (
                    <>
                      {copy}
                      {illustration}
                    </>
                  ) : (
                    <>
                      {illustration}
                      {copy}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/ydelser"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-sage-dark)] hover:underline"
            >
              Se alle ydelser
              <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map(({ question, answer }) => ({
                  "@type": "Question",
                  name: question,
                  acceptedAnswer: { "@type": "Answer", text: answer },
                })),
              }),
            }}
          />
          <h2 className="text-center font-display text-3xl font-semibold text-[var(--color-ink)]">
            Ofte stillede spørgsmål
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sage-dark)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:px-10">
          <h2 className="font-display text-3xl font-semibold text-white">
            Klar til at finde din sikre havn?
          </h2>
          <p className="max-w-xl text-[var(--color-sage-light)]">
            Book en uforpligtende konsultation, så tager vi en snak om, hvor
            du er, og hvordan jeg bedst kan hjælpe.
          </p>
          <BookingButton className="btn btn-on-dark btn-lg">
            Book en konsultation
            <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </BookingButton>
        </div>
      </section>
    </>
  );
}
