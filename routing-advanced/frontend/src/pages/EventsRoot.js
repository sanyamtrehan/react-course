import { Fragment } from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

export default function EventsRootLayout() {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
}
