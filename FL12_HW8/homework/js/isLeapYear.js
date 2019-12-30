function isLeapYear(expr) {
    let d = new Date(expr);
    let year = d.getYear() + 1900;
    let leap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (isNaN(year)) {
        return 'Invalid Date';
    } else {
        if (leap) {
            return year + ' is a leap year';
        } else {
            return year + ' is not a leap year';
        }
    }
}
isLeapYear('2020-01-01 00:00:00');