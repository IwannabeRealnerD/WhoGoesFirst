import { ResetButton } from "@Components/Pages/WritePlan/ResetButton";
import { useAppDispatch, useAppSelector } from "@Redux/Hooks";
import { writeUrl } from "@Redux/Reducers/PlanReducer/Actions";
import { AnimatePresence } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

export interface URLInterface {
    register: UseFormRegister<FieldValues>;
    defaultValue: string | null;
}
const destinationRegexp = /^.{5,60}$/;

export const URLCard: FunctionComponent<URLInterface> = ({
    register,
    defaultValue,
}) => {
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

    return (
        <>
            <div className=" mb-1 ml-1">
                <span className="font-semibold sm:text-xl mb-1 ml-1 text-blue-700">
                    네비게이션 공유 주소
                </span>
                <span className="text-gray-500"> (필수 아님)</span>
            </div>
            <form onSubmit={handleSubmit(submitUrlAddr)}>
                <div className="relative rounded-lg bg-white pt-5 pb-11 shadow-lg">
                    <AnimatePresence exitBeforeEnter>
                        {urlRedux && <ResetButton resetFunc={resteFunc} />}
                    </AnimatePresence>
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
                        disabled={isReset}
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </>
    );
};
