const mfa = {
  title: 'Autenticazione a più fattori',
  description:
    "Aggiungi l'autenticazione a più fattori per elevare la sicurezza della tua esperienza di accesso.",
  factors: 'Fattori',
  multi_factors: 'Multi-fattori',
  multi_factors_description:
    'Gli utenti devono verificare uno dei fattori abilitati per la verifica a due passaggi.',
  totp: "OTP dell'app autenticatore",
  otp_description: 'Collega Google Authenticator, ecc., per verificare le password monouso.',
  webauthn: 'WebAuthn (Passkey)',
  webauthn_description:
    'Verifica tramite un metodo supportato dal browser: biometria, scansione del telefono o chiave di sicurezza, ecc.',
  webauthn_native_tip: 'WebAuthn non è supportato per le applicazioni native.',
  webauthn_domain_tip:
    'WebAuthn lega le chiavi pubbliche al dominio specifico. Modificare il dominio del servizio impedirà agli utenti di autenticarsi tramite le passkey esistenti.',
  backup_code: 'Codice di backup',
  backup_code_description:
    'Genera 10 codici di backup monouso dopo che gli utenti hanno configurato qualsiasi metodo MFA.',
  backup_code_setup_hint:
    "Quando gli utenti non possono verificare i suddetti fattori MFA, utilizzare l'opzione di backup.",
  backup_code_error_hint:
    "Per utilizzare un codice di backup, è necessario almeno un altro metodo MFA per un'autenticazione utente riuscita.",
  policy: 'Politica',
  policy_description: 'Imposta la politica MFA per i flussi di accesso e registrazione.',
  two_step_sign_in_policy: "Politica di verifica a due passaggi all'accesso",
  user_controlled: 'Gli utenti possono abilitare o disabilitare MFA autonomamente',
  user_controlled_tip:
    "Gli utenti possono saltare la configurazione MFA la prima volta all'accesso o alla registrazione, o abilitarla/disabilitarla nelle impostazioni dell'account.",
  mandatory: "Gli utenti devono sempre utilizzare MFA all'accesso",
  mandatory_tip:
    "Gli utenti devono configurare MFA la prima volta all'accesso o alla registrazione, e usarlo per tutti gli accessi futuri.",
  /** UNTRANSLATED */
  require_mfa: 'Require MFA',
  /** UNTRANSLATED */
  require_mfa_label:
    'Enable this to make 2-step verification mandatory for accessing your applications. If disabled, users can decide whether to enable MFA for themselves.',
  /** UNTRANSLATED */
  set_up_prompt: 'MFA set-up prompt',
  /** UNTRANSLATED */
  no_prompt: 'Do not ask users to set up MFA',
  /** UNTRANSLATED */
  prompt_at_sign_in_and_sign_up:
    'Ask users to set up MFA during registration (skippable, one-time prompt)',
  /** UNTRANSLATED */
  prompt_only_at_sign_in:
    'Ask users to set up MFA on their next sign-in attempt after registration (skippable, one-time prompt)',
};

export default Object.freeze(mfa);
