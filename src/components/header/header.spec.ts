import { Header } from './header';
debugger
/* let comp = new Header(); */
let tsHeaderProps = Header.properties;
let result = {}
let diff = {}
let errormessage
let arrayOfDiffEntries
let arrayOfRequiredEntries

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

diff = Object.keys(requiredObject).reduce((diff, key) => {

  if (requiredObject[key] === result[key]) return diff
  return {
    ...diff,
    [key]: result[key]
  }
}, {})

arrayOfDiffEntries = [Object.entries(diff)].map(nested => nested.map(element => {

  return (element[1] === undefined) ? (" '" + element[0] + " : " + "undefined'") : "'" + element.join(" : ") + "'"

}));

arrayOfRequiredEntries = [Object.entries(diff)].map(nested => nested.map((element, index) => {

  return (((requiredObject[Object.keys(requiredObject)[index]]) = element[0]) ? " '" + ([element[0], "'" + (requiredObject[Object.values(requiredObject)[index]])]).join(" : ") + "'" : null)

}));

errormessage = '@Prop() ' + arrayOfDiffEntries.join(" ") + ' are missing or wrong, should be ' + ' @Prop() ' + arrayOfRequiredEntries.join(" ")

it('builds', () => {
  expect(new Header()).toBeTruthy();
});

describe('Test if types are correct and correct Props are present', function () {
  it('Test if types are correct', () => {
    expect(requiredObject).toEqual(result);
  });

  it('Test if types are correct', () => {
    try {
      expect(requiredObject).toEqual(result);
    }
    catch (e) {
      throw new Error(errormessage);
    }
  })
});
