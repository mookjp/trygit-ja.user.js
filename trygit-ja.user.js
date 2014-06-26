// ==UserScript==
// @name        trygit-ja.user.js
// @namespace   trygit-ja.user.js
// @version 1.0
// @description Translate try.github.io introduction into Japanese
// @match https://try.github.io/levels/1/challenges/*
// ==/UserScript==

// ドキュメントの日本語訳です。
var header1 = '<em>1.1</em>15分でGitを学んでみませんか？';
var docs1 = '<p>Gitを使えば、複数のグループで同時に同じドキュメント(大体の場合はコード)を管理することができ、お互いのじゃまをすることもありません。このようなシステムを、分散型バージョン管理システムと言います。</p> \
<p>下にあるターミナルプロンプトでは現在「octocox」と名づけたディレクトリの中にいます。この中でGitリポジトリを初期化するには、次のコマンドを入力してください。</p> \
<p><code class="input">git init</code></p>';

var header2 = '<em>1.2</em>ステータスを確認する';
var docs2 = '<p>よくできました！Gitが私たちに教えてくれているように、「octobox」ディレクトリは空のリポジトリ<code>/.git/</code>を持っています。このリポジトリはGitが操作する隠しディレクトリです。</p>\
<p>このチュートリアルを進めるうえで、あなたの作業を保存するために―――そしてあなたがチュートリアルを完了し、バッジを手に入れたときのために―――前もって<a href="https://www.codeschool.com/account/courses/try-git/add">Code Schoolのアカウントを作成しましょう</a>。お待ちしています。</p>\
<p>次に、プロジェクトがどんな状態かを、<code>git status</code>コマンドで確認してみましょう。</p>\
<p><code class="input"`>git status</code></p>';

var header3 = '<em>1.3</em>Add と Commit';
var docs3 = '<p>さて、私はoctoboxリポジトリに<code>octocat.txt</code>というファイルを作成しました。(下のブラウザから見えるでしょう)</p>\
<p>再度<code>git status</code>コマンドを実行して、リポジトリのステータスがどのように変わったかを確認してみましょう。</p>\
<p><code class="input">git status</code></p>';

var header4 = '<em>1.4</em>変更を追加する';
var docs4 = '<p>いい感じです。Gitリポジトリは正しく動いているように見えますね。Gitが<code>octcat.txt</code>が「untracked」だと言っているのに気づきましたか？\
Gitが<code>octocat.txt</code>を新しいファイルだと認識しているのです。</p>\
<p>Gitに<code>octocat.txt</code>の変更を追跡させるには、はじめにファイルをステージに追加するために<code>git add</code>を実行する必要があります。</p>\
<p><code class="input">git add octocat.txt</code></p>';

var header5 = '<em>1.5</em>変更を確認する';
var docs5 = '\
<p>いいですね！Gitは今、私たちのファイル<code>octocat.txt</code>を追跡しています。<code>git status</code>をもう一度実行してどうなっているかを確かめてみましょう。</p>\
<p><code class="input">git status</code></p>';

var header6 = '<em>1.6</em>コミットする';
var docs6 = '<p>Gitが<code>コミットされる変更を表示している</code>のに気づきましたか？ここで表示されているファイルはステージにあり、まだリポジトリの中にはありません。\
私たちはファイルをリポジトリに登録する前に、ステージ上へ追加したり取り除いたりすることができます。</p>\
<p>ステージに追加された変更を保存するには、変更点を説明したメッセージを<code>commit</code>コマンドで登録します。このコマンドを入力してみましょう:</p>\
<p><code class="input">git commit -m "Add cute octocat story"</code></p>';

var header7 = '<em>1.7</em>すべての変更を追加する';
var docs7 = '<p>いいですね！もし同じ種類のたくさんのファイルを追加したい場合には、ワイルドカードを用いることもできます。下のあなたのディレクトリに、いくつかの.txtファイルを追加しておきました。</p>\
<p>私は「octofamily」というディレクトリの中にいくつかのファイルを、そして「octobox」ディレクトリのルートににいくつかのファイルを置いておきました。幸運なことに、これらすべてのファイルはワイルドカードで<code>add</code>できます。クオートを使うのを忘れないで下さいね！</p>\
<p><code class="input">git add \'*.txt\'</code></p>';

var header8 = '<em>1.8</em>すべての変更をコミットする';
var docs8 = '<p>OK、今あなたはすべてのテキストファイルをステージに追加しました。git statusを使ってコミットしようとしているものを確認してみてください。</p>\
<p>問題なさそうなら、次に進みましょう:</p>\
<p><code class="input">git commit -m \'Add all the octocat txt files\'</code></p>';

var header9 = '<em>1.9</em>履歴';
var docs9 = '<p>ここまでで、いくつかのコミットを作成しましたね。それでは、変更した点を確認するために、これらのコミットを見てみましょう。</p>\
<p>幸運なことに、<code>git log</code>というコマンドがあります。Gitのログとは、これまでに変更した点をすべて記録している日誌のようなものだと考えてください。ログは、コミットした順に並んでいます。次のコマンドを実行してみましょう:<p>\
<p><code class="input">git log</code></p>';

var header10 = '<em>1.10</em>リモートリポジトリ';
var docs10 = '\
<p>よくできました！次に進みましょう。あなたがTry Gitで使うための、新しい空のリポジトリをGithubに用意しておきました。<code>https://github.com/try-git/try_git.git</code>です。私たちのローカルの<i>リポジトリ</i>をGithubのサーバーへ移動する場合は、リモートリポジトリを登録する必要があります。</p>\
<p>このコマンドはリモートの<i>名前</i>と<i>URL</i>をパラメータとして取ります。この場合は<code>https://github.com/try-git/try_git.git</code>です。</p>\
<p>それでは<code>git remote add</code>を下記のオプションと一緒に実行しましょう。</p>\
<p><code class="input">git remote add origin https://github.com/try-git/try_git.git</code></p>';

var header11 = '<em>1.11</em>リモートへプッシュする';
var docs11 = '\
<p>pushコマンドはGitに、私たちの準備し終わったコミットをどこに置くか教えます。それではローカルでの変更を、originリポジトリ(Githubの)にあげてみましょう。</p>\
<p>リモートの名前は<code>origin</code>で、デフォルトのローカルブランチの名前は<code>master</code>です。<code>-u</code>オプションは、Gitにパラメータを覚えておかせるものです。そうすることで、次回は単純に<code>git push</code>を実行するだけでGitは何をするか理解してくれます。次に進んで<code>push</code>してみましょう！</p>\
<p><code class="input">git push -u origin master</code></p>';

var header12 = '<em>1.12</em>リモートからプルする';
var docs12 = '\
<p>しばらく時間がたったとしましょう。私たちはほかの人々をgithubのプロジェクトに迎え入れました。彼らはあなたの変更をpullし、変更を加え、pushしました。</p>\
<p>私たちは以下のコマンドを使って、このGithubのリポジトリ上の変更を確認し、新しい変更を取り込むことができます:</p>\
<p><code class="input">git pull origin master</code></p>';

var header13 = '<em>1.13</em>差分';
var docs13 = '\
<p>ああ、いくつか追記と変更がoctocat familyになされたようです。どこが最後のコミットと異なっている(<code>different</code>)のか、<code>git diff</code>コマンドを使って見てみましょう。</p>\
<p>この場合、私たちは最も新しいコミットの差分を見たいでしょう。この差分は、<code>HEAD</code>ポインタを使って参照することができます。</p>\
<p><code class="input">git diff HEAD</code></p>';

var header14 = '<em>1.14</em>ステージでの差分';
var docs14 = '\
<p>すでにステージに乗っているファイル中の差分を見る、ということも、もう一つの便利な<code>diff</code>の使い方です。思い出してください。ステージにのったファイルは、私たちがGitにこれからコミットするファイルだ、と伝えているものなのです。</p>\
<p>それでは<code>git add</code>を使って<code>octofamily/octodog.txt</code>をステージに追加してみましょう。これは私がついさっきfamilyに追加しておいたものです。</p>\
<p><code class="input">git add octofamily/octodog.txt</code></p>';

var header15 = '<em>1.15</em>ステージでの差分(続き)';
var docs15 = '\
<p>いいですね、それでは続けて<code>git diff</code>を<code>--staged</code>オプションをつけて実行し、今あなたがステージに追加した変更を見てみましょう。<code>octodog.txt</code>が作成されていることが確認できるはずです。</p>\
<p><code class="input">git diff --staged</code></p>';

var header16 = '<em>1.16</em>ステージをリセットする';
var docs16 = '\
<p>octodogがfamilyの一部になりました。octocatは格下げです。私たちはoctodogよりoctocatが好きなので、彼のしかめっ面を元に戻すために<code>octodog.txt</code>を取り除きましょう。</p>\
<p><code>git reset</code>コマンドを使うことで、ファイルをステージから取り除くことができます。それでは<code>octofamily/octodog.txt</code>を取り除きましょう。</p>\
<p><code class="input">git reset octofamily/octodog.txt</code></p>';

var header17 = '<em>1.17</em>取り消し';
var docs17 = '\
<p><code>git reset</code>はoctodog.txtをステージから取り除くためにうまく働いてくれました。しかし、まだoctodogが消えてはおらず、存在していることに気づくでしょう。彼はただステージ上にはいないというだけです。もし私たちが、彼が来てパーティをめちゃくちゃにする前のように戻れたらいいのですが。</p>\
<p>ファイルは<code>git checkout -- &lt;target&gt;</code>を使うことによって、最後のコミット時に戻すことができます。続けてoctocat.txtの最後のコミットより後のすべての変更を捨て去ってしまいましょう。</p>\
<p><code class="input">git checkout -- octocat.txt</code></p>';

var header18 = '<em>1.18</em>ブランチを切る';
var docs18 = '\
<p>開発者がある機能の追加やバグの修正を行っているとき、彼らはよくコードのコピー(<code>ブランチ</code>とも言います)を作り、別々のコミットを作れるようにしておきます。そして、作業が終わった時にはこのブランチをメインの<code>master</code>ブランチへとマージします。</p>\
<p>私たちはすべてのうるさいoctocatたちを消してしまいたいので、<code>clean_up</code>ブランチを作り、ここですべての作業を行いましょう:</p>\
<p><code class="input">git branch clean_up</code></p>';

var header19 = '<em>1.19</em>ブランチを切り替える';
var docs19 = '\
<p>すばらしい！今<code>git branch</code>を実行すると、2つのローカルブランチを確認できます: <code>master</code>というメインブランチと、<code>clean_up</code>という新しいブランチです。</p>\
<p><code>git checkout &lt;branch&gt;</code>コマンドを使うことによって、ブランチを切り替えることができます。それではclean_upブランチに切り替えてみましょう。</p>\
<p><code class="input">git checkout clean_up</code></p>';

var header20 = '<em>1.20</em>すべて消す';
var docs20 = '\
<p>OK, 今あなたは<code>clean_up</code>ブランチにいます。あなたはついに、すべてのうるさいoctocatたちを<code>git rm</code>コマンドを使うことによって消すことができるのです。このコマンドは、単にディスクからファイルを消すだけでなく、同時に「ファイルを削除すること」をステージに追加します。</p>\
<p>すべてのoctocatたちを掃き出すために、ワイルドカードを使いたいでしょう。それでは実行しましょう:</p>\
<p><code class="input">git rm \'*.txt\'</code></p>';

var header21 = '<em>1.21</em>ブランチの変更をコミットする';
var docs21 = '\
<p>今、あなたはすべての猫たちを消したので、この変更をコミットする必要があります。</p>\
<p><code>git status</code>を実行して、あなたがコミットしようとしている変更を確認してみましょう。</p>\
<p><code class="input">git commit -m "Remove all the cats"</code></p>';

var header22 = '<em>1.22</em>masterへ戻る';
var docs22 = '\
<p>いいですね、もうほとんど猫をやっつけることを終え…いえ、バグフィックスですね。これから<code>master</code>ブランチに戻って、<code>clean_up</code>ブランチの変更を<code>master</code>ブランチにコピー(もしくは<code>マージ</code>)することができます。</p>\
<p>それでは<code>master</code>ブランチをcheckoutして進みましょう:</p>\
<p><code class="input">git checkout master</code></p>';

var header23 = '<em>1.23</em>マージの準備';
var docs23 = '\
<p>いいでしょう、あなたが変更を<code>clean_up</code>ブランチから<code>master</code>ブランチへマージしなければいけないとき、「その時」はやってきます。深呼吸をして。怖くないですよ。</p>\
<p>私たちはすでに<code>master</code>ブランチにいるので、ただGitに<code>clean_up</code>ブランチをマージしてmasterに変更を取り込むよう伝えるだけでいいのです。</p>\
<p><code class="input">git merge clean_up</code></p>';

var header24 = '<em>1.24</em>整頓しておく';
var docs24 = '\
<p>おめでとう！あなたは最初のバグフィックスとマージを成功させました。あとは、後片付けが残るのみです。あなたは<code>clean_up</code>ブランチで必要な作業をすべて終えているので、このブランチはもう必要ありません。</p>\
<p><cdoe>git branch -d &lt;branch name&gt;</code>コマンドでブランチを消すことができます。続けて<code>clean_up</code>ブランチを消してみましょう:</p>\
<p><code class="input">git branch -d clean_up</code></p>';

var header25 = '<em>1.25</em>最後のpush';
var docs25 = '\
<p>さあこれで、最後のステップです。あなたがここまで出来たこと、そしてあなたと一緒にGitを学べたことをとても誇らしく思っています。あとは、あなたが行ったすべての作業をリモートリポジトリへpushするのみです。それで完了です！</p>\
<p><code class="input">git push</code></p>';

var lastInstruction = '\
<p>すばらしい！今回あなたは、Gitのすばらしさを少し味わえたかと思います。GitやGithubについてのもう少し詳しい情報をまとめた修了ページを見てみてください。ああ、そしてもちろんあなたのバッジもです！</p>\
<p><a href="https://try.github.io/wrap_up" class="button">修了する</a></p>';

var currentChapter = "1";

// Update instructions when the page get forward, get backward or get reloaded.
function updateDocuments() {
    var chapter = window.location.pathname.split('/').pop();
    
    var header = document.getElementsByTagName('h1')[0];
    var instructions = document.getElementById('instructions');

    header.innerHTML = eval('header' + chapter);
    instructions.innerHTML = eval('docs' + chapter);
    currentChapter = chapter;
}

// Update instructions as "final instruction".
// As this instruction does not have the unique url,
// updating functions are separated from normal one.
function updateToFinal() {
    var instructions = document.getElementById('instructions');
    instructions.innerHTML = lastInstruction;
}

// Set observer to update instruction when the page moved.
var target = document.getElementById('challenge-objective');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        
        if (currentChapter == "25") {
            updateToFinal();
            return;
        }
        updateDocuments();
    });
});
observer.observe(target, { attributes: false,
    childList: true,
    characterData: false });

window.addEventListener("onStateChange", "stateChanged");
function stateChanged(e) {
    console.log(e);
}
// Traslate the page when the window is loaded first time.
updateDocuments();

