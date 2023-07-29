import { Fragment } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
}
