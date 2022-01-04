import { ModalBlurBg } from "@Components/ModalBlurBg";
import { CardWrapper } from "@Components/Pages/Result";
import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import { useHistory } from "react-router";

export const IncompleteParam: FunctionComponent = () => {
    const history = useHistory();
    const toHome = (): void => {
        history.push("/");
    };

    return createPortal(
        <ModalBlurBg>
            <div className="relative top-1/4 w-64 sm:w-80 mx-auto">
                <CardWrapper>
                    <p className="text-lg">잘못된 공유 링크입니다.</p>
                    <p className="text-gray-600">
                        정상적인 링크를 입력해주세요!
                    </p>

                    <button
                        type="button"
                        className="grayBtn block mt-3 mx-auto"
                        onClick={toHome}
                    >
                        홈으로
                    </button>
                </CardWrapper>
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
