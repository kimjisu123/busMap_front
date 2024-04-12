import {
    GET_TEST
} from "../modules/testModule";

export const callGetTest = () =>{

    const requestURL = `http://localhost:8080/test`;
    return async (dispatch, getState) =>{
        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
        })
            .then(response => response.json());
        dispatch({ type: GET_TEST, payload: result.data });
    }
}