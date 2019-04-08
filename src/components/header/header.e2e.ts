debugger
import {newE2EPage} from '@stencil/core/testing';

describe('c-header', () => {
  it('should render a c-header', async () => {
    const page = await newE2EPage();
    await page.setContent(`<c-header></c-header>`);
    const el = await page.find('c-header');
    expect(el).not.toBeNull();
  });
});