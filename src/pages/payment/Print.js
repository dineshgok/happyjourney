import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
    
    <p className="divssh"><center>Payment Successful! </center></p>
            <p className="divssh"><center><BsPatchCheckFill/></center></p>
            <p><center>Ticket Booked By: <span className="divsqq"> &nbsp;&nbsp;{props.data.fullname}</span></center></p>
            <p className="divsp">Base Fare <span className="divsprice">1500</span></p>
            <p className="divsp">Convenience Fee <span className="divsprice">25.00</span></p>
            <p className="divsp">Tax(16.00%) <span className="divsprice">0.00</span></p>
            <hr className="divscc"/>
            <p className="divsp">Total Paid <span className="divsprice" style={{color:"black"}}><b>INR 1500.0</b></span></p>
            </div>
               );

            })
           


