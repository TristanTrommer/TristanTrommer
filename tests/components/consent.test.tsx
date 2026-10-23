import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ZarazConsentGate,
  ZarazConsentModalTrigger
} from '@/components/Consent';
import {
  ZARAZ_CONSENT_EVENTS,
  ZARAZ_PURPOSE_IDS
} from '@/components/Consent/zaraz-consent';

/** Zaraz as the page sees it, with the purposes the visitor agreed to. */
const zaraz = (granted: string[], APIReady = true) => {
  window.zaraz = {
    consent: { APIReady, get: id => granted.includes(id) },
    showConsentModal: vi.fn()
  };
};

const dispatch = (event: string) =>
  act(() => {
    document.dispatchEvent(new Event(event));
  });

const renderGate = () =>
  render(
    <ZarazConsentGate purpose="marketing" fallback={<p>Fallback</p>}>
      <p>Embed</p>
    </ZarazConsentGate>
  );

afterEach(() => {
  delete window.zaraz;
});

describe('ZarazConsentGate', () => {
  it('shows the fallback without Zaraz', () => {
    renderGate();

    expect(screen.getByText('Fallback')).toBeInTheDocument();
    expect(screen.queryByText('Embed')).not.toBeInTheDocument();
  });

  it('shows nothing without consent or a fallback', () => {
    zaraz([]);
    const { container } = render(
      <ZarazConsentGate purpose="marketing">
        <p>Embed</p>
      </ZarazConsentGate>
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('shows the content once the visitor consented to its purpose', () => {
    zaraz([ZARAZ_PURPOSE_IDS.marketing]);
    renderGate();

    expect(screen.getByText('Embed')).toBeInTheDocument();
  });

  it('asks for consent to its own purpose only', () => {
    zaraz([ZARAZ_PURPOSE_IDS.statistics, ZARAZ_PURPOSE_IDS.preferences]);
    renderGate();

    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });

  it('waits for the consent API to be ready', () => {
    zaraz([ZARAZ_PURPOSE_IDS.marketing], false);
    renderGate();
    expect(screen.getByText('Fallback')).toBeInTheDocument();

    zaraz([ZARAZ_PURPOSE_IDS.marketing]);
    dispatch(ZARAZ_CONSENT_EVENTS.ready);

    expect(screen.getByText('Embed')).toBeInTheDocument();
  });

  it('follows the visitor changing their choices', () => {
    zaraz([]);
    renderGate();

    zaraz([ZARAZ_PURPOSE_IDS.marketing]);
    dispatch(ZARAZ_CONSENT_EVENTS.choicesUpdated);
    expect(screen.getByText('Embed')).toBeInTheDocument();

    zaraz([]);
    dispatch(ZARAZ_CONSENT_EVENTS.choicesUpdated);
    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });
});

describe('ZarazConsentModalTrigger', () => {
  it('opens the consent modal without submitting a form', async () => {
    zaraz([]);
    const onSubmit = vi.fn();
    render(
      <form onSubmit={onSubmit}>
        <ZarazConsentModalTrigger>Cookie settings</ZarazConsentModalTrigger>
      </form>
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'Cookie settings' })
    );

    expect(window.zaraz?.showConsentModal).toHaveBeenCalledOnce();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('leaves the modal closed when its onClick prevents the default', async () => {
    zaraz([]);
    render(
      <ZarazConsentModalTrigger onClick={event => event.preventDefault()}>
        Cookie settings
      </ZarazConsentModalTrigger>
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'Cookie settings' })
    );

    expect(window.zaraz?.showConsentModal).not.toHaveBeenCalled();
  });
});
