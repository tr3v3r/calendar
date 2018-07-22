export default function dateParseToHumanTime(dateString) {
    const date = new Date(dateString);
    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    return `${dayName}, the ${date.getDate()}th of ${monthName} ${date.getFullYear()}`;
}
