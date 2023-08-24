"use strict";
/**生成Code128字符码，可以使用生成的字符码查询条形编码 */
function GetCode128A(inputData) {
    var result = "";
    var checksum = 103;
    var j = 1;
    for (var ii = 0; ii < inputData.length; ii++) {
        var code = inputData.charCodeAt(ii);
        if (code >= 32) {
            checksum += (code - 32) * (ii + 1);
        }
        else {
            checksum += (code + 64) * (ii + 1);
        }
    }
    checksum = checksum % 103;
    if (checksum < 95) {
        checksum += 32;
    }
    else {
        checksum += 100;
    }
    result = String.fromCharCode(203) + inputData + String.fromCharCode(checksum) + String.fromCharCode(206);
    return result;
}
function GetCode128B(inputData) {
    var result = "";
    var checksum = 104;
    var j = 1;
    for (var ii = 0; ii < inputData.length; ii++) {
        var code = inputData.charCodeAt(ii);
        if (code >= 32) {
            checksum += (code - 32) * (ii + 1);
        }
        else {
            checksum += (code + 64) * (ii + 1);
        }
    }
    checksum = checksum % 103;
    if (checksum < 95) {
        checksum += 32;
    }
    else {
        checksum += 100;
    }
    result = String.fromCharCode(204) + inputData + String.fromCharCode(checksum) + String.fromCharCode(206);
    return result;
}
function GetCode128C(inputData) {
    var result = "";
    var checksum = 105;
    var j = 1;
    for (var ii = 0; ii < inputData.length; ii++) {
        if (ii % 2 == 0) {
            var code = parseInt(inputData.slice(ii, ii + 2));
            checksum += code * j;
            if (code < 95) {
                result += String.fromCharCode(code + 32);
            }
            else {
                result += String.fromCharCode(code + 100);
            }
            j++;
        }
        ii++;
    }
    checksum = checksum % 103;
    if (checksum < 95) {
        checksum += 32;
    }
    else {
        checksum += 100;
    }
    result = String.fromCharCode(205) + result + String.fromCharCode(checksum) + String.fromCharCode(206);
    return result;
}
