import { MenuIndicator } from "@Components/Pages";
import { FunctionComponent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface URLInterface {
    register: UseFormRegister<FieldValues>;
    defaultValue: string | null;
}
const urlRegexp =
    /^(https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])$/;

export const URLCard: FunctionComponent<URLInterface> = ({
    register,
    defaultValue,
}) => {
    return (
        <>
            <MenuIndicator menuName="네비게이션 공유 주소" />
            <div className="relative rounded-lg bg-white py-5 shadow-lg">
                <div className="px-4">
                    <input
                        {...register("url", {
                            pattern: urlRegexp,
                        })}
                        type="text"
                        placeholder="네비게이션 URL"
                        className="mainInput px-5 pr-10 w-full block rounded-lg"
                        defaultValue={defaultValue ?? ""}
                    />
                </div>
            </div>
        </>
    );
};
