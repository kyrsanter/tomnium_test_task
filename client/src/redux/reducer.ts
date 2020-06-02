import {DataType, ErrorType, RatesType} from "../types";
import {CombineActionCreatorType} from "./types";

const mainState = {
    fetchingData: false,
    data: null as null | DataType,
    filtered: null as null | RatesType,
    error: null as null | ErrorType
};

type MainStateType = typeof mainState;

export const mainReducer = (state = mainState, action: CombineActionCreatorType): MainStateType => {
    switch (action.type) {
        case 'FETCHING_DATA':
            return {
                ...state,
                fetchingData: true,
                error: null
            };
            case 'GET_DATA':
                return {
                    ...state,
                    fetchingData: false,
                    data: action.payload,
                    filtered: action.payload.rates,
                    error: null
                };
        case "FILTER_BY_NAME":
            if (!state.data) return state;
            let stateRates = state.data.rates;
            let filtered = {};
            for (let key in stateRates) {
                if (key.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1) {
                    // @ts-ignore
                    filtered[key] = stateRates[key]
                }
            }
            return {
                ...state,
                filtered,
                error: null
            };
        case "GET_ERROR":
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};