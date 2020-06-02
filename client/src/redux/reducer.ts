import {DataType, RatesType} from "../types";
import {CombineActionCreatorType} from "./types";

const mainState = {
    fetchingData: false,
    data: null as null | DataType,
    filtered: null as null | RatesType
};

type MainStateType = typeof mainState;

export const mainReducer = (state = mainState, action: CombineActionCreatorType): MainStateType => {
    switch (action.type) {
        case 'FETCHING_DATA':
            return {
                ...state,
                fetchingData: true
            };
            case 'GET_DATA':
                return {
                    ...state,
                    fetchingData: false,
                    data: action.payload,
                    filtered: action.payload.rates
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
                        filtered
                    };
        default:
            return state;
    }
};