import moment from 'moment-timezone';

const FORMAT_STRING = 'YYYY-MM-DDTHH:mm:ssZ';
const LOCALE_FORMAT = 'ddd D MMM YYYY';

const STATIC_DATE = '2020-10-04T12:00:00.000Z';
const STATIC_SECOND_DATE = '2020-10-05T12:00:00.000Z';
const STATIC_WINTER_DATE = '2020-12-04T12:00:00.000Z';
const STATIC_WEDNESDAY = '2020-10-07T12:00:00.000Z';

/*
List of Moment Fucntions

    - tz
    - add
    - subtract
    - diff
    - startOf
    - tz.zone
*/

export function addDay() {
    return moment(STATIC_DATE).add(1, 'day').format(FORMAT_STRING);
}
export function subtractDay() {
    return moment(STATIC_DATE).subtract(1, 'day').format(FORMAT_STRING);
}
export function diffOneDay() {
    const startDate = moment(STATIC_DATE);
    const endDate = moment(STATIC_SECOND_DATE);
    return endDate.diff(startDate, 'days');
}
export function getStartOfDay() {
    const day = moment(STATIC_DATE);
    return day.startOf('day').format(FORMAT_STRING);
}
export function getStartOfWeek() {
    const day = moment(STATIC_WEDNESDAY);
    return day.startOf('week').format(FORMAT_STRING);
}
export function castToTimezone() {
    return moment(STATIC_DATE).tz('America/New_York').format(FORMAT_STRING);
}
export function castToAmericaLosAngelesTimezone() {
    return moment(STATIC_DATE).tz('America/Los_Angeles').format(FORMAT_STRING);
}
export function getValidTimezone() {
    return moment.tz.zone('America/Los_Angeles');
}
export function getInvalidTimezone() {
    return moment.tz.zone('America/Manchester_New_Hampshire');
}

// Daylight Savings Time Functions
export function addMonthWithDaylightSavings() {
    return moment(STATIC_DATE).tz('America/New_York').add(1, 'month').format(FORMAT_STRING);
}
export function leaveDaylightSavingsTime() {
    return moment(STATIC_WINTER_DATE).add(5, 'month').format(FORMAT_STRING);
}
export function jumpingDaylightSavingsTime() {
    return moment(STATIC_DATE).add(7, 'month').format(FORMAT_STRING);
}

// Localization

export function localizeToFrance() {
    return moment(STATIC_DATE).locale('fr').format(LOCALE_FORMAT);
}

export function localizeToGermany() {
    return moment(STATIC_DATE).locale('de').format(LOCALE_FORMAT);
}

export function localizeToJapan() {
    return moment(STATIC_DATE).locale('ja').format(LOCALE_FORMAT);
}

export function localizeToChinaTraditional() {
    return moment(STATIC_DATE).locale('zh-TW').format(LOCALE_FORMAT);
}

export function localizeToChinaSimplified() {
    return moment(STATIC_DATE).locale('zh-CN').format(LOCALE_FORMAT);
}

export function localizeToSpanish() {
    return moment(STATIC_DATE).locale('es').format(LOCALE_FORMAT);
}

export function localizeToEnglish() {
    return moment(STATIC_DATE).locale('en').format(LOCALE_FORMAT);
}

export function localizeToDanish() {
    return moment(STATIC_DATE).locale('da').format(LOCALE_FORMAT);
}

export function localizeToFinnish() {
    return moment(STATIC_DATE).locale('fi').format(LOCALE_FORMAT);
}

export function localizeToSwedish() {
    return moment(STATIC_DATE).locale('sv').format(LOCALE_FORMAT);
}

export function localizeToDutch() {
    return moment(STATIC_DATE).locale('nl').format(LOCALE_FORMAT);
}

export function localizeToNorwegian() {
    return moment(STATIC_DATE).locale('nb').format(LOCALE_FORMAT);
}

export function localizeToPortuguese() {
    return moment(STATIC_DATE).locale('pt').format(LOCALE_FORMAT);
}