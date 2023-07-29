import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}

export async function loader({ _, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8000/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
