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
                    <p className="text-lg">{errObj.input} 오류</p>
                    <p className="text-gray-600">{errObj.msg}</p>

                    <button
                        type="button"
                        className="grayBtn block mt-3 mx-auto"
                        onClick={closeFunc}
                    >
                        나가기
                    </button>
                </CardWrapper>
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
