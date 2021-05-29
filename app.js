"use strict";
var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null) {
        console.log('element not available or element returns null');
    }
    else {
        return element;
    }
};
var inputText = select('#inputText');
var repeatedText = select('#repeatedText');
var clipboardBtn = select('.btn', true);
var repeatTimes = select('#repeatTimes');
var delimiter = select('#delimiter');
var inputTextFunction = function () {
    var delimiterVal = delimiter.value;
    var values = inputText.value + delimiterVal;
    var count = Math.floor(Number.parseInt(repeatTimes.value));
    var repeatedValue = values.repeat(count);
    repeatedText.value = repeatedValue;
};
inputText.addEventListener('input', function () {
    inputTextFunction();
});
repeatTimes.addEventListener('input', function () {
    inputTextFunction();
});
delimiter.addEventListener('input', function () {
    inputTextFunction();
});
