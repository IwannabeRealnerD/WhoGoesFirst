import { FunctionComponent } from "react";
import { CardWrapper } from "@Components/Pages/Result";
import { Toast } from "@Components/UIRelated/Toast";
import { AnimatePresence } from "framer-motion";
import { useCopy } from "@Components/CustomHook/useCopy";

interface WhereResultInterface {
    destination: string | null;
    url: string | null;
}

export const WhereResult: FunctionComponent<WhereResultInterface> = ({
    destination,
    url,
}) => {
    const { isCopied, isCopyAvailable, isMessageOn, copyToClipboard } =
        useCopy();

    const toNavi = (): void => {
        if (typeof url === "string") window.open(url);
    };
    const onCopyClick = (): void => {
        if (typeof url === "string") copyToClipboard(url);
    };
    return (
        <>
            <CardWrapper>
                <p className="text-blue-700">목적지</p>
                <p className="text-center text-xl text-gray-700 font-bold">
                    {destination}
                </p>
            </CardWrapper>
            {url && (
                <CardWrapper>
                    <p className="text-blue-700 mb-2">네비링크</p>
                    <div className="flex flex-col">
                        <p className="text-xl text-gray-700 font-bold text-center mb-2">
                            {url.length < 14 ? url : `${url.slice(0, 14)}...`}
                        </p>
                        <div className="flex justify-center">
                            <button
                                disabled={isMessageOn}
                                type="button"
                                className="grayBtn sm:mr-4 mr-1"
                                onClick={onCopyClick}
                            >
                                복사하기
                            </button>
                            <button
                                type="button"
                                className="grayBtn"
                                onClick={toNavi}
                            >
                                이동하기
                            </button>
                        </div>
                    </div>
                    <AnimatePresence exitBeforeEnter>
                        {isCopied && (
                            <Toast toastMessage="네비링크가 클립보드에 복사됐습니다." />
                        )}
                        {isCopyAvailable === false && (
                            <Toast toastMessage="접속환경으로 인해 복사가 불가능합니다." />
                        )}
                    </AnimatePresence>
                </CardWrapper>
            )}
        </>
    );
};
