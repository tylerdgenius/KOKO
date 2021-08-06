import * as React from "react";
// import * as ReactDOM from "react-dom";
// import "./App.css";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  btn: {
    marginTop: 30,
    marginBottom: 30,
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

const AppointmentsList = () => {

    const doctors = [
        {
          id: 1,
          name: "Dr. Goodness",
          date: "21-07-2021",
          time: "9am",
          hospital: "Eko Hospital",
          status: "Accepted",
          comments: "Stay safe",
        },
        {
          id: 2,
          name: "Nurse Kenneth",
          date: "23-07-2021",
          time: "3pm",
          hospital: "Crown Hospital",
          status: "Rejected",
          comments: "Will be unavailable",
        },
        {
          id: 3,
          name: "Dr. Chima",
          date: "24-07-2021",
          time: "12pm",
          hospital: "Lilly Clinic",
          status: "Pending",
          comments: "Pending",
        },
        {
          id: 4,
          name: "Dr. Ope",
          date: "26-07-2021",
          time: "7am",
          hospital: "Doreen Hospital",
          status: "Rejected",
          comments: "Kindly reschedule",
        },
      ];
    
      const columns = [
        {
          title: "Date",
          field: "date",
        },
        {
          title: "Time",
          field: "time",
        },
        {
          title: "Hospital",
          field: "hospital",
        },
        {
          title: "To See",
          field: "name",
        },
        {
          title: "Status",
          field: "status",
        },
        {
          title: "Comments",
          field: "comments",
        },
      ];
    
      const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Button
          className={classes.btn}
          justifyContent="flex-end"
          variant="contained"
          color="primary"
          disableElevation
        >
          Create Appointments
        </Button>
      </div>
      <div>
        <MaterialTable
          title=""
          data={doctors}
          columns={columns}
          options={{
            search: false,
          }}
          actions={[
              {
                icon: () => <EditIcon />,
                tooltip: 'Update',
                onClick: () => {}
              },
              {
                icon: () => <DeleteIcon />,
                tooltip: 'Cancel',
                onClick: () => {}
              }
          ]}
        />
      </div>
    </div>
  );
};

export default AppointmentsList;
