import { newE2EPage } from '@stencil/core/testing';

debugger;

// let apa = new Header()
// let page

// beforeEach(async () => {
//   page = await newE2EPage();
//   await page.setContent('<c-header></c-header>');
// });


describe('c-header', () => {
  it('should render a c-header', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-header></c-header>');
    const el = await page.find('c-header');
    expect(el).not.toBeNull();
    // // await page.goto('localhost:1337');
    // const results = page.compareScreenshot('c-header');
    // expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
    // console.log(results)


    // console.log(page)
    // console.log('ELEMENT');
    // console.log(el);

    // console.log('PAGE')
    // console.log(page)
  });
});
