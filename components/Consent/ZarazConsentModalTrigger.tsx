'use client';

import type { ZarazConsentModalTriggerProps } from '@/components/Consent/types';

export function ZarazConsentModalTrigger({
  onClick,
  type = 'button',
  ...props
}: ZarazConsentModalTriggerProps) {
  return (
    <button
      type={type}
      {...props}
      onClick={event => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          window.zaraz?.showConsentModal?.();
        }
      }}
    />
  );
}
