export const normalizeApiData = (data: string) => {
    return data.replace('map:', '').substring(1, data.length-1).split("\n").map(element => Array.from(element));
}