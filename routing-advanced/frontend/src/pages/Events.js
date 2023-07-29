import { Fragment } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();

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
    const resData = await response.json();
    return resData.events;
  }
}
