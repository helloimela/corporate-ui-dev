import { Header } from './header';

let comp = new Header();

debugger
const requiredProps = ['siteName', 'siteUrl', 'topItems', 'currentTheme', 'show', '_topItems'];
const arrayOfcomp: string[] = Object.keys(comp);
let propsDifference: string[] = arrayOfcomp.filter(x => !requiredProps.includes(x)).concat(requiredProps.filter(x => !arrayOfcomp.includes(x)));

const requiredTypes = ["string", "string", "object", "string", "boolean", "object"];

let objOfTypes = {}
Object.keys(comp).map(key => { objOfTypes[key] = typeof comp[key]; });



const arrayOfTypes = Object.values(objOfTypes);
const arrayOfTypesKeys = Object.keys(objOfTypes);


/* let arrayOfTypeKeys: string[] = Object.keys(comp); */

/* const merged = arrayOfTypes.reduce((obj, value, index) => ({...obj, [arrayOfTypeKeys[index]]: value}), {}); */

let typesDifference: {}[]= arrayOfTypes.filter(y => !requiredTypes.includes(y)).concat(requiredTypes.filter(y => !arrayOfTypes.includes(y))); 
 /* let typesOfKeysDifference: string[] = arrayOfTypesKeys.filter(x => !requiredTypes.includes(x)).concat(requiredTypes.filter(x => !arrayOfTypesKeys.includes(x))); */
 

 
 const merged = typesDifference.reduce((obj, value, index) => ({...obj, [propsDifference[index]]: value}), {});


/* let result = requiredTypes.filter(x => arrayOfTypes.includes(x)); */




/* let typesDifference = arrayOfTypes.filter(x => !requiredTypes.includes(x)).concat(requiredTypes.filter(x => !arrayOfTypes.includes(x))); */

console.log("PROPS")
console.log("ARRAY_OF_COMP " + arrayOfcomp)
console.log("REQUIRED_PROPS " + requiredProps)
console.log("PROPS_DIFFERENCE " + propsDifference)

console.log("REQUIRED_TYPES " + requiredTypes)
console.log("ARRAY_OF_TYPES " + arrayOfTypes)
console.log("TYPES_DIFFERENCE " + typesDifference)
console.log("ARRAY_OF_TYPES_KEYS " + arrayOfTypesKeys);



/* console.log("TYPE_DIFFERENCE " + typesDifference) */




it('builds', () => {
  expect(new Header()).toBeTruthy();
});

it('property @Prop()' + propsDifference + ' is missing', () => {
  expect(propsDifference).toEqual([]);
});

it('The type ' + requiredTypes + ' is wrong', () => {
  expect(typesDifference).toEqual([]);
});