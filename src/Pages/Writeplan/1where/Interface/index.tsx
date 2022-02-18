import { Dispatch, SetStateAction } from "react";

export interface ErrorInfo {
    input: string;
    msg: string;
}

export interface ErrorModalInterface {
    setErrMsg: Dispatch<SetStateAction<ErrorInfo | null>>;
    errObj: ErrorInfo;
}
