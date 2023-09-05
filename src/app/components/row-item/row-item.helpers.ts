export const isNotNull = <T>(arg: T | null): arg is Exclude<T, null> => arg !== null;
