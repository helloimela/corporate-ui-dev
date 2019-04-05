import { Header } from './header';
debugger
/* let comp = new Header(); */
let tsHeaderProps = Header.properties;
let requiredObjectKey
let result = {}
let diff = {}
let errormessage
let arrayOfDiffEntries
let arrayOfRequiredEntries
let requiredObjectIndex
let test
let x


let requiredObject = {
  _topItems: 'state',
  currentTheme: 'state',
  primaryItems: 'Any',
  secondaryItems: 'Any',
  show: 'state',
  siteName: 'Any',
  siteUrl: 'String',
  theme: 'String',
  topItems: 'Any'
}



Object.entries(tsHeaderProps).forEach(entry => {

  result[entry[0]] = (Object.keys(entry[1]).includes('type') === true) && !(Object.keys(entry[1]).includes('state')) ? (((Object.keys(entry[1]).includes('type') === true) && (Object.values(entry[1]).shift().name)) ? Object.values(entry[1]).shift().name : Object.values(entry[1]).shift()) : 'state'

})

diff = Object.keys(requiredObject).reduce((diff, key, currentIndex) => {

  requiredObjectIndex = currentIndex
  if (requiredObject[key] === result[key]) return diff
  requiredObjectKey = key
  return {
    ...diff,
    [key]: result[key]
  }
}, {})

// function myFunction() {
//   var x = diff.valueOf();
//   console.log(x);
// }{}

// let test = () => diff.valueOf(), {}



// console.log(Object.entries(diff))

arrayOfDiffEntries = [Object.entries(diff)].map(nested => nested.map(element => {

  return (element[1] === undefined) ? (" '" + element[0] + " : " + "undefined'") : "'" + element.join(" : ") + "'"
}));



arrayOfRequiredEntries = [Object.entries(diff)].map(nested => nested.map((element, index) => {

  /* console.log(element)
  console.log(Object.entries(requiredObject)[index]) */

  console.log(Object.entries(requiredObject.indexOf())

    // console.log((element[0] === Object.entries(requiredObject.indexOf())) ? 'valid' : 'invalid')

  // return (((requiredObject[Object.keys(requiredObject)[index]]) = element[0]) ? [(requiredObject[Object.keys(requiredObject)[index]]), element[1]].join(" : ") : 'invalid')
  
  // console.log(requiredObject[Object.keys(requiredObject)[index]])

  // return (element[1] === undefined) ? (" '" + element[0] + " : " + requiredObject[Object.keys(requiredObject)[index]]) : (((requiredObject[Object.keys(requiredObject)[index]]) = element[0]) ? 'valid'  : 'invalid')



}));

console.log(arrayOfRequiredEntries)

errormessage = '@Prop() ' + arrayOfDiffEntries.join(" ") + ' are missing or wrong, should be ' + ' @Prop() ' + arrayOfRequiredEntries.join(" ")

it('builds', () => {
  expect(new Header()).toBeTruthy();
});

it('Test if types are correct', () => {
  try {
    expect(requiredObject).toEqual(result);
  }
  catch (e) {
    throw new Error(errormessage);
  }
}); 