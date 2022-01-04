import { FunctionComponent } from "react";
import { menuElements } from "@Components/TopNavBar/Menu";
import { Link } from "react-router-dom";

export const SideNavBar: FunctionComponent = () => {
    return (
        <div className="fixed right-0 mt-24 mr-8 rounded-md shadow-lg bg-white invisible lg:visible z-10">
            {menuElements.map((menuObj) => (
                <Link
                    key={menuObj.menuName}
                    to={menuObj.to}
                    className="relative block px-4 py-2 text-gray-700 hover-hover:hover:bg-gray-200 hover-hover:active:bg-gray-300 active:bg-gray-300 text-center"
                >
                    {menuObj.menuName}
                </Link>
            ))}
        </div>
    );
};
