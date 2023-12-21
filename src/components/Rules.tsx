"use client";

export default function Rules() {
  const isItalian = () => navigator.language.includes("it");
  return (
    <span>
      {isItalian()
        ? `Se vuoi sapere di più leggi il `
        : `If you want to know more, read the `}

      {isItalian() ? (
        <a
          target="_blanck"
          href="https://docs.google.com/document/d/1tFjGzyMs6XhUHhFCs37sNum7AuV8YPR8qFyQjkTRTF4/view"
        >
          regolamento dell’evento
        </a>
      ) : (
        <a
          target="_blanck"
          href="https://docs.google.com/document/d/1ziy1dPimT-E23iJuSbz0nGelAvLbQnoMzEYpjb5SLf8/view"
        >
          event rules
        </a>
      )}
    </span>
  );
}
