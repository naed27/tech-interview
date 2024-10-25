
export const createPayloadChanger = <T>(stateSetter: any) => {
    const changePayload = (accessor: string, input: any) => {
        stateSetter((current: T) => {
            const keys = accessor?.split('.');
            
            const updateNestedObject = (obj: any, keys: string[], value: any): any => {
                const key = keys[0];
                if (keys.length === 1) {
                    return { ...obj, [key]: value };
                }
                return { ...obj, [key]: updateNestedObject(obj[key] || {}, keys.slice(1), value) };
            };
            
            return updateNestedObject(current, keys, input);
        });
    };
    return changePayload;
}
