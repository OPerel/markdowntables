import { newE2EPage } from '@stencil/core/testing';

describe('md-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<md-preview></md-preview>');

    const element = await page.find('md-preview');
    expect(element).toHaveClass('hydrated');
  });
});
