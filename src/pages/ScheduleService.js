import React, { useState } from "react";
import { Badge } from "reactstrap";

export default function ScheduleService() {
  const [order, setOrder] = useState({});
  const [step, setStep] = useState(1);

  const getColor = () => {
    switch (step) {
      case 1:
        return "grey";
      case 2:
        return "green";
      case 3:
        return "green";
      case 4:
        return "green";
      default:
        break;
    }
  };

  const getForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            Choose the services
            <input onChange={(e) => setOrder({ ...order, typeofservice: e.target.value})} />
            <button onClick={() => setStep(2)}>Service</button>
          </div>
        );

      case 2:
        return (
          <div>
            date&time 
            <input onChange={(e) => setOrder({ ...order, dateandtime: e.target.value})} />
            <button onClick={() => setStep(3)}>Date</button>
          </div>
        );
      case 3:
        return (
          <div>
            address
            <input onChange={(e) => setOrder({ ...order, address: e.target.value})} />
            <button onClick={() => setStep(4)}>Address</button>
          </div>
        );
      case 4:
        return (
          <div>
            review
            <button onClick={() => setStep(5)}>Review</button>
          </div>
        );
      default:
        break;
    }
  };

  console.log({order})
  return (
    <>
      <div className="ordering-process">
        {/* <div style={{ padding: 50, height: 500, width: 500, backgroundColor: getColor(), border: '1px solid red'}}>
                    {getForm()}
                </div> */}
        <div style={{ padding: 50 }}>
          <Badge
            color="secondary"
            style={{ backgroundColor: step === 1 ? 'green' : 'grey', textAlign: "left" }}
          >
            Service detail<br></br>
            <small>Select your type of service</small>
          </Badge>
        </div>
        <div style={{ padding: 50 }}>
          <Badge
            color="secondary"
            style={{ backgroundColor: step === 2 ?' green' : 'grey', textAlign: "left" }}
          >
            Date and Time<br></br>
            <small>Select service date and time</small>
          </Badge>
        </div>
        <div style={{ padding: 50 }}>
          <Badge
            color="secondary"
            style={{ backgroundColor: step === 3 ?' green' : 'grey', textAlign: "left" }}
          >
            Address<br></br>
            <small>Select service address</small>
          </Badge>
        </div>
        <div style={{ padding: 50 }}>
          <Badge
            color="secondary"
            style={{ backgroundColor: step === 4 ?' green' : 'grey', textAlign: "left" }}
          >
            Review and Schedule<br></br>
            <small>Review your order and schedule</small>
          </Badge>
        </div>
      </div>
      <div>{getForm()}</div>
    </>
  );
}
