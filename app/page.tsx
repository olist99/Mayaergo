import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import BookingButton from "@/components/BookingButton";
import FaqAccordion from "@/components/FaqAccordion";

const teaserServices = [
  {
    image: "/illustrations/service-home-visit.svg",
    title: "Psykoedukation for forældre",
    text: "I lærer om jeres barns ADHD/ADD og autisme og får konkrete redskaber til at støtte barnet i de problemer, I oplever i hverdagen. Vi finder ud af, hvad der faktisk virker for jer, ikke en generel opskrift.",
  },
  {
    image: "/illustrations/service-ergonomics.svg",
    title: "Kend din egen ADHD/ADD og autisme",
    text: "Et forløb hvor du lærer din egen autisme eller ADHD at kende, og hvordan den påvirker dine hverdagsaktiviteter. Vi ved af egen erfaring, hvor stor en forskel den forståelse gør.",
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
  "Virtuelt eller på vores lokaler i Fuglebjerg og Næstved",
];

const faq = [
  {
    question: "Skal jeg have en lægehenvisning?",
    answer: "Nej, du kan booke en tid hos os direkte, uden henvisning fra din læge.",
  },
  {
    question: "Er det dækket af den offentlige sygesikring?",
    answer:
      "Nej, ergoterapi er hverken omfattet af den offentlige sygesikring eller Sygeforsikringen Danmark. Enkelte private sundhedsforsikringer giver tilskud, så spørg endelig dit forsikringsselskab, inden du booker.",
  },
  {
    question: "Foregår forløbene virtuelt eller på jeres lokaler?",
    answer:
      "Begge dele. Psykoedukation og samtaleterapi fungerer ofte fint virtuelt, og I er også altid velkomne på vores lokaler i Fuglebjerg og Næstved, hvis det giver mere mening for jer.",
  },
  {
    question: "Hvornår kan jeg booke en tid?",
    answer:
      "Fra september kan vi bookes fredage til psykoedukation. Book gerne direkte i kalenderen her på siden, eller skriv til os, hvis du er i tvivl om, hvad der passer bedst, vi svarer så hurtigt vi kan.",
  },
  {
    question: "Er det kun til børn?",
    answer:
      "Nej. Vi arbejder med børn, unge og voksne. Nogle kommer som forældre, der vil forstå og støtte deres barn bedre, andre kommer for at lære deres egen ADHD/ADD og autisme at kende, eller for at få redskaber til at mestre angst.",
  },
  {
    question: "I har vist noget med dysfagi på arbejdspladser?",
    answer:
      "Ja, vi tager også opgaver som privat konsulent inden for dysfagi (synkebesvær) til arbejdspladser på Sjælland og Lolland, med udredning, træning og undervisning. Det er noget af det, vi brænder allermest for, skriv endelig til os.",
  },
  {
    question: "Hvad hvis jeg bliver nødt til at aflyse?",
    answer:
      "Så sig endelig til senest 24 timer før din tid. Ved sent afbud eller udeblivelse opkræver vi fuldt behandlingsgebyr, minimum 300 kr.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">
              Ergoterapeut · Autisme & sanseforstyrrelser · Næstved
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] sm:text-5xl">
              En sikker havn for dig og din familie
            </h1>
            <p className="mt-6 max-w-md text-lg text-[var(--color-ink-soft)]">
              Vi er ergoterapeut med en masse gode redskaber i kufferten.
              Sammen med min assistent Selina hjælper vi børn, unge og
              voksne med ADHD/ADD og autisme, sanseforstyrrelser og
              belastningsreaktioner (depression, angst, stress), med fokus
              på psykoedukation og mestring, virtuelt eller på vores
              lokaler i Fuglebjerg og Næstved.
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

          <div className="relative hidden h-[46rem] w-full overflow-visible md:block md:ml-32">
            <svg
              viewBox="0 0 210 210"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              className="absolute left-1/2 top-1/2 h-[58rem] w-[53rem] overflow-visible -translate-x-1/2 -translate-y-1/2"
              role="img"
              aria-label="Foto af klinikkens hus i Fuglebjerg"
            >
              <defs>
                <clipPath id="heroBlobClip">
                  <path
                    d="M45.6,-67.9C56.5,-54.9,60.8,-38,63.3,-22.4C65.8,-6.8,66.6,7.5,65.2,24.1C63.9,40.8,60.5,59.6,49.2,66.7C38,73.7,19,68.9,0.9,67.6C-17.1,66.3,-34.2,68.5,-47.9,62.2C-61.6,56,-71.8,41.3,-77.6,24.9C-83.3,8.4,-84.7,-9.8,-80.4,-27.1C-76.1,-44.4,-66.2,-60.9,-51.8,-72.7C-37.5,-84.6,-18.7,-91.7,-0.7,-90.8C17.4,-89.9,34.8,-80.9,45.6,-67.9Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>
              <image
                href="/images/hero-house.png"
                x="0"
                y="0"
                width="210"
                height="210"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#heroBlobClip)"
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
              Uanset om det handler om at forstå dit barns ADHD/ADD og
              autisme, din egen, eller om at få redskaber til at mestre
              angst, tager vi altid udgangspunkt i lige præcis din
              situation.
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
            du er, og hvordan vi bedst kan hjælpe.
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
