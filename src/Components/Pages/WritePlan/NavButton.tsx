import { FunctionComponent, SetStateAction } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

interface NavButtonProps {
    placeholderBefore: string;
    placeholderAfter: string;
    setIsBack: React.Dispatch<SetStateAction<boolean | null>>;
    isSubmit?: boolean;
}

export const NavButton: FunctionComponent<NavButtonProps> = ({
    placeholderBefore,
    placeholderAfter,
    setIsBack,
    isSubmit,
}) => {
    return (
        <div className="mb-5 flex justify-between">
            <button
                type="button"
                className="grayBtn"
                onClick={() => setIsBack(true)}
            >
                &laquo;{placeholderBefore}
            </button>
            <button
                type={isSubmit === true ? "submit" : "button"}
                className="grayBtn"
                onClick={() => setIsBack(false)}
            >
                {placeholderAfter}&raquo;
            </button>
        </div>
    );
};
const defaultProps = { isSubmit: undefined };
NavButton.defaultProps = defaultProps;
