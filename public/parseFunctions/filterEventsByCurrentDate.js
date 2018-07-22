export default function filterEventsByCurrentDate(ceilData, eventDateString) {
    const date = eventDateString ? new Date(eventDateString) : new Date();
    return ceilData.date === date.getDate()
    && ceilData.currentMonth === date.getMonth()
    && ceilData.currentYear === date.getFullYear();
}

export function checkIfItIsCurrentDate(ceilData) {
    return filterEventsByCurrentDate(ceilData);
}
