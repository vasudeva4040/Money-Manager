import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendaruse({login}){
    return(
    <FullCalendar
    plugins={[dayGridPlugin,interactionPlugin]}
    initialView="dayGridMonth"/>
    );
}
export default Calendaruse;