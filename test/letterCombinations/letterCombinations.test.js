import letterCombinations from '../../code/17_letterCombinations/letterCombinations'

test('17题，电话号码的字母组合', () => {
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})