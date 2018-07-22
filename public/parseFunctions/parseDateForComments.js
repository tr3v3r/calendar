export default function parseDateForComments(date) {
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    return `${monthName} ${date.getDate()}th, ${date.getFullYear()} at ${date.toString().slice(16, 21)}`;
}
