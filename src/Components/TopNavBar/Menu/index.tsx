import { AnimatePresence } from "framer-motion";
import { FunctionComponent, useState } from "react";

import { MenuButton } from "./MenuButton";
import { MenuDown } from "./MenuDown";

interface MenuElementsType {
    to: string;
    menuName: string;
}

export const menuElements: MenuElementsType[] = [
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
        <div className="relative sm:mr-4 lg:invisible">
            <MenuButton isOpen={isMenuOpen} dropdownControl={dropdownControl} />
            <AnimatePresence>
                {isMenuOpen && <MenuDown setIsMenuOpen={setIsMenuOpen} />}
            </AnimatePresence>
        </div>
    );
};
