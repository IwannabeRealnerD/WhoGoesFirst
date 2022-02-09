import {
    FieldValues,
    UseFormRegister,
} from "node_modules/react-hook-form/dist";
import { FunctionComponent } from "react";

interface TelInputInterface {
    editTel?: number;
    register: UseFormRegister<FieldValues>;
}

const telRegexp = /^.[0-9]{7,13}$/;

export const TelInput: FunctionComponent<TelInputInterface> = ({
    editTel,
    register,
}) => {
    return (
        <input
            {...register("tel", {
                required: true,
                pattern: telRegexp,
            })}
            type="tel"
            className="mainInput rounded-md h-9 w-40 sm:w-7/12 my-1 block"
            placeholder="휴대폰 번호"
            defaultValue={editTel}
        />
    );
};
const defaultProps = { editTel: undefined };
TelInput.defaultProps = defaultProps;
