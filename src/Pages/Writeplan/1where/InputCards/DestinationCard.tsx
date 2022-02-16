import { FunctionComponent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { MenuIndicator } from "@Components/Pages";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import {
    writeDestination,
    writeUrl,
} from "@Redux/Reducers/PlanReducer/Actions";
import { ResetButton } from "@Components/Pages/WritePlan/ResetButton";
import { AnimatePresence } from "framer-motion";

interface DestinationInterface {
    register: UseFormRegister<FieldValues>;
}
const destinationRegexp = /^.{2,35}$/;

export const DestinationCard: FunctionComponent<DestinationInterface> = ({
    register,
}) => {
    const dispatch = useAppDispatch();
    const destinationRedux = useAppSelector(
        (state) => state.PlanReducer.destination
    );

    const resteFunc = (): void => {
        dispatch(writeDestination(null));
        dispatch(writeUrl(null));
    };

    return (
        <>
            <MenuIndicator menuName="도착지" />
            <div className="relative rounded-lg bg-white pt-5 pb-5 shadow-lg">
                <AnimatePresence exitBeforeEnter>
                    {destinationRedux && <ResetButton resetFunc={resteFunc} />}
                </AnimatePresence>
                <div className="px-4">
                    <input
                        {...register("destination", {
                            required: true,
                            pattern: destinationRegexp,
                        })}
                        type="text"
                        placeholder="목적지"
                        className="mainInput px-5 pr-10 w-full block rounded-lg"
                    />
                </div>
            </div>
        </>
    );
};
