import { ActionType, PlanAction } from "./Actions";

interface PlanInfo {
    url: string | null;
    destination: string | null;
    startDate: Date | null;
    endDate: Date | null;
    riderInfoArr: { name: string; tel: number; bikeClass: number[] }[];
}

const initialState: PlanInfo = {
    url: null,
    destination: null,
    riderInfoArr: [{ name: "", tel: 0, bikeClass: [0, 0] }],
    startDate: null,
    endDate: null,
};

const PlanReducer = (
    state: PlanInfo = initialState,
    action: PlanAction
): PlanInfo => {
    switch (action.type) {
        case ActionType.SET_URL: {
            return { ...state, url: action.payload };
        }

        case ActionType.SET_DESTINATION: {
            return { ...state, destination: action.payload };
        }

        case ActionType.SET_START_DATE: {
            return { ...state, startDate: action.payload };
        }

        case ActionType.SET_END_DATE: {
            return { ...state, endDate: action.payload };
        }

        case ActionType.SET_RIDER_INFO: {
            const newArray = state.riderInfoArr.slice();
            newArray.push(action.payload);
            return { ...state, riderInfoArr: newArray };
        }

        case ActionType.DELETE_RIDER_INFO: {
            const result = state.riderInfoArr.filter(
                (element, index) => index !== action.payload
            );
            return { ...state, riderInfoArr: result };
        }

        case ActionType.EDIT_RIDER_INFO: {
            const result = state.riderInfoArr.map((element, index) => {
                if (index !== action.riderIndex) {
                    return element;
                }
                return action.payload;
            });
            return { ...state, riderInfoArr: result };
        }

        case ActionType.RESET_RIDER_INFO: {
            return {
                ...state,
                riderInfoArr: [{ name: "", tel: 0, bikeClass: [0, 0] }],
            };
        }
        default:
            return state;
    }
};

export { PlanReducer };
export type { PlanInfo };
