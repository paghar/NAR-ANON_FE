import React from "react";
import Event from "../components/Event/Event";
import {eventItems} from "../data/constants";

const EventContainer = () =>{
  return(
    <Event eventItems={eventItems}/>
  );
};

export default EventContainer;