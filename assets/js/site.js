// Site Methods Declaration
// Written by Mingjie Jiang (@mj66) - MIT License

Handlebars.registerHelper('attr', function (name, data) {
    if (typeof target === 'undefined') target = "";

    var result = ' ' + name + '="' + data + '" ';

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper("nextMeeting", function () {
    if (config.meeting.overrideTime == "") {
        return getNextDayOfWeek(new Date(), config.meeting.dow);
    } else {
        return config.meeting.overrideTime;
    }
});

Handlebars.registerHelper("getMaterials", function () {
    if (config.meeting.material.text == "") {
        return "Download Material"
    } else {
        return config.meeting.material.text;
    }
});

Handlebars.registerHelper('if', function (conditional, options) {
    if (conditional) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('each', function (context, options) {
    var ret = "";

    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + options.fn(context[i]);
    }

    return ret;
});

var main = document.getElementById("site-main").innerHTML;
var meta = document.getElementById("site-meta").innerHTML;
var loadMain = Handlebars.compile(main);
var loadMeta = Handlebars.compile(meta);

var siteHtml = loadMain(config);
var metaHtml = loadMeta(config);

document.getElementById("site").innerHTML = siteHtml;
document.getElementsByTagName('head')[0].innerHTML += metaHtml;

function getNextDayOfWeek(date, dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    return resultDate.toDateString();
}
