'use client';

import { useEffect, useState } from 'react';
import {
  ZARAZ_CONSENT_EVENTS,
  ZARAZ_PURPOSE_IDS
} from '@/components/Consent/zaraz-consent';
import type { ZarazConsentGateProps } from '@/components/Consent/types';

export function ZarazConsentGate({
  purpose,
  children,
  fallback
}: ZarazConsentGateProps) {
  const [hasConsent, setHasConsent] = useState(false);
  const purposeId = ZARAZ_PURPOSE_IDS[purpose];

  useEffect(() => {
    const updateConsent = () => {
      const consent = window.zaraz?.consent;

      setHasConsent(
        consent?.APIReady === true && consent.get(purposeId) === true
      );
    };

    document.addEventListener(ZARAZ_CONSENT_EVENTS.ready, updateConsent);
    document.addEventListener(
      ZARAZ_CONSENT_EVENTS.choicesUpdated,
      updateConsent
    );
    updateConsent();

    return () => {
      document.removeEventListener(ZARAZ_CONSENT_EVENTS.ready, updateConsent);
      document.removeEventListener(
        ZARAZ_CONSENT_EVENTS.choicesUpdated,
        updateConsent
      );
    };
  }, [purposeId]);

  return hasConsent ? children : (fallback ?? null);
}
