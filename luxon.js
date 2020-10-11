import { DateTime } from 'luxon';

const FORMAT_STRING = 'yyyy-MM-dd\'T\'HH:mm:ssZZ';
const LOCALE_FORMAT = 'ccc d LLL yyyy';

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
    return DateTime
        .fromISO(STATIC_DATE)
        .plus({ day: 1 })
        .toFormat(FORMAT_STRING);
}
export function subtractDay() {
    return DateTime
        .fromISO(STATIC_DATE)
        .minus({ day: 1 })
        .toFormat(FORMAT_STRING);
}
export function diffOneDay() {
    const startDate = DateTime.fromISO(STATIC_DATE);
    const endDate = DateTime.fromISO(STATIC_SECOND_DATE);
    return endDate.diff(startDate, 'days').days;
}
export function getStartOfDay() {
    const day = DateTime.fromISO(STATIC_DATE);
    return day.startOf('day').toFormat(FORMAT_STRING);
}
export function getStartOfWeek() {
    const day = DateTime.fromISO(STATIC_WEDNESDAY);
    return day
        .startOf('week')
        .minus({ day: 1 })
        .toFormat(FORMAT_STRING);
}
export function castToTimezone() {
    return DateTime
        .fromISO(STATIC_DATE)
        .setZone('America/New_York')
        .toFormat(FORMAT_STRING);
}
export function castToAmericaLosAngelesTimezone() {
    return DateTime
        .fromISO(STATIC_DATE)
        .setZone('America/Los_Angeles')
        .toFormat(FORMAT_STRING);
}
export function getValidTimezone() {
    const result = DateTime.local().setZone('America/Los_Angeles');
    return result.isValid;
}
export function getInvalidTimezone() {
    const result = DateTime.local().setZone('America/Manchester_New_Hampshire');
    return result.isValid ? result : null;
}

// Daylight Savings Time Functions
export function addMonthWithDaylightSavings() {
    const day = DateTime.fromISO(STATIC_DATE);
    return day
        .setZone('America/New_York')
        .plus({ month: 1 })
        .toFormat(FORMAT_STRING);
}
export function leaveDaylightSavingsTime() {
    const day = DateTime.fromISO(STATIC_WINTER_DATE);
    return day
        .setZone('America/New_York')
        .plus({ month: 5 })
        .toFormat(FORMAT_STRING);
}
export function jumpingDaylightSavingsTime() {
    const day = DateTime.fromISO(STATIC_DATE);
    return day
        .setZone('America/New_York')
        .plus({ month: 7 })
        .toFormat(FORMAT_STRING);
}

// Localization

export function localizeToFrance() {
    return DateTime.fromISO(STATIC_DATE).setLocale('fr').toFormat(LOCALE_FORMAT);
}

export function localizeToGermany() {
    return DateTime.fromISO(STATIC_DATE).setLocale('de').toFormat(LOCALE_FORMAT);
}

export function localizeToJapan() {
    return DateTime.fromISO(STATIC_DATE).setLocale('ja').toFormat(LOCALE_FORMAT);
}

export function localizeToChinaTraditional() {
    return DateTime.fromISO(STATIC_DATE).setLocale('zh-TW').toFormat(LOCALE_FORMAT);
}

export function localizeToChinaSimplified() {
    return DateTime.fromISO(STATIC_DATE).setLocale('zh-CN').toFormat(LOCALE_FORMAT);
}

export function localizeToSpanish() {
    return DateTime.fromISO(STATIC_DATE).setLocale('es').toFormat(LOCALE_FORMAT);
}

export function localizeToEnglish() {
    return DateTime.fromISO(STATIC_DATE).setLocale('en').toFormat(LOCALE_FORMAT);
}

export function localizeToDanish() {
    return DateTime.fromISO(STATIC_DATE).setLocale('da').toFormat(LOCALE_FORMAT);
}

export function localizeToFinnish() {
    return DateTime.fromISO(STATIC_DATE).setLocale('fi').toFormat(LOCALE_FORMAT);
}

export function localizeToSwedish() {
    return DateTime.fromISO(STATIC_DATE).setLocale('sv').toFormat(LOCALE_FORMAT);
}

export function localizeToDutch() {
    return DateTime.fromISO(STATIC_DATE).setLocale('nl').toFormat(LOCALE_FORMAT);
}

export function localizeToNorwegian() {
    return DateTime.fromISO(STATIC_DATE).setLocale('nb').toFormat(LOCALE_FORMAT);
}

export function localizeToPortuguese() {
    return DateTime.fromISO(STATIC_DATE).setLocale('pt').toFormat(LOCALE_FORMAT);
}