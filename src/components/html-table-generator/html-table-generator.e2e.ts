import { newE2EPage } from '@stencil/core/testing';

describe('html-table-generator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<html-table-generator></html-table-generator>');

    const element = await page.find('html-table-generator');
    expect(element).toHaveClass('hydrated');
  });
});
