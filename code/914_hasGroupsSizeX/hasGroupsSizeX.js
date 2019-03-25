/**
 * 给定一副牌，每张牌上都写着一个整数。

    此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

    每组都有 X 张牌。
    组内所有的牌上都写着相同的整数。
    仅当你可选的 X >= 2 时返回 true。
    https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
    解题思路：X(a+b+c) % X === 0
 */
export default deck => {
    let map = {}
    for(let item of deck) {
        map[item] = ~~map[item] + 1
    }
    
    const min = Math.min(...Object.values(map))

    if(min < 2) return false
  
    for (let index of Array(min).fill().keys()) {
        if(index === 0) continue
        if(Object.values(map).every(item => item % (index + 1) === 0))
        
        return true
    }
  
    return false
}