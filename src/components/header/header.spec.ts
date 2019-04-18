import { Header} from './header';
import * as fs from 'fs';

// const comp = new Header();
const tsHeaderProps = Header.properties;
const result = {};
let diff = {};
let errormessage;
let arrayOfDiffEntries;
let arrayOfRequiredEntries;
let jsonContent = {}

// console.log(tsHeaderProps)

let rawdata = fs.readFileSync('src/components/header/header.json');   
let requiredObject  = JSON.parse(rawdata.toString())

Object.entries(tsHeaderProps).forEach(entry => {
  result[entry[0]] = (Object.keys(entry[1]).includes('type') === true) && !(Object.keys(entry[1]).includes('state')) ? (((Object.keys(entry[1]).includes('type') === true) && (Object.values(entry[1]).shift().name)) ? Object.values(entry[1]).shift().name : Object.values(entry[1]).shift()) : 'state';
});

if ((Object.entries(requiredObject).length === 0 && requiredObject.constructor === Object) === true) {
  requiredObject = result
  jsonContent = JSON.stringify(requiredObject);

  fs.writeFile("src/components/header/header.json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });

} 
diff = Object.keys(requiredObject).reduce((diff, key) => {
  if (requiredObject[key] === result[key]) return diff;
  return {
    ...diff,
    [key]: result[key],
  };
}, {});

arrayOfDiffEntries = [Object.entries(diff)].map(nested => nested.map(element => ((element[1] === undefined) ? (` '${element[0]} : ` + 'undefined\'') : `'${element.join(' : ')}'`)));

arrayOfRequiredEntries = [Object.entries(diff)].map(nested => nested.map((element, index) => (((requiredObject[Object.keys(requiredObject)[index]]) = element[0]) ? ` '${([element[0], `'${requiredObject[Object.values(requiredObject)[index]]}`]).join(' : ')}'` : null)));

errormessage = `@Prop() ${arrayOfDiffEntries.join(' ')} are missing or wrong, should be ` + ` @Prop() ${arrayOfRequiredEntries.join(' ')}`;

it('builds', () => {
  expect(new Header()).toBeTruthy();
});

describe('Test if types are correct and correct Props are present', () => {
  it('Are the @Props present and correct', () => {
    expect(requiredObject).toEqual(result);
  });

  it('Are the @Props present and correct', () => {
    try {
      expect(requiredObject).toEqual(result);
    } catch (e) {
      throw new Error(errormessage);
    }
  });
});
