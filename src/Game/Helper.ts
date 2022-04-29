export const normalizeApiData = (data: string) => {
    return data.replace('map:', '').substring(1, data.length-5).split("\n").map(element => Array.from(element));
}