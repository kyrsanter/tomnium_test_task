import React from "react";
import CurrencyListContainer from "../../containers/currency-list-container";
import FilterContainer from "../../containers/filter-container";

const App = () => {
    return (
        <div className='container'>
            <FilterContainer/>
            <CurrencyListContainer/>
        </div>
    )
};

export default App;