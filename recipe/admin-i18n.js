(function () {
  const META = {
    ko: { flag: '🇰🇷', name: '한국어', html: 'ko' },
    en: { flag: '🇬🇧', name: 'English', html: 'en' },
    ja: { flag: '🇯🇵', name: '日本語', html: 'ja' },
    zh: { flag: '🇨🇳', name: '中文', html: 'zh-CN' },
  };

  const MESSAGES = {
    ko: {
      title:'K1 Recipe — 관리자', back:'메인으로', logout:'로그아웃', login:'관리자 로그인',
      loginDesc:'K1 Recipe 관리자 페이지입니다', password:'비밀번호', enter:'접속', passwordError:'비밀번호가 올바르지 않습니다',
      manage:'레시피 관리', newRecipe:'새 레시피', newRecipeForm:'새 레시피 등록', editRecipeForm:'레시피 수정',
      youtubeUrl:'YouTube 영상 URL', youtubeHint:'전체 URL을 붙여넣으면 영상 ID가 자동 추출됩니다', youtubePlaceholder:'https://www.youtube.com/watch?v=... 또는 youtu.be/...',
      thumbnail:'썸네일 이미지', uploadClick:'클릭하여 업로드', chooseFile:'파일 선택', delete:'삭제', imageHint:'JPG/PNG, 최대 500KB 권장',
      gradient:'또는 그라데이션 배경 (이미지 없을 때)', emoji:'대표 이모지', bgColor:'배경 색상', cookTime:'조리 시간 (분)', servings:'인분', difficulty:'난이도',
      easy:'쉬움', medium:'보통', hard:'어려움', sauceEmoji:'소스 이모지', sauceColor:'소스 색상', price:'가격', amazon:'Amazon 상품 링크',
      multilingual:'다국어 콘텐츠', cancel:'취소', save:'저장', data:'데이터 관리', export:'JSON 내보내기', import:'JSON 불러오기', clearAll:'커스텀 전체 삭제',
      statBuiltin:'기본 레시피', statCustom:'커스텀 레시피', statTotal:'전체', statImages:'이미지 포함', empty:'등록된 레시피가 없습니다',
      recipe:'레시피', type:'유형', actions:'관리', builtin:'기본', custom:'커스텀', embedded:'코드에 내장됨', edit:'수정', untitled:'(제목 없음)',
      imageLarge:'⚠️ 이미지가 1MB를 초과합니다. 500KB 이하를 권장합니다.', titleRequired:'⚠️ 한국어 제목은 필수입니다', updated:'✅ 레시피가 수정되었습니다', created:'✅ 새 레시피가 등록되었습니다',
      confirmDelete:'이 레시피를 삭제하시겠습니까?', deleted:'🗑️ 레시피가 삭제되었습니다', noExport:'⚠️ 내보낼 커스텀 레시피가 없습니다', exported:'📦 {count}개 레시피를 내보냈습니다',
      invalidArray:'배열 형식이 아닙니다', imported:'📥 {count}개 레시피를 불러왔습니다 (중복 제외)', importError:'❌ JSON 파일을 읽을 수 없습니다: {error}',
      nothingToDelete:'삭제할 커스텀 레시피가 없습니다', confirmClear:'커스텀 레시피 {count}개를 모두 삭제하시겠습니까?\n(기본 내장 레시피는 유지됩니다)', cleared:'🗑️ 커스텀 레시피가 모두 삭제되었습니다'
    },
    en: {
      title:'K1 Recipe — Admin', back:'Back to site', logout:'Log out', login:'Admin login',
      loginDesc:'K1 Recipe administration', password:'Password', enter:'Sign in', passwordError:'Incorrect password',
      manage:'Recipe management', newRecipe:'New recipe', newRecipeForm:'Add new recipe', editRecipeForm:'Edit recipe',
      youtubeUrl:'YouTube video URL', youtubeHint:'Paste a full URL to extract the video ID automatically', youtubePlaceholder:'https://www.youtube.com/watch?v=... or youtu.be/...',
      thumbnail:'Thumbnail image', uploadClick:'Click to upload', chooseFile:'Choose file', delete:'Delete', imageHint:'JPG/PNG, 500KB or less recommended',
      gradient:'Gradient fallback (when no image)', emoji:'Main emoji', bgColor:'Background color', cookTime:'Cook time (min)', servings:'Servings', difficulty:'Difficulty',
      easy:'Easy', medium:'Medium', hard:'Hard', sauceEmoji:'Sauce emoji', sauceColor:'Sauce color', price:'Price', amazon:'Amazon product link',
      multilingual:'Multilingual content', cancel:'Cancel', save:'Save', data:'Data management', export:'Export JSON', import:'Import JSON', clearAll:'Delete all custom',
      statBuiltin:'Built-in recipes', statCustom:'Custom recipes', statTotal:'Total', statImages:'With images', empty:'No recipes registered',
      recipe:'Recipe', type:'Type', actions:'Actions', builtin:'Built-in', custom:'Custom', embedded:'Included in code', edit:'Edit', untitled:'(Untitled)',
      imageLarge:'⚠️ Image exceeds 1MB. 500KB or less is recommended.', titleRequired:'⚠️ A Korean title is required', updated:'✅ Recipe updated', created:'✅ Recipe created',
      confirmDelete:'Delete this recipe?', deleted:'🗑️ Recipe deleted', noExport:'⚠️ No custom recipes to export', exported:'📦 Exported {count} recipes',
      invalidArray:'The file is not an array', imported:'📥 Imported {count} recipes (duplicates skipped)', importError:'❌ Could not read JSON: {error}',
      nothingToDelete:'No custom recipes to delete', confirmClear:'Delete all {count} custom recipes?\n(Built-in recipes will remain)', cleared:'🗑️ All custom recipes deleted'
    },
    ja: {
      title:'K1 Recipe — 管理', back:'サイトへ戻る', logout:'ログアウト', login:'管理者ログイン',
      loginDesc:'K1 Recipe 管理ページ', password:'パスワード', enter:'ログイン', passwordError:'パスワードが正しくありません',
      manage:'レシピ管理', newRecipe:'新しいレシピ', newRecipeForm:'新規レシピ登録', editRecipeForm:'レシピ編集',
      youtubeUrl:'YouTube動画URL', youtubeHint:'URL全体を貼り付けると動画IDを自動抽出します', youtubePlaceholder:'https://www.youtube.com/watch?v=... または youtu.be/...',
      thumbnail:'サムネイル画像', uploadClick:'クリックしてアップロード', chooseFile:'ファイル選択', delete:'削除', imageHint:'JPG/PNG、500KB以下を推奨',
      gradient:'画像がない場合のグラデーション', emoji:'メイン絵文字', bgColor:'背景色', cookTime:'調理時間（分）', servings:'人数', difficulty:'難易度',
      easy:'簡単', medium:'普通', hard:'難しい', sauceEmoji:'ソース絵文字', sauceColor:'ソース色', price:'価格', amazon:'Amazon商品リンク',
      multilingual:'多言語コンテンツ', cancel:'キャンセル', save:'保存', data:'データ管理', export:'JSON書き出し', import:'JSON読み込み', clearAll:'カスタムを全削除',
      statBuiltin:'標準レシピ', statCustom:'カスタムレシピ', statTotal:'合計', statImages:'画像あり', empty:'登録済みレシピはありません',
      recipe:'レシピ', type:'種類', actions:'管理', builtin:'標準', custom:'カスタム', embedded:'コードに内蔵', edit:'編集', untitled:'（タイトルなし）',
      imageLarge:'⚠️ 画像が1MBを超えています。500KB以下を推奨します。', titleRequired:'⚠️ 韓国語タイトルは必須です', updated:'✅ レシピを更新しました', created:'✅ レシピを登録しました',
      confirmDelete:'このレシピを削除しますか？', deleted:'🗑️ レシピを削除しました', noExport:'⚠️ 書き出すカスタムレシピがありません', exported:'📦 {count}件を書き出しました',
      invalidArray:'配列形式ではありません', imported:'📥 {count}件を読み込みました（重複を除く）', importError:'❌ JSONを読み込めません: {error}',
      nothingToDelete:'削除するカスタムレシピがありません', confirmClear:'カスタムレシピ{count}件をすべて削除しますか？\n（標準レシピは残ります）', cleared:'🗑️ カスタムレシピをすべて削除しました'
    },
    zh: {
      title:'K1 Recipe — 管理', back:'返回网站', logout:'退出登录', login:'管理员登录',
      loginDesc:'K1 Recipe 管理页面', password:'密码', enter:'登录', passwordError:'密码不正确',
      manage:'食谱管理', newRecipe:'新食谱', newRecipeForm:'添加新食谱', editRecipeForm:'编辑食谱',
      youtubeUrl:'YouTube视频网址', youtubeHint:'粘贴完整网址即可自动提取视频ID', youtubePlaceholder:'https://www.youtube.com/watch?v=... 或 youtu.be/...',
      thumbnail:'缩略图', uploadClick:'点击上传', chooseFile:'选择文件', delete:'删除', imageHint:'建议JPG/PNG不超过500KB',
      gradient:'无图片时使用渐变背景', emoji:'主表情', bgColor:'背景颜色', cookTime:'烹饪时间（分钟）', servings:'份数', difficulty:'难度',
      easy:'简单', medium:'中等', hard:'困难', sauceEmoji:'酱料表情', sauceColor:'酱料颜色', price:'价格', amazon:'Amazon商品链接',
      multilingual:'多语言内容', cancel:'取消', save:'保存', data:'数据管理', export:'导出JSON', import:'导入JSON', clearAll:'删除全部自定义',
      statBuiltin:'内置食谱', statCustom:'自定义食谱', statTotal:'总计', statImages:'含图片', empty:'暂无食谱',
      recipe:'食谱', type:'类型', actions:'管理', builtin:'内置', custom:'自定义', embedded:'代码内置', edit:'编辑', untitled:'（无标题）',
      imageLarge:'⚠️ 图片超过1MB，建议控制在500KB以内。', titleRequired:'⚠️ 韩语标题为必填项', updated:'✅ 食谱已更新', created:'✅ 新食谱已创建',
      confirmDelete:'确定删除此食谱吗？', deleted:'🗑️ 食谱已删除', noExport:'⚠️ 没有可导出的自定义食谱', exported:'📦 已导出{count}个食谱',
      invalidArray:'文件不是数组格式', imported:'📥 已导入{count}个食谱（已跳过重复项）', importError:'❌ 无法读取JSON：{error}',
      nothingToDelete:'没有可删除的自定义食谱', confirmClear:'确定删除全部{count}个自定义食谱吗？\n（内置食谱将保留）', cleared:'🗑️ 已删除全部自定义食谱'
    }
  };

  let language = localStorage.getItem('k1Lang') || 'ko';
  if (!META[language]) language = 'ko';

  function t(key, values = {}) {
    let value = MESSAGES[language]?.[key] || MESSAGES.ko[key] || key;
    Object.entries(values).forEach(([name, replacement]) => {
      value = value.replaceAll(`{${name}}`, replacement);
    });
    return value;
  }

  function apply() {
    document.querySelectorAll('[data-admin-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.adminI18n);
    });
    document.querySelectorAll('[data-admin-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(el.dataset.adminI18nPlaceholder);
    });
    document.documentElement.lang = META[language].html;
    document.title = t('title');
    const flag = document.getElementById('adminLangFlag');
    const name = document.getElementById('adminLangName');
    if (flag) flag.textContent = META[language].flag;
    if (name) name.textContent = META[language].name;
    document.querySelectorAll('#adminLangDropdown [data-lang]').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === language);
    });
  }

  function setLanguage(next) {
    if (!META[next]) return;
    language = next;
    localStorage.setItem('k1Lang', next);
    apply();
    document.dispatchEvent(new CustomEvent('k1:admin-language'));
  }

  window.K1AdminI18n = { t, apply, setLanguage, get language() { return language; }, meta: META };

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('adminLangSelector');
    const button = document.getElementById('adminLangBtn');
    button?.addEventListener('click', (event) => {
      event.stopPropagation();
      selector.classList.toggle('open');
    });
    document.addEventListener('click', () => selector?.classList.remove('open'));
    document.querySelectorAll('#adminLangDropdown [data-lang]').forEach((item) => {
      item.addEventListener('click', () => setLanguage(item.dataset.lang));
    });
    apply();
  });
})();
