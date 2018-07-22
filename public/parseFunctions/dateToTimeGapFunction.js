export default function dateToTimeGapFunction(date, duration, type) {
    const startTime = new Date(date);
    const startTimeString = startTime.toString().slice(16, 21);
    if (type === 'deadline') return `${startTimeString}`;

    const endTime = new Date(+startTime + duration);
    const endTimeString = endTime.toString().slice(16, 21);

    return `${startTimeString} - ${endTimeString}`;
}
