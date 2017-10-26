function grid(steps) {
    let arr = [];
    let x = 0;
    let y = 0;
    let gridboard = [];
    for (let i = 0; i < steps.length; i++) {
        let tmp = steps[i].split('');
        for (let j = 0; j < tmp.length; j++) {
            tmp[j] = parseInt(tmp[j]);
        }
        x = Math.max(x, tmp[0]);
        y = Math.max(y, tmp[1]);
        arr.push(tmp);
    }
    for (let i = 0; i < x; i++) {
        let row = []
        for (let j = 0; j < y; j++) {
            row.push(0);
        }
        gridboard.push(row);
    }
    console.log(gridboard);
    console.log(gridboard[0][0]);
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        x = arr[i][0];
        y = arr[i][1];
        for (let j = 0; j < x; j++) {
            for (let q = 0; q < y; q++) {
                // console.log(gridboard[j][q]);
                gridboard[j][q] +=1;
            }
        }
        console.log(gridboard);

    }
    
    return gridboard;
}




let steps = ["23", "37", "41"];
console.log(grid(steps));
