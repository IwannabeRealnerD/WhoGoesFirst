import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";

import { editRiderInfo } from "@Redux/Reducers/PlanReducer/Actions";
import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { useAppDispatch } from "@Redux/Hooks";

import { WriteInfo } from "../WriteInfo";
import { SubmitWhoInterface } from "../Interface";

interface EditInfoInterface {
    setIsEditingInfo: Dispatch<SetStateAction<boolean>>;
    riderIndex: number;
}

export const EditInfo: FunctionComponent<EditInfoInterface> = ({
    setIsEditingInfo,
    riderIndex,
}) => {
    const dispatch = useAppDispatch();
    const submitEditedRiderInfo = ({
        name,
        tel,
        bikeClass,
    }: SubmitWhoInterface): void => {
        const bikeClassArr: number[] = [
            Number(bikeClass[0]),
            Number(bikeClass[1]),
        ];
        dispatch(editRiderInfo(name, tel, bikeClassArr, riderIndex));
        setIsEditingInfo(false);
    };

    const closeFunc = (): void => {
        setIsEditingInfo(false);
    };

    return createPortal(
        <ModalBlurBg closeFunc={closeFunc}>
            <div className="browserSize relative mx-auto top-1/4">
                <WriteInfo
                    riderIndex={riderIndex}
                    submitFunc={submitEditedRiderInfo}
                />
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
