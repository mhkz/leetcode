import hasGroupsSizeX from '../../code/914_hasGroupsSizeX/hasGroupsSizeX'

test('cardGroup:[1,1,1,2,2,2,3,3]', () => {
  expect(hasGroupsSizeX([0,0,0,0,0,1,1,2,3,4])).toBe(false)
})