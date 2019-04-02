import { Header } from './header';
debugger
/* let comp = new Header(); */
let tsHeaderProps = Header.properties;
let requiredObjectKey
let result = {}
let diff = {}
let apa


let requiredObject = { _topItems: 'state',
                        currentTheme: 'state',
                        primaryItems: 'Any',
                        secondaryItems: 'Any',
                        show: 'state',
                        siteName: 'Any',
                        siteUrl: 'Any',
                        theme: 'String',
                        topItems: 'Any' }



Object.entries(tsHeaderProps).forEach(entry => {

 result[entry[0]] = (Object.keys(entry[1]).includes('type') === true) && !(Object.keys(entry[1]).includes('state')) ? (((Object.keys(entry[1]).includes('type') === true) && (Object.values(entry[1]).shift().name)) ? Object.values(entry[1]).shift().name : Object.values(entry[1]).shift()) : 'state'

})

apa = Object.keys(result).filter(y => !Object.keys(requiredObject).includes(y)).concat(Object.keys(requiredObject).filter(y => !Object.keys(result).includes(y)));



diff = Object.keys(result).reduce((diff, key) => {
  if (result[key] === requiredObject[key]) return diff
  requiredObjectKey = key
  return {
    ...diff,
    [key]: result[key]
  }
}, {})

console.log(apa)
console.log(diff)

it('builds', () => {
  expect(new Header()).toBeTruthy();
});

/* it('Test if types are correct', () => {
  console.log('@Prop() ' + Object.keys(diff) + " : " + Object.values(diff) + ' is are missing or wrong, should be ' + ' @Prop()' + Object.keys(diff) + " : " + requiredObject[requiredObjectKey])
  expect(requiredObject).toEqual(result);

});  */

it('Test if types are correct', () => {
try {
  expect(requiredObject).toEqual(result);
}
catch (e) {
  throw new Error('@Prop() ' + Object.keys(diff) + " : " + Object.values(diff) + ' is are missing or wrong, should be ' + ' @Prop()' + Object.keys(diff) + " : " + requiredObject[requiredObjectKey]);
}
}); 