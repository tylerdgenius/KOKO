import * as React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { useState, useEffect } from "react";

const Calendar = () => {
  const [data, setData] = useState([
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
    },
  ]);

  const [values, setValues] = useState([]);
  const abortCont = new AbortController();
  useEffect(() => {
    fetch("http://localhost:800/data", {signal: abortCont.signal})
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let data = result.map((item) => {
          return(
            {
              Id: item.Id,
              Subject: item.Subject,
              StartTime: new Date(item.StartTime),
              EndTime: new Date(item.EndTime),
              // IsAllDay: item.IsAllDay,
              // RecurrenceRule: item.RecurrenceRule
            }
          )})
          setValues(data)
      });

      // return abortCont.abort()
  }, []);

  console.log(values)
  return (
    <ScheduleComponent height="550px" selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: values }}
    >
      {console.log(values)}
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Calendar;
