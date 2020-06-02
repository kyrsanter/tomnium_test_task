import {FETCHING_DATA, FILTER_BY_NAME, GET_DATA, GET_ERROR} from "./actions";
import {DataType, ErrorType} from "../types";

export type FetchingDataAtionCreatorType = {
    type: typeof FETCHING_DATA
}

export type GetDataAtionCreatorType = {
    type: typeof GET_DATA
    payload: DataType
}

export type FilterByNameActionCreatorType = {
    type: typeof FILTER_BY_NAME
    payload: string
}

export type GetErrorActionCreatorType = {
    type: typeof GET_ERROR
    payload: ErrorType
}

export type CombineActionCreatorType = FetchingDataAtionCreatorType | GetDataAtionCreatorType | FilterByNameActionCreatorType | GetErrorActionCreatorType

