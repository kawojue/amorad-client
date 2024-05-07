export const removeEmptyFields = (obj) => {
    const cleanedObject = {};
    for (const key in obj) {
        if (obj[key] !== '' && obj[key] !== null) {
            cleanedObject[key] = obj[key];
        }
    }
    return cleanedObject;
};
