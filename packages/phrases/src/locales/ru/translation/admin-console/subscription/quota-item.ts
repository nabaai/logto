const quota_item = {
  tenant_limit: {
    name: 'Арендаторы',
    limited: '{{count, number}} арендатор',
    limited_other: '{{count, number}} арендаторов',
    unlimited: 'Неограниченное количество арендаторов',
    not_eligible: 'Удалите свои арендаторы',
  },
  mau_limit: {
    name: 'Активные пользователи в месяц',
    limited: '{{count, number}} пользователей в месяц',
    unlimited: 'Неограниченное количество пользователей в месяц',
    not_eligible: 'Удалите всех своих пользователей',
  },
  applications_limit: {
    name: 'Приложения',
    limited: '{{count, number}} приложение',
    limited_other: '{{count, number}} приложений',
    unlimited: 'Неограниченное количество приложений',
    not_eligible: 'Удалите свои приложения',
  },
  machine_to_machine_limit: {
    name: 'Машина ко машине',
    limited: '{{count, number}} приложение для машины ко машине',
    limited_other: '{{count, number}} приложения для машин ко машине',
    unlimited: 'Неограниченное количество приложений для машин ко машине',
    not_eligible: 'Удалите свои приложения для машин ко машине',
  },
  resources_limit: {
    name: 'API ресурсы',
    limited: '{{count, number}} API ресурс',
    limited_other: '{{count, number}} API ресурсов',
    unlimited: 'Неограниченное количество API ресурсов',
    not_eligible: 'Удалите свои API ресурсы',
  },
  scopes_per_resource_limit: {
    name: 'Разрешения ресурса',
    limited: '{{count, number}} разрешение на ресурс',
    limited_other: '{{count, number}} разрешений на ресурс',
    unlimited: 'Неограниченное количество разрешений на ресурс',
    not_eligible: 'Удалите свои разрешения ресурса',
  },
  custom_domain_enabled: {
    name: 'Пользовательский домен',
    limited: 'Пользовательский домен',
    unlimited: 'Пользовательский домен',
    not_eligible: 'Удалите свой пользовательский домен',
  },
  omni_sign_in_enabled: {
    name: 'Omni-вход',
    limited: 'Omni-вход',
    unlimited: 'Omni-вход',
    not_eligible: 'Выключите свой Omni-вход',
  },
  built_in_email_connector_enabled: {
    name: 'Встроенный электронный коннектор',
    limited: 'Встроенный электронный коннектор',
    unlimited: 'Встроенный электронный коннектор',
    not_eligible: 'Удалите свой встроенный электронный коннектор',
  },
  social_connectors_limit: {
    name: 'Социальные коннекторы',
    limited: '{{count, number}} социальный коннектор',
    limited_other: '{{count, number}} социальных коннекторов',
    unlimited: 'Неограниченное количество социальных коннекторов',
    not_eligible: 'Удалите свои социальные коннекторы',
  },
  standard_connectors_limit: {
    name: 'Бесплатные стандартные коннекторы',
    limited: '{{count, number}} бесплатный стандартный коннектор',
    limited_other: '{{count, number}} бесплатных стандартных коннекторов',
    unlimited: 'Неограниченное количество стандартных коннекторов',
    not_eligible: 'Удалите свои стандартные коннекторы',
  },
  roles_limit: {
    name: 'Роли',
    limited: '{{count, number}} роль',
    limited_other: '{{count, number}} ролей',
    unlimited: 'Неограниченное количество ролей',
    not_eligible: 'Удалите свои роли',
  },
  scopes_per_role_limit: {
    name: 'Разрешения роли',
    limited: '{{count, number}} разрешение на роль',
    limited_other: '{{count, number}} разрешений на роль',
    unlimited: 'Неограниченное количество разрешений на роль',
    not_eligible: 'Удалите свои разрешения роли',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Неограниченное количество вебхуков',
    not_eligible: 'Удалите ваши вебхуки',
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
    name: 'Время хранения аудит-логов',
    limited: 'Время хранения аудит-логов: {{count, number}} день',
    limited_other: 'Время хранения аудит-логов: {{count, number}} дней',
    unlimited: 'Неограниченное количество дней',
    not_eligible: 'Без аудит-логов',
  },
  community_support_enabled: {
    name: 'Поддержка сообщества',
    limited: 'Поддержка сообщества',
    unlimited: 'Поддержка сообщества',
    not_eligible: 'Без поддержки сообщества',
  },
  customer_ticket_support: {
    name: 'Поддержка клиентов по билетам',
    limited: '{{count, number}} час(ов) поддержки клиентов по билетам',
    limited_other: '{{count, number}} часов поддержки клиентов по билетам',
    unlimited: 'Поддержка клиентов по билетам',
    not_eligible: 'Без поддержки клиентов по билетам',
  },
  mfa_enabled: {
    name: 'MFA',
    limited: 'MFA',
    unlimited: 'MFA',
    not_eligible: 'Отключите свой MFA',
  },
  sso_enabled: {
    name: 'Ограниченная',
    limited: 'Ограниченная',
    unlimited: 'Ограниченная',
    not_eligible: 'Отключить SSO',
  },
};

export default Object.freeze(quota_item);
