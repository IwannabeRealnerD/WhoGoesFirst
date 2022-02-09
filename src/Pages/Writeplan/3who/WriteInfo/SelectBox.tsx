import { FunctionComponent } from "react";
import {
    FieldValues,
    UseFormRegister,
} from "node_modules/react-hook-form/dist";
import { genreArr, classArr } from "@Components/Functions";

interface SelectBoxInterface {
    editBikeClass?: number[] | null;
    register: UseFormRegister<FieldValues>;
}

export const SelectBox: FunctionComponent<SelectBoxInterface> = ({
    register,
    editBikeClass,
}) => {
    return (
        <select
            {...register("bikeClass", { required: true })}
            defaultValue={
                editBikeClass !== null && editBikeClass !== undefined
                    ? String(editBikeClass[0]) + String(editBikeClass[1])
                    : ""
            }
            className="mainInput ml-2 rounded-md w-28 sm:w-6/12 my-1 right-0 absolute"
        >
            <option value="">차종 미정</option>
            {genreArr.map((genre, gIndex) => (
                <optgroup label={genre} key={genre}>
                    {classArr.map((bikeClass: string, cIndex) => {
                        const optionValue = `${gIndex}${cIndex}`;
                        return (
                            <option
                                value={optionValue}
                                key={`${String(gIndex)}${String(cIndex)}class`}
                            >
                                {bikeClass}
                            </option>
                        );
                    })}
                </optgroup>
            ))}
        </select>
    );
};
const defaultProps = { editBikeClass: null };
SelectBox.defaultProps = defaultProps;
