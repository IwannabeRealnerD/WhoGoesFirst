import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import { writeUrl } from "@Redux/Reducers/PlanReducer/Actions";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export interface SubmitWhereInterface {
    url: string;
}
const destinationRegexp = /^.{5,60}$/;

export const URLCard: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const urlRedux = useAppSelector((state) => state.PlanReducer.url);

    const [isReset, setIsReset] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [buttonText, setButtonText] = useState("입력");

    const defaultValue = urlRedux ?? "";
    const { register, handleSubmit, formState, setFocus } = useForm({
        defaultValues: {
            url: defaultValue,
        },
    });

    const submitUrlAddr = ({ url }: SubmitWhereInterface): void => {
        if (isReset) {
            setIsReset(false);
            dispatch(writeUrl(null));
            setFocus("url");
            return;
        }
        setIsReset(true);
        dispatch(writeUrl(url));
    };

    useEffect(() => {
        const urlAddrCheck = (): boolean =>
            formState.errors.url?.type === "required";
        const urlAddrPatternCheck = (): boolean =>
            formState.errors.url?.type === "pattern";

        if (urlAddrCheck()) {
            setButtonText("값을 입력해주세요.");
            setButtonStatus(false);
            return;
        }
        if (urlAddrPatternCheck()) {
            setButtonText("5글자 이상 입력해주세요.");
            setButtonStatus(false);
            return;
        }
        if (urlRedux !== null) {
            setButtonText("재설정");
            setButtonStatus(false);
            setIsReset(true);
            return;
        }
        setButtonText("입력");
        setButtonStatus(true);
        setIsReset(false);
        setFocus("url");
    }, [formState, isReset, urlRedux, setFocus]);

    return (
        <>
            <div className=" mb-1 ml-1">
                <span className="font-semibold sm:text-xl mb-1 ml-1 text-blue-700">
                    네비게이션 공유 주소
                </span>
                <span className="text-gray-500"> (필수 아님)</span>
            </div>
            <form onSubmit={handleSubmit(submitUrlAddr)}>
                <div className="relative rounded-lg bg-white overflow-hidden pt-5 pb-11 shadow-lg">
                    <div className="px-4">
                        <input
                            {...register("url", {
                                required: true,
                                pattern: destinationRegexp,
                            })}
                            type="text"
                            disabled={isReset}
                            placeholder="네비게이션 URL"
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
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </>
    );
};
