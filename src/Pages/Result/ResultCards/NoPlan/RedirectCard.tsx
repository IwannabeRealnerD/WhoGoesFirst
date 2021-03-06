import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { CardWrapper } from "@Components/Pages/Result";

export const RedirectCard: FunctionComponent = () => {
    const history = useHistory();
    const toHome = (): void => {
        history.push("");
    };
    return (
        <CardWrapper>
            <p className="text-lg">투어 계획이 존재하지 않습니다!</p>
            <p className="text-gray-600">
                계획을 작성한 후 해당 페이지를 방문해주세요
            </p>
            <button
                type="button"
                onClick={toHome}
                className="grayBtn block mt-3 mx-auto"
            >
                홈으로
            </button>
        </CardWrapper>
    );
};
