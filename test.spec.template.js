import {
    addDay,
    addMonthWithDaylightSavings,
    subtractDay,
    diffOneDay,
    getStartOfDay,
    castToTimezone,
    castToAmericaLosAngelesTimezone,
    getValidTimezone,
    getInvalidTimezone,
    leaveDaylightSavingsTime,
    jumpingDaylightSavingsTime,
    getStartOfWeek,
    localizeToFrance,
    localizeToGermany,
    localizeToJapan,
    localizeToChinaTraditional,
    localizeToChinaSimplified,
    localizeToSpanish,
    localizeToEnglish,
    localizeToDanish,
    localizeToFinnish,
    localizeToSwedish,
    localizeToDutch,
    localizeToNorwegian,
    localizeToPortuguese,
} from './/**TEST_NAME**/'

describe('comprehensive tests', () => {
    describe('Date utilities', () => {
        it('should add day properly', () => {
            const result = addDay();
            expect(result).toEqual('2020-10-05T08:00:00-04:00');
        });
        it('should subtract day properly', () => {
            const result = subtractDay();
            expect(result).toEqual('2020-10-03T08:00:00-04:00');
        });
        it('should return one day if difference', () => {
            expect(diffOneDay()).toEqual(1);
        });
        it('should return the start of the day', () => {
            expect(getStartOfDay()).toEqual('2020-10-04T00:00:00-04:00')
        });
        it('should get the start of the week', () => {
            expect(getStartOfWeek()).toEqual('2020-10-04T00:00:00-04:00')
        });
    });

    describe('timezones', () => {
        it('should cast to timezone', () => {
            const result = castToTimezone();
            const americaNewYorkTimezoneOffset = '-04:00';
            expect(result).toContain(americaNewYorkTimezoneOffset);
        });
        it('should cast to Los Angeles timezone', () => {
            const result = castToAmericaLosAngelesTimezone();
            const americaLosAngelesTimezoneOffset = '-07:00';
            expect(result).toContain(americaLosAngelesTimezoneOffset);
        });

        it('should validate timezone', () => {
            expect(getValidTimezone()).not.toBe(null);
            expect(getInvalidTimezone()).toEqual(null);
        });
    });

    describe('Daylight Savings Time', () => {
        it('should account for daylight savings properly', () => {
            // Date should be offset by 1 hour to account for Daylight Savings
            let resultSpanningIntoDLS = addMonthWithDaylightSavings();
            expect(resultSpanningIntoDLS).toEqual('2020-11-04T08:00:00-05:00');
        });

        it('should account for leaving daylight savings properly', () => {
            let resultLeavingDLS = leaveDaylightSavingsTime();
            expect(resultLeavingDLS).toEqual('2021-05-04T07:00:00-04:00');
        });
        it('should account for jumping daylight savings properly', () => {
            let resultJumpingDLS = jumpingDaylightSavingsTime();
            expect(resultJumpingDLS).toEqual('2021-05-04T08:00:00-04:00');
        });
    });

    describe('Localization', () => {
        it('should format for France!', () => {
            expect(localizeToFrance()).toEqual('dim. 4 oct. 2020');
        });

        it('should format for Germany!', () => {
            expect(localizeToGermany()).toEqual('So. 4 Okt. 2020');
        });

        it('should format for Japan!', () => {
            expect(localizeToJapan()).toEqual('日 4 10月 2020');
        });

        it('should format for China Simplified!', () => {
            expect(localizeToChinaSimplified()).toEqual('周日 4 10月 2020');
        });

        it('should format for China Traditional!', () => {
            expect(localizeToChinaTraditional()).toEqual('週日 4 10月 2020');
        });

        it('should format for Spanish!', () => {
            expect(localizeToSpanish()).toEqual('dom. 4 oct. 2020');
        });

        it('should format for English!', () => {
            expect(localizeToEnglish()).toEqual('Sun 4 Oct 2020');
        });

        it('should format for Danish!', () => {
            expect(localizeToDanish()).toEqual('søn 4 okt 2020');
        });

        it('should format for Dutch!', () => {
            expect(localizeToDutch()).toEqual('zo. 4 okt. 2020');
        });

        it('should format for Finnish!', () => {
            expect(localizeToFinnish()).toEqual('su 4 loka 2020');
        });

        it('should format for Norwegian!', () => {
            expect(localizeToNorwegian()).toEqual('sø. 4 okt. 2020');
        });

        it('should format for Portuguese!', () => {
            expect(localizeToPortuguese()).toEqual('Dom 4 out 2020');
        });

        it('should format for Swedish!', () => {
            expect(localizeToSwedish()).toEqual('sön 4 okt 2020');
        });
    });
});