export enum ActionType {
    WRITE_URL = "WRITE_URL",
    WRITE_DESTINATION = "WRITE_DESTINATION",
    WRITE_RIDER_INFO = "WRITE_RIDER_INFO",
    EDIT_RIDER_INFO = "EDIT_RIDER_INFO",
    RESET_RIDER_INFO = "RESET_RIDER_INFO",
    SET_START_DATE = "SET_START_DATE",
    SET_END_DATE = "SET_END_DATE",
}

interface URL {
    type: ActionType.WRITE_URL;
    payload: string | null;
}
interface Destination {
    type: ActionType.WRITE_DESTINATION;
    payload: string | null;
}
interface RiderInfo {
    type: ActionType.WRITE_RIDER_INFO;
    payload: { name: string; tel: number; bikeClass: number[] };
}
interface SetDateInfo {
    type: ActionType.SET_START_DATE | ActionType.SET_END_DATE;
    payload: Date | null;
}

interface ResetRiderInfo {
    type: ActionType.RESET_RIDER_INFO;
}

interface EditRiderInfo {
    type: ActionType.EDIT_RIDER_INFO;
    payload: { name: string; tel: number; bikeClass: number[] };
    riderIndex: number;
}

export type PlanAction =
    | URL
    | Destination
    | RiderInfo
    | EditRiderInfo
    | ResetRiderInfo
    | SetDateInfo;

export const writeUrl = (url: string | null): URL => ({
    type: ActionType.WRITE_URL,
    payload: url,
});

export const writeDestination = (destination: string | null): Destination => {
    return { type: ActionType.WRITE_DESTINATION, payload: destination };
};

export const writeStartDate = (startDate: Date | null): SetDateInfo => {
    return { type: ActionType.SET_START_DATE, payload: startDate };
};

export const writeEndDate = (endDate: Date | null): SetDateInfo => {
    return { type: ActionType.SET_END_DATE, payload: endDate };
};

export const writeRiderInfo = (
    name: string,
    tel: number,
    bikeClass: number[]
): RiderInfo => {
    return {
        type: ActionType.WRITE_RIDER_INFO,
        payload: { name, tel, bikeClass },
    };
};

export const editRiderInfo = (
    name: string,
    tel: number,
    bikeClass: number[],
    riderIndex: number
): EditRiderInfo => {
    return {
        type: ActionType.EDIT_RIDER_INFO,
        payload: { name, tel, bikeClass },
        riderIndex,
    };
};

export const resetRiderInfo = (): ResetRiderInfo => {
    return { type: ActionType.RESET_RIDER_INFO };
};
