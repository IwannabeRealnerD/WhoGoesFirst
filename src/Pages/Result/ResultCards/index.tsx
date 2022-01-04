import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { useCopy } from "@Components/CustomHook";
import { Toast } from "@Components/Pages/Result/Toast";
import { shareLinkCreator } from "@Components/Functions";
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
    const riderInfoArr = useAppSelector((state) => state.PlanReducer.userInfo);

    const { isCopied, isCopyAvailable, isMessageOn, copyToClipboard } =
        useCopy();

    const isWhereExist = destinationRedux || urlRedux;
    const isDateExist = startDate || endDate;
    const isUserInfoExist = riderInfoArr.length > 1;
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
                    className="whiteHover mt-10 block mx-auto mb-6 p-4 py-3 rounded-lg shadow-lg"
                    onClick={shareFunction}
                    disabled={isMessageOn}
                >
                    공유링크 복사하기
                </button>
            )}
            <AnimatePresence exitBeforeEnter>
                {isCopied && (
                    <Toast toastMessage="공유링크가 클립보드에 복사됐습니다." />
                )}
                {isCopyAvailable === false && (
                    <Toast toastMessage="접속환경으로 인해 복사가 불가능합니다." />
                )}
            </AnimatePresence>
        </>
    );
};
