"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_LINK = "crystel-cortez-ue3b1j/discoverycall";

export function useCalPopup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#4C1D95" },
          dark: { "cal-brand": "#9333EA" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  const openCal = () => {
    (async function () {
      const cal = await getCalApi();
      cal("modal", {
        calLink: CAL_LINK,
        config: { layout: "month_view" },
      });
    })();
  };

  return openCal;
}
