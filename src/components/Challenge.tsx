"use client";

import { isItalian } from "../utils";

export default function Challenge() {
  return (
    <span>
      {isItalian()
        ? `La sfida è concluderlo entro 18 ore (ore 1:00 del 14 Aprile).`
        : `The challenge is to complete it within 18 hours (1:00 am on April 14th).`}
    </span>
  );
}
