import axios from "axios";
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

export default function HomePage({ eventList, seteventList }) {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events?limit=1000")
      .then((i) => {
        seteventList(i.data.results);
        // console.log(eventList);
      })
      .catch((i) => {
      console.log(i)
      });
  }, []);

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4'>
      {eventList.map((i,k) => <EventCard key={k} title={i.title} description={i.description} id={i.id}/>)}
    </div>
  )
}
