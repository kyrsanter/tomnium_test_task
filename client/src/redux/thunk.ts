import {Service} from "../service";
import {fetchingDataAtionCreator, getDataAtionCreator} from "./action-creators";

export const getDataThunk = () => async (dispatch: any) => {
    const service = new Service();
    dispatch(fetchingDataAtionCreator());
    let response = await service.getData();
    dispatch(getDataAtionCreator(response))
}