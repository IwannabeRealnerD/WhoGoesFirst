import { FunctionComponent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { MenuIndicator } from "@Components/Pages";

interface DestinationInterface {
    register: UseFormRegister<FieldValues>;
    defaultValue: string | null;
}
const destinationRegexp = /^.{2,35}$/;

export const DestinationCard: FunctionComponent<DestinationInterface> = ({
    register,
    defaultValue,
}) => {
    return (
        <>
            <MenuIndicator menuName="도착지" />
            <div className="relative rounded-lg bg-white pt-5 pb-5 shadow-lg">
                <div className="px-4">
                    <input
                        {...register("destination", {
                            pattern: destinationRegexp,
                        })}
                        type="text"
                        placeholder="목적지"
                        className="mainInput px-5 pr-10 w-full block rounded-lg"
                        defaultValue={defaultValue ?? ""}
                    />
                </div>
            </div>
        </>
    );
};
