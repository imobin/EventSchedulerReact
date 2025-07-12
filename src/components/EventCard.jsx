import React from "react";
import { Link } from "react-router";

export default function EventCard({title, description, id}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/event/${id}`}> <button className="btn btn-primary">Details</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
