import { useAppSelector } from "@Redux/Hooks";

interface RiderInfoArr {
    name: string;
    tel: number;
    bikeClass: number[];
}

interface useDestinationInterface {
    (): { destinationRedux: null | string; isDestinationReduxExist: boolean };
}

interface useUrlInterface {
    (): { urlRedux: null | string; isUrlReduxExist: boolean };
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
    const destinationRedux = useAppSelector(
        (state) => state.PlanReducer.destination
    );
    const isDestinationReduxExist = destinationRedux !== null;
    return { destinationRedux, isDestinationReduxExist };
};

export const useUrl: useUrlInterface = () => {
    const urlRedux = useAppSelector((state) => state.PlanReducer.url);
    const isUrlReduxExist = urlRedux !== null;
    return { urlRedux, isUrlReduxExist };
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
    const isRiderInfoExist = riderInfoArr.length === 1;
    return { riderInfoArr, isRiderInfoExist };
};
