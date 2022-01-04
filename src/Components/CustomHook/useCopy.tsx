import { useState } from "react";

interface useCopyInterFace {
    isCopied: boolean;
    isCopyAvailable: boolean;
    isMessageOn: boolean;
    copyToClipboard: (copiableString: string) => void;
}

export const useCopy = (): useCopyInterFace => {
    const [isCopied, setIsCopied] = useState(false);
    const [isCopyAvailable, setIsCopyAvailable] = useState(true);
    const [isMessageOn, setIsMessageOn] = useState(false);

    const copyToClipboard = (copiableString: string): void => {
        navigator?.clipboard
            ?.writeText(copiableString)
            .then(() => {
                setIsCopied(true);
                setIsMessageOn(true);
                setTimeout(() => {
                    setIsCopied(false);
                    setIsMessageOn(false);
                }, 3000);
            })
            .catch(() => {
                setIsCopyAvailable(false);
                setIsMessageOn(true);
                setTimeout(() => {
                    setIsCopyAvailable(true);
                    setIsMessageOn(false);
                }, 3000);
            });
    };

    return { isCopied, isCopyAvailable, isMessageOn, copyToClipboard };
};
