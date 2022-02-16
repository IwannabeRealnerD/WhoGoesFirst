import { useState, FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "@Redux/Hooks";
import { deleteRiderInfo } from "@Redux/Reducers/PlanReducer/Actions";
import { useRiderInfo } from "@Components/CustomHook/usePlanRedux";
import { SubmitWhoInterface } from "../Interface";
import { NameInput } from "./NameInput";
import { SelectBox } from "./SelectBox";
import { TelInput } from "./TelInput";

interface WriteInfoInterface {
    riderIndex?: number;
    submitFunc({ name, tel, bikeClass }: SubmitWhoInterface): void;
}

export const WriteInfo: FunctionComponent<WriteInfoInterface> = ({
    riderIndex,
    submitFunc,
}) => {
    const dispatch = useAppDispatch();
    const { riderInfoArr } = useRiderInfo();

    const { register, handleSubmit, formState, reset, setFocus } = useForm();
    const [errorText, setErrorText] = useState("");
    const [buttonText, setButtonText] = useState("입력");

    useEffect(() => {
        const isSubmitSuccessful = (): boolean => formState.isSubmitSuccessful;
        const requiredCheck = (): boolean => {
            return (
                (formState.errors.name?.type === "required" ||
                    formState.errors.tel?.type === "required" ||
                    formState.errors.bikeClass?.type === "required") &&
                formState.isSubmitted
            );
        };
        const namePatternCheck = (): boolean =>
            formState.errors.name?.type === "pattern" && formState.isSubmitted;
        const phonePatternCheck = (): boolean =>
            formState.errors.tel?.type === "pattern" && formState.isSubmitted;

        if (isSubmitSuccessful()) {
            setFocus("name");
            reset();
        }
        if (phonePatternCheck()) {
            setErrorText("전화번호가 너무 길거나 짧습니다 - 7자~13자");
            return;
        }
        if (namePatternCheck()) {
            setErrorText("이름은 2자에서 10자 사이로 입력해주세요");
            return;
        }
        if (requiredCheck()) {
            setErrorText("모든 입력값을 입력해주세요");
            return;
        }
        if (formState.isSubmitted) {
            setErrorText("입력을 클릭해주세요");
        }
        setErrorText("");
    }, [formState, reset, setFocus]);

    useEffect(() => {
        if (riderIndex === undefined) {
            setButtonText("입력");
            return;
        }
        if (riderIndex !== undefined) {
            setButtonText("수정");
        }
    }, [riderIndex]);

    return (
        <div className=" w-full bg-white rounded-lg  shadow-lg relative ">
            <form onSubmit={handleSubmit(submitFunc)}>
                <div className="px-4 pb-10 pt-8 relative">
                    <div className="w-full absolute top-0 left-0 flex justify-center items-center rounded-t-lg h-8">
                        <p className="text-gray-500 transition animate-pulse">
                            {errorText}
                        </p>
                    </div>
                    <div className="relative">
                        <NameInput
                            register={register}
                            editName={riderInfoArr[riderIndex as number]?.name}
                        />
                        <SelectBox
                            register={register}
                            editBikeClass={
                                riderInfoArr[riderIndex as number]?.bikeClass
                            }
                        />
                    </div>
                    <TelInput
                        register={register}
                        editTel={riderInfoArr[riderIndex as number]?.tel}
                    />
                    <div className="absolute bottom-0 left-0 w-full rounded-b-lg">
                        <button
                            type="submit"
                            className="mainBtn h-8 w-1/2 rounded-none rounded-bl-lg hover-hover:hover:bg-blue-300 active:bg-blue-500"
                        >
                            {buttonText}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                if (riderIndex === undefined) {
                                    reset();
                                    return;
                                }
                                dispatch(deleteRiderInfo(riderIndex));
                            }}
                            className="transition duration-300 h-8 bg-red-400 hover-hover:hover:bg-red-300 rounded-none w-1/2 rounded-br-lg"
                        >
                            {riderIndex === undefined ? "초기화" : "삭제"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
WriteInfo.defaultProps = {
    riderIndex: undefined,
};
