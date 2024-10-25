type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export const createPayloadChanger = <T>(stateSetter: StateSetter<T>) => {
    const changePayload = (accessor: string, input: unknown) => {
        stateSetter((current: T) => {
            const keys = accessor?.split('.');
            
            const updateNestedObject = (obj: any, keys: string[], value: unknown): any => {
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
