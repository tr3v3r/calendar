export default function parseBackEndData(eventObject, speakers) {
    eventObject.speakers = speakers;
    eventObject.location = ' vulісa Akadеmіka Kuprеvіča 1, Building 5, Minsk';
    eventObject.podcastId = '7Kcrl30GUFo';
    eventObject.presentation = 'http://slides.com/uladzimirhalushka/deck-1#/';
    eventObject.requirements = ['Responsive design',
        'Webpack + Babel + eslint',
        'React + Redux + React-router', 'Lighting design (optional)'];
    eventObject.passTo = 'https://padawans.herokuapp.com/login';

    return eventObject;
}
