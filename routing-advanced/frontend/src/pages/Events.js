import { Fragment } from "react";

import EventsList from "../components/EventsList";
// import { useLoaderData } from "react-router-dom";

function EventsPage() {
  // const events = useLoaderData();

  return (
    <Fragment>
      <EventsList />
    </Fragment>
  );
}

export default EventsPage;
