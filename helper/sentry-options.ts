// Network identity in headers and query parameters: Sentry's v10 baseline.
const IDENTITY = { deny: ['forwarded', '-ip', 'remote-', 'via', '-user'] };

/**
 * What every Sentry runtime shares (browser, server, edge): the DSN of the
 * deployment's project, every trace on preview and a tenth in production, and
 * no personal data. Sentry 11 collects request bodies, cookies and user info
 * by default, so an error in the contact form would carry the visitor's name,
 * email and message; this keeps the v10 default (`sendDefaultPii: false`).
 */
export const sentryOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate:
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? 0.1 : 1.0,
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: { request: IDENTITY, response: IDENTITY },
    httpBodies: [],
    urlQueryParams: IDENTITY,
    genAI: { inputs: false, outputs: false },
    databaseQueryData: false,
    queues: false,
    graphQL: { document: false, variables: false }
  }
};
