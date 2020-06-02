import React from "react";
import {connect} from 'react-redux';

const ErrorHandler = (props) => {

    if (props.error) {
        return <h1>Oh my God! We got a problem</h1>
    }
    return props.children
};

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
};

export default connect(mapStateToProps, null)(ErrorHandler)