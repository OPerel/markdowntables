import { newE2EPage } from '@stencil/core/testing';

describe('m-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<m-button></m-button>');

    const element = await page.find('m-button');
    expect(element).toHaveClass('hydrated');
  });
});
