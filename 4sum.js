function findArrayQuadruplet(arr, s) {
    let res = [];
    if (arr.length < 4) {
        return res;
    }
    arr = arr.sort(helper);
    for (let i = 0; i < arr.length - 3; i++) {
        console.log('i = ',i);
        for (let j = i + 1; j < arr.length - 2; j++) {
            console.log('j = ',j);
            let left = j + 1;
            let right = arr.length - 1;
            while (left < right) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right];
                console.log('sum =',sum);
                if (sum === s) {
                    console.log('get res');
                    res.push(arr[i]);
                    res.push(arr[j]);
                    res.push(arr[left]);
                    res.push(arr[right]);
                    return res;
                } else if (sum > s) {
                    console.log('sum>s');
                    right--;
                } else if (sum < s) {
                    console.log('sum<s');
                    left++;
                }
            }
        }
    }
    return res;
}

function helper(a,b){
    return a-b;
}

let s =
[1,2,3,4,5,9,19,12,12,19];
console.log(findArrayQuadruplet(s,40));
