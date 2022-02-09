import {
    FieldValues,
    UseFormRegister,
} from "node_modules/react-hook-form/dist";
import { FunctionComponent } from "react";

interface NameInputInterface {
    editName?: string;
    register: UseFormRegister<FieldValues>;
}

const nameRegexp = /^.{2,10}$/;

export const NameInput: FunctionComponent<NameInputInterface> = ({
    editName,
    register,
}) => {
    return (
        <>
            <input
                {...register("name", {
                    required: true,
                    pattern: nameRegexp,
                })}
                type="text"
                className="mainInput rounded-md my-1 mr-2 sm:w-5/12 w-20"
                placeholder="이름"
                defaultValue={editName}
            />
        </>
    );
};
const defaultProps = { editName: undefined };
NameInput.defaultProps = defaultProps;
