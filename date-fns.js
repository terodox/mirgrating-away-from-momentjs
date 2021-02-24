import { add, sub, format, differenceInDays, startOfDay, startOfWeek } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { fr, zhTW, de, ja, zhCN, es, enUS, da, fi, sv, nl, nb, pt  } from 'date-fns/locale';

const FORMAT_STRING = 'yyyy-MM-dd\'T\'HH:mm:ssxxx';
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
    const date = new Date(STATIC_DATE);
    const newDate = add(date, { days: 1 });
    return format(newDate, FORMAT_STRING);
}
export function subtractDay() {
    const date = new Date(STATIC_DATE);
    const newDate = sub(date, { days: 1 });
    return format(newDate, FORMAT_STRING);
}
export function diffOneDay() {
    const startDate = new Date(STATIC_DATE);
    const endDate = new Date(STATIC_SECOND_DATE);
    return differenceInDays(endDate, startDate);
}
export function getStartOfDay() {
    const day = new Date(STATIC_DATE);
    const startOfDayDate = startOfDay(day);
    return format(startOfDayDate, FORMAT_STRING);
}
export function getStartOfWeek() {
    const date = new Date(STATIC_WEDNESDAY);
    const startOfWeekDate = startOfWeek(date);
    return format(startOfWeekDate, FORMAT_STRING);
}
export function castToTimezone() {
    const date = new Date(STATIC_DATE);
    const zonedDate = utcToZonedTime(date, 'America/New_York');
    return format(zonedDate, FORMAT_STRING);
}
export function castToAmericaLosAngelesTimezone() {
    const date = new Date(STATIC_DATE);
    const zonedDate = utcToZonedTime(date, 'America/Los_Angeles');
    return format(zonedDate, FORMAT_STRING);
}
export function getValidTimezone() {
    const date = new Date()
    try {
        const zonedDate = utcToZonedTime(date, 'America/Los_Angeles');
        return true
    } catch {
        return null
    }
}
export function getInvalidTimezone() {
    try {
        const zonedDate = utcToZonedTime(date, 'America/Manchester_New_Hampshire');
    return true
    } catch {
        return null
    }
}

// Daylight Savings Time Functions
export function addMonthWithDaylightSavings() {
    const date = new Date(STATIC_DATE);
    const newDate = add(date, { months: 1 });
    const zonedDate = utcToZonedTime(newDate, 'America/New_York');
    return format(zonedDate, FORMAT_STRING);
}
export function leaveDaylightSavingsTime() {
    const date = new Date(STATIC_WINTER_DATE);
    const newDate = add(date, { months: 5 });
    const zonedDate = utcToZonedTime(newDate, 'America/New_York');
    return format(zonedDate, FORMAT_STRING);
}
export function jumpingDaylightSavingsTime() {
    const date = new Date(STATIC_DATE);
    const newDate = add(date, { months: 7 });
    const zonedDate = utcToZonedTime(newDate, 'America/New_York');
    return format(zonedDate, FORMAT_STRING);
}

// Localization

export function localizeToFrance() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: fr })
}

export function localizeToGermany() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: de })
}

export function localizeToJapan() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: ja })
}

export function localizeToChinaTraditional() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: zhTW })
}

export function localizeToChinaSimplified() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: zhCN })
}

export function localizeToSpanish() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: es })
}

export function localizeToEnglish() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: enUS })
}

export function localizeToDanish() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: da })
}

export function localizeToFinnish() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: fi })
}

export function localizeToSwedish() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: sv })
}

export function localizeToDutch() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: nl })
}

export function localizeToNorwegian() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: nb })
}

export function localizeToPortuguese() {
    const date = new Date(STATIC_DATE);
    return format(date, LOCALE_FORMAT, { locale: pt })
}