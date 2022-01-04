import {
    Dispatch,
    FunctionComponent,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { useForm } from "react-hook-form";

import { MenuIndicator } from "@Components/Pages";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import {
    writeDestination,
    writeUrl,
} from "@Redux/Reducers/PlanReducer/Actions";
import { ResetButton } from "@Components/Pages/WritePlan/ResetButton";
import { AnimatePresence } from "framer-motion";

interface DestinationCard {
    setIsDestination: Dispatch<SetStateAction<boolean>>;
}

interface SubmitWhereInterface {
    destination: string;
}
const destinationRegexp = /^.{2,35}$/;

export const DestinationCard: FunctionComponent<DestinationCard> = ({
    setIsDestination,
}) => {
    const dispatch = useAppDispatch();
    const destinationRedux = useAppSelector(
        (state) => state.PlanReducer.destination
    );

    const defaultValue = destinationRedux ?? "";
    const { register, handleSubmit, formState, setFocus, reset } = useForm({
        defaultValues: {
            destination: defaultValue,
        },
    });
    const [isReset, setIsReset] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [buttonText, setButtonText] = useState(() => "입력");

    const submitDestination = ({ destination }: SubmitWhereInterface): void => {
        setIsReset(true);
        dispatch(writeDestination(destination));
    };

    const resteFunc = (): void => {
        reset();
        setIsReset(false);
        dispatch(writeDestination(null));
        dispatch(writeUrl(null));
    };

    useEffect(() => {
        const destinationCheck = (): boolean =>
            formState.errors.destination?.type === "required";
        const destinationPatternCheck = (): boolean =>
            formState.errors.destination?.type === "pattern";

        if (destinationCheck()) {
            setButtonText("값을 입력해주세요.");
            setButtonStatus(false);
            return;
        }
        if (destinationPatternCheck()) {
            setButtonText("2글자 이상 입력해주세요.");
            setButtonStatus(false);
            return;
        }
        if (destinationRedux !== null) {
            setButtonText("입력완료");
            setIsReset(true);
            setIsDestination(true);
            setButtonStatus(true);
            return;
        }
        setButtonText("입력");
        setButtonStatus(true);
        setIsDestination(false);
        setIsReset(false);
        setFocus("destination");
    }, [destinationRedux, formState, isReset, setIsDestination, setFocus]);

    return (
        <>
            <MenuIndicator menuName="도착지" />
            <form onSubmit={handleSubmit(submitDestination)}>
                <div className=" relative rounded-lg bg-white pt-5 pb-11 shadow-lg">
                    <AnimatePresence exitBeforeEnter>
                        {destinationRedux && (
                            <ResetButton resetFunc={resteFunc} />
                        )}
                    </AnimatePresence>
                    <div className="px-4">
                        <input
                            {...register("destination", {
                                required: true,
                                pattern: destinationRegexp,
                            })}
                            type="text"
                            disabled={isReset}
                            placeholder="목적지"
                            className="mainInput px-5 pr-10 w-full block rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`absolute mainBtn bottom-0 rounded-b-lg h-8 flex items-center justify-center w-full ${
                            buttonStatus
                                ? "bg-blue-400 hover-hover:hover:bg-blue-300 active:bg-blue-500"
                                : "bg-red-400 hover-hover:hover:bg-red-300 active:bg-red-500"
                        }`}
                        disabled={isReset}
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </>
    );
};
