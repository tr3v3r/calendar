export default function parseEventTypeForEventPane(eventType) {
    switch (eventType) {
    case 'workshop':
        return 'Wp';
    case 'webinar':
        return 'Wr';
    case 'event':
        return 'E';
    case 'lecture':
        return 'L';
    case 'deadline':
        return 'D';
    default:
        return '?';
    }
}
