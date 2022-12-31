import React from "react";
import { EventList } from "./Data";

//id
//src
//title
//date
//time
//type

const EventLister = () => {
    const Events = [
        {
            id:1,
            src:'image.jpg',
            title:'Sermon 1',
            date:'01-02-2000',
            time:'09:00',
        }
    ]
    return (
        <div id="events">
            <EventList id='upcoming' type='upcoming' events={Events} />
        </div>
    )
}
export default EventLister
