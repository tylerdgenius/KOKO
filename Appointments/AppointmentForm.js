import * as React from "react";
// import * as ReactDOM from "react-dom";
// import "./App.css";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const AppointmentForm = () => {
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      Id: Math.random(),
      Subject: message,
      StartTime: new Date(startDate),
      EndTime: new Date(endDate),
      IsAllDay: false,
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5",
    };
    console.log(user);

    fetch('http://localhost:8000/data', {
      method: 'POST',
      body: JSON.stringify(user)
    })
  };

  return (
    <div>
      <form onSubmit={submitHandler}>

        {/* Start Date Picker */}
        <TextField
          type="date"
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
          
        />

        {/* End Date Picker */}
        <TextField
          type="date"
          label="End Date"
          onChange={(e) => setEndDate(e.target.value)}
        />

        {/* Subject Field */}
        <TextField
          type="text"
          label="Subject"
          multiline
          rows="6"
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default AppointmentForm;
