var currentDate = function(){
    return "तारीख़ Date: " + Date()
}

var currentDay = function(){
    return new Date().getDay()
}



exports.mydatelib = currentDate
exports.getCurrentDay = currentDay