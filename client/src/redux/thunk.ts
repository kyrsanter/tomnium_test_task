import {Service} from "../service";
import {fetchingDataAtionCreator, getDataAtionCreator, getErrorActionCreator} from "./action-creators";
import {store} from "./store";

export const getDataThunk = () => async (dispatch: any) => {
    const service = new Service();
    dispatch(fetchingDataAtionCreator());
    let response = await service.getData();
    if (response.error) {
        dispatch(getErrorActionCreator(response))
    }
    else {
        dispatch(getDataAtionCreator(response))
    }
}