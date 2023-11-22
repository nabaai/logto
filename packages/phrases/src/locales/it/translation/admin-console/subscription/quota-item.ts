const quota_item = {
  tenant_limit: {
    name: 'Tenanti',
    limited: '{{count, number}} affittuario',
    limited_other: '{{count, number}} affittuari',
    unlimited: 'Affittuari illimitati',
    not_eligible: 'Rimuovi i tuoi affittuari',
  },
  mau_limit: {
    name: 'Utenti attivi mensili',
    limited: '{{count, number}} MAU',
    unlimited: 'Utenti attivi mensili illimitati',
    not_eligible: 'Rimuovi tutti i tuoi utenti',
  },
  applications_limit: {
    name: 'Applicazioni',
    limited: '{{count, number}} applicazione',
    limited_other: '{{count, number}} applicazioni',
    unlimited: 'Applicazioni illimitate',
    not_eligible: 'Rimuovi le tue applicazioni',
  },
  machine_to_machine_limit: {
    name: 'Applicazioni Machine-to-Machine',
    limited: '{{count, number}} applicazione Machine-to-Machine',
    limited_other: '{{count, number}} applicazioni Machine-to-Machine',
    unlimited: 'Applicazioni Machine-to-Machine illimitate',
    not_eligible: 'Rimuovi le tue applicazioni Machine-to-Machine',
  },
  resources_limit: {
    name: 'Risorse API',
    limited: '{{count, number}} risorsa API',
    limited_other: '{{count, number}} risorse API',
    unlimited: 'Risorse API illimitate',
    not_eligible: 'Rimuovi le tue risorse API',
  },
  scopes_per_resource_limit: {
    name: 'Permessi risorsa',
    limited: '{{count, number}} permesso per risorsa',
    limited_other: '{{count, number}} permessi per risorsa',
    unlimited: 'Permesso per risorsa illimitato',
    not_eligible: 'Rimuovi i permessi risorsa',
  },
  custom_domain_enabled: {
    name: 'Dominio personalizzato',
    limited: 'Dominio personalizzato',
    unlimited: 'Dominio personalizzato',
    not_eligible: 'Rimuovi il tuo dominio personalizzato',
  },
  omni_sign_in_enabled: {
    name: 'Omnisign-in',
    limited: 'Omnisign-in',
    unlimited: 'Omnisign-in',
    not_eligible: 'Disabilita il tuo Omnisign-in',
  },
  built_in_email_connector_enabled: {
    name: 'Connettore email incorporato',
    limited: 'Connettore email incorporato',
    unlimited: 'Connettore email incorporato',
    not_eligible: 'Rimuovi il tuo connettore email incorporato',
  },
  social_connectors_limit: {
    name: 'Connettori sociali',
    limited: '{{count, number}} connettore sociale',
    limited_other: '{{count, number}} connettori sociali',
    unlimited: 'Connettori sociali illimitati',
    not_eligible: 'Rimuovi i tuoi connettori sociali',
  },
  standard_connectors_limit: {
    name: 'Connettori standard gratuiti',
    limited: '{{count, number}} connettore standard gratuito',
    limited_other: '{{count, number}} connettori standard gratuiti',
    unlimited: 'Connettori standard illimitati',
    not_eligible: 'Rimuovi i tuoi connettori standard',
  },
  roles_limit: {
    name: 'Ruoli',
    limited: '{{count, number}} ruolo',
    limited_other: '{{count, number}} ruoli',
    unlimited: 'Ruoli illimitati',
    not_eligible: 'Rimuovi i tuoi ruoli',
  },
  scopes_per_role_limit: {
    name: 'Permessi ruolo',
    limited: '{{count, number}} permesso per ruolo',
    limited_other: '{{count, number}} permessi per ruolo',
    unlimited: 'Permesso per ruolo illimitato',
    not_eligible: 'Rimuovi i permessi ruolo',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Webhook illimitati',
    not_eligible: 'Rimuovi i tuoi webhook',
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
    name: 'Conservazione log di audit',
    limited: 'Conservazione log di audit: {{count, number}} giorno',
    limited_other: 'Conservaizone log di audit: {{count, number}} giorni',
    unlimited: 'Giorni illimitati',
    not_eligible: 'Nessun log di audit',
  },
  community_support_enabled: {
    name: 'Supporto della comunità',
    limited: 'Supporto della comunità',
    unlimited: 'Supporto della comunità',
    not_eligible: 'Nessun supporto della comunità',
  },
  customer_ticket_support: {
    name: 'Supporto tramite ticket clienti',
    limited: '{{count, number}} ore di supporto tramite ticket clienti',
    limited_other: '{{count, number}} ore di supporto tramite ticket clienti',
    unlimited: 'Supporto tramite ticket clienti',
    not_eligible: 'Nessun supporto tramite ticket clienti',
  },
  mfa_enabled: {
    name: 'MFA',
    limited: 'MFA',
    unlimited: 'MFA',
    not_eligible: 'Disabilita il tuo MFA',
  },
  sso_enabled: {
    name: 'SSO aziendale',
    limited: 'SSO aziendale',
    unlimited: 'SSO aziendale',
    not_eligible: 'Disabilita il tuo SSO aziendale',
  },
};

export default Object.freeze(quota_item);
