"use client";

import { isItalian } from "../utils";

export default function ChallengeBis() {
  return (
    <span>
      {isItalian()
        ? `Se lo concludete con successo potete ritenervi pronti per i trail
        più lunghi.`
        : `If you complete it successfully you can consider yourself ready for the longer trails.`}
    </span>
  );
}
