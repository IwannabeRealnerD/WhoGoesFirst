import { useAppSelector } from "@Redux/Hooks";
import { useDispatch } from "react-redux";
import {
    writeDestination,
    writeUrl,
} from "@Redux/Reducers/PlanReducer/Actions";

interface RiderInfoArr {
    name: string;
    tel: number;
    bikeClass: number[];
}

interface useDestinationInterface {
    (): {
        destinationRedux: null | string;
        isDestinationReduxExist: boolean;
        setDestinationRedux(destinationStr: string | null): void;
    };
}

interface useURLInterface {
    (): {
        urlRedux: null | string;
        isUrlReduxExist: boolean;
        setURLRedux(urlStr: string | null): void;
    };
}

interface useDateInterface {
    (): {
        sDateRedux: null | Date;
        eDateRedux: null | Date;
        isDateReduxExist: boolean;
    };
}

interface useRiderInfoInterface {
    (): { riderInfoArr: RiderInfoArr[]; isRiderInfoExist: boolean };
}

export const useDestination: useDestinationInterface = () => {
    const dispatch = useDispatch();
    const destinationRedux = useAppSelector(
        (state) => state.PlanReducer.destination
    );

    const setDestinationRedux = (destinationStr: string | null): void => {
        dispatch(writeDestination(destinationStr));
    };

    const isDestinationReduxExist = destinationRedux !== null;
    return { destinationRedux, isDestinationReduxExist, setDestinationRedux };
};

export const useURL: useURLInterface = () => {
    const dispatch = useDispatch();
    const urlRedux = useAppSelector((state) => state.PlanReducer.url);
    const setURLRedux = (destinationStr: string | null): void => {
        dispatch(writeUrl(destinationStr));
    };
    const isUrlReduxExist = urlRedux !== null;
    return { urlRedux, isUrlReduxExist, setURLRedux };
};

export const useDate: useDateInterface = () => {
    const sDateRedux = useAppSelector((state) => state.PlanReducer.startDate);
    const eDateRedux = useAppSelector((state) => state.PlanReducer.endDate);
    const isDateReduxExist = sDateRedux !== null;

    return { sDateRedux, eDateRedux, isDateReduxExist };
};

export const useRiderInfo: useRiderInfoInterface = () => {
    const riderInfoArr = useAppSelector(
        (state) => state.PlanReducer.riderInfoArr
    ).slice(1);
    const isRiderInfoExist = riderInfoArr.length !== 0;
    return { riderInfoArr, isRiderInfoExist };
};
