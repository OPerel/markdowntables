import { newE2EPage } from '@stencil/core/testing';

describe('html-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<html-table></html-table>');

    const element = await page.find('html-table');
    expect(element).toHaveClass('hydrated');
  });
});
