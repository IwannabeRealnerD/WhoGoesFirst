import { FunctionComponent } from "react";
import { CardWrapper } from "@Components/Pages/Result";

interface WhenResultInterface {
    startDate: Date | null;
    endDate: Date | null;
}

export const WhenResult: FunctionComponent<WhenResultInterface> = ({
    startDate,
    endDate,
}) => {
    return (
        <CardWrapper>
            <p className="text-blue-700">날짜</p>
            <p className="text-center text-xl text-gray-700 font-bold">
                {startDate?.getFullYear()}년
                {startDate && startDate?.getMonth() + 1}월{startDate?.getDate()}
                일
            </p>
            {endDate && (
                <>
                    <p className="text-center text-xl text-gray-700 font-bold">
                        ~ {endDate?.getFullYear()}년{endDate?.getMonth() + 1}월
                        {endDate?.getDate()}일
                    </p>
                </>
            )}
        </CardWrapper>
    );
};
