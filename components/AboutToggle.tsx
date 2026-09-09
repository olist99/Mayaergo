"use client";

import { useState } from "react";
import Image from "next/image";

type Person = "maya" | "selina";

type AboutToggleProps = {
  mayaName: string;
  assistantName: string;
  autorisationsId: string;
};

export default function AboutToggle({ mayaName, assistantName, autorisationsId }: AboutToggleProps) {
  const [person, setPerson] = useState<Person>("maya");

  return (
    <div>
      <div className="mb-10 inline-flex gap-1 rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] p-1">
        <button
          type="button"
          onClick={() => setPerson("maya")}
          aria-pressed={person === "maya"}
          className={`rounded px-5 py-2 text-sm font-medium transition-colors ${
            person === "maya"
              ? "bg-[var(--color-sage-dark)] text-white"
              : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          }`}
        >
          {mayaName}
        </button>
        <button
          type="button"
          onClick={() => setPerson("selina")}
          aria-pressed={person === "selina"}
          className={`rounded px-5 py-2 text-sm font-medium transition-colors ${
            person === "selina"
              ? "bg-[var(--color-sage-dark)] text-white"
              : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          }`}
        >
          {assistantName}
        </button>
      </div>

      {person === "maya" ? (
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
          <div className="mx-auto w-full max-w-[280px] md:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius)] border border-[var(--color-line)]">
              <Image
                src="/about/profil-billede.jpg"
                alt={mayaName}
                fill
                sizes="(min-width: 768px) 280px, 100vw"
                className="object-cover object-[center_30%]"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[var(--color-ink)]">{mayaName}</p>
            <p className="text-center text-xs text-[var(--color-ink-soft)]">Ergoterapeut</p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">Om {mayaName}</h2>
            <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
              <p>
                Jeg hedder {mayaName}, og jeg er ergoterapeut med en masse
                gode redskaber i kufferten. Sammen med min assistent{" "}
                {assistantName} hjælper jeg børn, unge og voksne med
                neurodivergens, sanseforstyrrelser og belastningsreaktioner.
              </p>
              <p>
                Jeg fokuserer meget på psykoedukation og mestringsforløb,
                både virtuelt og i dit eget hjem. Mine forløb går blandt
                andet ud på, at forældre lærer om deres barns
                neurodivergens og får værktøjer til at støtte barnet i de
                problemer, der opleves. Derudover har jeg forløb, der
                hjælper dig med at lære din egen neurodivergens at kende,
                og forløb der giver dig redskaber til at mestre din angst,
                ud fra evidensbaserede metoder.
              </p>
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-wide text-[var(--color-sage-dark)]">
              Min baggrund
            </p>
            <div className="mt-4 space-y-4 text-[var(--color-ink-soft)]">
              <p>
                Min baggrund for at starte Sikker Havn er, at jeg selv er
                vokset op som det, man kalder høj-funktionel autistisk. Jeg
                modtog aldrig støtte, for jeg klarede mig jo, men det ledte
                til angst og depression. Jeg havde meget svært ved at være i
                skole, mine sociale evner var mangelfulde, og jeg blev meget
                ensom.
              </p>
              <p>
                Jeg har altid formået at virke hverdagsfunktionel, selv på de
                mest kritiske tidspunkter, så ingen tog mig alvorligt, når
                jeg opsøgte hjælp. Men virkeligheden var, at når jeg lukkede
                døren, kunne jeg ikke få mig selv til at rejse mig fra
                sofaen. Jeg kunne ikke klare de vigtige ting i hjemmet og
                passede knap nok på mig selv ud over lige nok til at
                fremstå anstændig i det offentlige rum. Jeg endte med at
                blive meget syg, men kunne stadig virke ressourcestærk
                udadtil.
              </p>
              <p>
                Selvom jeg klarede mig igennem skolen, tog det mig tre gange
                så lang tid som alle andre. Jeg lærte intet, mens jeg var
                der, og når jeg kom hjem, var jeg så psykisk drænet, at jeg
                ikke kunne lære noget, uanset hvor hårdt jeg prøvede.
              </p>
              <p>
                Jeg fandt selv min vej på den anden side. Det hjalp meget at
                acceptere min diagnose og lære om, hvordan den påvirker mig
                i mine hverdagsaktiviteter. Herfra opstod en passion for at
                give noget, der mangler i systemet, og for at fange dem, der
                ryger igennem nettet, samt at arbejde forebyggende, så børn
                med neurodivergens vokser op psykisk stærke.
              </p>
            </div>

            <dl className="mt-8 space-y-4">
              <div className="card p-5">
                <dt className="text-sm font-semibold text-[var(--color-ink)]">Uddannelse</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink-soft)]">Professionsbachelor i ergoterapi.</dd>
              </div>
              <div className="card p-5">
                <dt className="text-sm font-semibold text-[var(--color-ink)]">Autorisation</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  Autoriseret af Sundhedsstyrelsen, autorisations-ID {autorisationsId}.
                </dd>
              </div>
              <div className="card p-5">
                <dt className="text-sm font-semibold text-[var(--color-ink)]">Efteruddannelse</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  Kurser inden for sanseterapi, angst, depression, ADHD og autisme.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
          <div className="mx-auto w-full max-w-[280px] md:mx-0">
            <div className="card aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/about/selina-portrait.jpg"
                alt="Portræt af Selina"
                width={560}
                height={745}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[var(--color-ink)]">Selina</p>
            <p className="text-center text-xs text-[var(--color-ink-soft)]">Under oplæring hos {mayaName}</p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">Om Selina</h2>
            <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
              <p>
                Jeg hedder Selina, og jeg er under oplæring hos {mayaName} i
                Sikker Havn.
              </p>
              <p>
                Efter at have arbejdet med demensområdet sammen med{" "}
                {mayaName}, har jeg fundet ud af, hvor mine naturlige
                talenter ligger, og hvad jeg ønsker at bruge dem på.
              </p>
              <p>
                Jeg bliver beskrevet som et varmt menneske med en naturlig
                evne til at give ro til dem omkring mig. Mange har lagt
                mærke til den effekt, det har haft på urolige,
                udadreagerende borgere inden for demensområdet.
              </p>
              <p>
                Jeg har selv kæmpet med belastningsreaktioner, og uden
                diagnoser har jeg oplevet flere problematikker inden for
                autismespektret.
              </p>
              <p>
                Jeg har haft belastningsreaktioner tæt på mig i mine
                relationer hele livet og har meget livserfaring med dette.
                Jeg glæder mig til snart at kunne koble det sammen med
                uddannelse og faglighed, så jeg med høj faglighed og
                evidensbaseret viden kan hjælpe dig 🪷
              </p>
              <p>
                Jeg er blevet oplært i trykbehandlinger for kropslig og
                psykisk uro og stressspændinger i kroppen, og jeg kan lave
                autismevejledningsforløb. Jeg tilbyder begge dele i mit
                kliniklokale i mit hjem i Næstved, samt virtuelt.
              </p>
              <p>
                Jeg går meget op i naturmedicin og holistisk behandling, og
                vi har derfor planlagt et uddannelsesforløb, hvor jeg snart
                vil kunne tilbyde mange flere ydelser, fx NADA, kropsterapi,
                naturmedicin, sanseterapi og angstvejledning.
              </p>
              <p>
                Indtil da kan I booke mig til trykbehandlinger og
                autismeforløb, og I vil se mig som assistent på vores hold,
                som vi forhåbentligt snart får gang i.
              </p>
              <p>Jeg glæder mig til at hjælpe dig.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
