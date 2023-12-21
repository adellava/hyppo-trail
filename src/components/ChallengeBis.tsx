"use client";

export default function ChallengeBis() {
  const isItalian = () => navigator.language.includes("it");
  return (
    <span>
      {isItalian()
        ? `Se lo concludete con successo potete ritenervi pronti per i trail
        più lunghi.`
        : `If you complete it successfully you can consider yourself ready for the longer trails.`}
    </span>
  );
}
