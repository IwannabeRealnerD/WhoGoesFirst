import { AnimatePresence } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import { MenuButton } from "./MenuButton";
import { MenuDown } from "./MenuDown";

interface MenuElementsType {
    to: string;
    menuName: string;
}

export const menuArr: MenuElementsType[] = [
    { to: "/", menuName: "홈" },
    { to: "/writeplan/1where", menuName: "계획 작성하기!" },
    { to: "/result", menuName: "결과" },
    { to: "/settings", menuName: "설정" },
];

export const Menu: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownControl = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* when it's mobile */}
            <div className="absolute right-0 mr-4 lg:invisible">
                <MenuButton
                    isOpen={isMenuOpen}
                    dropdownControl={dropdownControl}
                />
                <AnimatePresence>
                    {isMenuOpen && <MenuDown setIsMenuOpen={setIsMenuOpen} />}
                </AnimatePresence>
            </div>
            {/* when it's browser */}
            <div className="absolute right-0 mr-4 invisible lg:visible">
                {menuArr.map((planElement) => (
                    <Link
                        key={planElement.menuName}
                        to={planElement.to}
                        className="relative px-4 py-2 text-white font-medium text-center"
                    >
                        {planElement.menuName}
                    </Link>
                ))}
            </div>
        </>
    );
};
