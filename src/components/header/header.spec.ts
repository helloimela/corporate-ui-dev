import { Header } from './header';
import { objectExpression } from '@babel/types';
import { ban } from '../icon/icons';
debugger

/* let comp = new Header(); */
let tsHeaderProps = Header.properties;
/* const requiredTypes: string[] = [ 'Any', 'Any', [Function: String], [Function: String], [Function: String], 'Any' ] */
let arrayOfTypesValues = []
let arrayOfTypesKeys = []
let result = []
/* let joindArray = []
let test = [] */

Object.keys(tsHeaderProps).forEach(key => {
  let value = tsHeaderProps[key];

  if (value.hasOwnProperty('type')) {
    let valuesInArray = Object.values(value)

    
    arrayOfTypesKeys.push(valuesInArray[1])
    arrayOfTypesValues.push(valuesInArray[0])

    result =  arrayOfTypesValues.reduce(function(result, field, index) {
      result[arrayOfTypesKeys[index]] = field;
      
      return result;

    }, {})
    
    /* console.log(test) */
  }
});
/* console.log(arrayOfTypesKeys)
console.log(arrayOfTypesValues) */

/* console.log(test) */
/* map1 = arrayOfTypesKeys.map((element, index, arrayOfTypesValues) => {

  
  element.concat(arrayOfTypesValues) */
  /* console.log(test) */
  
/* })

console.log(map1) */
/* console.log(map1) */
/* console.log(array1)
console.log(array2) */


/* console.log(arrayOfTypesKeys) 
console.log(arrayOfTypesValues)  */



/* let arrayOfTypeKeyValue = arrayOfTypesKeys.concat(arrayOfTypesValues)

console.log(arrayOfTypeKeyValue)
 */
/* console.log(tsHeaderProps[0]) */
/* console.log(arrayOfTypes) */



/* console.log(arrayOfTypes) */

/* console.log(test) */

/* console.log(apa) */
/* if (console.log(Object.values(tsHeaderProps).includes('type'))) {

  console.log("apa")
}) */


/* console.log(comp) */
/* console.log(tsHeader.properties) */


/* let mapHeader:string[] = tsHeaderProps.map(element => element);
console.log(mapHeader) */
/* let mapHeader = tsHeaderProps.map((entry) => {entry.find(element => element.type === 'type')}); */

/* let mapHeader = Object.entries(tsHeaderProps).map(element => { */

 /*  Object.keys(tsHeaderProps).forEach(key => {
    let value = tsHeaderProps[key];
    console.log(value)
  }); */

  /* console.log(element[1]) */

  /* let apa = element[1] */

  
 /* console.log(apa) */

/* 
  let apa2:any = Object.values(element) 

 */


  /* let apa:any = Object.values(element[0].find(element => element.type === 'type')) */

  /* console.log(apa) */

  /* console.log(apa.find(element => element.type === 'type')) */

  /* console.log(Object.values(element[1]).slice[0]) */

 /*  const result:string[] = apa.filter(apa, i => i < 2 ); */

  

/* }); */

  

  /* if (Object.entries(element[1]).find(entry => entry === 'type')) {

    console.log(element)
  } */
  
  /* let apa = Object.values(element[1]) */
  

/* console.log(apa[0]) */

  
  /* console.log(apa) */



  /* console.log(element[0]) */
  /* console.log(element[1]) */

/*   console.log(Object.keys(element[1]).find(entry => entry === 'type')) */
 /*  console.log(Object.keys(element[1]).includes('type')) */
/* 
if (Object.values(element).find(entry => entry === 'type')) { */
  /* let apa =  Object.values(element[1])
  return apa[0] */


  /* let apa = Object.keys(element[1]).find(entry => entry === 'type') */

  /* console.log(apa) */

  /* return element[1] */
  /* let apa:string | {} = element.find(x => x.type === 'type') */

  /* const result:string | {} = element[1].find(entry => entry.name === 'type' ); */

  /* const apaarray[array.findIndex(x => x.name == 'string 1')] */
  
/* console.log(result) */
/*   let apa = Object.values(element[1])const requiredTypes: string[] = ['string', 'string', 'object', 'string', 'boolean', 'object'];

let map1:string[] = requiredTypes.map(element => element);
  console.log(apa)

  return apa[1] */

/*   } */




/* console.log(mapHeader) */
/* console.log(mapHeader) */
/* let mapHeader = tsHeaderProps.map(entry => entry.find(element => element.type === 'type')); */

/* console.log(mapHeader) */

/* console.log(mapHeader + " MAP_HEADER")

const requiredTypes: string[] = ['string', 'string', 'object', 'string', 'boolean', 'object'];

let map1:string[] = requiredTypes.map(element => element);
let map2:string[] = Object.entries(comp).map(entry => typeof entry[1]);

let result = map1.map((item, key) => item === map2[key]);


console.log(map1, "MAP1")
console.log(map2, "MAP12")

console.log(result, "RESULT")

let exeption = result.indexOf(false);

if(map1.length !== map2.length) {
  console.log('Not matching expected "' + map1.length + '"');
}

if(exeption > -1) {
  console.log('Wrong type of: ', Object.entries(comp)[ exeption ] );
}

console.log(exeption, "EXPECTION")

 */
it('builds', () => {
  expect(new Header()).toBeTruthy();
});
/* 
 it('property @Prop()' + propsDifference + ' is missing', () => {
  expect(propsDifference).toEqual([]);
}); 

it('The type is wrong', () => {
  expect(typesDifference).toEqual([]);
}); */