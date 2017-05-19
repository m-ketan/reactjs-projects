import Raven from 'raven-js';

export const sentry_url = 'https://e72827f844cf4eb68004e069b3a2f897@sentry.io/169933';

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  window && window.console && console.error && console.error(ex);
}
