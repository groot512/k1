(function () {
  'use strict';
  const LANGS = { ko:{flag:'🇰🇷',name:'한국어',html:'ko'}, en:{flag:'🇺🇸',name:'English',html:'en'}, ja:{flag:'🇯🇵',name:'日本語',html:'ja'}, zh:{flag:'🇨🇳',name:'中文',html:'zh-CN'} };
  const M = {
    ko: {
      title:'유튜브 레시피 추출기 — K1 Recipe', description:'유튜브 링크에서 재료, 조리순서와 팁을 자동 추출해 한눈에 확인하세요.',
      story:'K1 스토리', recipes:'K1 레시피', youtube:'유튜브 레시피', hero:'유튜브 레시피 가져오기', heroDesc:'링크만 붙여넣으면 유튜브 레시피 추출이 자동으로 끝나요.<br><strong>영상과 레시피를 한눈에</strong> 보며 더 편하게 요리하세요.',
      placeholder:'유튜브 링크를 붙여넣으세요', extract:'추출하기', saved:'저장된 레시피', loading:'레시피를 분석하고 있어요...', loadingInitial:'자막을 가져오는 중',
      transcript:'자막', lines:'줄', ingredients:'🥬 재료', steps:'👨‍🍳 조리순서', tips:'💡 팁', cookingTips:'💡 요리 팁', footerRecipes:'레시피',
      required:'유튜브 링크를 입력해주세요!', unknown:'알 수 없는 오류', network:'서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.', noTips:'이 영상에서는 별도의 팁이 언급되지 않았어요.',
      copySuccess:'📋 JSON이 클립보드에 복사되었습니다!', copyFail:'복사 실패 — 브라우저 권한을 확인하세요', detailFail:'레시피를 불러올 수 없습니다: {error}',
      count:'{count}개', ingredientCount:'({count}가지)', step:'단계', easy:'쉬움 ⭐', medium:'보통 ⭐⭐', hard:'어려움 ⭐⭐⭐',
      loadVideo:'영상 정보를 가져오는 중...', loadTranscript:'자막을 추출하는 중...', loadAI:'AI가 레시피를 분석하는 중... (10~20초)', loadFinish:'결과를 정리하는 중...'
    },
    en: {
      title:'YouTube Recipe Extractor — K1 Recipe', description:'Turn a YouTube cooking video into clear ingredients, steps, and tips.', story:'K1 Story', recipes:'K1 Recipes', youtube:'YouTube Recipes', hero:'Import a YouTube Recipe', heroDesc:'Paste a link and K1 extracts the recipe automatically.<br>Cook more easily with the <strong>video and recipe side by side</strong>.', placeholder:'Paste a YouTube link', extract:'Extract Recipe', saved:'Saved Recipes', loading:'Analyzing the recipe...', loadingInitial:'Fetching captions', transcript:'Captions', lines:'lines', ingredients:'🥬 Ingredients', steps:'👨‍🍳 Directions', tips:'💡 Tips', cookingTips:'💡 Cooking Tips', footerRecipes:'Recipes', required:'Please enter a YouTube link.', unknown:'Unknown error', network:'Unable to reach the extraction server. Please try again shortly.', noTips:'No separate cooking tips were mentioned in this video.', copySuccess:'📋 JSON copied to the clipboard!', copyFail:'Copy failed — check your browser permission.', detailFail:'Unable to load the recipe: {error}', count:'{count} saved', ingredientCount:'({count} items)', step:'Step', easy:'Easy ⭐', medium:'Medium ⭐⭐', hard:'Hard ⭐⭐⭐', loadVideo:'Fetching video details...', loadTranscript:'Extracting captions...', loadAI:'AI is analyzing the recipe... (10–20 sec)', loadFinish:'Preparing your recipe...'
    },
    ja: {
      title:'YouTubeレシピ抽出 — K1 Recipe', description:'YouTube料理動画から材料、手順、コツを自動で抽出します。', story:'K1ストーリー', recipes:'K1レシピ', youtube:'YouTubeレシピ', hero:'YouTubeレシピを取り込む', heroDesc:'リンクを貼るだけでレシピを自動抽出。<br><strong>動画とレシピを一画面で</strong>見ながら快適に料理できます。', placeholder:'YouTubeリンクを貼り付けてください', extract:'抽出する', saved:'保存済みレシピ', loading:'レシピを解析しています...', loadingInitial:'字幕を取得中', transcript:'字幕', lines:'行', ingredients:'🥬 材料', steps:'👨‍🍳 作り方', tips:'💡 コツ', cookingTips:'💡 料理のコツ', footerRecipes:'レシピ', required:'YouTubeリンクを入力してください。', unknown:'不明なエラー', network:'抽出サーバーに接続できません。しばらくしてから再度お試しください。', noTips:'この動画では特別なコツは紹介されていません。', copySuccess:'📋 JSONをクリップボードにコピーしました！', copyFail:'コピーできませんでした。ブラウザの権限をご確認ください。', detailFail:'レシピを読み込めません: {error}', count:'{count}件', ingredientCount:'({count}品)', step:'手順', easy:'簡単 ⭐', medium:'普通 ⭐⭐', hard:'難しい ⭐⭐⭐', loadVideo:'動画情報を取得中...', loadTranscript:'字幕を抽出中...', loadAI:'AIがレシピを解析中... (10〜20秒)', loadFinish:'結果を整理中...'
    },
    zh: {
      title:'YouTube食谱提取器 — K1 Recipe', description:'从YouTube烹饪视频中自动提取食材、步骤和技巧。', story:'K1品牌故事', recipes:'K1食谱', youtube:'YouTube食谱', hero:'导入YouTube食谱', heroDesc:'粘贴链接即可自动提取食谱。<br><strong>视频与食谱同屏</strong>，让烹饪更轻松。', placeholder:'粘贴YouTube链接', extract:'提取食谱', saved:'已保存食谱', loading:'正在分析食谱...', loadingInitial:'正在获取字幕', transcript:'字幕', lines:'行', ingredients:'🥬 食材', steps:'👨‍🍳 步骤', tips:'💡 技巧', cookingTips:'💡 烹饪技巧', footerRecipes:'食谱', required:'请输入YouTube链接。', unknown:'未知错误', network:'无法连接提取服务器，请稍后重试。', noTips:'此视频中没有提到额外的烹饪技巧。', copySuccess:'📋 JSON已复制到剪贴板！', copyFail:'复制失败，请检查浏览器权限。', detailFail:'无法加载食谱：{error}', count:'{count}个', ingredientCount:'({count}种)', step:'步骤', easy:'简单 ⭐', medium:'普通 ⭐⭐', hard:'困难 ⭐⭐⭐', loadVideo:'正在获取视频信息...', loadTranscript:'正在提取字幕...', loadAI:'AI正在分析食谱...（10–20秒）', loadFinish:'正在整理结果...'
    }
  };
  let language = localStorage.getItem('k1Lang');
  if (!LANGS[language]) language = (navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en';
  function t(key, values) {
    let out = M[language]?.[key] || M.ko[key] || key;
    if (values) Object.entries(values).forEach(([name,value]) => { out = out.replaceAll(`{${name}}`, value); });
    return out;
  }
  function apply() {
    document.documentElement.lang = LANGS[language].html;
    document.title = t('title');
    const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = t('description');
    document.querySelectorAll('[data-yt-i18n]').forEach(el => { el.textContent = t(el.dataset.ytI18n); });
    document.querySelectorAll('[data-yt-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.ytI18nHtml); });
    document.querySelectorAll('[data-yt-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.ytI18nPlaceholder); });
    document.querySelectorAll('[data-lang]').forEach(el => { el.classList.toggle('active', el.dataset.lang === language); });
    document.getElementById('ytLangFlag').textContent = LANGS[language].flag;
    document.getElementById('ytLangName').textContent = LANGS[language].name;
  }
  function setLanguage(next) { if (!LANGS[next]) return; language = next; localStorage.setItem('k1Lang', next); apply(); document.dispatchEvent(new CustomEvent('k1:youtube-language')); }
  const selector = document.getElementById('ytLangSelector');
  document.getElementById('ytLangButton').addEventListener('click', event => { event.stopPropagation(); selector.classList.toggle('open'); });
  selector.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); setLanguage(button.dataset.lang); selector.classList.remove('open'); }));
  document.addEventListener('click', () => selector.classList.remove('open'));
  window.K1YouTubeI18n = { t, apply, setLanguage, get language(){ return language; } };
  apply();
})();
