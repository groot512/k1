(function () {
  'use strict';

  const LANGUAGES = {
    ko: { flag: '🇰🇷', name: '한국어', htmlLang: 'ko' },
    en: { flag: '🇺🇸', name: 'English', htmlLang: 'en' },
    ja: { flag: '🇯🇵', name: '日本語', htmlLang: 'ja' },
    zh: { flag: '🇨🇳', name: '中文', htmlLang: 'zh-CN' }
  };

  const MESSAGES = {
    ko: {
      'meta.title': 'K1 스틱소스 — 톡! 털어 넣으면, 한국의 맛 | 바이트랩스',
      'meta.description': '라면 스프처럼 가벼운 1회분 스틱형 K-소스. QR 한 번으로 3분 레시피 영상까지. 세계 어디서나 정통 한식을 완성하세요.',
      'logo.home': 'K1 스틱소스 홈', 'nav.why': '왜 K1인가', 'nav.products': '제품', 'nav.platform': '레시피 플랫폼',
      'nav.how': '사용법', 'nav.recipes': 'K1 레시피', 'nav.youtube': '🎬 유튜브 레시피', 'nav.preorder': '사전예약',
      'hero.title': '<span class="tok" id="tok">톡!</span> 털어 넣으면,<br>한국의 맛.',
      'hero.lead': '라면 스프처럼 가벼운 1회분 스틱소스.<br>계량도, 냉장 보관도, 요리 실력도 필요 없습니다.<br>세계 어디서나 3분이면 정통 한식이 완성됩니다.',
      'hero.primary': '얼리버드 사전예약', 'hero.secondary': '3분 레시피 보기', 'hero.note': '기내 반입 OK · 상온 보관 · 부피 80% 다운',
      'hero.stage': 'K1 스틱소스 5종 미리보기', 'hero.alt': '부채꼴로 펼쳐진 K1 스틱소스 5종 패키지',
      'stats.timeUnit': '분', 'stats.time': '한 그릇 완성 시간', 'stats.volume': '액상 대비 부피 절감', 'stats.breakage': '유리병 파손율', 'stats.typeUnit': '종', 'stats.lineup': '검증된 소스 라인업',
      'problem.title': '병에 갇힌 한국의 맛을,<br>스틱으로 꺼냈습니다', 'problem.lead': '기존 액상 소스는 무겁고, 깨지고, 비쌉니다. K1은 라면 스프에서 답을 찾았습니다 — 가장 익숙한 형태로, 가장 낯선 시장까지.',
      'problem.alt': '여권, 항공권과 나란히 놓인 K1 스틱소스 3종 — 여행 가방에 들어가는 한국의 맛',
      'problem.light.title': '초경량 스틱', 'problem.light.desc': '1회분 10~15g 정량 포장. 여행 가방, 배낭, 주머니 어디든. 항공 액체 규정도 통과합니다.',
      'problem.store.title': '상온 장기보관', 'problem.store.desc': '냉장고 자리 싸움 끝. 개봉 전까지 상온 보관, 개봉하면 딱 한 그릇 분량이라 남길 게 없습니다.',
      'problem.ship.title': '물류비 80% 절감', 'problem.ship.desc': '부피 80% 감소, 파손율 0%. 해외 배송비가 제품값을 넘던 시대를 끝냅니다.',
      'lineup.title': '기초 육수 6종 + 요리 베이스 4종<br>총 10가지 한국의 맛', 'lineup.lead': '분말 소스 전문기업과 함께 개발한 검증된 배합. 추가 실험은 저희가 끝냈으니, 당신은 3분만 쓰세요.',
      'lineup.alt': 'K1 스틱소스 10종 패키지와 QR 연동 스마트 앱 화면', 'lineup.note': '모든 스틱은 가위 없이 손으로 여는 Easy-Cut 구조입니다.',
      'product.anchovy': '멸치 육수', 'product.seafood': '해물 육수', 'product.beef': '사골 육수', 'product.pollack': '황태 육수', 'product.kelp': '다시마 육수', 'product.vegetable': '채수', 'product.tteokbokki': '떡볶이 베이스', 'product.kimchi': '김치찌개 베이스', 'product.doenjang': '된장찌개 베이스', 'product.bulgogi': '불고기 베이스',
      'platform.title': '찍으면 요리사가 되는 마법,<br>K1 레시피 플랫폼', 'platform.lead': '스틱 뒷면 QR을 찍는 순간, 그 소스에 딱 맞는 3분 레시피 영상이 열립니다. 보고, 누르고, 끓이면 끝.',
      'platform.phone': 'K1 앱 화면 미리보기', 'platform.scanned': 'K1 김치찌개 베이스 · 스캔됨', 'platform.demoTitle': '3분 완성! 매콤 김치찌개', 'platform.demoMeta': 'K-Food Master · 조회 128만',
      'platform.qr.title': 'QR 원스캔 매칭', 'platform.qr.desc': '패키지마다 고유 QR. 앱 설치 없이도 웹에서 바로 재생되고, 앱에서는 내 스틱 재고까지 관리됩니다.',
      'platform.lang.title': '다국어 자동 매칭', 'platform.lang.desc': '선택한 언어에 맞춰 한국어·영어·일본어·중국어 콘텐츠를 연결합니다. 전 세계 누구나 같은 3분.',
      'platform.community.title': 'K-Food 커뮤니티', 'platform.community.desc': '내가 만든 요리를 올리고, 3분 K-요리 챌린지에 참여하세요. 이번 주 베스트 요리는 홈 화면에 소개됩니다.',
      'platform.shop.title': '영상에서 바로 주문', 'platform.shop.desc': '영상 속 제품 태그를 누르면 스틱 리필부터 뚝배기·앞치마 굿즈까지, 확인에서 주문까지 10초.',
      'platform.trending': '지금 뜨는 레시피', 'platform.prev': '이전 레시피', 'platform.next': '다음 레시피', 'video.aria': '{title} 레시피 영상', 'video.label': '3분 레시피',
      'video.kimchi': '매콤 김치찌개', 'video.bulgogi': '10분 컷 불고기 덮밥', 'video.tteokbokki': '국물 떡볶이 정석', 'video.doenjang': '바글바글 된장찌개', 'video.noodle': '멸치육수 잔치국수', 'video.vegan': '채수 비건 김치죽',
      'how.title': '요리 실력은 필요 없습니다.<br>순서만 있으면 됩니다', 'how.alt': 'K1 스틱을 뜯어 뚝배기에 분말을 붓는 장면', 'how.badge': '계량 없이, 톡!',
      'how.scan.title': '찍고', 'how.scan.desc': '스틱 뒷면 QR을 스마트폰으로 스캔하면, 이 소스로 만들 수 있는 3분 레시피 영상이 바로 열립니다.',
      'how.pour.title': '톡! 털고', 'how.pour.desc': 'Easy-Cut 스틱을 손으로 뜯어 냄비에 톡. 계량스푼도 저울도 필요 없는 1회분 정량입니다.',
      'how.cook.title': '3분 끓이면 끝', 'how.cook.desc': '영상 따라 3분. 서울의 그 맛이 당신의 식탁에 그대로 올라옵니다. 완성 사진은 커뮤니티에 자랑하세요.',
      'cta.title': '한국의 맛을,<br>세계의 식탁에.', 'cta.desc': '얼리버드 사전예약 고객에게는 런칭 기념 10종 풀 라인업 샘플러와 K1 앱 프리미엄 레시피를 가장 먼저 드립니다.', 'cta.button': '사전예약 알림 받기',
      'footer.desc': '바이트랩스는 Food × Technology × Data 기업입니다. K1 스틱소스는 제품과 콘텐츠를 하나로 묶어 K-Food 경험 전체를 배달합니다.',
      'footer.youtube': '유튜브', 'footer.instagram': '인스타그램', 'footer.tiktok': '틱톡', 'footer.email': '이메일', 'footer.copy': '2026 바이트랩스(Bitelabs). All rights reserved. · K1 Stick Sauce'
    },
    en: {
      'meta.title': 'K1 Stick Sauce — Authentic Korean flavor in one easy stick | Bitelabs',
      'meta.description': 'Single-serve K-sauce sticks as light as a seasoning packet. Scan once for a 3-minute recipe and cook authentic Korean food anywhere.',
      'logo.home': 'K1 Stick Sauce home', 'nav.why': 'Why K1', 'nav.products': 'Products', 'nav.platform': 'Recipe Platform', 'nav.how': 'How It Works', 'nav.recipes': 'K1 Recipes', 'nav.youtube': '🎬 YouTube Recipes', 'nav.preorder': 'Pre-order',
      'hero.title': '<span class="tok" id="tok">Tear.</span> Pour. Taste Korea.', 'hero.lead': 'A single-serve stick sauce as light as a ramen seasoning packet.<br>No measuring, refrigeration, or cooking skills required.<br>Authentic Korean flavor is ready in three minutes, anywhere.',
      'hero.primary': 'Get Early Access', 'hero.secondary': 'Watch 3-Min Recipes', 'hero.note': 'Carry-on friendly · Shelf stable · 80% less volume', 'hero.stage': 'Preview of five K1 Stick Sauces', 'hero.alt': 'Five K1 Stick Sauce packages arranged in a fan',
      'stats.timeUnit': 'min', 'stats.time': 'From pack to bowl', 'stats.volume': 'Less volume than liquid sauce', 'stats.breakage': 'Glass-bottle breakage', 'stats.typeUnit': 'flavors', 'stats.lineup': 'Tested sauce lineup',
      'problem.title': 'Korean flavor, freed<br>from the bottle', 'problem.lead': 'Traditional liquid sauces are heavy, fragile, and expensive to ship. K1 found the answer in the familiar seasoning packet — built for new markets everywhere.', 'problem.alt': 'Three K1 sauce sticks beside a passport and boarding pass',
      'problem.light.title': 'Ultra-light sticks', 'problem.light.desc': 'Precisely portioned at 10–15 g. Pack them in a suitcase, backpack, or pocket, with no liquid restrictions.', 'problem.store.title': 'Shelf-stable storage', 'problem.store.desc': 'No refrigerator space required. Store unopened at room temperature and use exactly one bowl at a time.', 'problem.ship.title': '80% lower logistics volume', 'problem.ship.desc': '80% less volume and zero glass breakage make global delivery practical.',
      'lineup.title': '6 essential broths + 4 cooking bases<br>10 ways to taste Korea', 'lineup.lead': 'Verified blends developed with a specialist powder-sauce producer. We finished the testing; you only need three minutes.', 'lineup.alt': 'Ten K1 sauce packages next to a QR-connected recipe app', 'lineup.note': 'Every stick uses an Easy-Cut notch, so no scissors are needed.',
      'product.anchovy': 'Anchovy Broth', 'product.seafood': 'Seafood Broth', 'product.beef': 'Beef Bone Broth', 'product.pollack': 'Pollack Broth', 'product.kelp': 'Kelp Broth', 'product.vegetable': 'Vegetable Broth', 'product.tteokbokki': 'Tteokbokki Base', 'product.kimchi': 'Kimchi Stew Base', 'product.doenjang': 'Doenjang Stew Base', 'product.bulgogi': 'Bulgogi Base',
      'platform.title': 'Scan once. Cook like a local.<br>The K1 Recipe Platform', 'platform.lead': 'Scan the QR on the back of a stick to open the perfect three-minute recipe. Watch, tap, simmer — done.', 'platform.phone': 'Preview of the K1 app', 'platform.scanned': 'K1 Kimchi Stew Base · Scanned', 'platform.demoTitle': 'Spicy Kimchi Stew in 3 Minutes', 'platform.demoMeta': 'K-Food Master · 1.28M views',
      'platform.qr.title': 'One-scan matching', 'platform.qr.desc': 'A unique QR on every pack opens instantly on the web; the app also tracks your stick inventory.', 'platform.lang.title': 'Four-language experience', 'platform.lang.desc': 'Choose Korean, English, Japanese, or Chinese and keep the same language across every K1 page.', 'platform.community.title': 'K-Food community', 'platform.community.desc': 'Share what you cooked and join the 3-Minute K-Cooking Challenge. Weekly favorites appear on the home screen.', 'platform.shop.title': 'Shop from the video', 'platform.shop.desc': 'Tap a product tag to order refills, cookware, and K1 goods in seconds.',
      'platform.trending': 'Trending recipes', 'platform.prev': 'Previous recipes', 'platform.next': 'Next recipes', 'video.aria': '{title} recipe video', 'video.label': '3-min recipe', 'video.kimchi': 'Spicy Kimchi Stew', 'video.bulgogi': '10-Minute Bulgogi Rice Bowl', 'video.tteokbokki': 'Classic Soupy Tteokbokki', 'video.doenjang': 'Bubbling Doenjang Stew', 'video.noodle': 'Anchovy Broth Banquet Noodles', 'video.vegan': 'Vegan Kimchi Rice Porridge',
      'how.title': 'No cooking skills required.<br>Just follow three steps', 'how.alt': 'Pouring a K1 stick into a Korean earthenware pot', 'how.badge': 'No measuring. Just pour.', 'how.scan.title': 'Scan', 'how.scan.desc': 'Scan the QR on the back of the stick to open a matching three-minute recipe video.', 'how.pour.title': 'Tear & pour', 'how.pour.desc': 'Open the Easy-Cut stick by hand and pour it into the pot. One stick is one perfectly measured serving.', 'how.cook.title': 'Simmer for 3 minutes', 'how.cook.desc': 'Follow the video for three minutes and bring Seoul flavor to your table. Then share your plate with the community.',
      'cta.title': 'Korean flavor,<br>for tables everywhere.', 'cta.desc': 'Early-access customers receive the launch sampler of all ten flavors and first access to premium recipes in the K1 app.', 'cta.button': 'Notify Me at Launch',
      'footer.desc': 'Bitelabs is a Food × Technology × Data company. K1 combines product and content to deliver the complete K-Food experience.', 'footer.youtube': 'YouTube', 'footer.instagram': 'Instagram', 'footer.tiktok': 'TikTok', 'footer.email': 'Email', 'footer.copy': '2026 Bitelabs. All rights reserved. · K1 Stick Sauce'
    },
    ja: {
      'meta.title': 'K1スティックソース — 入れるだけで、本場の韓国味 | Bitelabs', 'meta.description': 'ラーメンスープのように軽い1回分のK-ソース。QRを読み取れば3分レシピへ。世界中で本場の韓国料理を。',
      'logo.home': 'K1スティックソース ホーム', 'nav.why': 'K1とは', 'nav.products': '商品', 'nav.platform': 'レシピ', 'nav.how': '使い方', 'nav.recipes': 'K1レシピ', 'nav.youtube': '🎬 YouTubeレシピ', 'nav.preorder': '先行予約',
      'hero.title': '<span class="tok" id="tok">サッ!</span> と入れれば、<br>韓国の味。', 'hero.lead': 'ラーメンスープのように軽い、1回分のスティックソース。<br>計量も冷蔵保存も料理の腕も必要ありません。<br>世界中どこでも3分で本場の韓国料理が完成します。', 'hero.primary': '先行予約する', 'hero.secondary': '3分レシピを見る', 'hero.note': '機内持込OK · 常温保存 · 体積80%減', 'hero.stage': 'K1スティックソース5種のプレビュー', 'hero.alt': '扇状に並んだK1スティックソース5種',
      'stats.timeUnit': '分', 'stats.time': '一皿の完成時間', 'stats.volume': '液体ソース比の体積削減', 'stats.breakage': 'ガラス瓶の破損率', 'stats.typeUnit': '種', 'stats.lineup': '検証済みラインナップ',
      'problem.title': '瓶に閉じ込められた韓国の味を、<br>スティックにしました', 'problem.lead': '従来の液体ソースは重く、割れやすく、送料も高額です。K1は最も身近な粉末スープの形から答えを見つけました。', 'problem.alt': 'パスポートと搭乗券の横に置かれたK1スティックソース3種', 'problem.light.title': '超軽量スティック', 'problem.light.desc': '1回分10〜15gの定量包装。スーツケースやリュック、ポケットにも入り、液体制限の心配もありません。', 'problem.store.title': '常温で長期保存', 'problem.store.desc': '冷蔵庫の場所は不要。開封前は常温保存、開ければちょうど一皿分です。', 'problem.ship.title': '物流体積80%削減', 'problem.ship.desc': '体積80%減、瓶の破損ゼロ。海外配送をもっと身近にします。',
      'lineup.title': '基本だし6種 + 料理ベース4種<br>韓国の味、全10種類', 'lineup.lead': '粉末ソース専門企業と開発した検証済みの配合。実験は私たちが終えました。あなたは3分だけ。', 'lineup.alt': 'K1スティックソース10種とQR連携アプリ', 'lineup.note': 'すべてのスティックは、はさみ不要のEasy-Cut仕様です。',
      'product.anchovy': '煮干しだし', 'product.seafood': '海鮮だし', 'product.beef': '牛骨だし', 'product.pollack': '干しスケトウダラだし', 'product.kelp': '昆布だし', 'product.vegetable': '野菜だし', 'product.tteokbokki': 'トッポッキベース', 'product.kimchi': 'キムチチゲベース', 'product.doenjang': 'テンジャンチゲベース', 'product.bulgogi': 'プルコギベース',
      'platform.title': '読み取れば料理上手に。<br>K1レシピプラットフォーム', 'platform.lead': 'スティック裏面のQRを読み取ると、そのソースにぴったりの3分レシピ動画が開きます。見て、押して、煮込むだけ。', 'platform.phone': 'K1アプリ画面プレビュー', 'platform.scanned': 'K1キムチチゲベース · スキャン済み', 'platform.demoTitle': '3分で完成！旨辛キムチチゲ', 'platform.demoMeta': 'K-Food Master · 128万回視聴',
      'platform.qr.title': 'QRワンスキャン', 'platform.qr.desc': 'パッケージごとのQRからアプリ不要で即再生。アプリでは在庫も管理できます。', 'platform.lang.title': '4言語に対応', 'platform.lang.desc': '韓国語・英語・日本語・中国語を選択し、すべてのK1ページで同じ言語を利用できます。', 'platform.community.title': 'K-Foodコミュニティ', 'platform.community.desc': '作った料理を投稿して、3分K-料理チャレンジに参加。週間ベストはホームに掲載されます。', 'platform.shop.title': '動画からすぐ注文', 'platform.shop.desc': '商品タグからリフィルや鍋、グッズまで数秒で注文できます。',
      'platform.trending': '人気のレシピ', 'platform.prev': '前のレシピ', 'platform.next': '次のレシピ', 'video.aria': '{title}のレシピ動画', 'video.label': '3分レシピ', 'video.kimchi': '旨辛キムチチゲ', 'video.bulgogi': '10分プルコギ丼', 'video.tteokbokki': '定番スープトッポッキ', 'video.doenjang': 'ぐつぐつテンジャンチゲ', 'video.noodle': '煮干しだしのチャンチグクス', 'video.vegan': '野菜だしのヴィーガンキムチ粥',
      'how.title': '料理の腕は必要ありません。<br>順番どおりで完成です', 'how.alt': 'K1スティックを土鍋に注ぐ様子', 'how.badge': '計量なしで、サッ！', 'how.scan.title': '読み取る', 'how.scan.desc': 'スティック裏面のQRをスマホで読み取り、3分レシピ動画を開きます。', 'how.pour.title': '開けて注ぐ', 'how.pour.desc': 'Easy-Cutを手で開けて鍋へ。一皿分が正確に計量されています。', 'how.cook.title': '3分煮込む', 'how.cook.desc': '動画どおりに3分。ソウルの味が食卓に並びます。完成写真もコミュニティへ。',
      'cta.title': '韓国の味を、<br>世界の食卓へ。', 'cta.desc': '先行予約のお客様には、発売記念の全10種サンプラーとK1アプリのプレミアムレシピをいち早くお届けします。', 'cta.button': '発売通知を受け取る',
      'footer.desc': 'BitelabsはFood × Technology × Data企業です。K1は商品とコンテンツを一つにし、K-Food体験全体を届けます。', 'footer.youtube': 'YouTube', 'footer.instagram': 'Instagram', 'footer.tiktok': 'TikTok', 'footer.email': 'メール', 'footer.copy': '2026 Bitelabs. All rights reserved. · K1 Stick Sauce'
    },
    zh: {
      'meta.title': 'K1条装酱料 — 轻松一倒，地道韩国味 | Bitelabs', 'meta.description': '像方便面调料一样轻巧的单次用量K-酱料。扫码即可查看3分钟食谱，在世界各地轻松做出地道韩餐。',
      'logo.home': 'K1条装酱料主页', 'nav.why': '为什么选K1', 'nav.products': '产品', 'nav.platform': '食谱平台', 'nav.how': '使用方法', 'nav.recipes': 'K1食谱', 'nav.youtube': '🎬 YouTube食谱', 'nav.preorder': '抢先预订',
      'hero.title': '<span class="tok" id="tok">撕开!</span> 倒入，<br>就是韩国味。', 'hero.lead': '像方便面调料一样轻巧的单次用量条装酱料。<br>无需称量、冷藏或厨艺。<br>无论身在何处，3分钟即可完成地道韩餐。', 'hero.primary': '抢先预订', 'hero.secondary': '查看3分钟食谱', 'hero.note': '可随身登机 · 常温保存 · 体积减少80%', 'hero.stage': 'K1五款条装酱料预览', 'hero.alt': '扇形排列的五款K1条装酱料包装',
      'stats.timeUnit': '分钟', 'stats.time': '完成一碗的时间', 'stats.volume': '相比液体酱料节省体积', 'stats.breakage': '玻璃瓶破损率', 'stats.typeUnit': '款', 'stats.lineup': '经过验证的酱料阵容',
      'problem.title': '把困在瓶中的韩国味，<br>装进轻巧条包', 'problem.lead': '传统液体酱料笨重、易碎且运费高昂。K1从熟悉的调料包形态中找到答案，让韩国味走向更广阔的市场。', 'problem.alt': '护照和登机牌旁的三款K1条装酱料', 'problem.light.title': '超轻条装', 'problem.light.desc': '每份精准包装10–15克。可放入行李箱、背包或口袋，也无需担心液体限制。', 'problem.store.title': '常温长期保存', 'problem.store.desc': '无需占用冰箱空间。开封前常温保存，每包刚好是一碗的用量。', 'problem.ship.title': '物流体积降低80%', 'problem.ship.desc': '体积减少80%，没有玻璃破损，让海外配送更轻松。',
      'lineup.title': '6款基础高汤 + 4款料理底料<br>共10种韩国风味', 'lineup.lead': '与粉末酱料专业企业共同研发的成熟配方。测试由我们完成，你只需3分钟。', 'lineup.alt': '十款K1条装酱料和QR联动食谱应用', 'lineup.note': '所有条包均采用Easy-Cut易撕口，无需剪刀。',
      'product.anchovy': '鳀鱼高汤', 'product.seafood': '海鲜高汤', 'product.beef': '牛骨高汤', 'product.pollack': '明太鱼高汤', 'product.kelp': '海带高汤', 'product.vegetable': '蔬菜高汤', 'product.tteokbokki': '辣炒年糕底料', 'product.kimchi': '泡菜汤底料', 'product.doenjang': '大酱汤底料', 'product.bulgogi': '烤肉底料',
      'platform.title': '一扫就会做。<br>K1食谱平台', 'platform.lead': '扫描条包背面的QR码，即可打开最适合这款酱料的3分钟食谱视频。观看、点击、煮制，就这么简单。', 'platform.phone': 'K1应用界面预览', 'platform.scanned': 'K1泡菜汤底料 · 已扫描', 'platform.demoTitle': '3分钟完成！香辣泡菜汤', 'platform.demoMeta': 'K-Food Master · 128万次观看',
      'platform.qr.title': 'QR一扫即配', 'platform.qr.desc': '每个包装都有专属QR码，无需安装应用即可网页播放；应用内还能管理条包库存。', 'platform.lang.title': '支持四种语言', 'platform.lang.desc': '可选择韩语、英语、日语或中文，并在所有K1页面保持同一语言。', 'platform.community.title': 'K-Food社区', 'platform.community.desc': '分享你的料理，参加3分钟K-料理挑战。每周最佳作品会登上首页。', 'platform.shop.title': '视频内直接购买', 'platform.shop.desc': '点击商品标签，即可快速购买补充装、锅具和K1周边。',
      'platform.trending': '热门食谱', 'platform.prev': '上一组食谱', 'platform.next': '下一组食谱', 'video.aria': '{title}食谱视频', 'video.label': '3分钟食谱', 'video.kimchi': '香辣泡菜汤', 'video.bulgogi': '10分钟烤肉盖饭', 'video.tteokbokki': '经典汤汁辣炒年糕', 'video.doenjang': '沸腾大酱汤', 'video.noodle': '鳀鱼高汤宴席面', 'video.vegan': '蔬菜高汤纯素泡菜粥',
      'how.title': '无需厨艺。<br>只需按顺序操作', 'how.alt': '将K1条装调料倒入砂锅', 'how.badge': '无需称量，轻松一倒！', 'how.scan.title': '扫描', 'how.scan.desc': '用手机扫描条包背面的QR码，立即打开匹配的3分钟食谱视频。', 'how.pour.title': '撕开倒入', 'how.pour.desc': '手撕Easy-Cut条包后倒入锅中。每包都是精准的一餐用量。', 'how.cook.title': '煮3分钟', 'how.cook.desc': '跟随视频3分钟，把首尔风味端上餐桌。完成后也可以在社区分享。',
      'cta.title': '把韩国味，<br>带到世界餐桌。', 'cta.desc': '抢先预订用户将优先获得上市纪念十种口味试吃套装，以及K1应用高级食谱。', 'cta.button': '接收上市通知',
      'footer.desc': 'Bitelabs是一家Food × Technology × Data企业。K1将产品与内容融为一体，提供完整的K-Food体验。', 'footer.youtube': 'YouTube', 'footer.instagram': 'Instagram', 'footer.tiktok': 'TikTok', 'footer.email': '电子邮件', 'footer.copy': '2026 Bitelabs. All rights reserved. · K1 Stick Sauce'
    }
  };

  let language = localStorage.getItem('k1Lang');
  if (!LANGUAGES[language]) language = (navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en';

  function t(key, values) {
    let value = MESSAGES[language]?.[key] || MESSAGES.ko[key] || key;
    if (values) Object.entries(values).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, replacement); });
    return value;
  }

  function apply() {
    document.documentElement.lang = LANGUAGES[language].htmlLang;
    document.title = t('meta.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t('meta.description');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', t(el.dataset.i18nAlt)); });
    document.querySelectorAll('[data-lang]').forEach(el => { el.classList.toggle('active', el.dataset.lang === language); });
    const flag = document.getElementById('landingLangFlag');
    const name = document.getElementById('landingLangName');
    if (flag) flag.textContent = LANGUAGES[language].flag;
    if (name) name.textContent = LANGUAGES[language].name;
  }

  function setLanguage(next) {
    if (!LANGUAGES[next]) return;
    language = next;
    localStorage.setItem('k1Lang', language);
    apply();
    document.dispatchEvent(new CustomEvent('k1:language', { detail: { language } }));
  }

  function initSelector() {
    const selector = document.getElementById('landingLangSelector');
    const button = document.getElementById('landingLangButton');
    if (!selector || !button) return;
    button.addEventListener('click', event => { event.stopPropagation(); selector.classList.toggle('open'); });
    selector.querySelectorAll('[data-lang]').forEach(item => item.addEventListener('click', event => {
      event.stopPropagation(); setLanguage(item.dataset.lang); selector.classList.remove('open');
    }));
    document.addEventListener('click', () => selector.classList.remove('open'));
  }

  window.addEventListener('storage', event => { if (event.key === 'k1Lang' && LANGUAGES[event.newValue]) { language = event.newValue; apply(); } });
  window.K1LandingI18n = { t, setLanguage, apply, get language() { return language; } };
  initSelector();
  apply();
})();
