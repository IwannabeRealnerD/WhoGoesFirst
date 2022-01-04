import { ActionType, PlanAction } from "./Actions";

interface PlanInfo {
    url: string | null;
    destination: string | null;
    startDate: Date | null;
    endDate: Date | null;
    userInfo: { name: string; tel: number; bikeClass: number[] }[];
}

const initialState: PlanInfo = {
    url: null,
    destination: null,
    userInfo: [{ name: "", tel: 0, bikeClass: [0, 0] }],
    startDate: null,
    endDate: null,
};

const PlanReducer = (
    state: PlanInfo = initialState,
    action: PlanAction
): PlanInfo => {
    switch (action.type) {
        case ActionType.WRITE_URL: {
            return { ...state, url: action.payload };
        }

        case ActionType.WRITE_DESTINATION: {
            return { ...state, destination: action.payload };
        }

        case ActionType.SET_START_DATE: {
            return { ...state, startDate: action.payload };
        }

        case ActionType.SET_END_DATE: {
            return { ...state, endDate: action.payload };
        }

        case ActionType.WRITE_RIDER_INFO: {
            const newArray = state.userInfo.slice();
            newArray.push(action.payload);
            return { ...state, userInfo: newArray };
        }

        case ActionType.EDIT_RIDER_INFO: {
            const result = state.userInfo.map((element, index) => {
                if (index !== action.riderIndex) {
                    return element;
                }
                return action.payload;
            });
            return { ...state, userInfo: result };
        }

        case ActionType.RESET_RIDER_INFO: {
            return {
                ...state,
                userInfo: [{ name: "", tel: 0, bikeClass: [0, 0] }],
            };
        }
        default:
            return state;
    }
};

export { PlanReducer };
export type { PlanInfo };
