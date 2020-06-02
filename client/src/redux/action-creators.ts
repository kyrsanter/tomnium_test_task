import {FETCHING_DATA, FILTER_BY_NAME, GET_DATA} from "./actions";
import {FetchingDataAtionCreatorType, FilterByNameActionCreatorType, GetDataAtionCreatorType} from "./types";
import {DataType} from "../types";

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