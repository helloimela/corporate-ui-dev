import {newE2EPage} from '@stencil/core/testing';
debugger

let page

beforeEach(async () => {
  page = await newE2EPage();
  await page.setContent('<c-header></c-header>');
});


describe('c-header', () => {
  it('should render a c-header', async () => {

    const page = await newE2EPage();
    await page.setContent(`<c-header></c-header>`);
    const el = await page.find('c-header');
    expect(el).not.toBeNull();

    // const el2 = await page.find('c-header >>> .navbar >>> .navbar-nav >>> .nav-link');
    // console.log(el2)

    // console.log(page)
    // const el = await page.find('c-header');
    // console.log(el)

    // const el2 = await page.find('c-header >>> .navbar >>> .navbar-nav >>> .nav-link');

    // expect(el2).toContain('home');
    // console.log(Object.getOwnPropertyNames(el));
    // console.log(el + "EL")

    // console.log(el2)

    // console.log("\x1b[0m", el2); 


    // expect(el).not.toBeNull();

    // console.log(el)
    
  });

 
});



// function Page(component) {
//   this.formField = name => component.find(`[name="${name}"]`);
//   this.submitButton = () => component.find('button[type="submit"]');
// }


// expect(el.shadowRoot).toEqualHtml(`<div>
//         <div class=\"nav-desktop\">
//           <slot></slot>
//         </div>
//       </div>`);
//     });