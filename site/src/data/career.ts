// /src/data/career.ts
export type Project = {
  name: string
  period: string
  overview: string[]
  phases: string[]
  responsibilities: string[]
  achievements?: string[]
  tech?: {
    os?: string[]
    languages?: string[]
    db?: string[]
    others?: string[]
    team?: string
  }
}

export type CareerCompany = {
  company: string
  period: string
  division?: string
  roleType: '自社開発' | 'SIer' | '業務委託'
  business?: string
  projects: Project[]
}

export const careerCompanies: CareerCompany[] = [
  {
    company: 'アソビュー株式会社', period: '2025.12〜現在', roleType: '業務委託', business: 'レジャー・遊びの予約サービス', projects: [
      { name: 'Java／Gradleモダナイゼーション', period: '2026.01〜2026.04', overview: ['Java 8からJava 25へのアップグレードとビルド環境の更新', 'coupon、point、schedulerの主要パッケージを対象に対応'], phases: ['設計', '開発', 'テスト'], responsibilities: ['Version Catalogによる依存関係管理の標準化', '実装、リグレッションテスト、購買導線の統合テスト'], achievements: ['大きなバージョン差分を伴う改修を一貫して実施し、保守性を向上'], tech: { languages: ['Java', 'Gradle'], others: ['Version Catalog'] } },
      { name: '顧客向けAsoviewサービスの開発・保守', period: '2026.05〜現在（セキュリティ支援期間を除く）', overview: ['一般顧客向けアプリケーションの保守開発・機能改善'], phases: ['設計', '開発', 'テスト', '運用'], responsibilities: ['SEO向けロケーションページの自動化', 'Google Action Center向けデータの最適化'] },
      { name: 'パートナー向け予約・商品管理サービスのセキュリティ強化', period: '2026.06〜2026.09（断続的）', overview: ['セキュリティインシデント対応と継続的な脆弱性改善'], phases: ['調査', '設計', '開発', 'テスト', '運用'], responsibilities: ['長期未ログインアカウントの休眠化', '内部APIへのアクセス制御強化', '機密情報管理の改善とXSS対策'], achievements: ['再発防止と継続的なリスク低減を意識した改善を推進'] }
    ]
  },
  {
    company: 'ブーストテクノロジーズ株式会社',
    period: '2024.07〜2025.12',
    roleType: '自社開発',
    business: 'サステナビリティERP「booost Sustainability Cloud」',
    projects: [
      {
        name: 'GXのERPプログラム開発',
        period: '2024.07〜2025.12',
        overview: [
          'サステナビリティ経営を支援するプラットフォームの開発・運用',
          '脱炭素経営を推進するWebアプリの設計・実装',
          '大規模商用サービスのAPI/DBを構築'
        ],
        phases: ['要件定義', '設計', '開発', 'テスト', '運用', 'アーキテクチャ改善'],
        responsibilities: [
          'Laravelを用いたバックエンド開発・保守',
          'AWS/Dockerを活用した開発',
          'PdM連携による要件整理と技術提案',
          'チーム協業による品質向上・コードレビュー'
        ],
        achievements: [
          '新機能設計〜実装を主導',
          'DB最適化による性能向上'
        ],
        tech: {
          os: ['Linux', 'macOS'],
          languages: ['PHP', 'Laravel', 'Vue', 'TypeScript'],
          db: ['MySQL'],
          team: '30名'
        }
      }
    ]
  },
  {
    company: '楽天グループ株式会社',
    period: '2022.08〜2024.07',
    roleType: '自社開発',
    business: 'ECサイト開発・運用',
    projects: [
      {
        name: '楽天ブックス チェックアウト開発・運用',
        period: '2022.08〜2024.07',
        overview: [
          '新機能開発／バグ対応／プロジェクト管理／server運用',
          'Bot Prevention（不正注文・買い占め防止）を推進し楽天アワード受賞',
          '一人n個購入制限、ラッキードロー等の機能開発',
          'Webサーバのマイグレーションを担当（LB/APP設定）'
        ],
        phases: ['要件定義', '設計', '開発', 'テスト', '運用', 'PJM（一部）'],
        responsibilities: [
          'チェックアウト領域の機能開発・運用',
          'Redisを用いた不正対策の設計・実装',
          '新サーバ環境への移行および設定',
          '他部署連携・定例会での技術提案'
        ],
        achievements: [
          'Bot Preventionで社内アワードを受賞',
          '個人情報を保持せずに不正を抑止する構成を実現',
          'インフラ運用・管理の知見を拡充'
        ],
        tech: {
          os: ['Linux', 'macOS'],
          languages: ['Java', 'SpringBoot', 'JS', 'jQuery', 'HTML'],
          db: ['Redis'],
          team: '80名'
        }
      }
    ]
  },
  {
    company: '株式会社テクノプロ テクノプロIT社',
    period: '2018.04〜2022.08',
    roleType: 'SIer',
    business: 'ソフトウェア開発／システム開発／DB構築 等',
    projects: [
      {
        name: '新料金システム構築（高速道路）',
        period: '2022.03〜2022.07',
        overview: ['高速道路の料金システムの新料金システム切替'],
        phases: ['基本設計', '詳細設計'],
        responsibilities: ['旧システムに基づく設計書作成', '業務フロー担当'],
        tech: {
          os: ['Windows'],
          languages: ['Java']
        }
      },
      {
        name: 'WEBアプリ対応（クレジットカード）',
        period: '2021.08〜2022.02',
        overview: [
          '離脱ユーザー向け一時保存・再申込誘導の仕組みを開発',
          '小規模ながら要件定義〜リリースを一気通貫'
        ],
        phases: ['要件定義', '設計', '開発', 'テスト', '運用'],
        responsibilities: [
          '配信停止画面・再申込認証画面の実装',
          '暗号化・複合化による個人情報保護'
        ],
        achievements: ['小規模案件の経験を大規模案件へ展開'],
        tech: {
          os: ['Windows', 'CentOS'],
          languages: ['Java', 'JS', 'Web Sequencer'],
          db: ['Oracle'],
          team: '12名'
        }
      },
      {
        name: 'ホテル・旅行予約システム保守／AWS移管（旅行会社）',
        period: '2020.03〜2021.07',
        overview: [
          'ホテル予約の統合・連携と保守、オンプレ→AWS移管',
          '国内旅行予約の保守（外部連携の改修）',
          '旅行者保険管理システムの開発（Mock→ProtoType→実装）'
        ],
        phases: ['保守', 'AWS移行', '開発', 'テスト', '運用', '要件定義/設計（保険）'],
        responsibilities: [
          '機能別テスト・ログ確認・運用調整',
          'SpringBoot/Gradle/protobufで保守',
          '外部連携の不具合修正',
          'AWS/Kubernetesでのログ確認・リリース',
          'SQLで保険データCRUD実装'
        ],
        achievements: [
          'AWS移行でクラウド知見を獲得',
          '外部連携・Mock/Proto型開発の経験を蓄積'
        ],
        tech: {
          os: ['Windows', 'CentOS'],
          languages: ['Java', 'JavaScript', 'jQuery', 'SpringBoot'],
          db: ['MySQL'],
          team: '10名'
        }
      },
      {
        name: '社内SE（証券会社）',
        period: '2018.04〜2020.02',
        overview: [
          '電子決裁／社員管理／日程管理システムの維持・運用',
          'Javaベースのカスタマイズ開発と自動化支援',
          'Linux運用（バッチ・承認データ連携）'
        ],
        phases: ['要件定義', '設計', '開発', 'テスト', '運用', 'マネジメント'],
        responsibilities: [
          'API活用の機能追加・カスタマイズ',
          'Shell/VBA/DBで事務自動化',
          'WBS管理・業務分担・メンバー指導'
        ],
        achievements: [
          '承認完了データの自動連携で手作業削減',
          '社内自動化を推進し効率化を実現'
        ],
        tech: {
          os: ['Windows', 'CentOS'],
          languages: ['Java', 'JavaScript', 'jQuery', 'VBA'],
          team: '8名'
        }
      }
    ]
  },
  {
    company: 'KS情報システム株式会社',
    period: '2017.04〜2018.03',
    roleType: 'SIer',
    business: 'ソフトウェア・システム開発',
    projects: [
      {
        name: '電力需要管理システム（電力会社）',
        period: '2017.10〜2018.03',
        overview: [
          '電力需要管理システムの開発後期に参画し、リリース前の仕様変更・統合テストでのバグ修正を担当'
        ],
        phases: ['仕様変更対応', 'バグ修正', '統合テスト'],
        responsibilities: [
          'JS/jQuery/jqGridで画面修正（チャット・グラフ・画面遷移）',
          '設計書不在環境でのコードリーディング＆修正',
          '急な要件変更への柔軟対応'
        ],
        achievements: ['画面設計・開発スキルを向上、柔軟な開発力を強化'],
        tech: {
          os: ['Windows'],
          languages: ['Java', 'JavaScript', 'jQuery'],
          db: ['PostgreSQL']
        }
      },
      {
        name: 'リスク管理DB構築（信託銀行）',
        period: '2017.04〜2017.09',
        overview: [
          '小規模事業者向けローン審査の厳密計算で銀行リスクを低減するDBを構築'
        ],
        phases: ['基本設計確認', '詳細設計', '開発', 'テスト'],
        responsibilities: [
          '基本設計と要件定義の整合確認',
          '詳細設計の作成',
          'DataStage/SQLによるデータ処理（変換・統合）'
        ],
        tech: {
          os: ['Windows'],
          languages: ['Java', 'DataStage'],
          db: ['Oracle']
        }
      }
    ]
  }
]
