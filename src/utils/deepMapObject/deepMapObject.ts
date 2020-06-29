/**
 * Like `Array.map` but for an object.
 * @param obj The object to map.
 * @param func A callback function to execute of each key/value pair in the object.
 * The return result of this function will be set as the new value for each
 * given key.
 */
function deepMapKeys<TResult extends Record<string, any> = {}>(
    obj: Record<string, any> | Array<any>, 
    func: (value: any, key: string) => any
): TResult {
    if (Array.isArray(obj)) {
      return obj.map(val => deepMapKeys(val, func)) as any;  
    }
    else {
        if (typeof obj === 'object') {

            return Object.keys(obj).reduce((acc, key) => {

                const value = obj[key];
                const result = func(value, key);

                acc[key] = typeof value === 'object' ? deepMapKeys(value, func) : result;

                return acc;

            }, {} as Record<string, any>) as any;
        }
        else return obj;
    }
    
}

export default deepMapKeys;