import React, {FC} from "react";
import {connect, ConnectedProps} from 'react-redux';
import Filter from "../components/filter/filter";
import {filterByNameActionCreator} from "../redux/action-creators";

const FilterContainer: FC<PropsType> = (props) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        filtration(e.currentTarget.value);
    };

    let {filtration} = props;
    return <Filter makeFilter={changeHandler} />
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        filtration: (letters: string) => dispatch(filterByNameActionCreator(letters))
    }
}

const connector = connect(null, mapDispatchToProps);

type PropsType = ConnectedProps<typeof connector>

export default connector(FilterContainer)