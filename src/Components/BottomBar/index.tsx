import { GITHUB_ADDR, NOTION_ADDR } from "@Components/Strings";
import { FunctionComponent } from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiNotion } from "react-icons/si";

export const BottomBar: FunctionComponent = () => {
    const toGithub = (): void => {
        window.open(GITHUB_ADDR);
    };

    const toNotion = (): void => {
        window.open(NOTION_ADDR);
    };

    return (
        <div className="bg-blue-600 fixed w-full h-10 bottom-0 shadow-md px-3 z-10 flex items-center justify-center">
            <button
                type="button"
                className="hover-hover:hover:bg-white transition duration-100 hover-hover:active:bg-gray-400 active:bg-gray-400 rounded-full p-1 px-5 mr-16"
                onClick={toGithub}
            >
                <IoLogoGithub size={23} />
            </button>
            <button
                className="hover-hover:hover:bg-white transition duration-100 hover-hover:active:bg-gray-400 active:bg-gray-400 rounded-full p-1 px-5 "
                type="button"
                onClick={toNotion}
            >
                <SiNotion size={22} />
            </button>
        </div>
    );
};
