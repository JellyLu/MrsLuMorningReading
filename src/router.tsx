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
          lazy: () => import("./pages/TermList"),
          handle: { bgColor: "#FFF4EA" },
        },
        {
          path: "/term/:termId",
          handle: { bgColor: "#FFF4EA" },
          children: [
            {
              index: true,
              lazy: () => import("./pages/Term"),
            },
            {
              path: "section/:sectionId/unit/:unitId",
              lazy: () => import("./pages/UnitDetail"),
            }
          ]
        },
      ],
    },
  ],
);
