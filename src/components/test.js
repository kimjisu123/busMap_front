import {useDispatch} from "react-redux";
import {callGetTest} from "../apis/testAPICalls";

function Test () {

    const dispatch = useDispatch();

    const onClickTest = () =>{
        dispatch(callGetTest())
    }
    return <>
        <button
            style={
                {
                    top:"50%" ,left:"50%", transform: "translate(-50%, -50%)", position: "absolute"
                }
            }
            onClick={onClickTest}
        >
            안녕~
        </button>
    </>
}

export default Test;