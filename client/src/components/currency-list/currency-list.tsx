import React, {FC} from "react";
import {RatesType} from "../../types";
import ListItem from "../list-item/list-item";

type PropsType = {
    isFetching: boolean,
    data: null | RatesType
}

const CurrencyList: FC<PropsType> = (props) => {

    let {data, isFetching} = props;

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <ul className='currency-list'>
            <li className='currency-list__item head'>
                <div className='idx'></div>
                <div className='name'>Name</div>
                <div className='price'>Price</div>
                <div className="convert-form">
                    Fast converter
                </div>
            </li>
            {
                data && Object.keys(data).length !== 0 ? (
                    Object.keys(data).map( (el: string, idx) => {
                        // @ts-ignore
                        return <ListItem key={idx} idx={idx} name={el} price={data[el]}/>
                    })
                ) : data && Object.keys(data).length === 0 ? <h3>Not found. Try again!</h3> : null
            }

        </ul>
    )
};

export default CurrencyList;