function grid(steps) {
    let arr = []
    let x = 100000;
    let y = 100000;
    for(let i = 0; i < steps.length; i++) {
        let tmp = steps[i].split('');
        for (let j = 0; j < tmp.length; j++) {
            tmp[j] = parseInt(tmp[j]);
        }
        arr.push(tmp);
    }
    for (let i = 0; i < arr.length; i++) {
        x = Math.min(x,arr[i][0]);
        y = Math.min(y,arr[i][1]);
    }
    // console.log(x,y);
    let res = x*y;

    return res;
}

let steps = ["23", "37", "41"];
console.log(grid(steps));
