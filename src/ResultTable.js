import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const ResultTable = (props) => {
    return(
      <div className="col-xs-12">  
        <div>
          <table className="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Effective Date</th>
                  <th>Bid</th>
                  <th>Ask</th>
                </tr>
              </thead>
              <tbody>
                {props.singleRate.map(rate => 
                  <tr>
                    <td>{rate.no}</td> 
                    <td>{rate.effectiveDate}</td>
                    <td>{rate.bid}</td>
                    <td>{rate.ask}</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default ResultTable;