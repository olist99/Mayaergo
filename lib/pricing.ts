export type Service = {
  id: string;
  title: string;
  duration: string;
  price: string;
  amount: number; // øre. Vises kun, betaling foregår gennem EasyPractice, ikke på siden her.
  text: string;
};

export const freeIntro: Service = {
  id: "telefonisk-afklaring",
  title: "Telefonisk afklaringssamtale",
  duration: "20 min",
  price: "Gratis",
  amount: 0,
  text: "En uforpligtende samtale, hvor vi afklarer din eller dit barns situation, og om det giver mening at gå videre.",
};

export const sessions: Service[] = [
  {
    id: "foerste-behandling",
    title: "Første behandling",
    duration: "45 min",
    price: "299 kr.",
    amount: 29900,
    text: "Den første egentlige behandling, hvor vi sammen lægger en plan for det videre forløb.",
  },
  {
    id: "tryk-behandling",
    title: "Tryk behandling for angst, stress, uro og kropslige spændinger",
    duration: "45 min",
    price: "550 kr.",
    amount: 55000,
    text: "Kropsligt fokuseret behandling, der hjælper med at regulere angst, stress, uro og spændinger.",
  },
  {
    id: "mestring-autisme-adhd-1x",
    title: "Mestringsforløb autisme/adhd, 1x",
    duration: "45 min",
    price: "750 kr.",
    amount: 75000,
    text: "Enkeltstående session med psykoedukation og redskaber til autisme eller adhd, til dig selv eller som forælder.",
  },
  {
    id: "mestring-angst-1x",
    title: "Mestringsforløb angst, 1x",
    duration: "1 time",
    price: "750 kr.",
    amount: 75000,
    text: "Enkeltstående session med redskaber til at mestre din angst, ud fra evidensbaserede metoder.",
  },
  {
    id: "sanseterapi",
    title: "Sanseterapi-session",
    duration: "45 min",
    price: "600 kr.",
    amount: 60000,
    text: "Individuel session med fokus på at forstå og regulere sanseforstyrrelser.",
  },
];

export const packages: Service[] = [
  {
    id: "mestring-autisme-adhd-pakke",
    title: "Mestringsforløb autisme/adhd, pakke 8 sessioner",
    duration: "45 min pr. session",
    price: "5.000 kr.",
    amount: 500000,
    text: "8 sessioner betalt samlet, til dig der gerne vil have et sammenhængende forløb med fast opfølgning.",
  },
  {
    id: "angst-mestring-halvt-forloeb",
    title: "Angst mestring, halvt forløb (7x)",
    duration: "1 time pr. session",
    price: "4.500 kr.",
    amount: 450000,
    text: "7 sessioner betalt samlet, med redskaber til at mestre din angst løbende.",
  },
];

export const assessments: Service[] = [
  {
    id: "sensorisk-udredning",
    title: "Sensorisk udredning",
    duration: "1 time og 30 min",
    price: "4.500 kr.",
    amount: 450000,
    text: "En sensorisk test, der kortlægger sensoriske problemområder og reaktionsmønstre. Et godt redskab forud for sansetræning eller til brug i institutioner.",
  },
  {
    id: "dysfagi-udredning",
    title: "Dysfagi/synkebesvær udredning",
    duration: "1 time og 30 min",
    price: "3.000 kr.",
    amount: 300000,
    text: "Udredning af synkebesvær, som grundlag for den videre træning.",
  },
  {
    id: "dysfagi-traening",
    title: "Dysfagi/synkebesvær træning",
    duration: "45 min",
    price: "650 kr.",
    amount: 65000,
    text: "Opfølgende træningssession ved dysfagi/synkebesvær.",
  },
];

export const allPlans: Service[] = [...sessions, ...packages, ...assessments];
