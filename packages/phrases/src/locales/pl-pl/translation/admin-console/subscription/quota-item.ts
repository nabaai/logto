const quota_item = {
  tenant_limit: {
    name: 'Liczba Najemców',
    limited: '{{count, number}} najemca',
    limited_other: '{{count, number}} najemcy',
    unlimited: 'Nieograniczona liczba najemców',
    not_eligible: 'Usuń swoich najemców',
  },
  mau_limit: {
    name: 'Miesięczna liczba aktywnych użytkowników',
    limited: '{{count, number}} MAU',
    unlimited: 'Nieograniczona liczba MAU',
    not_eligible: 'Usuń wszystkich użytkowników',
  },
  applications_limit: {
    name: 'Liczba aplikacji',
    limited: '{{count, number}} aplikacja',
    limited_other: '{{count, number}} aplikacje',
    unlimited: 'Nieograniczona liczba aplikacji',
    not_eligible: 'Usuń swoje aplikacje',
  },
  machine_to_machine_limit: {
    name: 'Machine to machine',
    limited: '{{count, number}} aplikacja machine to machine',
    limited_other: '{{count, number}} aplikacje machine to machine',
    unlimited: 'Nieograniczona liczba aplikacji machine to machine',
    not_eligible: 'Usuń swoje aplikacje machine to machine',
  },
  resources_limit: {
    name: 'Zasoby API',
    limited: '{{count, number}} zasób API',
    limited_other: '{{count, number}} zasoby API',
    unlimited: 'Nieograniczona liczba zasobów API',
    not_eligible: 'Usuń swoje zasoby API',
  },
  scopes_per_resource_limit: {
    name: 'Uprawnienia zasobu',
    limited: '{{count, number}} uprawnienie na zasób',
    limited_other: '{{count, number}} uprawnienia na zasób',
    unlimited: 'Nieograniczone uprawnienie na zasób',
    not_eligible: 'Usuń swoje uprawnienia zasobu',
  },
  custom_domain_enabled: {
    name: 'Niestandardowy domena',
    limited: 'Niestandardowy domena',
    unlimited: 'Niestandardowy domena',
    not_eligible: 'Usuń swoją niestandardową domenę',
  },
  omni_sign_in_enabled: {
    name: 'Omni logowanie',
    limited: 'Omni logowanie',
    unlimited: 'Omni logowanie',
    not_eligible: 'Wyłącz swoje omni logowanie',
  },
  built_in_email_connector_enabled: {
    name: 'Wbudowany konektor e-mail',
    limited: 'Wbudowany konektor e-mail',
    unlimited: 'Wbudowany konektor e-mail',
    not_eligible: 'Usuń swój wbudowany konektor e-mail',
  },
  social_connectors_limit: {
    name: 'Konektory społecznościowe',
    limited: '{{count, number}} konektor społecznościowy',
    limited_other: '{{count, number}} konektory społecznościowe',
    unlimited: 'Nieograniczone konektory społecznościowe',
    not_eligible: 'Usuń swoje konektory społecznościowe',
  },
  standard_connectors_limit: {
    name: 'Darmowe standardowe konektory',
    limited: '{{count, number}} darmowy standardowy konektor',
    limited_other: '{{count, number}} darmowe standardowe konektory',
    unlimited: 'Nieograniczone standardowe konektory',
    not_eligible: 'Usuń swoje standardowe konektory',
  },
  roles_limit: {
    name: 'Role',
    limited: '{{count, number}} rola',
    limited_other: '{{count, number}} role',
    unlimited: 'Nieograniczona liczba ról',
    not_eligible: 'Usuń swoje role',
  },
  scopes_per_role_limit: {
    name: 'Uprawnienia roli',
    limited: '{{count, number}} uprawnienie na rolę',
    limited_other: '{{count, number}} uprawnienia na rolę',
    unlimited: 'Nieograniczone uprawnienie na rolę',
    not_eligible: 'Usuń swoje uprawnienia roli',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooki',
    unlimited: 'Nieograniczona liczba webhooków',
    not_eligible: 'Usuń swoje webhooki',
  },
  organizations_enabled: {
    /** UNTRANSLATED */
    name: 'Organizations',
    /** UNTRANSLATED */
    limited: 'Organizations',
    /** UNTRANSLATED */
    unlimited: 'Organizations',
    /** UNTRANSLATED */
    not_eligible: 'Remove your organizations',
  },
  audit_logs_retention_days: {
    name: 'Przechowywanie dzienników audytowych',
    limited: 'Przechowywanie dzienników audytowych: {{count, number}} dzień',
    limited_other: 'Przechowywanie dzienników audytowych: {{count, number}} dni',
    unlimited: 'Nieograniczona liczba dni',
    not_eligible: 'Brak dzienników audytowych',
  },
  community_support_enabled: {
    name: 'Wsparcie społeczności',
    limited: 'Wsparcie społeczności',
    unlimited: 'Wsparcie społeczności',
    not_eligible: 'Brak wsparcia społecznościowego',
  },
  customer_ticket_support: {
    name: 'Wsparcie biletowe dla klienta',
    limited: '{{count, number}} godzina wsparcia biletowego dla klienta',
    limited_other: '{{count, number}} godziny wsparcia biletowego dla klienta',
    unlimited: 'Wsparcie biletowe dla klienta',
    not_eligible: 'Brak wsparcia biletowego dla klienta',
  },
  mfa_enabled: {
    name: 'MFA',
    limited: 'MFA',
    unlimited: 'MFA',
    not_eligible: 'Dezaktywuj MFA',
  },
  sso_enabled: {
    name: 'SSO przedsiębiorstwa',
    limited: 'SSO przedsiębiorstwa',
    unlimited: 'SSO przedsiębiorstwa',
    not_eligible: 'Dezaktywuj swoje SSO przedsiębiorstwa',
  },
};

export default Object.freeze(quota_item);
