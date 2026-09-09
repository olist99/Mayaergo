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

          <div className="relative h-full w-full self-stretch">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              className="absolute left-1/2 top-1/2 h-[155%] w-[155%] -translate-x-1/2 -translate-y-1/2"
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
                d="M36.2,-48.6C44.9,-43.6,48.4,-30.2,52.8,-17.1C57.2,-3.9,62.5,9.1,59.8,20C57,30.9,46.2,39.8,34.9,47.1C23.6,54.3,11.8,59.9,-2.3,63.1C-16.4,66.2,-32.8,67,-35.3,56.9C-37.8,46.8,-26.4,25.8,-32.4,10C-38.3,-5.9,-61.5,-16.7,-67.6,-29.4C-73.7,-42.1,-62.7,-56.6,-48.6,-59.8C-34.5,-63,-17.2,-54.9,-1.7,-52.6C13.8,-50.2,27.6,-53.6,36.2,-48.6Z"
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
