import React from "react";

const TimeLine = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>

      <time>{data.date}</time>

      <p className='para-text'>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);
export default TimeLine;
