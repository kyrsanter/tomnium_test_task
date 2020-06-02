import React, {FC, useState} from "react";
import './list-item.css'

type PropsType = {
    idx: number
    name: string
    price: number
}

const ListItem: FC<PropsType> = (props) => {
    let {idx, name, price} = props;

    let [converted, setConverted] = useState<number | string>(0);
    let [value, setValue] = useState<string>('');

    const convertHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let result = +value * price;
        setValue(value);
        setConverted(result)
    };

    return (
        <li className='currency-list__item'>
            <div className='idx'>{idx + 1}.</div>
            <div className='name'>{name}</div>
            <div className='price'>{price.toFixed(6)}$</div>
            <div className="convert-form">
                <div className="input">
                    <input type="number" max='10000' onChange={convertHandler} value={value} placeholder='Put a number'/>
                </div>
                <div className="input-result">
                    <p>{Number(converted).toFixed(3)}</p>
                </div>
            </div>
        </li>
    )
};

export default ListItem;