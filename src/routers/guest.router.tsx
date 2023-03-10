import { lazy } from "react";
import { Router } from "../types/interfaces";

/**
 * this array represents route of guest actor (actor that's not authenticated)
 *
 * this data represented with array of Router @see {@link Router}
 *
 * @constant {@link guestRoutes}
 * @type {Router[]}
 */
const guestRoutes: Router[] = [
  {
    name: "login page",
    path: "/",
    element: lazy(() => import("../pages/guest/login")),
  },
];

export default guestRoutes;
