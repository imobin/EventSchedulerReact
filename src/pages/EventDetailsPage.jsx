import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function EventDetailsPage() {
  // const {theId} = useParams()
  const { id } = useParams();
  const [selectedEvent, setselectedEvent] = useState([]);
  // console.log(`http://localhost:3001/api/events/${id}`)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${id}`)
      .then((i) => {
        // console.log(i.data)
        setselectedEvent(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log(i);
      });
  }, []);
  // useEffect(() => {
  //   console.log(setselectedEvent)
  // }, [])

  return (
    <div>
      {/* {selectedEvent.title} */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{selectedEvent.title}</h1>
            <p className="py-6">
              {selectedEvent.description}
            </p>
            <p className="py-6">
              {selectedEvent.location}
            </p>
            <p className="py-6">
              {selectedEvent.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
