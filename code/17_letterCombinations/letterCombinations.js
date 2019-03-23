export default str => {
    //第一步， 对输入的字符串进行分割，分割成数组， 比如 23 => [2, 3]
    let num = str.split('');
    // 第二步 将键盘上的数字做映射
    let map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuw', 'wxyz'];
    // 第三步 将输入的数字与映射重新组合成新的数组，如 [2, 3] => ['abc', 'def']
    let code = [];
    num.forEach(item => {
        if(map[item]) code.push(map[item]);
    });
    
    // 第四步， 对新组合的数组进行排列组合，如 ['abc, 'def'] => ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    const comb = arr => {
        let temp = [];
        for(let i =0, il = arr[0].length; i < il; i++) {
            for(let j = 0, jl = arr[1].length; j < jl; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        arr.splice(0, 2, temp);
        if(arr.length > 1) {
            comb(arr)
        } else {
            return temp
        }
        return arr[0]
    }
   
    return comb(code)
}