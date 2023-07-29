import { Fragment } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8000/eventsfgdg");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw { message: "Could not fetch events." };
  } else {
    return response;
  }
}
