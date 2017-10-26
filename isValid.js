function isValid(s) {
    if (s.length <= 1 ) {
        return false;
    }
    let arr = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i]);
        } else if (s[i] === ')' && arr[arr.length-1]=== '(') {
            arr.pop();
        } else if (s[i] === ']' && arr[arr.length-1] === '[') {
            arr.pop();
        } else if (s[i] === '}' && arr[arr.length-1] === '{') {
            arr.pop();
        }else {
            return false;
        }
    }
    if (arr.length !== 0) {
        return false;
    }
    return true;
}

let s ="[[";
console.log(isValid(s));
