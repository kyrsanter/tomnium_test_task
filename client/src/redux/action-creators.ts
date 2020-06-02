import {FETCHING_DATA, FILTER_BY_NAME, GET_DATA, GET_ERROR} from "./actions";
import {
    FetchingDataAtionCreatorType,
    FilterByNameActionCreatorType,
    GetDataAtionCreatorType,
    GetErrorActionCreatorType
} from "./types";
import {DataType, ErrorType} from "../types";

export const fetchingDataAtionCreator = (): FetchingDataAtionCreatorType => {
    return {
        type: FETCHING_DATA
    }
};

export const getDataAtionCreator = (data: DataType): GetDataAtionCreatorType => {
    return {
        type: GET_DATA,
        payload: data
    }
};

export const filterByNameActionCreator = (letters: string): FilterByNameActionCreatorType => {
    return {
        type: FILTER_BY_NAME,
        payload: letters
    }
};

export const getErrorActionCreator = (error: ErrorType): GetErrorActionCreatorType => {
    return {
        type: GET_ERROR,
        payload: error
    }
};