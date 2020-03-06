import React, { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import TimeLine from "./timeLine";
import TData from "./timeLineData";

const Context = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);
  return (
    <div className='context-div'>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </div>
  );
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <div className="time-body">
          {TData.length > 0 && (
            <div className="timeline-container">
              {TData.map((data, index) => (
                <TimeLine data={data} key={index} />
              ))}
               <button onClick={onClose}>Close</button>
            </div>
          )}
           <button onClick={onClose}>Close</button>
        </div>,
        modalNode
      )
    : null;
}
