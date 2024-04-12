import { handleActions } from 'redux-actions';

// 초기값
const initialState = {
    data: [],
    pageInfo: {}
};

// 액션
export const GET_TEST = "test/GET_TEST"

export const testReduser = handleActions(
    {
        [GET_TEST] : (state, { payload }) =>{
            return payload
        }
    },
    initialState
)