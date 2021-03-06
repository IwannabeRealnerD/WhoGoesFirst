import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { NOTION_ADDR } from "@Components/Strings";
import { useAppDispatch } from "@Redux/Hooks";
import { explainOff } from "@Redux/Reducers/SettingsReducer/Actions";
import { FunctionComponent } from "react";
import { createPortal } from "react-dom";

export const ExplainModal: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const toNotion = (): void => {
        window.open(NOTION_ADDR);
        dispatch(explainOff());
    };

    const disableExplain = (): void => {
        dispatch(explainOff());
    };
    return createPortal(
        <ModalBlurBg>
            <div className="relative top-1/4 bg-white rounded-md overflow-hidden browserSize mx-auto p-3">
                <p className="text-lg">처음 오셨군요?</p>
                <p className="text-gray-600">사용법을 읽어보시겠어요?</p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={toNotion}
                        className="grayBtn mt-3 sm:mr-4 mr-1"
                    >
                        사용법
                    </button>
                    <button
                        type="button"
                        onClick={disableExplain}
                        className="grayBtn mt-3"
                    >
                        아니요
                    </button>
                </div>
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
