import { Header } from './header';
debugger
/* let comp = new Header(); */
let tsHeaderProps = Header.properties;
let requiredObjectKey


let requiredObject = { _topItems: 'state',
currentTheme: 'state',
primaryItems: 'Any',
secondaryItems: 'Any',
show: 'state',
siteName: 'Any',
siteUrl: 'Any',
theme: 'String',
topItems: 'Any' }

let result = {}
let diff = {}

Object.entries(tsHeaderProps).forEach(entry => {

 result[entry[0]] = (Object.keys(entry[1]).includes('type') === true) && !(Object.keys(entry[1]).includes('state')) ? (((Object.keys(entry[1]).includes('type') === true) && (Object.values(entry[1]).shift().name)) ? Object.values(entry[1]).shift().name : Object.values(entry[1]).shift()) : 'state'

})

diff = Object.keys(result).reduce((diff, key) => {
  if (requiredObject[key] === result[key]) return diff
  requiredObjectKey = key
  return {
    ...diff,
    [key]: result[key]
  }
}, {})


it('builds', () => {
  expect(new Header()).toBeTruthy();
});

it('Test if types are correct', () => {
  console.log(Object.keys(diff) + " : " + Object.values(diff) + ' is are missing or wrong, should be ' + Object.keys(diff) + " : " + requiredObject[requiredObjectKey])
  expect(requiredObject).toEqual(result);

}); 