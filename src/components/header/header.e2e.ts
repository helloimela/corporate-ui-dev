debugger
import { newE2EPage } from '@stencil/core/testing';

const headerComponent = 'c-header';
let page;


let apa = newE2EPage();

console.log(apa)

describe('c-footer', () => {

beforeEach(async () => {
  page = await newE2EPage();
  await page.setContent('<c-header></c-header>');
});
});