const quota_item = {
  tenant_limit: {
    name: 'Inquilinos',
    limited: '{{count, number}} inquilino',
    limited_other: '{{count, number}} inquilinos',
    unlimited: 'Inquilinos ilimitados',
    not_eligible: 'Elimine sus inquilinos',
  },
  mau_limit: {
    name: 'Usuarios activos mensuales',
    limited: '{{count, number}} UAM',
    unlimited: 'UAM ilimitados',
    not_eligible: 'Elimine a todos sus usuarios',
  },
  token_limit: {
    name: 'Tokens',
    limited: '{{count, number}} token',
    limited_other: '{{count, number}} tokens',
    unlimited: 'Tokens ilimitados',
    not_eligible: 'Eliminar todos sus usuarios para evitar nuevos tokens',
  },
  applications_limit: {
    name: 'Aplicaciones',
    limited: '{{count, number}} aplicación',
    limited_other: '{{count, number}} aplicaciones',
    unlimited: 'Aplicaciones ilimitadas',
    not_eligible: 'Elimine sus aplicaciones',
  },
  machine_to_machine_limit: {
    name: 'Aplicaciones de dispositivo a dispositivo',
    limited: '{{count, number}} aplicación de dispositivo a dispositivo',
    limited_other: '{{count, number}} aplicaciones de dispositivo a dispositivo',
    unlimited: 'Aplicaciones de dispositivo a dispositivo ilimitadas',
    not_eligible: 'Elimine sus aplicaciones de dispositivo a dispositivo',
  },
  third_party_applications_limit: {
    name: 'Aplicaciones de terceros',
    limited: '{{count, number}} aplicación de terceros',
    limited_other: '{{count, number}} aplicaciones de terceros',
    unlimited: 'Aplicaciones de terceros ilimitadas',
    not_eligible: 'Elimine sus aplicaciones de terceros',
  },
  resources_limit: {
    name: 'Recursos de API',
    limited: '{{count, number}} recurso de API',
    limited_other: '{{count, number}} recursos de API',
    unlimited: 'Recursos de API ilimitados',
    not_eligible: 'Elimine sus recursos de API',
  },
  scopes_per_resource_limit: {
    name: 'Permisos de recursos',
    limited: '{{count, number}} permiso por recurso',
    limited_other: '{{count, number}} permisos por recurso',
    unlimited: 'Permiso por recurso ilimitado',
    not_eligible: 'Elimine sus permisos de recursos',
  },
  custom_domain_enabled: {
    name: 'Dominio personalizado',
    limited: 'Dominio personalizado',
    unlimited: 'Dominio personalizado',
    not_eligible: 'Elimine su dominio personalizado',
  },
  omni_sign_in_enabled: {
    name: 'Inicio de sesión Omni',
    limited: 'Inicio de sesión Omni',
    unlimited: 'Inicio de sesión Omni',
    not_eligible: 'Deshabilite su inicio de sesión Omni',
  },
  built_in_email_connector_enabled: {
    name: 'Conector de correo electrónico integrado',
    limited: 'Conector de correo electrónico integrado',
    unlimited: 'Conector de correo electrónico integrado',
    not_eligible: 'Elimine su conector de correo electrónico integrado',
  },
  social_connectors_limit: {
    name: 'Conectores sociales',
    limited: '{{count, number}} conector social',
    limited_other: '{{count, number}} conectores sociales',
    unlimited: 'Conectores sociales ilimitados',
    not_eligible: 'Elimine sus conectores sociales',
  },
  standard_connectors_limit: {
    name: 'Conectores estándar gratuitos',
    limited: '{{count, number}} conector estándar gratuito',
    limited_other: '{{count, number}} conectores estándar gratuitos',
    unlimited: 'Conectores estándar ilimitados',
    not_eligible: 'Elimine sus conectores estándar',
  },
  roles_limit: {
    name: 'Roles',
    limited: '{{count, number}} rol',
    limited_other: '{{count, number}} roles',
    unlimited: 'Roles ilimitados',
    not_eligible: 'Elimine sus roles',
  },
  machine_to_machine_roles_limit: {
    name: 'Roles de máquina a máquina',
    limited: '{{count, number}} rol de máquina a máquina',
    limited_other: '{{count, number}} roles de máquina a máquina',
    unlimited: 'Roles de máquina a máquina ilimitados',
    not_eligible: 'Elimine sus roles de máquina a máquina',
  },
  scopes_per_role_limit: {
    name: 'Permisos de roles',
    limited: '{{count, number}} permiso por rol',
    limited_other: '{{count, number}} permisos por rol',
    unlimited: 'Permiso por rol ilimitado',
    not_eligible: 'Elimine sus permisos de roles',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Webhooks ilimitados',
    not_eligible: 'Elimina tus webhooks',
  },
  organizations_enabled: {
    name: 'Organizaciones',
    limited: 'Organizaciones',
    unlimited: 'Organizaciones',
    not_eligible: 'Elimine sus organizaciones',
  },
  audit_logs_retention_days: {
    name: 'Conservación de registros de auditoría',
    limited: 'Conservación de registros de auditoría: {{count, number}} día',
    limited_other: 'Conservación de registros de auditoría: {{count, number}} días',
    unlimited: 'Días ilimitados',
    not_eligible: 'Sin registros de auditoría',
  },
  email_ticket_support: {
    name: 'Soporte de boletos de correo electrónico',
    limited: '{{count, number}} hora de soporte de boletos de correo electrónico',
    limited_other: '{{count, number}} horas de soporte de boletos de correo electrónico',
    unlimited: 'Soporte de boletos de correo electrónico',
    not_eligible: 'Sin soporte de boletos de correo electrónico',
  },
  mfa_enabled: {
    name: 'Autenticación de dos factores',
    limited: 'Autenticación de dos factores',
    unlimited: 'Autenticación de dos factores',
    not_eligible: 'Quitar su autenticación de dos factores',
  },
  sso_enabled: {
    name: 'SSO empresarial',
    limited: 'SSO empresarial',
    unlimited: 'SSO empresarial',
    not_eligible: 'Elimine su SSO empresarial',
  },
  tenant_members_limit: {
    name: 'Miembros del inquilino',
    limited: '{{count, number}} miembro del inquilino',
    limited_other: '{{count, number}} miembros del inquilino',
    unlimited: 'Miembros del inquilino ilimitados',
    not_eligible: 'Elimine sus miembros del inquilino',
  },
  custom_jwt_enabled: {
    name: 'JWT personalizado',
    limited: 'JWT personalizado',
    unlimited: 'JWT personalizado',
    not_eligible: 'Elimine su personalizador de reclamos JWT',
  },
  impersonation_enabled: {
    name: 'Suplantación',
    limited: 'Suplantación',
    unlimited: 'Suplantación',
    not_eligible: 'No se permite la suplantación',
  },
  bring_your_ui_enabled: {
    name: 'Trae tu propia interfaz de usuario',
    limited: 'Trae tu propia interfaz de usuario',
    unlimited: 'Trae tu propia interfaz de usuario',
    not_eligible: 'Elimina tus recursos de interfaz de usuario personalizados',
  },
  idp_initiated_sso_enabled: {
    /** UNTRANSLATED */
    name: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    limited: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    unlimited: 'IDP-initiated SSO',
    /** UNTRANSLATED */
    not_eligible: 'IDP-initiated SSO not allowed',
  },
  saml_applications_limit: {
    /** UNTRANSLATED */
    name: 'SAML applications',
    /** UNTRANSLATED */
    limited: '{{count, number}} SAML application',
    /** UNTRANSLATED */
    limited_other: '{{count, number}} SAML applications',
    /** UNTRANSLATED */
    unlimited: 'Unlimited SAML applications',
    /** UNTRANSLATED */
    not_eligible: 'Remove your SAML applications',
  },
};

export default Object.freeze(quota_item);
