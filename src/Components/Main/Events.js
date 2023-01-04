import React from "react";
import { EventList } from "../Data";
import pic1 from '../../Assets/baptisms.jpeg';

//id
//src
//title
//date
//time
//type

const EventLister = () => {
    const Events = [
        {
            id: 1,
            src: { pic1 },
            title: 'event 1',
            date: '01-02-2000',
            time: '09:00',
        },
        {
            id: 2,
            src: { pic1 },
            title: 'event 2',
            date: '01-02-2002',
            time: '09:00',
        }
    ]
    return (
        <div className="px-4">
            <EventList type='upcoming' events={Events} />
        </div>
    )
}
export default EventLister
