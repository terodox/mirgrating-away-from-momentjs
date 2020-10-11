import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import 'dayjs/locale/da';
import 'dayjs/locale/fi';
import 'dayjs/locale/sv';
import 'dayjs/locale/nl';
import 'dayjs/locale/nb';
import 'dayjs/locale/pt';

dayjs.extend(utc);
dayjs.extend(timezone);

const FORMAT_STRING = 'YYYY-MM-DDTHH:mm:ssZ';
const LOCALE_FORMAT = 'ddd D MMM YYYY';

const STATIC_DATE = '2020-10-04T12:00:00.000Z';
const STATIC_SECOND_DATE = '2020-10-05T12:00:00.000Z';
const STATIC_WINTER_DATE = '2020-12-04T12:00:00.000Z';
const STATIC_WEDNESDAY = '2020-10-07T12:00:00.000Z';

/*
List of dayjs Fucntions

    - tz
    - add
    - subtract
    - diff
    - startOf
    - tz.zone
*/

export function addDay() {
    return dayjs(STATIC_DATE).add(1, 'day').format(FORMAT_STRING);
}
export function subtractDay() {
    return dayjs(STATIC_DATE).subtract(1, 'day').format(FORMAT_STRING);
}
export function diffOneDay() {
    const startDate = dayjs(STATIC_DATE);
    const endDate = dayjs(STATIC_SECOND_DATE);
    return endDate.diff(startDate, 'days');
}
export function getStartOfDay() {
    const day = dayjs(STATIC_DATE);
    return day.startOf('day').format(FORMAT_STRING);
}
export function getStartOfWeek() {
    const day = dayjs(STATIC_WEDNESDAY);
    return day.startOf('week').format(FORMAT_STRING);
}
export function castToTimezone() {
    return dayjs(STATIC_DATE).tz('America/New_York').format(FORMAT_STRING);
}
export function castToAmericaLosAngelesTimezone() {
    return dayjs(STATIC_DATE).tz('America/Los_Angeles').format(FORMAT_STRING);
}
export function getValidTimezone() {
    const result = dayjs().tz('America/Los_Angeles');
    return result.isValid;
}
export function getInvalidTimezone() {
    try {
        dayjs().tz('America/Manchester_New_Hampshire');
        return true;
    } catch (error) {
        return null;
    }
}

// Daylight Savings Time Functions
export function addMonthWithDaylightSavings() {
    return dayjs(STATIC_DATE).tz('America/New_York').add(1, 'month').format(FORMAT_STRING);
}
export function leaveDaylightSavingsTime() {
    return dayjs(STATIC_WINTER_DATE).add(5, 'month').format(FORMAT_STRING);
}
export function jumpingDaylightSavingsTime() {
    return dayjs(STATIC_DATE).add(7, 'month').format(FORMAT_STRING);
}

// Localization
export function localizeToFrance() {
    return dayjs(STATIC_DATE).locale('fr').format(LOCALE_FORMAT);
}

export function localizeToGermany() {
    return dayjs(STATIC_DATE).locale('de').format(LOCALE_FORMAT);
}

export function localizeToJapan() {
    return dayjs(STATIC_DATE).locale('ja').format(LOCALE_FORMAT);
}

export function localizeToChinaTraditional() {
    return dayjs(STATIC_DATE).locale('zh-TW').format(LOCALE_FORMAT);
}

export function localizeToChinaSimplified() {
    return dayjs(STATIC_DATE).locale('zh-CN').format(LOCALE_FORMAT);
}

export function localizeToSpanish() {
    return dayjs(STATIC_DATE).locale('es').format(LOCALE_FORMAT);
}

export function localizeToEnglish() {
    return dayjs(STATIC_DATE).locale('en').format(LOCALE_FORMAT);
}

export function localizeToDanish() {
    return dayjs(STATIC_DATE).locale('da').format(LOCALE_FORMAT);
}

export function localizeToFinnish() {
    return dayjs(STATIC_DATE).locale('fi').format(LOCALE_FORMAT);
}

export function localizeToSwedish() {
    return dayjs(STATIC_DATE).locale('sv').format(LOCALE_FORMAT);
}

export function localizeToDutch() {
    return dayjs(STATIC_DATE).locale('nl').format(LOCALE_FORMAT);
}

export function localizeToNorwegian() {
    return dayjs(STATIC_DATE).locale('nb').format(LOCALE_FORMAT);
}

export function localizeToPortuguese() {
    return dayjs(STATIC_DATE).locale('pt').format(LOCALE_FORMAT);
}