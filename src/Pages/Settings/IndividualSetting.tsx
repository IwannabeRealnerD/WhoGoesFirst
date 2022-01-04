import { FunctionComponent, ChangeEventHandler } from "react";

interface props {
    onChangeRoot: ChangeEventHandler<HTMLInputElement>;
    isSettingOn: boolean;
    settingName: string;
    settingDescription: string;
}
export const IndividualSetting: FunctionComponent<props> = ({
    onChangeRoot,
    isSettingOn,
    settingName,
    settingDescription,
}) => {
    return (
        <div className="h-11 flex items-center">
            <input
                name={settingName}
                type="checkbox"
                onChange={onChangeRoot}
                checked={isSettingOn}
                className="form-checkbox h-6 w-6 text-red-600"
            />
            <label htmlFor={settingName}>
                <span className="ml-2 text-gray-700 text-lg align-middle">
                    {settingDescription}
                </span>
            </label>
        </div>
    );
};
