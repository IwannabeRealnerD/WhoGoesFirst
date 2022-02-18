import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { CardWrapper } from "@Components/Pages/Result";
import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import { ErrorModalInterface } from "../Interface";

export const ErrorModal: FunctionComponent<ErrorModalInterface> = ({
    setErrMsg,
    errObj,
}) => {
    const closeFunc = (): void => {
        setErrMsg(null);
    };

    return createPortal(
        <ModalBlurBg>
            <div className="relative top-1/4 browserSize mx-auto">
                <CardWrapper>
                    <p className="text-lg">{errObj.input}</p>
                    <p className="text-gray-600">{errObj.msg}</p>
                    <div className="text-center">
                        <button
                            type="button"
                            className="grayBtn mt-3"
                            onClick={closeFunc}
                        >
                            확인
                        </button>
                    </div>
                </CardWrapper>
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
