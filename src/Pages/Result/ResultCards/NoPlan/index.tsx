import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import { Link, useHistory } from "react-router-dom";

import { ModalBlurBg } from "@Components/ModalBlurBg";
import { CardWrapper } from "@Components/Pages/Result";

export const NoPlan: FunctionComponent = () => {
    const history = useHistory();
    const toHome = (): void => {
        history.push("/");
    };
    return createPortal(
        <ModalBlurBg>
            <div className="relative browserSize top-1/4 mx-auto">
                <CardWrapper>
                    <p className="text-lg">투어 계획이 존재하지 않습니다!</p>
                    <p className="text-gray-600">
                        계획을 작성한 후 해당 페이지를 방문해주세요
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
