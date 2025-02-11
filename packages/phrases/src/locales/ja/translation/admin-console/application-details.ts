const application_details = {
  page_title: 'アプリケーションの詳細',
  back_to_applications: 'アプリケーションに戻る',
  check_guide: 'ガイドを確認',
  settings: '設定',
  settings_description:
    'An "Application" is a registered software or service that can access user info or act for a user. Applications help recognize who’s asking for what from Logto and handle the sign-in and permission. Fill in the required fields for authentication.',
  integration: '統合',
  integration_description:
    "Deploy with Logto secure workers, powered by Cloudflare's edge network for top-tier performance and 0ms cold starts worldwide.",
  service_configuration: 'サービス構成',
  service_configuration_description: 'サービスで必要な構成を完了します。',
  session: 'セッション',
  endpoints_and_credentials: 'エンドポイントと資格情報',
  endpoints_and_credentials_description:
    '次のエンドポイントと資格情報を使用して、アプリケーションで OIDC 接続を設定します。',
  refresh_token_settings: 'リフレッシュトークン',
  refresh_token_settings_description:
    'このアプリケーションのリフレッシュトークン規則を管理します。',
  machine_logs: 'マシンログ',
  application_name: 'アプリケーション名',
  application_name_placeholder: '私のアプリ',
  description: '説明',
  description_placeholder: 'アプリケーションの説明を入力してください',
  config_endpoint: 'OpenID プロバイダ構成エンドポイント',
  issuer_endpoint: '発行者エンドポイント',
  authorization_endpoint: '認可エンドポイント',
  authorization_endpoint_tip:
    '認証と認可を実行するエンドポイントです。OpenID Connect の<a>認証</a>に使用されます。',
  show_endpoint_details: 'エンドポイントの詳細を表示',
  hide_endpoint_details: 'エンドポイントの詳細を非表示',
  logto_endpoint: 'Logto エンドポイント',
  application_id: 'アプリ ID',
  application_id_tip:
    '通常 Logto によって生成される一意のアプリケーション識別子です。OpenID Connect では「<a>client_id</a>」とも呼ばれます。',
  application_secret: 'アプリのシークレット',
  application_secret_other: 'アプリのシークレット',
  redirect_uri: 'リダイレクト URI',
  redirect_uris: 'リダイレクト URI',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'ユーザーがサインイン（成功した場合も失敗した場合も）した後にリダイレクトされる URI です。詳細については、OpenID Connect の<a>AuthRequest</a>を参照してください。',
  /** UNTRANSLATED */
  mixed_redirect_uri_warning:
    'Your application type is not compatible with at least one of the redirect URIs. It does not follow best practices and we strongly recommend keeping the redirect URIs consistent.',
  post_sign_out_redirect_uri: 'サインアウト後のリダイレクト URI',
  post_sign_out_redirect_uris: 'サインアウト後のリダイレクト URI',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'ユーザーのサインアウト後にリダイレクトされる URI です（オプション）。一部のアプリケーションタイプでは実質的な効果がない可能性があります。',
  cors_allowed_origins: 'CORS 許可されたオリジン',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'デフォルトでは、リダイレクト URI のすべてのオリジンが許可されます。通常、このフィールドでは何も行動を必要としません。これについての詳細情報は<a>MDN doc</a>を参照してください。',
  token_endpoint: 'トークンエンドポイント',
  user_info_endpoint: 'ユーザー情報エンドポイント',
  enable_admin_access: '管理者アクセスを有効にする',
  enable_admin_access_label:
    '管理 API へのアクセスを有効または無効にします。有効にすると、アクセストークンを使用してこのアプリケーションを代表して管理 API を呼び出すことができます。',
  always_issue_refresh_token: '常に Refresh Token を発行する',
  always_issue_refresh_token_label:
    'この設定を有効にすると、Logto は、認証要求に「prompt = consent」が提示されたかどうかにかかわらず、常に Refresh Token を発行することができます。ただし、OpenID Connect と互換性がないため、必要でない限りこのプラクティスは推奨されず、問題が発生する可能性があります。',
  refresh_token_ttl: 'リフレッシュトークンの有効期限（日単位）',
  refresh_token_ttl_tip:
    'リフレッシュトークンが期限切れになるまでの期間です。トークンリクエストは、リフレッシュトークンの TTL をこの値に延長します。',
  rotate_refresh_token: 'Refresh Token を切り替える',
  rotate_refresh_token_label:
    '有効にすると、Logto は、元の TTL の 70％ が経過したときまたは特定の条件が満たされた場合、トークン要求で新しい Refresh Token を発行します。<a>詳細を見る</a>',
  /** UNTRANSLATED */
  rotate_refresh_token_label_for_public_clients:
    'When enabled, Logto will issue a new refresh token for each token request. <a>Learn more</a>',
  backchannel_logout: 'バックチャネルログアウト',
  backchannel_logout_description:
    'OpenID Connect バックチャネルログアウトエンドポイントを構成し、このアプリケーションにセッションが必要かどうかを設定します。',
  backchannel_logout_uri: 'バックチャネルログアウト URI',
  backchannel_logout_uri_session_required: 'セッションが必要ですか？',
  backchannel_logout_uri_session_required_description:
    '有効にすると、RP は、`sid` （セッション ID）クレームをログアウトトークンに含めて、`backchannel_logout_uri` が使用されるときに RP セッションが OP と一致するように要求します。',
  delete_description:
    'この操作は元に戻すことはできません。アプリケーション名「<span>{{name}}</span>」を入力して確認してください。',
  enter_your_application_name: 'アプリケーション名を入力してください',
  application_deleted: 'アプリケーション{{name}}が正常に削除されました',
  redirect_uri_required: 'リダイレクト URI を少なくとも 1 つ入力する必要があります',
  app_domain_description_1:
    'Feel free to use your domain with {{domain}} powered by Logto, which is permanently valid.',
  app_domain_description_2:
    'Feel free to utilize your domain <domain>{{domain}}</domain> which is permanently valid.',
  custom_rules: 'カスタム認証ルール',
  custom_rules_placeholder: '^/(admin|privacy)/.+',
  custom_rules_description:
    'Set rules with regular expressions for authentication-required routes. Default: full-site protection if left blank.',
  authentication_routes: '認証ルート',
  custom_rules_tip:
    "Here are two case scenarios:<ol><li>To only protect routes '/admin' and '/privacy' with authentication: ^/(admin|privacy)/.*</li><li>To exclude JPG images from authentication: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Redirect your authentication button using the specified routes. Note: These routes are irreplaceable.',
  protect_origin_server: 'オリジンサーバーを保護する',
  protect_origin_server_description:
    'Ensure to protect your origin server from direct access. Refer to the guide for more <a>detailed instructions</a>.',
  session_duration: 'セッション期間（日単位）',
  try_it: 'お試しください',
  no_organization_placeholder: 'No organization found. <a>Go to organizations</a>',
  field_custom_data: 'カスタムデータ',
  field_custom_data_tip:
    '追加のカスタムアプリケーション情報で、事前定義されたアプリケーションプロパティにリストされていないもの。たとえば、ビジネス固有の設定と構成。',
  custom_data_invalid: 'カスタムデータは有効な JSON オブジェクトである必要があります',
  branding: {
    name: 'ブランディング',
    description: 'Consent 画面上でアプリケーションの表示名とロゴをカスタマイズします。',
    description_third_party:
      'アプリケーションの同意画面に表示される名前とロゴをカスタマイズします。',
    app_logo: 'アプリのロゴ',
    app_level_sie: 'アプリレベルのサインインエクスペリエンス',
    app_level_sie_switch:
      'アプリレベルのサインインエクスペリエンスを有効にし、アプリ固有のブランディングを設定します。無効にすると、全体的なサインインエクスペリエンスが使用されます。',
    more_info: '詳細',
    more_info_description: 'Consent 画面上でアプリケーションに関する追加情報を提供します。',
    display_name: '表示名',
    application_logo: 'アプリケーションのロゴ',
    application_logo_dark: 'アプリケーションのロゴ（ダーク）',
    brand_color: 'ブランドカラー',
    brand_color_dark: 'ブランドカラー（ダーク）',
    terms_of_use_url: 'アプリケーション利用規約 URL',
    privacy_policy_url: 'アプリケーションプライバシーポリシー URL',
  },
  permissions: {
    name: '権限',
    description:
      'ユーザーが特定のデータタイプにアクセスするためにサードパーティアプリケーションに対して承認される必要がある権限を選択します。',
    user_permissions: '個人ユーザーデータ',
    organization_permissions: '組織アクセス',
    table_name: '権限を許可',
    field_name: '権限',
    field_description: '同意画面に表示',
    delete_text: '権限を削除',
    permission_delete_confirm:
      'この操作は、ユーザーの特定のデータタイプに対するユーザー認証を要求するアプリケーションに許可された権限を撤回し、続行してもよろしいですか？',
    permissions_assignment_description:
      'ユーザーが特定のデータタイプにアクセスするためにサードパーティアプリケーションが要求している権限を選択します。',
    user_profile: 'ユーザーデータ',
    api_permissions: 'API 権限',
    organization: '組織権限',
    user_permissions_assignment_form_title: 'ユーザープロファイル権限を追加',
    organization_permissions_assignment_form_title: '組織権限を追加',
    api_resource_permissions_assignment_form_title: 'API リソース権限を追加',
    user_data_permission_description_tips:
      '個人ユーザーデータ権限の説明を「サインイン体験 > コンテンツ > 言語管理」を介して変更できます',
    permission_description_tips:
      'Logto がサードパーティアプリケーションの認証プロバイダ（IdP）として使用され、ユーザーに承認を要求される場合、この説明が同意画面に表示されます。',
    user_title: 'ユーザー',
    user_description:
      '特定のユーザーデータにアクセスするためにサードパーティアプリケーションが要求する権限を選択します。',
    grant_user_level_permissions: 'ユーザーデータの権限を付与する',
    organization_title: '組織',
    organization_description:
      '特定の組織データにアクセスするためにサードパーティアプリケーションが要求する権限を選択します。',
    grant_organization_level_permissions: '組織データの権限を付与する',
  },
  roles: {
    assign_button: 'マシン間の役割を割り当てる',
    delete_description:
      'この操作は、このマシン対マシンアプリからこの役割を削除します。役割自体はまだ存在しますが、もはやマシン対マシンアプリに関連付けられていません。',
    deleted: '{{name}} がこのユーザーから正常に削除されました。',
    assign_title: '{{name}}にマシン間の役割を割り当てる',
    assign_subtitle:
      'マシン対マシンアプリは、関連する API リソースにアクセスするためにマシン対マシンタイプの役割が必要です。',
    assign_role_field: 'マシン間の役割を割り当てる',
    role_search_placeholder: '役割名で検索',
    added_text: '{{value, number}} 件追加',
    assigned_app_count: '{{value, number}} 個のアプリケーション',
    confirm_assign: 'マシン間の役割を割り当てる',
    role_assigned: '役割の割り当てに成功しました。',
    search: '役割名、説明、または ID で検索',
    empty: '利用可能な役割はありません',
  },
  secrets: {
    value: '値',
    empty: 'アプリケーションにはシークレットがありません。',
    created_at: '作成日',
    expires_at: '有効期限',
    never: 'なし',
    create_new_secret: '新しいシークレットを作成',
    delete_confirmation:
      'この操作は元に戻せません。本当にこのシークレットを削除してもよろしいですか？',
    /** UNTRANSLATED */
    deleted: 'The secret has been successfully deleted.',
    /** UNTRANSLATED */
    activated: 'The secret has been successfully activated.',
    /** UNTRANSLATED */
    deactivated: 'The secret has been successfully deactivated.',
    legacy_secret: 'レガシーシークレット',
    expired: '期限切れ',
    expired_tooltip: 'このシークレットは {{date}} に期限切れになりました。',
    create_modal: {
      title: 'アプリケーションシークレットを作成',
      expiration: '有効期限',
      expiration_description: 'シークレットは{{date}}に期限切れになります。',
      expiration_description_never:
        'シークレットは期限切れになりません。セキュリティを強化するため、有効期限を設定することをお勧めします。',
      days: '{{count}} 日',
      days_other: '{{count}} 日間',
      /** UNTRANSLATED */
      years: '{{count}} year',
      /** UNTRANSLATED */
      years_other: '{{count}} years',
      created: 'シークレット {{name}} が正常に作成されました。',
    },
    edit_modal: {
      title: 'アプリケーションシークレットを編集',
      edited: 'シークレット {{name}} が正常に編集されました。',
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
