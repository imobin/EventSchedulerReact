import axios from "axios";
import React from "react";

export default function EventForm() {
  function eventSubmitHadler(e){
    e.preventDefault();
    const createdEvent = {
      title: e.target.Title.value,
      description: e.target.Description.value,
      date: e.target.eventdaytime.value,
      location: e.target.Location.value,
      latitude: 8.404746955649602,
      longitude: 8.404746955649602
    };
    const headers= {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          } 
    // console.log(createdEvent)
    axios
      .post("http://localhost:3001/api/events", 
        createdEvent,
       {headers}
      )
      .then((i) => {
         console.log(i);
        
        // if (i.status == 200) {
        //   // localStorage.setItem("token", JSON.stringify(i.data.token))
          
        //   // alert(
        //   //   `Welcome ${userloginData.email}`
        //   // );
        //   setisRegistered(true)
        //   navigate("/create-event")
        // }
      }).catch((i) => {i})

    }
  return (
    <div>
      <form onSubmit={eventSubmitHadler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Creating an Event</legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="Event-title" name="Title"/>

          <label className="label">Description</label>
          <input type="text" className="input" placeholder="Description" name="Description"/>
          <label className="label">Location</label>
          <input type="text" className="input" placeholder="Location" name="Location"/>

          <label className="label">Event (date and time):</label>
          <input
            type="datetime-local"
            id="eventdaytime"
            name="eventdaytime"
          ></input>

          <button className="btn btn-neutral mt-4">Create the event</button>
        </fieldset>
      </form>
    </div>
  );
}
