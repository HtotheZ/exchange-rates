import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const CurrencyTable = (props) => { 
  return(
    <div className="col-xs-6">
      <table className="table table-striped">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Code</th>
              <th>Bid</th>
              <th>Ask</th>
            </tr>
          </thead>
          <tbody>
            {props.rates.map(rate => 
              <tr 
              onClick={() => props.onClickFn(rate)}
              className={props.selected === rate.code ? 'success' : ''}>
                <td>{rate.currency}</td> 
                <td>{rate.code}</td>
                <td>{rate.bid}</td>
                <td>{rate.ask}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;