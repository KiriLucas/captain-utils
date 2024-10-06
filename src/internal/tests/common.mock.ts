export const EMPTY_ARRAY = [];
export const ARRAY_WITH_EMPTY_OBJECT = [{}]
export const ARRAY_OF_UNDEFINED = [undefined]
export const ARRAY_OF_NULL = [null]
export const ARRAY_OF_EMPTY_LIKE: Array<any> = [undefined, null, NaN, '', [], {}];
export const ARRAY_OF_FALSY: Array<any> = [undefined, null, NaN, false, 0, ''];

export const UNORDERED_ARRAY_OF_OBJECTS = [
    {
        level: 5,
    },
    {
        level: 2,
    },
    {
        level: 4,
    },
    {
        level: 1,
    },
    {
        level: 3,
    }
]

export const ORDERED_ARRAY_OF_OBJECTS = [
    {
        level: 1,
    },
    {
        level: 2,
    },
    {
        level: 3,
    },
    {
        level: 4,
    },
    {
        level: 5,
    }
]


export const NESTED_ARRAY = [[]]
export const NESTED_ARRAY_OF_EMPTY_OBJECT = [[{}]]
export const NESTED_ARRAY_OF_EMPTY_LIKE = [[[ARRAY_OF_EMPTY_LIKE]]]
export const NESTED_ARRAY_OF_NESTED_FALSY = [[{}]]

