import type { ComponentProps, ReactNode } from 'react';
import type { ZARAZ_PURPOSE_IDS } from '@/components/Consent/zaraz-consent';

export type ZarazConsentPurpose = keyof typeof ZARAZ_PURPOSE_IDS;
export type ZarazConsentPurposeId =
  (typeof ZARAZ_PURPOSE_IDS)[ZarazConsentPurpose];

export interface ZarazConsentGateProps {
  purpose: ZarazConsentPurpose;
  children: ReactNode;
  fallback?: ReactNode;
}

export type ZarazConsentModalTriggerProps = ComponentProps<'button'>;

export interface ZarazConsentApi {
  readonly APIReady: boolean;
  get(purposeId: ZarazConsentPurposeId): boolean | undefined;
}

export interface ZarazApi {
  consent?: ZarazConsentApi;
  showConsentModal?: () => void;
}

declare global {
  interface Window {
    zaraz?: ZarazApi;
  }
}
