const { isValid } = require("date-fns");

const isDate = (value) => {

    if (!value) return false;

    if (!isValid(new Date(value))) {
        return false
    } 
    return true;

}

module.exports = { isDate }