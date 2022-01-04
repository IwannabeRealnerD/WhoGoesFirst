export enum ActionType {
    SET_URL = "SET_URL",
    SET_DESTINATION = "SET_DESTINATION",
    SET_RIDER_INFO = "SET_RIDER_INFO",
    DELETE_RIDER_INFO = "DELETE_RIDER_INFO",
    EDIT_RIDER_INFO = "EDIT_RIDER_INFO",
    RESET_RIDER_INFO = "RESET_RIDER_INFO",
    SET_START_DATE = "SET_START_DATE",
    SET_END_DATE = "SET_END_DATE",
}

interface SetURL {
    type: ActionType.SET_URL;
    payload: string | null;
}
interface SetDestination {
    type: ActionType.SET_DESTINATION;
    payload: string | null;
}
interface SetDateInfo {
    type: ActionType.SET_START_DATE | ActionType.SET_END_DATE;
    payload: Date | null;
}

interface SetRiderInfo {
    type: ActionType.SET_RIDER_INFO;
    payload: { name: string; tel: number; bikeClass: number[] };
}

interface DeleteRiderInfo {
    type: ActionType.DELETE_RIDER_INFO;
    payload: number;
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
    | SetURL
    | SetDestination
    | SetRiderInfo
    | DeleteRiderInfo
    | EditRiderInfo
    | ResetRiderInfo
    | SetDateInfo;

export const writeUrl = (url: string | null): SetURL => ({
    type: ActionType.SET_URL,
    payload: url,
});

export const writeDestination = (
    destination: string | null
): SetDestination => {
    return { type: ActionType.SET_DESTINATION, payload: destination };
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
): SetRiderInfo => {
    return {
        type: ActionType.SET_RIDER_INFO,
        payload: { name, tel, bikeClass },
    };
};

export const deleteRiderInfo = (riderIndex: number): DeleteRiderInfo => {
    return {
        type: ActionType.DELETE_RIDER_INFO,
        payload: riderIndex,
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
