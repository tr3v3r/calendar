export default function dayParseToHumanView(date, singleWord) {
    switch (singleWord) {
    case 'day': {
        return date.toLocaleString('en-US', { weekday: 'long' });
    }
    case 'month': {
        return date.toLocaleString('en-US', { month: 'long' });
    }

    case 'year': {
        return date.toLocaleString('en-US', { year: 'numeric' });
    }
    default:
        return 'error';
    }
}
