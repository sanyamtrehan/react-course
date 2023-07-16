import { Fragment } from "react";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
    </Fragment>
  );
}