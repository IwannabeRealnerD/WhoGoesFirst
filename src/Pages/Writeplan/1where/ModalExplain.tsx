import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";

interface ModalExplainInterface {
    setIsExplain: Dispatch<SetStateAction<boolean>>;
}

export const ModalExplain: FunctionComponent<ModalExplainInterface> = ({
    setIsExplain,
}) => {
    const closeFunc = (): void => {
        setIsExplain(false);
    };
    return createPortal(
        <ModalBlurBg closeFunc={closeFunc}>콘텐츠</ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
