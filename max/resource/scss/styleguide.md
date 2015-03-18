# サンプルサイト スタイルガイド

## 概要
これは架空の案件を想定したサンプルサイト向けのスタイルガイドです。  
サンプルサイトサイトで使われているアイコン、コンポーネントなどのエレメントが定義されています。  
新規でデザインを行う場合は、ここで定義されているデザインエレメントを使って作成するようにしてください。

## 本スタイルガイドについて
このスタイルガイドはKSSというスタイルガイドジェネレーターを利用しています。  
このページの内容を編集する際は元データ<code>/resource/scss/styleguide.md</code>を編集し、Gulpにてstyleguideタスクを実行（後述）してください。

## HTML文書型
HTML5

## 文字コード
utf-8

## 対応OS
### 推奨ブラウザ、OSバージョン

- IE10以上
- Safari / Firefox / Chrome 最新
- Android4.0以上
- iOS7.0以上

## 開発環境構築について
本プロジェクトでは、CSSには<code>Sass（Scss記法）</code>、<code>Compass</code>を使っています。 CSSなどの修正や更新するためには、これらが動作する環境を構築する必要があります。Sassが動く環境構築は公式サイトなどを参照してください。

- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)

## ファイル／フォルダ構成
### ルートディレクトリ

	[root]
	├─ deploy.............. 納品ディレクトリ（サーバーのルートに設置）★以下に記載
	├─ gulpfile.js......... gulp設定用ファイル
	├─ node_modules........ Node.jsのモジュール
	├─ package.json........ 使用しているパッケージとそのバージョン管理を記載したファイル
	└─ resource............ 開発用ディレクトリ★以下に記載

### 納品ディレクトリ

	deploy
	├─ assets.................... サイト共通で使用するリソースファイルを格納
	│   ├─ css
	│   │   ├─ style.css......... 全ページで読み込むCSS。Reset、レイアウト用、モジュール、調整クラスの指定
	│   │   ├─ category1.css..... ページまたは特定の階層やカテゴリでのみ使用するCSS
	│   │   └─ category2.css
	│   ├─ inc
	│   │   ├─ header.html....... ヘッダーのインクルードファイル
	│   │   ├─ footer.html....... フッターのインクルードファイル
	│   │   ├─ sidebar.html...... サイドバーのインクルードファイル
	│   │   └─ gtm.html.......... google tag manegerなど解析タグのインクルードファイル
	│   ├─ js
	│   │   ├─ head.js........... <head>内で読み込むjsファイル（UA判別、解析用スクリプト、modernizer等）
	│   │   ├─ main.js........... </body>前で読み込むjsファイル（UI、コンポーネント等）
	│   │   └─ libs.............. IE8向けのライブラリや特定の機能を使いたいページで読み込むjsファイル
	│   └─ 
	├─ index.html................ トップページ
	├─ category1
	│   └─ index.html............ 下層ページ
	└─ category2
	    └─ index.html............ 下層ページ

### 開発用ディレクトリ

	resource
	├─ img
	│   └─ sprite................ CSSスプライト用の元画像
	├─ js
	│   ├─ head
	│   │   ├─ libs.............. ライブラリファイル
	│   │   ├─ mine.............. 制作ファイル
	│   │   └─ head.js........... /libs と /mine のファイルを結合したファイル
	│   └─ main
	│       ├─ libs.............. ライブラリファイル
	│       ├─ mine.............. 制作ファイル
	│       └─ main.js........... /libs と /mine のファイルを結合したファイル
	├─ scss...................... ★以下に記載
	├─ styleguide-template....... KSSスタイルガイド生成用のテンプレートファイル
	└─ svg....................... iconフォント作成用の元SVG画像

	scss
	├─ foundation
	│   ├─ _base.scss............ サイトの基本スタイル
	│   └─ _reset.scss........... スタイルのリセット
	├─ layout
	│   ├─ _container.scss....... 基本レイアウト
	│   ├─ _footer.scss.......... フッター
	│   ├─ _header.scss.......... ヘッダー
	│   ├─ _sidebar.scss......... サイドバー
	│   └─ {$layout}.scss........ 他レイアウト関連
	├─ module
	│   ├─ _font.scss............ アイコンフォントモジュール
	│   ├─ _news.scss............ ニュースモジュール
	│   ├─ _panel.scss........... パネルモジュール
	│   └─ ***.scss.............. 他モジュール
	├─ {$page}.scss.............. 各ページ（カテゴリ）固有のスタイル
	├─ _mixin.scss............... Sass のカスタムmixin
	├─ _sprite.scss.............. CSSスプライト用SCSSファイル
	├─ _sprite-2x.scss........... CSSスプライト用SCSSファイル（Retina定義用）
	└─ _utility.scss............. 調整用クラス

## Sass のコメント書式

CSSスタイルガイド（kss-node）を導入しているため、以下の書式でコメントを記載します。  
以下、見出しモジュールのサンプルです。詳しくは [kss-node のドキュメント](https://github.com/hughsk/kss-node/blob/master/README.md) をご参照ください。

### モジュール一覧 見出しのコメント
コードの可読性向上のため、上下に <code>//</code> のみの行を挿入しています。

	//
	// 見出しモジュール
	//
	// Styleguide 1
	//

### 各モジュールのコメント
コードの可読性向上のため、上下に // のみの行を挿入しています。

	//
	// 大見出し
	//
	// 大見出しのスタイル
	// 
	// Markup:
	// <h1 class="hdg-01 {$modifiers}">見出し</h1>
	// 
	// .hdg-01-em - 強調スタイル
	// 
	// Styleguide 1.1
	//

## id/class 命名規則
### 前提
id/class名は単語間をハイフン（<code>-</code>）でつなぎます。  
また、CSSセレクタには、原則 class属性を使用します。  
（id属性はフラグメント識別子や、label属性の関連づけとして使用します。）

### レイアウトのセレクタ名
モジュールを除くレイアウト要素には、以下の接頭辞を追加しています。

- l ............. レイアウト要素

### モジュールのセレクタ名候補
モジュールでよく使うセレクタ名の候補を以下に列挙します。  
セレクタ名に <code>btn</code> と <code>button</code> など、同義のセレクタが複数混在しないようにします。

### セクション
- header ........ ヘッダ
- footer ........ フッタ
- aside ......... 補足的なコンテンツ
- section ....... セクション
- article ....... 記事
- main .......... メインコンテンツ
- sub ........... サブコンテンツ
- sidebar ....... サイドバー

### 囲み要素
- wrapper ....... 外側を囲う要素
- inner ......... 内側を囲う要素
- box ........... ボックス要素
- item .......... 子要素

### ナビゲーション・UI
- nav ........... ナビゲーション
- utility-nav ... 機能ナビゲーション
- anchor-nav .... ページ内リンク
- step-nav ...... ステップ型ナビゲーション
- menu .......... メニュー
- topicpath ..... パンくずリンク
- btn ........... ボタン
- modal ......... モーダル
- tab ........... タブ
- carousel ...... カルーセルパネル
- toggle ........ 開閉
- pagination .... ページネーション
- pager ......... ページの前後送り
- pagetop ....... ページの先頭に戻る

### フォーム
- search ........ 検索
- input ......... input要素
- textarea ...... textarea要素
- required ...... 入力必須

### 画像・メディア
- image ......... 画像
- caption ....... キャプション
- logo .......... ロゴ
- icon .......... アイコン
- thumb ......... サムネイル
- banner ........ バナー
- video ......... 映像
- audio ......... 音声

### テキスト
- hdg ........... 見出し（heading）
- desc .......... 説明文、概要文
- body .......... 本文
- topics ........ トピックス
- news .......... ニュース
- note .......... 注釈
- text .......... テキスト
- date .......... 日付
- time .......... 時間
- num ........... 数字
- name .......... 名前

### 順序
- prev .......... 前へ
- next .......... 次へ
- odd ........... 奇数
- even .......... 偶数
- first ......... 最初
- last .......... 最後
- latest ........ 最新
- oldest ........ 最古

### サイズ
- s ............. スモール
- m ............. ミディアム
- l ............. ラージ
- xs ............ エクストラ・スモール
- xl ............ エクストラ・ラージ
- min ........... 最小
- max ........... 最大
- wide .......... 広い
- narrow ........ 狭い

### 状態（接頭辞 <code>is-</code> を付ける）
- is-visible .... 表示
- is-hidden ..... 非表示
- is-disabled ... 無効
- is-active ..... 現在地、選択状態
- is-error ...... エラー

## Gulpについて
SassやJadeのコンパイルには、Gulpを使っています。Gulpを動作する環境構築が必要です。Gulpのインストールは下記のドキュメントを参照してください。

- [現場で使えるgulp入門](https://app.codegrid.net/entry/gulp-1)

<code>gulpfile.js</code>に記述しているGulpのプラグインのインストールをします。<code>gulpfile.js</code>がある同階層に<code>package.json</code>があることを確認して、ターミナルなどで、その階層に移動し、<code>sudo npm install</code>(Macの場合、Winの場合はsudoは不要)のコマンド打ってインストールさせます。 インストールを終えると再度ターミナルなどで<code>gulp</code>とコマンドを打って、問題無く動作していることを確認できれば完了です。

## Gulpのタスクについて
<code>gulpfile.js</code>に記載している以下Gulpのタスクについて説明します。

	//Tasks
	gulp.task('default', ['task-css-debug','task-js-debug','task-webserver','task-watch']);
	gulp.task('sprite', ['task-sprite']);
	gulp.task('iconfont', ['task-iconfont']);
	gulp.task('styleguide', ['task-css-debug','task-kss','task-watch']);
	gulp.task('release', ['task-css-release','task-js-release','task-imagemin']);

### デフォルト（default）

	$ gulp

開発デバッグ用のタスクです。以下のタスクを順に実行します。

- SCSSからCSSのビルド（圧縮無し）
- jsファイルの結合（圧縮無し）
- ローカルWebサーバー起動
- js,scssの更新を監視

### CSSスプライト（sprite）

	$ gulp sprite

<code>/resource/img/sprite</code>内の画像を元に以下CSSスプライト用ファイルを生成します。

- <code>/deploy/assets/img/sprite@2x.png</code>..... 1枚に結合された画像ファイル
- <code>/resource/scss/_sprite.scss</code>.......... 各画像をmixinで指定できるSCSSファイル

### アイコンフォント（iconfont）

	$ gulp iconfont

<code>/resource/svg</code>内のSVG画像を元に以下のアイコンフォント用ファイルを生成します。

SCSSでの指定方法：  
<code>/resource/svg/uE001-icon-01.svg</code>のアイコンを指定する場合、<code>/resource/scss/module/_font.scss</code>で<code>.sz-icon-arrow { content:"\E001"; }</code>と指定。

### スタイルガイド（styleguide）

	$ gulp styleguide

各SCSSに記載したコメントを元にスタイルガイドのページを生成します。

	deploy
	└─ styleguide
	    ├─ index.html........... 本ページ
	    ├─ section-XX.html...... 各モジュール毎のページ
	    └─ public............... KSSのリソースファイル

### リリース（release）

	$ gulp release

CSS,JS,画像を圧縮して最終的な納品用ファイルをまとめます。