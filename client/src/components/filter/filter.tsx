import React, {FC} from "react";
import './filter.css'

type PropsType = {
    makeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filter: FC<PropsType> = (props) => {
    return (
        <div className="filter">
            <input type="text" autoComplete='off' name='name' onChange={props.makeFilter} placeholder='Put currencies name'/>
        </div>
    )
};

export default Filter;