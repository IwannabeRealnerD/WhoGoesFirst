import { useAppDispatch } from "@Redux/Hooks";
import { writeEndDate } from "@Redux/Reducers/PlanReducer/Actions";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface TourLengthInterface {
    setIsOneDay: Dispatch<SetStateAction<boolean>>;
    isOneDay: boolean;
}

export const TourLength: FunctionComponent<TourLengthInterface> = ({
    setIsOneDay,
    isOneDay,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="w-full shadow-lg rounded-lg overflow-hidden mt-5 mb-7">
            <button
                onClick={() => {
                    setIsOneDay(true);
                    dispatch(writeEndDate(null));
                }}
                className={`transition duration-300 h-12 w-1/2 border-l ${
                    isOneDay
                        ? "bg-blue-400 hover-hover:hover:bg-blue-300  active:bg-blue-500 hover-hover:active:bg-blue-500"
                        : "bg-gray-400 text-gray-500 hover-hover:hover:bg-gray-300 hover-hover:hover:text-black hover-hover:active:bg-gray-500 active:bg-gray-500"
                } `}
                type="button"
            >
                당일투어
            </button>
            <button
                onClick={() => {
                    setIsOneDay(false);
                }}
                className={`transition duration-300 h-12 w-1/2 border-r ${
                    isOneDay
                        ? "bg-gray-400 text-gray-500 hover-hover:hover:bg-gray-300 hover-hover:hover:text-black hover-hover:active:bg-gray-500 active:bg-gray-500"
                        : "bg-blue-400 hover-hover:hover:bg-blue-300  active:bg-blue-500 hover-hover:active:bg-blue-500"
                }`}
                type="submit"
            >
                박투어
            </button>
        </div>
    );
};
