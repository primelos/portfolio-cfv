import React from "react";
import TData from "./timeLineData";
import TimeLine from "./timeLine";

const TimeL = () => {
  return (
    <div className="time-body">
      {TData.length > 0 && (
        <div className="timeline-container">
          {TData.map((data, index) => (
            <TimeLine data={data} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeL;
