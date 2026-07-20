/* ===== K1 Recipe Platform — App (Demo) ===== */

// ============================================================
//  1. i18n — UI 문자열 (한/영/일/중)
// ============================================================
const UI = {
  ko: {
    'nav.home':'홈', 'nav.store':'K1 스토어',
    'hero.eyebrow':'Global K-Food Recipe Community',
    'hero.title':'전 세계 누구나,\n<span class="accent">3분</span>이면 한국의 맛',
    'hero.sub':'유튜브 레시피 영상을 보고, 따라 만들고, 경험을 나누세요.',
    'search':'레시피 검색...',
    'section.trending':'🔥 인기 레시피',
    'recipe.ingredients':'재료',
    'recipe.steps':'조리 순서',
    'recipe.servings':'인분',
    'recipe.time':'분',
    'recipe.diff.easy':'쉬움','recipe.diff.medium':'보통','recipe.diff.hard':'어려움',
    'popup.badge':'지금 할인 중!',
    'popup.buy':'Amazon에서 구매',
    'popup.close':'닫기',
    'like':'좋아요','liked':'좋아요!',
    'comments':'댓글','comments.placeholder':'댓글을 남겨보세요...','comments.submit':'등록',
    'translate':'번역 보기','translated':'원문 보기',
    'back':'← 뒤로',
    'footer.desc':'K1 스틱소스로 세계 어디서나 한국의 맛을 경험하세요.',
    'footer.rights':'© 2026 바이트랩스(Bitelabs). All rights reserved.',
    'views':'조회','likes.n':'좋아요',
  },
  en: {
    'nav.home':'Home', 'nav.store':'K1 Store',
    'hero.eyebrow':'Global K-Food Recipe Community',
    'hero.title':'Anyone, Anywhere,\n<span class="accent">3 Minutes</span> to Korean Flavor',
    'hero.sub':'Watch YouTube recipe videos, cook along, and share your experience.',
    'search':'Search recipes...',
    'section.trending':'🔥 Trending Recipes',
    'recipe.ingredients':'Ingredients',
    'recipe.steps':'Cooking Steps',
    'recipe.servings':'servings',
    'recipe.time':'min',
    'recipe.diff.easy':'Easy','recipe.diff.medium':'Medium','recipe.diff.hard':'Hard',
    'popup.badge':'On Sale Now!',
    'popup.buy':'Buy on Amazon',
    'popup.close':'Close',
    'like':'Like','liked':'Liked!',
    'comments':'Comments','comments.placeholder':'Leave a comment...','comments.submit':'Post',
    'translate':'Translate','translated':'Show Original',
    'back':'← Back',
    'footer.desc':'Experience Korean flavors anywhere with K1 Stick Sauce.',
    'footer.rights':'© 2026 Bitelabs. All rights reserved.',
    'views':'views','likes.n':'likes',
  },
  ja: {
    'nav.home':'ホーム', 'nav.store':'K1ストア',
    'hero.eyebrow':'Global K-Food Recipe Community',
    'hero.title':'世界中の誰でも、\n<span class="accent">3分</span>で韓国の味',
    'hero.sub':'YouTubeレシピ動画を見て、一緒に作って、体験をシェアしましょう。',
    'search':'レシピを検索...',
    'section.trending':'🔥 人気レシピ',
    'recipe.ingredients':'材料',
    'recipe.steps':'作り方',
    'recipe.servings':'人分',
    'recipe.time':'分',
    'recipe.diff.easy':'簡単','recipe.diff.medium':'普通','recipe.diff.hard':'難しい',
    'popup.badge':'セール中！',
    'popup.buy':'Amazonで購入',
    'popup.close':'閉じる',
    'like':'いいね','liked':'いいね！',
    'comments':'コメント','comments.placeholder':'コメントを書く...','comments.submit':'投稿',
    'translate':'翻訳を見る','translated':'原文を見る',
    'back':'← 戻る',
    'footer.desc':'K1スティックソースで世界中どこでも韓国の味を体験しましょう。',
    'footer.rights':'© 2026 Bitelabs. All rights reserved.',
    'views':'再生','likes.n':'いいね',
  },
  zh: {
    'nav.home':'首页', 'nav.store':'K1商店',
    'hero.eyebrow':'Global K-Food Recipe Community',
    'hero.title':'任何人，任何地方，\n<span class="accent">3分钟</span>品尝韩国味道',
    'hero.sub':'观看YouTube食谱视频，跟着做，分享你的体验。',
    'search':'搜索食谱...',
    'section.trending':'🔥 热门食谱',
    'recipe.ingredients':'食材',
    'recipe.steps':'烹饪步骤',
    'recipe.servings':'人份',
    'recipe.time':'分钟',
    'recipe.diff.easy':'简单','recipe.diff.medium':'中等','recipe.diff.hard':'困难',
    'popup.badge':'限时折扣！',
    'popup.buy':'在Amazon购买',
    'popup.close':'关闭',
    'like':'点赞','liked':'已赞！',
    'comments':'评论','comments.placeholder':'写评论...','comments.submit':'发布',
    'translate':'查看翻译','translated':'查看原文',
    'back':'← 返回',
    'footer.desc':'用K1棒状酱料在世界任何地方体验韩国味道。',
    'footer.rights':'© 2026 Bitelabs. 保留所有权利。',
    'views':'播放','likes.n':'点赞',
  }
};

// ============================================================
//  2. Recipe Data — 6 recipes × 4 languages
// ============================================================
const RECIPES = [
  {
    id: 'kimchi-jjigae',
    youtubeId: 'T6sHn-MGRzY',
    cookTime: 3, servings: 2, difficulty: 'easy',
    sauce: { color: '#c0392b', emoji: '🌶️' },
    sauceName: { ko:'김치찌개 베이스', en:'Kimchi Stew Base', ja:'キムチチゲベース', zh:'泡菜汤底' },
    product: { price: '$12.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #8B1A1A 0%, #c0392b 40%, #e74c3c 100%)', emoji: '🍲' },
    title: {
      ko: '3분 완성! 매콤 김치찌개',
      en: '3-Min Spicy Kimchi Stew',
      ja: '3分で完成！ピリ辛キムチチゲ',
      zh: '3分钟完成！辣味泡菜汤'
    },
    desc: {
      ko: 'K1 김치찌개 베이스 스틱 하나면 깊은 맛의 김치찌개가 완성됩니다. 두부와 파만 있으면 OK!',
      en: 'Just one K1 Kimchi Stew stick creates a deeply flavored kimchi stew. All you need is tofu and green onions!',
      ja: 'K1キムチチゲベーススティック1本で深い味わいのキムチチゲが完成。豆腐とネギがあればOK！',
      zh: '一根K1泡菜汤底棒就能做出浓郁的泡菜汤。只需豆腐和葱！'
    },
    ingredients: {
      ko: ['K1 김치찌개 베이스 스틱 1포','물 400ml','두부 1/2모','대파 1대','김치 100g (선택)'],
      en: ['1 K1 Kimchi Stew Base stick','400ml water','1/2 block tofu','1 green onion','100g kimchi (optional)'],
      ja: ['K1キムチチゲベーススティック 1本','水 400ml','豆腐 1/2丁','長ネギ 1本','キムチ 100g（お好みで）'],
      zh: ['K1泡菜汤底棒 1包','水 400ml','豆腐 半块','大葱 1根','泡菜 100g（可选）']
    },
    steps: {
      ko: ['냄비에 물 400ml를 넣고 끓입니다.','K1 김치찌개 스틱을 톡! 털어 넣고 잘 저어줍니다.','두부를 깍뚝썰기하고, 대파를 송송 썰어 넣습니다.','3분간 끓이면 완성! 취향에 따라 김치를 추가하세요.'],
      en: ['Bring 400ml of water to a boil.','Tear open the K1 Kimchi Stew stick and stir well.','Cut tofu into cubes and slice green onions, then add.','Boil for 3 minutes and done! Add kimchi to taste.'],
      ja: ['鍋に水400mlを入れて沸かします。','K1キムチチゲスティックをトン！と入れてよく混ぜます。','豆腐をさいの目に切り、長ネギを小口切りにして加えます。','3分煮込んで完成！お好みでキムチを追加してください。'],
      zh: ['锅中加入400ml水烧开。','撕开K1泡菜汤底棒倒入并搅拌均匀。','豆腐切块，大葱切段放入。','煮3分钟即可完成！可根据口味加入泡菜。']
    },
    likes: 9200, views: 1280000,
    comments: [
      {
        user: 'Sarah', flag: '🇺🇸', lang: 'en', time: '2h',
        text: { en:"So easy! My kids loved it!", ko:"너무 쉬워요! 아이들이 좋아했어요!", ja:"とても簡単！子供たちが大喜び！", zh:"太简单了！孩子们很喜欢！" }
      },
      {
        user: 'たくや', flag: '🇯🇵', lang: 'ja', time: '5h',
        text: { ja:"本場の味に近くてびっくりしました。リピ確定です！", ko:"본고장 맛에 가까워서 놀랐어요. 재구매 확정!", en:"I was surprised how close it is to the real thing. Definitely rebuying!", zh:"味道接近正宗，太惊喜了！一定会回购！" }
      },
      {
        user: '미식가김씨', flag: '🇰🇷', lang: 'ko', time: '1d',
        text: { ko:"자취생 필수템입니다 ㅋㅋ 진짜 3분이면 됨", en:"A must-have for living alone lol. Really takes just 3 min", ja:"一人暮らしの必需品ですww 本当に3分でできる", zh:"独居必备品哈哈，真的3分钟就好了" }
      }
    ]
  },
  {
    id: 'bulgogi-dupbap',
    youtubeId: 'bIRnM6s4GNo',
    cookTime: 5, servings: 2, difficulty: 'easy',
    sauce: { color: '#6e2c00', emoji: '🥩' },
    sauceName: { ko:'불고기 베이스', en:'Bulgogi Base', ja:'プルコギベース', zh:'烤肉底料' },
    product: { price: '$12.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #3E1600 0%, #6e2c00 40%, #a04000 100%)', emoji: '🍚' },
    title: {
      ko: '10분 컷! 불고기 덮밥',
      en: '10-Min Bulgogi Rice Bowl',
      ja: '10分で！プルコギ丼',
      zh: '10分钟！烤肉盖饭'
    },
    desc: {
      ko: '달콤 짭짤한 불고기 소스가 밥 위에! 간단한 야채만 곁들이면 근사한 한 끼가 됩니다.',
      en: 'Sweet and savory bulgogi sauce over rice! Just add simple veggies for a perfect meal.',
      ja: '甘辛いプルコギソースをご飯の上に！簡単な野菜を添えれば立派な一食に。',
      zh: '甜咸的烤肉酱浇在米饭上！配上简单蔬菜就是一顿美餐。'
    },
    ingredients: {
      ko: ['K1 불고기 베이스 스틱 1포','소고기 (또는 돼지고기) 200g','양파 1/2개','당근 약간','밥 2공기','참기름 약간'],
      en: ['1 K1 Bulgogi Base stick','200g beef (or pork)','1/2 onion','Some carrots','2 bowls of rice','Sesame oil'],
      ja: ['K1プルコギベーススティック 1本','牛肉（または豚肉）200g','玉ねぎ 1/2個','にんじん 少々','ご飯 2杯分','ごま油 少々'],
      zh: ['K1烤肉底料棒 1包','牛肉（或猪肉）200g','洋葱 半个','胡萝卜 少许','米饭 2碗','芝麻油 少许']
    },
    steps: {
      ko: ['고기를 먹기 좋은 크기로 썰고, 양파·당근도 채 썹니다.','팬에 기름을 두르고 고기를 볶습니다.','K1 불고기 스틱을 넣고 물 2큰술과 함께 섞어줍니다.','야채를 넣고 2분 더 볶은 뒤 밥 위에 올리면 완성!'],
      en: ['Slice meat into bite-sized pieces, julienne onion and carrot.','Heat oil in a pan and stir-fry the meat.','Add the K1 Bulgogi stick with 2 tbsp of water and mix.','Add vegetables, cook 2 more minutes, serve over rice!'],
      ja: ['肉を食べやすい大きさに切り、玉ねぎ・にんじんを千切りにします。','フライパンに油を引き、肉を炒めます。','K1プルコギスティックと水大さじ2を加えて混ぜます。','野菜を入れて2分炒め、ご飯の上に乗せて完成！'],
      zh: ['将肉切成小块，洋葱和胡萝卜切丝。','锅中加油翻炒肉。','加入K1烤肉底料棒和2汤匙水搅拌。','加入蔬菜再炒2分钟，盛在米饭上即可！']
    },
    likes: 7100, views: 960000,
    comments: [
      {
        user: 'Mike', flag: '🇬🇧', lang: 'en', time: '3h',
        text: { en:"Better than takeout! The sauce is incredible.", ko:"배달보다 맛있어요! 소스가 끝내줘요.", ja:"テイクアウトより美味しい！ソースが最高。", zh:"比外卖还好吃！酱料太棒了。" }
      },
      {
        user: '小明', flag: '🇨🇳', lang: 'zh', time: '8h',
        text: { zh:"第一次做韩国料理就成功了，太开心了！", ko:"한국 요리 처음 해봤는데 성공했어요, 너무 기뻐요!", en:"First time making Korean food and it worked! So happy!", ja:"韓国料理を初めて作って成功しました！嬉しい！" }
      }
    ]
  },
  {
    id: 'tteokbokki',
    youtubeId: 'mVzTaFTKKfQ',
    cookTime: 5, servings: 2, difficulty: 'easy',
    sauce: { color: '#e84e1b', emoji: '🔥' },
    sauceName: { ko:'떡볶이 베이스', en:'Tteokbokki Base', ja:'トッポッキベース', zh:'炒年糕底料' },
    product: { price: '$11.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #8B2500 0%, #e84e1b 50%, #f0742f 100%)', emoji: '🍢' },
    title: {
      ko: '국물 떡볶이 정석',
      en: 'Classic Soupy Tteokbokki',
      ja: '定番スープトッポッキ',
      zh: '经典汤汁炒年糕'
    },
    desc: {
      ko: '매콤달콤한 국물 떡볶이! K1 스틱 하나로 분식집 그 맛을 집에서 재현하세요.',
      en: 'Sweet and spicy soupy tteokbokki! Recreate the street food flavor at home with one K1 stick.',
      ja: '甘辛スープのトッポッキ！K1スティック1本で屋台の味を自宅で再現。',
      zh: '甜辣汤汁炒年糕！一根K1酱料棒在家重现街头美食。'
    },
    ingredients: {
      ko: ['K1 떡볶이 베이스 스틱 1포','떡볶이 떡 300g','물 500ml','어묵 2장 (선택)','삶은 달걀 1개 (선택)'],
      en: ['1 K1 Tteokbokki Base stick','300g rice cakes','500ml water','2 fish cakes (optional)','1 boiled egg (optional)'],
      ja: ['K1トッポッキベーススティック 1本','トック 300g','水 500ml','おでん 2枚（お好みで）','ゆで卵 1個（お好みで）'],
      zh: ['K1炒年糕底料棒 1包','年糕 300g','水 500ml','鱼饼 2片（可选）','水煮蛋 1个（可选）']
    },
    steps: {
      ko: ['냄비에 물 500ml를 끓입니다.','K1 떡볶이 스틱을 넣고 녹을 때까지 잘 저어줍니다.','떡과 어묵을 넣고 중불에서 5분 끓입니다.','떡이 부드러워지면 완성! 달걀을 곁들여 드세요.'],
      en: ['Bring 500ml of water to a boil.','Add the K1 Tteokbokki stick and stir until dissolved.','Add rice cakes and fish cakes, simmer for 5 minutes.','When rice cakes are soft, it\'s done! Serve with egg.'],
      ja: ['鍋に水500mlを沸かします。','K1トッポッキスティックを入れて溶けるまでよく混ぜます。','トックとおでんを入れて中火で5分煮ます。','トックが柔らかくなったら完成！卵を添えてどうぞ。'],
      zh: ['锅中加入500ml水烧开。','加入K1炒年糕底料棒搅拌至溶解。','加入年糕和鱼饼，中火煮5分钟。','年糕变软即可完成！配上鸡蛋享用。']
    },
    likes: 15000, views: 2110000,
    comments: [
      {
        user: 'Emma', flag: '🇫🇷', lang: 'en', time: '1h',
        text: { en:"OMG this tastes exactly like the ones in Seoul! 😍", ko:"세상에 서울에서 먹은 것과 똑같은 맛이에요! 😍", ja:"OMG ソウルで食べたのと同じ味！😍", zh:"天哪，跟在首尔吃的一模一样！😍" }
      },
      {
        user: 'ゆき', flag: '🇯🇵', lang: 'ja', time: '12h',
        text: { ja:"辛さがちょうどよくて、家族みんなで楽しめました！", ko:"매운 정도가 딱 좋아서 온 가족이 즐겼어요!", en:"The spiciness was just right, the whole family enjoyed it!", zh:"辣度刚刚好，全家都很喜欢！" }
      },
      {
        user: '맛집헌터', flag: '🇰🇷', lang: 'ko', time: '2d',
        text: { ko:"분식집 사장님한테 비밀이라고 했는데 이거 쓰고 있었음 ㅋㅋ", en:"The snack bar owner said it's a secret but he was using this lol", ja:"屋台のオーナーが秘密だって言ってたのにこれ使ってたw", zh:"小吃店老板说是秘方，结果就是用的这个哈哈" }
      }
    ]
  },
  {
    id: 'doenjang-jjigae',
    youtubeId: 'qWbHSOplcvY',
    cookTime: 5, servings: 2, difficulty: 'easy',
    sauce: { color: '#7d6608', emoji: '🫘' },
    sauceName: { ko:'된장찌개 베이스', en:'Doenjang Stew Base', ja:'テンジャンチゲベース', zh:'大酱汤底' },
    product: { price: '$12.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #3D3200 0%, #7d6608 40%, #b7950b 100%)', emoji: '🥘' },
    title: {
      ko: '바글바글 된장찌개',
      en: 'Bubbling Doenjang Stew',
      ja: 'ぐつぐつテンジャンチゲ',
      zh: '咕嘟咕嘟大酱汤'
    },
    desc: {
      ko: '구수한 된장의 깊은 맛! 감자, 호박, 두부만 있으면 집밥의 정석이 완성됩니다.',
      en: 'Deep, savory doenjang flavor! Just add potato, zucchini, and tofu for the ultimate home-cooked meal.',
      ja: '香ばしいテンジャンの深い味わい！じゃがいも、ズッキーニ、豆腐で定番の家庭料理が完成。',
      zh: '浓郁的大酱深邃味道！加上土豆、西葫芦和豆腐，就是经典家常菜。'
    },
    ingredients: {
      ko: ['K1 된장찌개 베이스 스틱 1포','물 400ml','감자 1/2개','애호박 1/4개','두부 1/4모','청양고추 1개 (선택)'],
      en: ['1 K1 Doenjang Stew Base stick','400ml water','1/2 potato','1/4 zucchini','1/4 block tofu','1 chili pepper (optional)'],
      ja: ['K1テンジャンチゲベーススティック 1本','水 400ml','じゃがいも 1/2個','ズッキーニ 1/4本','豆腐 1/4丁','青唐辛子 1本（お好みで）'],
      zh: ['K1大酱汤底棒 1包','水 400ml','土豆 半个','西葫芦 1/4个','豆腐 1/4块','青辣椒 1个（可选）']
    },
    steps: {
      ko: ['감자와 호박은 깍뚝썰기, 두부는 먹기 좋게 잘라둡니다.','냄비에 물 400ml를 넣고 감자를 먼저 넣어 끓입니다.','K1 된장찌개 스틱을 넣고 잘 풀어줍니다.','호박, 두부, 고추를 넣고 5분 더 끓이면 완성!'],
      en: ['Dice potato and zucchini, cut tofu into pieces.','Add 400ml water to pot, add potato first and boil.','Add K1 Doenjang stick and stir to dissolve.','Add zucchini, tofu, and pepper. Boil 5 more min!'],
      ja: ['じゃがいもとズッキーニをさいの目に、豆腐を食べやすく切ります。','鍋に水400mlとじゃがいもを入れて沸かします。','K1テンジャンスティックを入れてよく溶かします。','ズッキーニ、豆腐、唐辛子を入れて5分煮れば完成！'],
      zh: ['土豆和西葫芦切丁，豆腐切块。','锅中加入400ml水，先放土豆煮开。','加入K1大酱汤底棒搅拌溶解。','加入西葫芦、豆腐和辣椒，再煮5分钟即可！']
    },
    likes: 5800, views: 740000,
    comments: [
      {
        user: 'David', flag: '🇺🇸', lang: 'en', time: '6h',
        text: { en:"This is the comfort food I didn't know I needed 🥰", ko:"이렇게 위로가 되는 음식이 필요한 줄 몰랐어요 🥰", ja:"こんなに癒される料理が必要だったとは 🥰", zh:"这就是我需要的治愈美食 🥰" }
      }
    ]
  },
  {
    id: 'janchi-guksu',
    youtubeId: 'oLvDBEMGSGk',
    cookTime: 5, servings: 1, difficulty: 'easy',
    sauce: { color: '#2471a3', emoji: '🐟' },
    sauceName: { ko:'멸치 육수', en:'Anchovy Broth', ja:'煮干しだし', zh:'鳀鱼高汤' },
    product: { price: '$10.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #0D2840 0%, #2471a3 40%, #3498db 100%)', emoji: '🍜' },
    title: {
      ko: '멸치육수 잔치국수',
      en: 'Anchovy Broth Banquet Noodles',
      ja: '煮干しだしのチャンチグクス',
      zh: '鳀鱼高汤宴席面'
    },
    desc: {
      ko: '시원한 멸치육수에 소면을 말아내는 잔치국수. 호박채와 김가루를 올리면 완벽합니다.',
      en: 'Thin noodles in refreshing anchovy broth. Top with zucchini and seaweed for perfection.',
      ja: 'さっぱりした煮干しだしにそうめんを入れたチャンチグクス。ズッキーニと海苔をのせれば完璧。',
      zh: '清爽的鳀鱼高汤配细面。加上西葫芦丝和海苔就完美了。'
    },
    ingredients: {
      ko: ['K1 멸치 육수 스틱 1포','물 500ml','소면 100g','애호박 약간','김가루','간장 약간'],
      en: ['1 K1 Anchovy Broth stick','500ml water','100g thin noodles','Some zucchini','Seaweed flakes','Soy sauce to taste'],
      ja: ['K1煮干しだしスティック 1本','水 500ml','そうめん 100g','ズッキーニ 少々','海苔','醤油 少々'],
      zh: ['K1鳀鱼高汤棒 1包','水 500ml','细面 100g','西葫芦 少许','海苔碎','酱油 少许']
    },
    steps: {
      ko: ['별도의 냄비에 소면을 삶아 찬물에 헹궈둡니다.','냄비에 물 500ml를 넣고 K1 멸치 육수 스틱을 풀어 끓입니다.','간장으로 간을 맞추고, 호박채를 넣어 1분 끓입니다.','그릇에 면을 담고 육수를 부은 뒤 김가루를 올리면 완성!'],
      en: ['Boil noodles separately and rinse with cold water.','Add 500ml water to pot, dissolve K1 Anchovy Broth stick.','Season with soy sauce, add zucchini, boil 1 min.','Place noodles in bowl, pour broth, top with seaweed!'],
      ja: ['別の鍋でそうめんを茹で、冷水で洗っておきます。','鍋に水500mlとK1煮干しだしスティックを入れて沸かします。','醤油で味を調え、ズッキーニを入れて1分煮ます。','器に麺を盛り、だしを注ぎ、海苔をのせて完成！'],
      zh: ['另起一锅煮面，用冷水冲洗备用。','锅中加入500ml水，溶解K1鳀鱼高汤棒煮开。','用酱油调味，加入西葫芦丝煮1分钟。','碗中放面，浇上高汤，撒海苔碎即可！']
    },
    likes: 4400, views: 630000,
    comments: [
      {
        user: '王小花', flag: '🇨🇳', lang: 'zh', time: '4h',
        text: { zh:"汤头太鲜了！比我去韩国吃的还好喝！", ko:"국물이 너무 시원해요! 한국에서 먹은 것보다 맛있어요!", en:"The broth is so rich! Even better than what I had in Korea!", ja:"スープがすごく美味しい！韓国で食べたのより美味しいかも！" }
      },
      {
        user: 'Anna', flag: '🇩🇪', lang: 'en', time: '1d',
        text: { en:"Perfect for a rainy day. Simple and soul-warming. ☔", ko:"비 오는 날 딱이에요. 간단하고 마음이 따뜻해지는. ☔", ja:"雨の日にぴったり。シンプルで心が温まる。☔", zh:"下雨天最合适。简单又暖心。☔" }
      }
    ]
  },
  {
    id: 'vegan-juk',
    youtubeId: 'HkGGTFpCMhQ',
    cookTime: 7, servings: 1, difficulty: 'medium',
    sauce: { color: '#1e8449', emoji: '🌱' },
    sauceName: { ko:'채수', en:'Vegetable Broth', ja:'ベジブロス', zh:'蔬菜高汤' },
    product: { price: '$10.99', amazonUrl: 'https://amazon.com' },
    thumb: { gradient: 'linear-gradient(135deg, #0B3D1E 0%, #1e8449 40%, #27ae60 100%)', emoji: '🥣' },
    title: {
      ko: '채수 비건 김치죽',
      en: 'Vegan Kimchi Porridge',
      ja: 'ビーガンキムチおかゆ',
      zh: '素食泡菜粥'
    },
    desc: {
      ko: '100% 식물성 채수로 만든 건강한 김치죽. 비건 식단에도, 속이 편한 한 끼에도 딱입니다.',
      en: 'Healthy kimchi porridge made with 100% plant-based broth. Perfect for vegan diets or a gentle meal.',
      ja: '100%植物性ブロスで作るヘルシーキムチおかゆ。ビーガン食にも、お腹に優しい一食にも。',
      zh: '100%植物高汤制作的健康泡菜粥。素食者和想吃清淡餐的人都适合。'
    },
    ingredients: {
      ko: ['K1 채수 스틱 1포','밥 1공기 (찬밥 OK)','김치 50g (비건 김치 권장)','물 300ml','참기름 약간','김가루 (선택)'],
      en: ['1 K1 Vegetable Broth stick','1 bowl of rice (leftover OK)','50g kimchi (vegan kimchi recommended)','300ml water','Sesame oil','Seaweed flakes (optional)'],
      ja: ['K1ベジブロススティック 1本','ご飯 1杯分（冷ご飯OK）','キムチ 50g（ビーガンキムチ推奨）','水 300ml','ごま油 少々','海苔（お好みで）'],
      zh: ['K1蔬菜高汤棒 1包','米饭 1碗（剩饭也可以）','泡菜 50g（建议用素泡菜）','水 300ml','芝麻油 少许','海苔碎（可选）']
    },
    steps: {
      ko: ['냄비에 참기름을 두르고 김치를 1분간 볶아줍니다.','밥과 물 300ml를 넣고 저어가며 끓입니다.','K1 채수 스틱을 넣고 잘 풀어줍니다.','약불에서 5분간 뭉근히 끓여 죽 농도가 되면 완성! 김가루를 올려 드세요.'],
      en: ['Heat sesame oil in pot, stir-fry kimchi for 1 min.','Add rice and 300ml water, stir while bringing to boil.','Add K1 Vegetable Broth stick and dissolve.','Simmer on low heat 5 min until porridge consistency. Top with seaweed!'],
      ja: ['鍋にごま油を引き、キムチを1分炒めます。','ご飯と水300mlを入れて混ぜながら沸かします。','K1ベジブロススティックを入れて溶かします。','弱火で5分煮込み、おかゆの濃さになったら完成！海苔をのせてどうぞ。'],
      zh: ['锅中加芝麻油，翻炒泡菜1分钟。','加入米饭和300ml水，边搅拌边煮开。','加入K1蔬菜高汤棒溶解。','小火煮5分钟至粥状即可完成！撒上海苔碎享用。']
    },
    likes: 3100, views: 380000,
    comments: [
      {
        user: 'Lisa', flag: '🇸🇪', lang: 'en', time: '9h',
        text: { en:"Finally a vegan Korean recipe that actually works! Thank you K1! 🌱", ko:"드디어 진짜 되는 비건 한식 레시피! 감사해요 K1! 🌱", ja:"ついに本当に使えるビーガン韓国レシピ！ありがとうK1！🌱", zh:"终于有一个真正有效的素食韩餐食谱！谢谢K1！🌱" }
      }
    ]
  }
];

// ============================================================
//  3. Custom Recipe Merge (from Admin page)
// ============================================================
function getCustomRecipes() {
  try {
    const raw = JSON.parse(localStorage.getItem('k1CustomRecipes') || '[]');
    return raw.map(r => ({
      ...r,
      thumb: r.thumbImage
        ? { image: r.thumbImage, emoji: r.emoji || '🍽️' }
        : { gradient: `linear-gradient(135deg, ${darken(r.thumbColor||'#888')} 0%, ${r.thumbColor||'#888'} 50%, ${lighten(r.thumbColor||'#888')} 100%)`, emoji: r.emoji || '🍽️' },
      sauce: r.sauce || { color: '#888', emoji: '🍳' },
      sauceName: r.sauceName || {},
      product: r.product || { price: '$12.99', amazonUrl: 'https://amazon.com' },
      likes: r.likes || 0, views: r.views || 0,
      comments: r.comments || []
    }));
  } catch { return []; }
}
function darken(hex) { return adjustColor(hex, -40); }
function lighten(hex) { return adjustColor(hex, 40); }
function adjustColor(hex, amt) {
  hex = hex.replace('#','');
  let r = Math.min(255, Math.max(0, parseInt(hex.substring(0,2),16) + amt));
  let g = Math.min(255, Math.max(0, parseInt(hex.substring(2,4),16) + amt));
  let b = Math.min(255, Math.max(0, parseInt(hex.substring(4,6),16) + amt));
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}
function getAllRecipes() { return [...RECIPES, ...getCustomRecipes()]; }

// ============================================================
//  4. State
// ============================================================
let currentLang = localStorage.getItem('k1Lang') || 'ko';
let likedRecipes = JSON.parse(localStorage.getItem('k1Likes') || '{}');
let userComments = JSON.parse(localStorage.getItem('k1Comments') || '{}');
let popupTimers = {};

const LANG_META = {
  ko: { flag:'🇰🇷', name:'한국어' },
  en: { flag:'🇬🇧', name:'English' },
  ja: { flag:'🇯🇵', name:'日本語' },
  zh: { flag:'🇨🇳', name:'中文' },
};

// ============================================================
//  4. i18n Helpers
// ============================================================
function t(key) { return UI[currentLang]?.[key] || UI['ko'][key] || key; }
function tl(obj) { return obj?.[currentLang] || obj?.['ko'] || ''; }

function updateStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.getElementById('langFlag').textContent = LANG_META[currentLang].flag;
  document.getElementById('langName').textContent = LANG_META[currentLang].name;
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('k1Lang', lang);
  updateStaticI18n();
  route(); // re-render current page
}

// ============================================================
//  5. Router
// ============================================================
function getHash() {
  return location.hash.slice(1) || '/';
}

function route() {
  const hash = getHash();
  const app = document.getElementById('app');
  window.scrollTo(0, 0);
  clearAllTimers();

  if (hash.startsWith('/recipe/')) {
    const id = hash.replace('/recipe/', '');
    const recipe = getAllRecipes().find(r => r.id === id);
    if (recipe) {
      renderDetail(app, recipe);
    } else {
      renderHome(app);
    }
  } else {
    renderHome(app);
  }
  updateStaticI18n();
}

window.addEventListener('hashchange', route);

// ============================================================
//  6. Home Page
// ============================================================
function renderHome(container) {
  const searchPlaceholder = t('search');
  let html = `
    <section class="hero">
      <div class="wrap hero-content">
        <div class="hero-eyebrow fade-in">${t('hero.eyebrow')}</div>
        <h1 class="fade-in d1">${t('hero.title')}</h1>
        <p class="lead fade-in d2">${t('hero.sub')}</p>
        <div class="search-bar fade-in d3">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="searchInput" placeholder="${searchPlaceholder}">
        </div>
      </div>
    </section>
    <section class="recipe-section">
      <div class="wrap">
        <div class="section-head fade-in">
          <h2 class="section-title"><i class="fa-solid fa-fire"></i>${t('section.trending')}</h2>
        </div>
        <div class="recipe-grid" id="recipeGrid">
          ${getAllRecipes().map(r => renderCard(r)).join('')}
        </div>
      </div>
    </section>`;
  container.innerHTML = html;

  // Search
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      const grid = document.getElementById('recipeGrid');
      const filtered = getAllRecipes().filter(r =>
        tl(r.title).toLowerCase().includes(q) ||
        tl(r.desc).toLowerCase().includes(q) ||
        tl(r.sauceName).toLowerCase().includes(q)
      );
      grid.innerHTML = filtered.length
        ? filtered.map(r => renderCard(r)).join('')
        : `<div class="empty-state"><i class="fa-solid fa-utensils"></i><p>No results</p></div>`;
      bindCardClicks();
    });
  }
  bindCardClicks();
}

function renderCard(r) {
  const totalLikes = (likedRecipes[r.id] ? 1 : 0) + r.likes;
  const thumbBg = r.thumb.image
    ? `<img class="card-thumb-bg" src="${r.thumb.image}" alt="" style="width:100%;height:100%;object-fit:cover">`
    : `<div class="card-thumb-bg" style="background:${r.thumb.gradient}">${r.thumb.emoji}</div>`;
  return `
    <article class="recipe-card" data-id="${r.id}">
      <div class="card-thumb">
        ${thumbBg}
        <div class="card-play"><i class="fa-solid fa-play"></i></div>
        <span class="card-time">${r.cookTime} ${t('recipe.time')}</span>
        <span class="card-sauce" style="background:${r.sauce.color}">${r.sauce.emoji} ${tl(r.sauceName)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${tl(r.title)}</h3>
        <p class="card-desc">${tl(r.desc)}</p>
        <div class="card-meta">
          <span class="likes"><i class="fa-solid fa-heart"></i>${formatNum(totalLikes)}</span>
          <span><i class="fa-solid fa-eye"></i>${formatNum(r.views)}</span>
          <span><i class="fa-solid fa-clock"></i>${r.cookTime}${t('recipe.time')}</span>
        </div>
      </div>
    </article>`;
}

function bindCardClicks() {
  document.querySelectorAll('.recipe-card').forEach(card => {
    card.onclick = () => location.hash = `/recipe/${card.dataset.id}`;
  });
}

// ============================================================
//  7. Detail Page
// ============================================================
function renderDetail(container, r) {
  const totalLikes = (likedRecipes[r.id] ? 1 : 0) + r.likes;
  const isLiked = !!likedRecipes[r.id];
  const allComments = [...r.comments, ...(userComments[r.id] || [])];
  const diffKey = `recipe.diff.${r.difficulty}`;

  let html = `
    <section class="detail">
      <div class="wrap">
        <a href="#/" class="detail-back">${t('back')}</a>
        <div class="detail-grid">
          <!-- LEFT: Video -->
          <div>
            <div class="video-area">
              <div class="video-container" id="videoContainer">
                <div class="video-placeholder" id="videoPlaceholder">
                  <i class="fa-solid fa-circle-play"></i>
                  <div>${tl(r.title)}</div>
                  <span>YouTube · Click to play</span>
                </div>
              </div>
              <!-- Product Popup (Amazon Ad) -->
              <div class="product-popup" id="productPopup">
                <button class="popup-close" id="popupClose"><i class="fa-solid fa-xmark"></i></button>
                <div class="popup-product-img" style="background:${r.sauce.color}">${r.sauce.emoji}</div>
                <div class="popup-info">
                  <div class="popup-badge">${t('popup.badge')}</div>
                  <div class="popup-name">K1 ${tl(r.sauceName)}</div>
                  <div class="popup-price">${r.product.price}</div>
                </div>
                <a class="popup-buy" href="${r.product.amazonUrl}" target="_blank" rel="noopener">
                  <i class="fa-solid fa-cart-shopping"></i>${t('popup.buy')}
                </a>
              </div>
            </div>
          </div>

          <!-- RIGHT: Recipe Info -->
          <div class="recipe-info">
            <span class="recipe-sauce-badge" style="background:${r.sauce.color}">
              ${r.sauce.emoji} K1 ${tl(r.sauceName)}
            </span>
            <h1 class="recipe-title">${tl(r.title)}</h1>
            <p class="recipe-desc">${tl(r.desc)}</p>
            <div class="recipe-meta-row">
              <div class="recipe-meta-item"><i class="fa-solid fa-clock"></i><strong>${r.cookTime}</strong>${t('recipe.time')}</div>
              <div class="recipe-meta-item"><i class="fa-solid fa-user"></i><strong>${r.servings}</strong>${t('recipe.servings')}</div>
              <div class="recipe-meta-item"><i class="fa-solid fa-signal"></i><strong>${t(diffKey)}</strong></div>
              <div class="recipe-meta-item"><i class="fa-solid fa-eye"></i><strong>${formatNum(r.views)}</strong>${t('views')}</div>
            </div>

            <!-- Like -->
            <div class="like-section">
              <button class="like-btn ${isLiked ? 'liked' : ''}" id="likeBtn" data-id="${r.id}">
                <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                <span class="like-count">${formatNum(totalLikes)}</span>
                <span>${isLiked ? t('liked') : t('like')}</span>
              </button>
            </div>

            <!-- Tabs -->
            <div class="recipe-tabs">
              <button class="recipe-tab active" data-tab="ingredients">${t('recipe.ingredients')}</button>
              <button class="recipe-tab" data-tab="steps">${t('recipe.steps')}</button>
            </div>
            <div id="tabContent">
              ${renderIngredients(r)}
            </div>
          </div>

          <!-- COMMENTS -->
          <div class="comments-section">
            <h3 class="comments-title">
              <i class="fa-solid fa-comments"></i>${t('comments')}
              <span class="count">(${allComments.length})</span>
            </h3>
            <div class="comment-input-area">
              <div class="comment-avatar"><i class="fa-solid fa-user"></i></div>
              <div class="comment-input-wrap">
                <textarea class="comment-input" id="commentInput" placeholder="${t('comments.placeholder')}" rows="2"></textarea>
                <div class="comment-submit-row">
                  <button class="comment-submit" id="commentSubmit">${t('comments.submit')}</button>
                </div>
              </div>
            </div>
            <div id="commentsList">
              ${allComments.map((c, i) => renderComment(c, i)).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  container.innerHTML = html;

  // ---- Bindings ----

  // Video placeholder click → load YouTube iframe
  const placeholder = document.getElementById('videoPlaceholder');
  const videoContainer = document.getElementById('videoContainer');
  if (placeholder) {
    placeholder.addEventListener('click', () => {
      videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${r.youtubeId}?autoplay=1&rel=0" 
        allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    });
  }

  // Product popup: show after 3 seconds
  popupTimers.show = setTimeout(() => {
    const popup = document.getElementById('productPopup');
    if (popup) popup.classList.add('show');
  }, 3000);

  const popupClose = document.getElementById('popupClose');
  if (popupClose) {
    popupClose.addEventListener('click', () => {
      document.getElementById('productPopup').classList.remove('show');
    });
  }

  // Like button
  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) {
    likeBtn.addEventListener('click', () => toggleLike(r));
  }

  // Tabs
  document.querySelectorAll('.recipe-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.recipe-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const content = document.getElementById('tabContent');
      if (tab.dataset.tab === 'ingredients') {
        content.innerHTML = renderIngredients(r);
      } else {
        content.innerHTML = renderSteps(r);
      }
    });
  });

  // Comment submit
  const submitBtn = document.getElementById('commentSubmit');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => submitComment(r));
  }

  // Translate buttons
  bindTranslateButtons();
}

function renderIngredients(r) {
  const items = tl(r.ingredients) || [];
  return `<ul class="ingredients-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
}

function renderSteps(r) {
  const items = tl(r.steps) || [];
  return `<ol class="steps-list">${items.map(s => `<li>${s}</li>`).join('')}</ol>`;
}

function renderComment(c, index) {
  const isOwnLang = c.lang === currentLang;
  const originalText = c.text[c.lang] || Object.values(c.text)[0];
  const translatedText = c.text[currentLang] || originalText;
  const timeLabel = c.time;

  return `
    <div class="comment-item">
      <div class="comment-avatar">${c.flag}</div>
      <div>
        <div class="comment-user-info">
          <span class="comment-username">${c.user}</span>
          <span class="comment-flag">${LANG_META[c.lang]?.flag || ''}</span>
          <span class="comment-time">${timeLabel}</span>
        </div>
        <div class="comment-text">${originalText}</div>
        ${!isOwnLang ? `
          <div class="comment-translated-text" id="trans-${index}" style="display:none">${translatedText}</div>
          <button class="comment-translate-btn" data-index="${index}" data-showing="false">
            <i class="fa-solid fa-language"></i><span>${t('translate')}</span>
          </button>
        ` : ''}
      </div>
    </div>`;
}

function bindTranslateButtons() {
  document.querySelectorAll('.comment-translate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      const transEl = document.getElementById(`trans-${idx}`);
      const showing = btn.dataset.showing === 'true';
      if (showing) {
        transEl.style.display = 'none';
        btn.querySelector('span').textContent = t('translate');
        btn.dataset.showing = 'false';
      } else {
        transEl.style.display = 'block';
        btn.querySelector('span').textContent = t('translated');
        btn.dataset.showing = 'true';
      }
    });
  });
}

// ============================================================
//  8. Like System (localStorage)
// ============================================================
function toggleLike(recipe) {
  const btn = document.getElementById('likeBtn');
  if (likedRecipes[recipe.id]) {
    delete likedRecipes[recipe.id];
  } else {
    likedRecipes[recipe.id] = true;
  }
  localStorage.setItem('k1Likes', JSON.stringify(likedRecipes));

  const isLiked = !!likedRecipes[recipe.id];
  const totalLikes = (isLiked ? 1 : 0) + recipe.likes;
  btn.classList.toggle('liked', isLiked);
  btn.innerHTML = `
    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
    <span class="like-count">${formatNum(totalLikes)}</span>
    <span>${isLiked ? t('liked') : t('like')}</span>`;
}

// ============================================================
//  9. Comment System (localStorage)
// ============================================================
function submitComment(recipe) {
  const input = document.getElementById('commentInput');
  const text = input.value.trim();
  if (!text) return;

  const newComment = {
    user: t('like') === 'Like' ? 'You' : '나',
    flag: LANG_META[currentLang].flag,
    lang: currentLang,
    time: 'now',
    text: { [currentLang]: text }
  };

  if (!userComments[recipe.id]) userComments[recipe.id] = [];
  userComments[recipe.id].push(newComment);
  localStorage.setItem('k1Comments', JSON.stringify(userComments));

  input.value = '';

  // Re-render comments
  const allComments = [...recipe.comments, ...userComments[recipe.id]];
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = allComments.map((c, i) => renderComment(c, i)).join('');
  document.querySelector('.comments-title .count').textContent = `(${allComments.length})`;
  bindTranslateButtons();
}

// ============================================================
//  10. Utilities
// ============================================================
function formatNum(n) {
  if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, '') + '만';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

function clearAllTimers() {
  Object.values(popupTimers).forEach(t => clearTimeout(t));
  popupTimers = {};
}

// ============================================================
//  11. Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Language selector
  const langBtn = document.getElementById('langBtn');
  const langSelector = document.getElementById('langSelector');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('open');
  });
  document.addEventListener('click', () => langSelector.classList.remove('open'));
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLang(btn.dataset.lang);
      langSelector.classList.remove('open');
    });
  });

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Initial render
  updateStaticI18n();
  route();
});
