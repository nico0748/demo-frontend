# 概要
フロントエンドのデモ用に Storybook を導入した。画面全体だけでなく、ボタンやフォームといった部品（コンポーネント）単位で動作を確認できるため、開発環境のセットアップには適していると考えたためである。

## リポジトリ構成
```
my-frontend-demo/
├── .storybook/          # Storybookの設定（テーマやViewport設定）
├── public/              # 画像などの静的資産
├── src/
│   ├── components/      # 共通UIコンポーネント（ボタン、入力欄など）
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx  <-- Storybook用の定義ファイル
│   │   │   └── Button.module.css
│   ├── demos/           # 実際のデモ画面（ページ単位）
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   └── Dashboard.stories.tsx
│   │   └── Login/
│   │       ├── Login.tsx
│   │       └── Login.stories.tsx
│   ├── hooks/           # ロジック（状態管理など）
│   └── lib/             # 外部API連携やユーティリティ
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

**.stories.tsx ファイル**: 各コンポーネントと同じフォルダに置くことで、どの部品にデモがあるか一目でわかります。
**demos/ フォルダ**: 単なる部品だけでなく、「ログイン画面」や「ダッシュボード」といったページ全体のデモもStorybook上で切り替えて表示できるようにします。
**Storybookの活用**: Storybook を使うと、わざわざブラウザでURLを叩き分けなくても、左サイドバーのメニューからポチポチとデモを切り替えられます。

## セットアップ手順
**1. プロジェクト作成**
```bash
npx create-next-app@latest my-frontend-demo --typescript --tailwind --eslint
cd my-frontend-demo
```

**2. Storybook インストール手順**
```bash
npx storybook@latest init
```
**インタラクションテスト**: Storybook上で「ボタンを押したらどうなるか」という動きも記録できます。
**公開設定**: GitHubにpushした際、Chromatic（Storybook公式のデプロイサービス）やVercelを連携させると、URLを送るだけで誰でもデモを見られるようになります。