import { FunctionComponent } from "react";

interface MenuIndicatorInterface {
    menuName: string;
}

export const MenuIndicator: FunctionComponent<MenuIndicatorInterface> = ({
    menuName,
}) => {
    return (
        <h2 className="font-semibold text-xl mb-2 ml-1 text-blue-700">
            {menuName}
        </h2>
    );
};
