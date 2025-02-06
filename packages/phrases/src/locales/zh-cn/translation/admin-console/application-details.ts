const application_details = {
  page_title: '应用详情',
  back_to_applications: '返回全部应用',
  check_guide: '查看指南',
  settings: '设置',
  settings_description:
    'An "Application" is a registered software or service that can access user info or act for a user. Applications help recognize who’s asking for what from Logto and handle the sign-in and permission. Fill in the required fields for authentication.',
  integration: '集成',
  integration_description:
    '使用由 Cloudflare 边缘网络提供动力的 Logto 安全工作者部署，实现世界各地的一流性能和 0ms 冷启动。',
  service_configuration: '服务配置',
  service_configuration_description: '在您的服务中完成必要的配置。',
  session: '会话',
  endpoints_and_credentials: '端点和凭据',
  endpoints_and_credentials_description: '使用以下端点和凭据在应用程序中设置 OIDC 连接。',
  refresh_token_settings: '刷新令牌设置',
  refresh_token_settings_description: '管理此应用程序的刷新令牌规则。',
  machine_logs: '机器日志',
  application_name: '应用名称',
  application_name_placeholder: '我的应用',
  description: '描述',
  description_placeholder: '请输入应用描述',
  config_endpoint: 'OpenID Provider 配置端点',
  issuer_endpoint: '发行者端点',
  authorization_endpoint: '授权端点',
  authorization_endpoint_tip: '进行鉴权与授权的端点。用于 OpenID Connect 中的 <a>鉴权</a> 流程。',
  show_endpoint_details: '显示端点详细信息',
  hide_endpoint_details: '隐藏端点详细信息',
  logto_endpoint: 'Logto 端点',
  application_id: '应用 ID',
  application_id_tip:
    '应用的唯一标识，通常由 Logto 生成。等价于 OpenID Connect 中的 <a>client_id</a>。',
  application_secret: '应用密钥',
  application_secret_other: '应用密钥',
  redirect_uri: '重定向 URI',
  redirect_uris: '重定向 URIs',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    '在用户登录完成（不论成功与否）后重定向的目标 URI。参见 OpenID Connect <a>AuthRequest</a> 以了解更多。',
  /** UNTRANSLATED */
  mixed_redirect_uri_warning:
    'Your application type is not compatible with at least one of the redirect URIs. It does not follow best practices and we strongly recommend keeping the redirect URIs consistent.',
  post_sign_out_redirect_uri: '退出登录后重定向 URI',
  post_sign_out_redirect_uris: '退出登录后重定向 URIs',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    '在用户退出登录后重定向的目标 URI（可选）。在某些应用类型中可能无实质作用。',
  cors_allowed_origins: 'CORS 允许的来源',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    '所有重定向 URI 的来源将默认被允许。通常不需要对此字段进行操作。参见 <a>MDN 文档</a> 以了解更多。',
  token_endpoint: 'Token 端点',
  user_info_endpoint: '用户信息端点',
  enable_admin_access: '启用管理访问',
  enable_admin_access_label:
    '启用或禁用对管理 API 的访问。启用后，你可以使用访问令牌代表该应用程序调用管理 API。',
  always_issue_refresh_token: '总是颁发刷新令牌',
  always_issue_refresh_token_label:
    '启用此配置将允许 Logto 始终颁发刷新令牌，无论身份验证请求中是否呈现 `prompt=consent`。 然而，除非必要，否则不推荐这样做，因为它与 OpenID Connect 不兼容，可能会导致问题。',
  refresh_token_ttl: '刷新令牌有效期（天）',
  refresh_token_ttl_tip:
    '可用于请求新访问令牌的刷新令牌在过期之前的时间段。访问令牌请求将把刷新令牌的时效延长到此值。',
  rotate_refresh_token: '轮换刷新令牌',
  rotate_refresh_token_label:
    '启用后，当原先的刷新令牌的时效已经过去 70%，或者满足一定条件时，Logto 将会为访问令牌请求发放新的刷新令牌。<a>了解更多</a>',
  /** UNTRANSLATED */
  rotate_refresh_token_label_for_public_clients:
    'When enabled, Logto will issue a new refresh token for each token request. <a>Learn more</a>',
  backchannel_logout: '后端通道注销',
  backchannel_logout_description: '配置 OpenID Connect 后端通道注销端点，以及该应用是否需要会话。',
  backchannel_logout_uri: '后端通道注销 URI',
  backchannel_logout_uri_session_required: '是否需要会话？',
  backchannel_logout_uri_session_required_description:
    '启用后，当使用 `backchannel_logout_uri` 时，RP 需要在注销令牌中包含 `sid`（会话 ID）声明，以标识 RP 与 OP 的会话。',
  delete_description: '本操作会永久性地删除该应用，且不可撤销。输入 <span>{{name}}</span> 确认。',
  enter_your_application_name: '输入你的应用名称',
  application_deleted: '应用 {{name}} 成功删除。',
  redirect_uri_required: '至少需要输入一个重定向 URI。',
  app_domain_description_1: '随时使用由 Logto 提供支持的 {{domain}} 域名，永久有效。',
  app_domain_description_2: '随时使用您的域名 <domain>{{domain}}</domain>，永久有效。',
  custom_rules: '自定义认证规则',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    '使用正则表达式为需要认证的路由设置规则。默认情况下：如果留空，则对整个站点进行保护。',
  authentication_routes: '认证路由',
  custom_rules_tip:
    "以下是两种案例场景：<ol><li>仅对'/admin'和'/privacy'路由进行认证保护：^/(admin|privacy)/.*</li><li>排除 JPG 图像的认证：^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    '通过指定的路由来重定向您的认证按钮。注意：这些路由是不可替代的。',
  protect_origin_server: '保护您的源服务器',
  protect_origin_server_description:
    '确保保护源服务器免受直接访问。请参阅指南了解更多<a>详细说明</a>。',
  session_duration: '会话持续时间（天）',
  try_it: '试一下',
  no_organization_placeholder: '找不到组织。<a>前往组织</a>',
  field_custom_data: '自定义数据',
  field_custom_data_tip:
    '不在预定义的应用程序属性中列出的其他自定义应用程序信息，例如业务特定的设置和配置。',
  custom_data_invalid: '自定义数据必须是有效的 JSON 对象',
  branding: {
    name: '品牌化',
    description: '在授权屏幕上自定义应用程序的显示名称和标识。',
    description_third_party: '自定义应用程序在同意屏幕上的显示名称和标识。',
    app_logo: '应用标识',
    app_level_sie: '应用级别的登录体验',
    app_level_sie_switch: '启用应用级别的登录体验并设置特定品牌。如果禁用，将使用全局登录体验。',
    more_info: '更多信息',
    more_info_description: '在授权屏幕上为用户提供关于您的应用程序的更多详细信息。',
    display_name: '显示名称',
    application_logo: '应用标识',
    application_logo_dark: '应用标识（深色）',
    brand_color: '品牌颜色',
    brand_color_dark: '品牌颜色（深色）',
    terms_of_use_url: '应用程序使用条款 URL',
    privacy_policy_url: '应用程序隐私政策 URL',
  },
  permissions: {
    name: '权限',
    description: '选择第三方应用程序需要的权限，以便用户授权访问特定数据类型。',
    user_permissions: '个人用户数据',
    organization_permissions: '组织访问',
    table_name: '授予权限',
    field_name: '权限',
    field_description: '在授权屏幕中显示',
    delete_text: '删除权限',
    permission_delete_confirm:
      '此操作将会撤回授予第三方应用程序的权限，阻止其请求特定数据类型的用户授权。你确定要继续吗？',
    permissions_assignment_description:
      '选择第三方应用程序请求用于用户授权访问特定数据类型的权限。',
    user_profile: '用户数据',
    api_permissions: 'API 权限',
    organization: '组织权限',
    user_permissions_assignment_form_title: '添加用户个人资料权限',
    organization_permissions_assignment_form_title: '添加组织权限',
    api_resource_permissions_assignment_form_title: '添加 API 资源权限',
    user_data_permission_description_tips:
      '你可以通过“登录体验 > 内容 > 管理语言”修改个人用户数据权限的描述。',
    permission_description_tips:
      '当 Logto 作为第三方应用程序中的身份提供者（IdP）用于授权时，用户被要求授权时，此描述会显示在授权屏幕上。',
    user_title: '用户',
    user_description: '选择第三方应用程序需要访问特定用户数据的权限。',
    grant_user_level_permissions: '授予用户数据权限',
    organization_title: '组织',
    organization_description: '选择第三方应用程序需要访问特定组织数据的权限。',
    grant_organization_level_permissions: '授予组织数据权限',
  },
  roles: {
    assign_button: '分配机器对机器角色',
    delete_description: '此操作将会从此应用中移除此角色。角色本身仍然存在，但不再与此应用关联。',
    deleted: '成功从此用户中移除 {{name}}。',
    assign_title: '将机器对机器角色分配给 {{name}}',
    assign_subtitle: '机器对机器应用必须拥有机器对机器类型的角色，才能访问相关的 API 资源。',
    assign_role_field: '分配机器对机器角色',
    role_search_placeholder: '按角色名称搜索',
    added_text: '{{value, number}}个已添加',
    assigned_app_count: '{{value, number}}个应用',
    confirm_assign: '分配机器对机器角色',
    role_assigned: '成功分配角色',
    search: '按角色名称、描述或 ID 搜索',
    empty: '没有可用的角色',
  },
  secrets: {
    value: '值',
    empty: '该应用没有任何密钥。',
    created_at: '创建时间',
    expires_at: '到期时间',
    never: '从不',
    create_new_secret: '创建新密钥',
    delete_confirmation: '此操作无法撤销。你确定要删除此密钥吗？',
    /** UNTRANSLATED */
    deleted: 'The secret has been successfully deleted.',
    /** UNTRANSLATED */
    activated: 'The secret has been successfully activated.',
    /** UNTRANSLATED */
    deactivated: 'The secret has been successfully deactivated.',
    legacy_secret: '旧密钥',
    expired: '已过期',
    expired_tooltip: '此密钥已于 {{date}} 过期。',
    create_modal: {
      title: '创建应用密钥',
      expiration: '到期',
      expiration_description: '密钥将在 {{date}} 到期。',
      expiration_description_never: '该密钥永不过期。我们建议设置一个到期日期以增强安全性。',
      days: '{{count}} 天',
      days_other: '{{count}} 天',
      /** UNTRANSLATED */
      years: '{{count}} year',
      /** UNTRANSLATED */
      years_other: '{{count}} years',
      created: '密钥 {{name}} 已成功创建。',
    },
    edit_modal: {
      title: '编辑应用密钥',
      edited: '密钥 {{name}} 已成功编辑。',
    },
  },
  saml_idp_config: {
    /** UNTRANSLATED */
    title: 'SAML IdP metadata',
    /** UNTRANSLATED */
    description:
      'Use the following metadata and certificate to configure the SAML IdP in your application.',
    /** UNTRANSLATED */
    metadata_url_label: 'IdP metadata URL',
    /** UNTRANSLATED */
    single_sign_on_service_url_label: 'Single sign-on service URL',
    /** UNTRANSLATED */
    idp_entity_id_label: 'IdP entity ID',
  },
  saml_idp_certificates: {
    /** UNTRANSLATED */
    title: 'SAML signing certificate',
    /** UNTRANSLATED */
    expires_at: 'Expires at',
    /** UNTRANSLATED */
    finger_print: 'Fingerprint',
    /** UNTRANSLATED */
    status: 'Status',
    /** UNTRANSLATED */
    active: 'Active',
    /** UNTRANSLATED */
    inactive: 'Inactive',
  },
  saml_idp_name_id_format: {
    /** UNTRANSLATED */
    title: 'Name ID format',
    /** UNTRANSLATED */
    description: 'Select the name ID format of the SAML IdP.',
    /** UNTRANSLATED */
    persistent: 'Persistent',
    /** UNTRANSLATED */
    persistent_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    transient: 'Transient',
    /** UNTRANSLATED */
    transient_description: 'Use one-time user ID as Name ID',
    /** UNTRANSLATED */
    unspecified: 'Unspecified',
    /** UNTRANSLATED */
    unspecified_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    email_address: 'Email address',
    /** UNTRANSLATED */
    email_address_description: 'Use email address as Name ID',
  },
  saml_encryption_config: {
    /** UNTRANSLATED */
    encrypt_assertion: 'Encrypt SAML assertion',
    /** UNTRANSLATED */
    encrypt_assertion_description: 'By enabling this option, the SAML assertion will be encrypted.',
    /** UNTRANSLATED */
    encrypt_then_sign: 'Encrypt then sign',
    /** UNTRANSLATED */
    encrypt_then_sign_description:
      'By enabling this option, the SAML assertion will be encrypted and then signed; otherwise, the SAML assertion will be signed and then encrypted.',
    /** UNTRANSLATED */
    certificate: 'Certificate',
    /** UNTRANSLATED */
    certificate_tooltip:
      'Copy and paste the x509 certificate you get from your service provider to encrypt the SAML assertion.',
    /** UNTRANSLATED */
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    /** UNTRANSLATED */
    certificate_missing_error: 'Certificate is required.',
    /** UNTRANSLATED */
    certificate_invalid_format_error:
      'Invalid certificate format detected. Please check the certificate format and try again.',
  },
  saml_app_attribute_mapping: {
    /** UNTRANSLATED */
    name: 'Attribute mappings',
    /** UNTRANSLATED */
    title: 'Base attribute mappings',
    /** UNTRANSLATED */
    description: 'Add attribute mappings to sync user profile from Logto to your application.',
    /** UNTRANSLATED */
    col_logto_claims: 'Value of Logto',
    /** UNTRANSLATED */
    col_sp_claims: 'Value name of your application',
    /** UNTRANSLATED */
    add_button: 'Add another',
  },
};

export default Object.freeze(application_details);
