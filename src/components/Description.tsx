"use client";

export default function Description() {
  const isItalian = () => navigator.language.includes("it");
  return (
    <span>
      {isItalian()
        ? `La Hippo Bike Trail si sviluppa su un percorso ad anello, con
            partenza e arrivo a `
        : `The Hippo Bike Trail develops on a circular route, with
            departure and arrival at `}
    <a href="https://www.instagram.com/habitatbistrot/" target="_black"> Habitat le Bandie</a>
      {isItalian()
        ? `, lungo 210 km ( sterrato
            all’85% ) con 4500 metri di dislivello. Dentro la Hyppo trail
            troverete tutti gli ingredienti di un vero trail: hike-a-bike,
            guadi, un lungo tratto in quota senza presenza umana, discese
            scassate, ... insomma non presentatevi se non avete almeno una gomma
            da 45mm 😜`
        : `, 210 km long (dirt road
            at 85%) with 4500 meters of altitude difference. Inside the Hyppo trail
            you will find all the ingredients of a real trail: hike-a-bike,
            fords crossing, a long part without human presence, rocky descents
            , ... in short, use at least a 45mm tyre 😜`}
    </span>
  );
}
