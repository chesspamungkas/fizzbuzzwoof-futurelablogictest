function addString(istr,numstr,str) {
    var temp = istr.split("");
    var res = "";

    for(var x = 0; x<temp.length; x++) {
        // If temp == numstr (3 or 5 or 7) then add string (Fizz Or Buzz Or Woof) 
        if (temp[x] == numstr) {
            res += str;
        }
    }

    // @return {string} return result
    return res;
}

/** 
 * Function fizzBuzzWoff
 * 
 * @param {number} num
*/
function fizzBuzzWoof(num, i) {
    var result = "";

    if(num)
    for(let i = 1; i<=num; i++) {  
        var temp = "";
        var istr = i.toString();

        if(i%3 == 0) {
            temp = "Fizz";
            if (istr.includes("3")) {
                temp += addString(istr, "3", " Fizz");
            }
            if (i%5 == 0) {
                temp += " Buzz";
            }
            if (istr.includes("5")) {
                temp += addString(istr, "5", " Buzz");
            }
            if (i%7 == 0) {
                temp += " Woof";
            }
            if (istr.includes("7")) {
                temp += addString(istr, "7", " Woof");
            }
        } else if (i%5 == 0) {
            if (istr.includes("3")) {
                temp = addString(istr, "3", "Fizz ");
            }
            temp += "Buzz";

            if (istr.includes("5")) {
                temp += addString(istr, "5", " Buzz");
            }
            if (i%7 == 0){
                temp += " Woof"; 
            }
            if (istr.includes("7")) {
                temp += addString(istr, "7", " Woof");
            }
        } else if (i%7 == 0) {
            if (istr.includes("3")) {
                temp = addString(istr, "3", "Fizz ");
            }
            if (istr.includes("5")) {
                temp += addString(istr, "5", "Buzz ");
            }
            temp += "Woof";
            temp += addString(istr, "7", " Woof");
        } else {
            if (istr.includes("3")) {
                temp += addString(istr, "3", "Fizz");
                if (istr.includes("5")) {
                    temp += addString(istr, "5", " Buzz");
                }
                if (istr.includes("7")) {
                    temp += addString(istr, "7", " Woof");
                }
            }
            else if (istr.includes("5")) {
                temp += addString(istr, "5", "Buzz");
                if (istr.includes("7")) {
                    temp += addString(istr, "7", " Woof");
                }
            }
            else if (istr.includes("7")) {
                temp += addString(istr, "7", "Woof");
            }
            else {
                temp = i;
            }
        }

        if (temp == i) {
            result += temp;
        } else {
            result += temp + " (" + i + ")"; 
        }

        // Check if not last element then add comma
        if(i < num) {
            result += ", ";
        }
    }
    return result
    // console.log(result);
}

/** 
 * Function fizzBuzzWoofNotableValues
 * 
 * @param {number} num
*/
function fizzBuzzWoofNotable(i) {
    var result = "";

    var temp = "";
    var istr = i.toString();

    if(i%3 == 0) {
        temp = "Fizz";
        if (istr.includes("3")) {
            temp += addString(istr, "3", " Fizz");
        }
        if (i%5 == 0) {
            temp += " Buzz";
        }
        if (istr.includes("5")) {
            temp += addString(istr, "5", " Buzz");
        }
        if (i%7 == 0) {
            temp += " Woof";
        }
        if (istr.includes("7")) {
            temp += addString(istr, "7", " Woof");
        }
    } else if (i%5 == 0) {
        if (istr.includes("3")) {
            temp = addString(istr, "3", "Fizz ");
        }
        temp += "Buzz";

        if (istr.includes("5")) {
            temp += addString(istr, "5", " Buzz");
        }
        if (i%7 == 0){
            temp += " Woof"; 
        }
        if (istr.includes("7")) {
            temp += addString(istr, "7", " Woof");
        }
    } else if (i%7 == 0) {
        if (istr.includes("3")) {
            temp = addString(istr, "3", "Fizz ");
        }
        if (istr.includes("5")) {
            temp += addString(istr, "5", "Buzz ");
        }
        temp += "Woof";
        temp += addString(istr, "7", " Woof");
    } else {
        if (istr.includes("3")) {
            temp += addString(istr, "3", "Fizz");
            if (istr.includes("5")) {
                temp += addString(istr, "5", " Buzz");
            }
            if (istr.includes("7")) {
                temp += addString(istr, "7", " Woof");
            }
        }
        else if (istr.includes("5")) {
            temp += addString(istr, "5", "Buzz");
            if (istr.includes("7")) {
                temp += addString(istr, "7", " Woof");
            }
        }
        else if (istr.includes("7")) {
            temp += addString(istr, "7", "Woof");
        }
        else {
            temp = i;
        }
    }

    if (temp == i) {
        result += temp;
    } else {
        result += i + " - " + temp;
    }

    return result;
    // console.log(result);
}

module.exports = {
    fizzBuzzWoof, fizzBuzzWoofNotable
}