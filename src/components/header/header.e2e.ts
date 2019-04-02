debugger
import { newE2EPage } from '@stencil/core/testing';

const headerComponent = 'c-header';
let page;


let testPage = newE2EPage();

console.log(testPage)

describe('c-header', () => {

beforeEach(async () => {
  page = await newE2EPage();
  await page.setContent('<c-header></c-header>');
});
});