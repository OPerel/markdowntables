import { newE2EPage } from '@stencil/core/testing';

describe('table-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<table-form></table-form>');

    const element = await page.find('table-form');
    expect(element).toHaveClass('hydrated');
  });
});
