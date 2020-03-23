import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {dataReducer} from "./dataReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    data: dataReducer
});

