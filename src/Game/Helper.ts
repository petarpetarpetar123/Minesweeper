export const normalizeApiData = (data: string) => {
    const first = data.replace('map:', '');
    const second = first.substring(1, first.length-1);
    const third = second.split("\n");
    const forth = third.map(element => Array.from(element));

    return forth;
}