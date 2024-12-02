import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      element: (
        <Outlet/>
      ),
      children: [
        {
          path: "/",
          lazy: () => import("./pages/Home"),
        },
        {
          // index: true,
          path: "terms",
          lazy: () => import("./pages/TermList"),
          handle: { bgColor: "#FFF4EA" },
        },
        {
          path: "term/:termId/lessons",
          lazy: () => import("./pages/Lessons"),
          handle: { bgColor: "#FFF4EA" },
        },
        {
          path: "term/:termId/lesson/:lessonId",
          lazy: () => import("./pages/LessonDetail"),
          handle: { bgColor: "#FFF4EA" },
        },
      ],
    },
  ],
  { basename: "/mrs-lu/morning-reading" },
);
