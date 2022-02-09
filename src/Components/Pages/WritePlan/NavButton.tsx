import { FunctionComponent, SetStateAction } from "react";

interface NavButtonProps {
    placeholderBefore: string;
    placeholderAfter: string;
    setIsBack: React.Dispatch<SetStateAction<boolean | null>>;
}

export const NavButton: FunctionComponent<NavButtonProps> = ({
    placeholderBefore,
    placeholderAfter,
    setIsBack,
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
                type="button"
                className="grayBtn"
                onClick={() => setIsBack(false)}
            >
                {placeholderAfter}&raquo;
            </button>
        </div>
    );
};
