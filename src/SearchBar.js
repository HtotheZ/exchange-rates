import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ResultTable from "./ResultTable.js"

const SearchBar = (props) => {
    return (
        <div className="searchBar col-xs-6">
            <div>
                <h4 className="genericText">Number of rates <span className="highlightedText">{props.selected}</span></h4>
            </div>
            <h4 className="genericText">: </h4>
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    value={props.number}
                    onChange={props.onChange}
                    placeholder="ilu dni" />
                <button type="submit" className="btn btn-success buttons">Search</button>
            </form>
            <ResultTable singleRate={props.singleRate} />
        </div>
    );
};

export default SearchBar;