interface RiderInfoArrInterface {
    name: string;
    tel: number;
    bikeClass: number[];
}

interface ShareLinkCreator {
    (
        baseUrl: string,
        destinationRedux: string | null,
        urlRedux: string | null,
        startDate: Date | null,
        endDate: Date | null,
        riderInfoArr: RiderInfoArrInterface[]
    ): string;
}

export const shareLinkCreator: ShareLinkCreator = (
    baseUrl,
    destinationRedux,
    urlRedux,
    startDate,
    endDate,
    riderInfoArr
) => {
    const AFTERHTTPS = 7;
    const ENDOFADDR = baseUrl.indexOf("/result", AFTERHTTPS); // https다음 주소만

    const currentAddr = window.location.href
        .substring(0, ENDOFADDR)
        .concat("/result?"); // 주소

    const urlObj = {
        d1: "",
        u2: "",
        sd3: "",
        ed4: "",
        ri5: "",
    };

    if (typeof destinationRedux === "string") {
        const uriDestinationRedux = encodeURIComponent(destinationRedux);
        urlObj.d1 = btoa(uriDestinationRedux);
    }
    if (typeof urlRedux === "string") {
        const urlUriRedux = encodeURIComponent(urlRedux);
        urlObj.u2 = btoa(urlUriRedux);
    }
    if (startDate !== null) {
        urlObj.sd3 = btoa(`${startDate.getTime()}`);
    }
    if (endDate !== null) {
        urlObj.ed4 = btoa(`${endDate.getTime()}`);
    }
    if (riderInfoArr !== null) {
        const urlRinderInfoArr = riderInfoArr.map(
            (element) =>
                `${element.name}/${element.tel}/${element.bikeClass.join("")}-`
        );
        urlObj.ri5 = btoa(encodeURIComponent(urlRinderInfoArr.join("")));
    }
    const param = new URLSearchParams(urlObj);
    const resultUrl = `${currentAddr}${param.toString()}`;
    return resultUrl;
};
