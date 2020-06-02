import React, {FC, useEffect} from "react";
import {connect, ConnectedProps} from 'react-redux';
import CurrencyList from "../components/currency-list/currency-list";
import {RootStore} from "../redux/store";
import {getDataThunk} from "../redux/thunk";

const CurrencyListContainer: FC<PropsType> = (props) => {

    useEffect(() => {
        props.getData()
    }, []);

    let {isFetching, data} = props;
    return <CurrencyList data={data} isFetching={isFetching}/>
};

const mapStateToProps = (state: RootStore) => {
    return {
        isFetching: state.fetchingData,
        data: state.filtered
    }
};

const mapDispatchToProps = {
    getData: () => getDataThunk()
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsType = ConnectedProps<typeof connector>

export default connector(CurrencyListContainer)