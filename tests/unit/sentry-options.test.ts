import { describe, expect, it } from 'vitest';
import { sentryOptions } from '@/helper/sentry-options';

describe('sentryOptions', () => {
  it('sends nothing that identifies a visitor or what they typed', () => {
    expect(sentryOptions.dataCollection).toMatchObject({
      userInfo: false,
      cookies: false,
      httpBodies: []
    });
  });
});
