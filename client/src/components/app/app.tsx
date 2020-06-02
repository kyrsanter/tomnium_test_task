import React from "react";
import CurrencyListContainer from "../../containers/currency-list-container";
import FilterContainer from "../../containers/filter-container";
import ErrorHandler from "../error-hundler/error-hundler";

const App = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <FilterContainer/>
                <CurrencyListContainer/>
            </ErrorHandler>
        </div>
    )
};

export default App;