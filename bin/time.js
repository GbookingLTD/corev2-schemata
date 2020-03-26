"use strict";

const assert = require('assert');

const TimeMs = {};
TimeMs.Minute = 60 * 1000;
initTimeUnits(TimeMs);

const TimeMinutes = {};
TimeMinutes.Minute = 1;
initTimeUnits(TimeMinutes);

function initTimeUnits(TimeUnits) {
    TimeUnits.Hour   = 60 * TimeUnits.Minute;
    TimeUnits.Day    = 24 * TimeUnits.Hour;
    TimeUnits.Week   = 7  * TimeUnits.Day;
}

const now = new Date();
const oneWeekLater = new Date(now.getTime() + TimeMs.Week);
const twoWeeksLater = new Date(now.getTime() + 2 * TimeMs.Week);
const oneWeekBefore = new Date(now.getTime() - TimeMs.Week);
const twoWeeksBefore = new Date(now.getTime() - 2 * TimeMs.Week);

console.log('tz_offset=%d', now.getTimezoneOffset());
console.log('now=%s', now.toString());
console.log('now_iso=%s', now.toISOString());

class DayMinutesIterator {
    constructor(iStart, iEnd, iStep) {
        assert(typeof iStart === "number" && iStart >= 0 && iStart < 1440);
        assert(typeof iEnd === "number" && iEnd >= 0 && iEnd <= 1440);
        assert(typeof iStep === "number" && iStep > 0 && iStep <= 1440);
        assert(iStart < iEnd);
        this.start_ = iStart;
        this.end_ = iEnd;
        this.step_ = iStep;
        this.reset();
    }
    reset() {
        this.current_ = this.start_;
    }
    next() {
        this.current_ += this.step_;
        return !this.done();
    }
    current() {
        return this.current_;
    }
    done() {
        return this.current_ < this.end_;
    }
}

class DateTimeRangeIterator {
    constructor(startDate, dayMinutesIterator) {
        assert(startDate instanceof Date);
        assert(dayMinutesIterator instanceof DayMinutesIterator);
        this.startDate_ = new Date(startDate.getTime());
        this.startDate_.setHours(0,0,0,0);
        this.dayMinutesIterator_ = dayMinutesIterator;
        this.reset();
    }
    reset() {
        this.date_ = new Date(this.startDate_.getTime());
        this.dayMinutesIterator_.reset();
    }
    next() {
        this.dayMinutesIterator_.next();
        if (this.dayMinutesIterator_.done()) {
            this.date_.setDate(this.date_.getDate() + 1);
            this.dayMinutesIterator_.reset();
        }

        return !this.done();
    }
    current() {
        return new Date(this.date_.getTime() + this.dayMinutesIterator_.current() * TimeMs.Minute);
    }
    currentISOString() {
        return shiftTimezone(this.current()).toISOString();
    }
    currentLocalString(gmtTZ) {
        let t = this.current();
        let ts;
        if (!gmtTZ) {
            t = shiftTimezone(t);
            ts = t.toString();
        } else {
            ts = t.toString().replace(/GMT.+$/, 'GMT');
        }

        return ts;
    }
    done() {
        return false;
    }
}

function shiftTimezone(d) {
    assert(d instanceof Date);
    return new Date(d.getTime() - (d.getTimezoneOffset() * TimeMs.Minute));
}

function getDateWithMinutes(date, minutes) {
    assert(date instanceof Date);
    assert(typeof minutes === "number" && minutes >= 0 && minutes < 1440);
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDay(),
        Math.floor(minutes / 60),
        minutes % 60,
        0,
        0
    );
}

function getDateMinutesPair(date) {
    return [
        new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDay(),
            0,
            0,
            0,
            0
        ),
        60 * date.getHours() + date.getMinutes()
    ]
}

const fs = require('fs');

function loadDate() {
    const str = fs.readFileSync(__dirname + '/time.txt').toString();
    return Date.parse(str);
}

function saveDate(date) {
    assert(date instanceof Date);
    fs.writeFileSync(__dirname + '/time.txt', date.toISOString());
}

module.exports = Object.freeze({
    TimeMs,
    TimeMinutes,
    now,
    oneWeekLater,
    twoWeeksLater,
    oneWeekBefore,
    twoWeeksBefore,
    DayMinutesIterator,
    DateTimeRangeIterator,
    getDateWithMinutes,
    getDateMinutesPair,
    loadDate,
    saveDate
});