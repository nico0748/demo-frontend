import { OnboardingStep } from './types';

export const STEPS: OnboardingStep[] = [
    {
        id: 0,
        title: 'STEP 0：はじめに（導入）',
        description: '基本情報の入力、会社概要・企業理念の説明と、本オンボーディング全体の流れを確認します。',
        category: 'General',
        notionUrl: 'https://notion.so/company/intro',
        estimatedTime: '10 min'
    },
    {
        id: 1,
        title: 'STEP 1：使用ツールの理解',
        description: 'Slack, Notion, Microsoft 365, Google Calendar等の役割と使い分けを理解します。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/tools',
        estimatedTime: '15 min'
    },
    {
        id: 2,
        title: 'STEP 2：Slack の招待を受ける',
        description: '招待メールを確認し、プロフィールの設定と通知設定を行います。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/slack-guide',
        estimatedTime: '5 min'
    },
    {
        id: 3,
        title: 'STEP 3：さくらメールのメールアドレス取得',
        description: '会社メールアドレスの発行とGmailへの転送設定を行います。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/email-setup',
        estimatedTime: '10 min'
    },
    {
        id: 4,
        title: 'STEP 4：Google Calendar の共有設定',
        description: '自身のカレンダーを社内で共有設定し、可視化します。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/calendar',
        estimatedTime: '5 min'
    },
    {
        id: 5,
        title: 'STEP 5：Notion 本招待を受ける',
        description: 'Notionワークスペースに参加し、NewComersページを確認します。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/newcomers',
        estimatedTime: '5 min'
    },
    {
        id: 6,
        title: 'STEP 6：DB メンバーに自分の項目を作成',
        description: '社内メンバーDBに自己紹介情報を登録します。',
        category: 'General',
        notionUrl: 'https://notion.so/company/member-db',
        estimatedTime: '10 min'
    },
    {
        id: 7,
        title: 'STEP 7：GitHub アカウントの確認',
        description: '社内Organizationへの招待を受け、二要素認証を設定します。',
        category: 'IT',
        notionUrl: 'https://notion.so/company/github',
        estimatedTime: '5 min'
    },
    {
        id: 8,
        title: 'STEP 8：Microsoft Defender for Business のインストール',
        description: 'セキュリティソフトをPCにインストールし、保護を有効化します。',
        category: 'Security',
        notionUrl: 'https://notion.so/company/defender',
        estimatedTime: '15 min'
    },
    {
        id: 9,
        title: 'STEP 9：MFA（多要素認証）の設定',
        description: 'Microsoft Authenticator等を使用し、各サービスのMFAを有効化します。',
        category: 'Security',
        notionUrl: 'https://notion.so/company/mfa',
        estimatedTime: '15 min'
    },
    {
        id: 10,
        title: 'STEP 10：情報セキュリティ基本方針の確認',
        description: 'セキュリティポリシーを確認し、同意します。',
        category: 'Security',
        notionUrl: 'https://notion.so/company/security-policy',
        estimatedTime: '10 min'
    },
    {
        id: 11,
        title: 'STEP 11：プライバシーポリシーの確認',
        description: '個人情報の取り扱いに関する規程を確認します。',
        category: 'Security',
        notionUrl: 'https://notion.so/company/privacy',
        estimatedTime: '5 min'
    },
    {
        id: 12,
        title: 'STEP 12：就業規則の確認',
        description: '勤務時間、休暇、服務規律などの就業規則を確認します。',
        category: 'Contracts',
        notionUrl: 'https://notion.so/company/rules',
        estimatedTime: '20 min'
    },
    {
        id: 13,
        title: 'STEP 13：秘密保持契約書（NDA）への署名',
        description: 'NDAの内容を確認し、電子署名を行います。',
        category: 'Contracts',
        notionUrl: 'https://notion.so/company/nda',
        estimatedTime: '10 min'
    },
    {
        id: 14,
        title: 'STEP 14：労働条件通知書への署名',
        description: '労働条件通知書の内容を確認し、署名を行います。',
        category: 'Contracts',
        notionUrl: 'https://notion.so/company/contract',
        estimatedTime: '10 min'
    },
    {
        id: 15,
        title: 'STEP 15：財務担当への情報連携',
        description: '給与処理に必要な情報を財務担当へ連携します。',
        category: 'Finance',
        notionUrl: 'https://notion.so/company/finance-contact',
        estimatedTime: '5 min'
    },
    {
        id: 16,
        title: 'STEP 16：freee 登録関連',
        description: 'freeeのアカウント登録と入社フォームへの回答を行います。',
        category: 'Finance',
        notionUrl: 'https://notion.so/company/freee',
        estimatedTime: '15 min'
    }
];
