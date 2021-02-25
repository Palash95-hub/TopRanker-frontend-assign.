import React from "react";
import moment from "react-moment";

let weekdayshortname = this.weekdayshort.map((day) => {
  return (
    <th key={day} className="week-day">
      {day}
    </th>
  );
});

export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  render() {
    let weekdayshortname = this.weekdayshort.map((day) => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return (
      <div>
        <h2>Calendar</h2>
      </div>
    );
  }
}
