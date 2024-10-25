const countEInKeys = (obj: Record<string, any>): number => {
    return Object.keys(obj ?? {}).reduce((count, key) => {
        const eCount = (key.match(/[eE]/g) || []).length
        return count + eCount
    }, 0)
}

const sortCharactersDescendingly = (str: string): string => {
    return str.split('').sort((a, b) => {
        const aIsLetter = /[a-zA-Z]/.test(a)
        const bIsLetter = /[a-zA-Z]/.test(b)

        if (aIsLetter && !bIsLetter) return -1
        if (!aIsLetter && bIsLetter) return 1

        if (aIsLetter && bIsLetter) {
            const lowerA = a.toLowerCase()
            const lowerB = b.toLowerCase()

            if (lowerA === lowerB) {
                return a.localeCompare(b)
            }
            return lowerB.localeCompare(lowerA)
        }

        return b.localeCompare(a)
    }).join('')
}



const processEntry = ([key, value]: [string, any]): [string, any] => {
    
    const sortedKey = sortCharactersDescendingly(key)

    let newValue
    
    if (typeof value === 'object' && value !== null) {
        newValue = customParseObject(value)
    } else if (typeof value === 'string') {
        newValue = sortCharactersDescendingly(value)
    } else {
        newValue = value
    }
    return [sortedKey, newValue]
}




export const customParseObject = (obj: any): any => {

    if(typeof obj !== 'object') return {}
    
    if (Array.isArray(obj)) {
        return obj.map(item => customParseObject(item))
    }

    const countE = countEInKeys(obj)
    
    const processedEntries = Object.entries(obj ?? {}).map(processEntry)

    return {
        ...(Array.isArray(obj) ? {} : { countE }),
        ...Object.fromEntries(processedEntries),
    }
}
