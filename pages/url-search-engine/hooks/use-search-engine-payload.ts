import { useState } from "react";
import { createPayloadChanger } from "@/utils/form-helpers";

export default function useSearchEnginePayload(): {
    payload: any;
    setPayload: React.Dispatch<React.SetStateAction<any>>;
    changePayload: (key: string, value: any) => void;
} {
    const [payload, setPayload] = useState<any>({});
    const changePayload = createPayloadChanger(setPayload);

    return {
        payload, 
        setPayload, 
        changePayload,
    };
}
