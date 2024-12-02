import { createBrowserRouter } from "react-router-dom";
import PadAdapter from "./pages/PadAdapter";

export const router = createBrowserRouter(
  [
    {
      element: (
        <PadAdapter />
      ),
      children: [
        {
          path: "/",
          lazy: () => import("./pages/Home"),
        },
        {
          path: "/terms",
          lazy: () => import("./pages/TermList"),
          handle: { bgColor: "#FFF4EA" },
        },
        {
          path: "/term/:termId",
          lazy: () => import("./pages/Term"),
          handle: { bgColor: "#FFF4EA" },
          children: [
            {
              path: "section/:sectionId/unit/:unitId",
              lazy: () => import("./pages/UnitDetail"),
              handle: { bgColor: "#FFF4EA" },
            }
          ]
        },
      ],
    },
  ],
  { basename: "/mrs-lu/morning-reading" },
);
