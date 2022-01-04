interface decodeParamInterface {
    (encoded: string): string;
}

interface chkParamCompleteInterface {
    (paramArr: string[], paramsObj: URLSearchParams): boolean;
}

interface paramGetterInterface {
    (paramArr: string[], paramsObj: URLSearchParams): string[];
}

// decode Base64, URL Encoded string
const decodeParam: decodeParamInterface = (encoded) => {
    return decodeURIComponent(atob(encoded));
};

// check if query has all parameters that it's required
export const chkParamComplete: chkParamCompleteInterface = (
    paramList,
    paramsObj
) => {
    return paramList
        .map((element) => paramsObj.has(element))
        .every((isTrue) => isTrue === true);
};

// return only values of decode parameters
export const paramGetter: paramGetterInterface = (paramList, paramsObj) => {
    const decodedParamArr = paramList.map((element) =>
        decodeParam(paramsObj.get(element) as string)
    );
    return decodedParamArr;
};
