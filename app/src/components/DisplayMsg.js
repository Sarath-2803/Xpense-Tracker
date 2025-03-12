import React, { useEffect, useState } from "react";
import './DisplayMsg.css';

const DisplayMsg = ({message,trigger}) => {

    const [show,setShow] = useState(false);

    useEffect(() => {
        if (trigger) {
          setShow(true);
          const timer = setTimeout(() => {
            setShow(false);
          }, 9000); // Hide after 5 seconds
          return () => clearTimeout(timer);
        }
      }, [trigger]);

    return (
         <div id="msgDiv" className={show ? 'show' : ''}>
            <h1>{message}</h1>
        </div>
    )
}

export default DisplayMsg;