/************************
 * Calendar Validation  *
 * By Albert Shala
 * albert.shala@gmail.com
*************************/

/**
 * Check if is a valid Day
 * @param {day}
 * @type {Function}
 */
var isValidDay = (function(day) {
    try {
        if ( (day <= 31 && day >= 1) && day !== undefined) {
            return true;
        } else {
            throw "Error: Days can be between 1 and 31 days only!";
            return false;
        }
    } catch(e) {
        console.log(e);
    }
});

/**
 * Check if is a valid Month
 * @param {month}
 * @type {Function}
 */
var isValidMonth = (function(month) {
    try {
        if (month <= 12 && month >= 1 && month !== undefined) {
            return true;
        } else {
            throw "Error: Month can be between 1 and 12 months only!";
            return false;
        }
    } catch(e) {
        console.log(e);
    }
});

/**
 * Check if is a valid Year
 * @param {year}
 * @type {Function}
 */
var isValidYear = (function(year) {
    try {
        if (year.length === 4 && year !== undefined) {
            return true;
        } else {
            throw "Error: Year must be in YYYY format (eg. 1999)";
            return false;
        }
    } catch(e) {
        console.log(e);
    }
});

/**
 * Validate the Date based on dd/mm/yyyy pattern
 * @param txtDate - The full date in string format
 * @returns {boolean}
 */
var checkDate = function(txtDate) {
    var currVal = txtDate;

    if(currVal === "") {
        return false;
    }Modal

    var DatePattern = /^(\d{1,2})([./-])(\d{1,2})([./-])(\d{1,4})$/;
    var calendarDate = currVal.match(DatePattern);

    var day   = calendarDate[1];
    var month = calendarDate[3];
    var year  = calendarDate[5];

    if (isValidDay(day) && isValidMonth(month) && isValidYear(year)) {
        return true;
    } else {
        return false;
    }
};

/**
 * SAMPLE USAGE
 */
$(function() {

    var startInput = $(".dateRangeStart"),
        endInput = $(".dateRangeEnd");

    startInput.on('blur', function() {
        var currentValue = $(this).val();
        if (checkDate(currentValue)) {
            $(this).val(currentValue);
        } else {
            $(this).val("");
        }
    });

    endInput.on('blur', function(e) {
        var currentValue = $(this).val();
        if (checkDate(currentValue)) {
            $(this).val(currentValue);
        } else {
            $(this).val("");
        }
    });
});