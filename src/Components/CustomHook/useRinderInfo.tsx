import { useAppSelector } from "@Redux/Hooks";

interface RiderInfoArr {
    name: string;
    tel: number;
    bikeClass: number[];
}

interface useRiderInfoInterface {
    (): RiderInfoArr[];
}

export const useRiderInfo: useRiderInfoInterface = () => {
    const riderInfoArr = useAppSelector(
        (state) => state.PlanReducer.riderInfoArr
    ).slice(1);
    return riderInfoArr;
};
