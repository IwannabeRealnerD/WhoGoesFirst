import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { useCopy } from "@Components/CustomHook";
import { Toast } from "@Components/Pages/Result/Toast";
import { shareLinkCreator } from "@Components/Functions";
import { useRiderInfo } from "@Components/CustomHook/usePlanRedux";
import { useAppSelector } from "@Redux/Hooks";
import { NoPlan } from "./NoPlan";
import { WhenResult } from "./WhenResult";
import { WhereResult } from "./WhereResult";
import { WhoResult } from "./WhoResult";

export const ResultCards: FunctionComponent = () => {
    const destinationRedux = useAppSelector(
        (state) => state.PlanReducer.destination
    );
    const urlRedux = useAppSelector((state) => state.PlanReducer.url);
    const startDate = useAppSelector((state) => state.PlanReducer.startDate);
    const endDate = useAppSelector((state) => state.PlanReducer.endDate);
    const { riderInfoArr } = useRiderInfo();

    const { isCopied, isCopyAvailable, isMessageOn, copyToClipboard } =
        useCopy();

    const isWhereExist = destinationRedux || urlRedux;
    const isDateExist = startDate || endDate;
    const isUserInfoExist = riderInfoArr.length > 0;
    const nothingExist = !(isWhereExist || isDateExist || isUserInfoExist);

    const shareFunction = (): void => {
        copyToClipboard(
            shareLinkCreator(
                window.location.href,
                destinationRedux,
                urlRedux,
                startDate,
                endDate,
                riderInfoArr
            )
        );
    };

    return (
        <>
            {isWhereExist && (
                <WhereResult destination={destinationRedux} url={urlRedux} />
            )}
            {isDateExist && (
                <WhenResult startDate={startDate} endDate={endDate} />
            )}
            {isUserInfoExist && <WhoResult userInfoArr={riderInfoArr} />}
            {nothingExist === true ? (
                <NoPlan />
            ) : (
                <button
                    type="button"
                    className="whiteHover mt-10 block mx-auto mb-6 p-4 py-3 rounded-lg shadow-lg animate-bounce"
                    onClick={shareFunction}
                    disabled={isMessageOn}
                >
                    공유링크 복사하기
                </button>
            )}
            <AnimatePresence exitBeforeEnter>
                {isCopied && <Toast toastMessage="클리보드에 복사완료!" />}
                {isCopyAvailable === false && (
                    <Toast toastMessage="접속환경으로 인해 복사가 불가능합니다." />
                )}
            </AnimatePresence>
        </>
    );
};
