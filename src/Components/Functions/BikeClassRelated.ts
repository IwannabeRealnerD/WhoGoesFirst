interface arrToBikeClassInterface {
    (arr: number[]): string;
}
export const genreArr = [
    "알차 / 네이키드",
    "투어러 / 어드벤쳐",
    "할리 / 클래식",
];

export const classArr = ["엔트리급", "미들급", "리터급"];

export const arrToBikeClass: arrToBikeClassInterface = (arr) => {
    const genre = genreArr[arr[0]];
    const classs = classArr[arr[1]];
    return `${genre} - ${classs}`;
};
