import { FunctionComponent } from "react";

export const CatchPhrase: FunctionComponent = () => {
    return (
        <div className="relative ml-5">
            <span className="sm:text-xl font-bold text-gray-900">
                네비찍고.. 인원 체크하고..
            </span>
            <p className="sm:text-xl font-bold text-gray-900">
                도착지 주소 확인하고..
            </p>

            <p className="text-blue-600 my-3 text-xl sm:text-2xl font-bold">
                이제는
                <br />
                Who Goes First로
                <br /> 로드가 작성 후 공유!
            </p>

            <p className="text-gray-600 text-justify">
                투어전 URL 클릭만 하면 투어관련 정보 모두 간단하게 공유하고
                확인!
            </p>
        </div>
    );
};
