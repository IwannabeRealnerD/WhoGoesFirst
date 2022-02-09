import { FunctionComponent } from "react";

export const CardWrapper: FunctionComponent = ({ children }) => {
    return (
        <div className="w-full mb-6 p-3 bg-white rounded-lg shadow-lg relative">
            {children}
        </div>
    );
};
