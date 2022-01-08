import { ModalBlurBg } from "@Components/UIRelated/ModalBlurBg";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { menuArr } from "./index";

interface MenuDownProps {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuDown: FunctionComponent<MenuDownProps> = ({
    setIsMenuOpen,
}) => {
    const closeFunc = (): void => {
        setIsMenuOpen(false);
    };

    return createPortal(
        <ModalBlurBg closeFunc={closeFunc}>
            <div className="relative browserSize top-1/4 mx-auto bg-white rounded-md overflow-hidden">
                {menuArr.map((menuObj) => (
                    <Link
                        key={menuObj.menuName}
                        to={menuObj.to}
                        className="block px-4 py-2 text-gray-700 hover-hover:hover:bg-gray-200 hover-hover:active:bg-gray-300 active:bg-gray-300  text-center"
                        onClick={closeFunc}
                    >
                        {menuObj.menuName}
                    </Link>
                ))}
            </div>
        </ModalBlurBg>,
        document.getElementById("modalDiv") as HTMLElement
    );
};
