# K1 Recipe Platform — 글로벌 K-Food 레시피 커뮤니티

K1 스틱소스의 QR 연동 레시피 플랫폼 데모입니다.
유튜브 레시피 영상, 다국어 지원, 소통 기능을 갖춘 정적 웹 앱입니다.

## 🎯 핵심 기능

| 기능 | 설명 |
|---|---|
| **유튜브 영상 임베드** | 레시피별 유튜브 영상을 클릭 한 번으로 재생 |
| **아마존 상품 팝업** | 영상 위에 유튜브 광고 스타일로 K1 소스 구매 링크 노출 (3초 후 슬라이드업) |
| **다국어 지원 (4개국어)** | 🇰🇷 한국어 / 🇬🇧 English / 🇯🇵 日本語 / 🇨🇳 中文 — UI + 레시피 전체 번역 |
| **좋아요** | ❤️ 버튼, localStorage 저장 |
| **댓글 + 번역** | 다른 언어 댓글에 "번역 보기" → 내 언어로 자동 표시 |
| **레시피 검색** | 제목/설명/소스 이름으로 실시간 검색 |

## 📁 파일 구조

```
k1_platform/
├── index.html   # HTML 셸 (네비게이션, 푸터)
├── style.css    # K1 브랜딩 스타일 (오렌지 #e84e1b)
├── app.js       # SPA 로직 (데이터, 라우터, i18n, 좋아요/댓글)
└── README.md    # 이 파일
```

## 🚀 실행 방법

```bash
# 방법 1: 로컬에서 바로 열기
start k1_platform/index.html   # Windows
open k1_platform/index.html    # macOS

# 방법 2: 로컬 서버 (권장, YouTube 임베드에 필요)
cd k1_platform
npx serve .
# 또는
python -m http.server 8080
```

## 🌐 데모 vs 실서비스

현재는 **데모 버전**입니다:

| 항목 | 데모 (현재) | 실서비스 (다음 단계) |
|---|---|---|
| 좋아요/댓글 저장 | localStorage (내 브라우저만) | Firebase Firestore (전 세계 공유) |
| 댓글 번역 | 사전 번역된 데모 댓글 | Google Translate API 실시간 번역 |
| 유튜브 영상 | 샘플 ID (일부 무관한 영상) | 실제 K1 레시피 영상 ID |
| 아마존 링크 | amazon.com 홈페이지 | 실제 K1 상품 페이지 |
| 사용자 인증 | 없음 | Firebase Auth (구글/소셜 로그인) |

## 🔧 레시피 추가/수정 방법

`app.js`의 `RECIPES` 배열에 새 항목을 추가하면 됩니다:

```javascript
{
  id: 'new-recipe',           // URL용 고유 ID
  youtubeId: 'YOUTUBE_ID',    // 유튜브 영상 ID
  cookTime: 5,                // 조리 시간 (분)
  servings: 2,                // 인분
  difficulty: 'easy',         // easy / medium / hard
  sauce: { color: '#e84e1b', emoji: '🌶️' },
  sauceName: { ko:'...', en:'...', ja:'...', zh:'...' },
  product: { price: '$12.99', amazonUrl: 'https://...' },
  thumb: { gradient: 'linear-gradient(...)', emoji: '🍲' },
  title: { ko:'...', en:'...', ja:'...', zh:'...' },
  desc: { ko:'...', en:'...', ja:'...', zh:'...' },
  ingredients: { ko:[...], en:[...], ja:[...], zh:[...] },
  steps: { ko:[...], en:[...], ja:[...], zh:[...] },
  likes: 0, views: 0,
  comments: []
}
```

## 📌 관련 프로젝트

- **K1 랜딩페이지**: https://groot512.github.io/k1/
- **사업계획서**: `모두의창업_사업계획서_PSSD_K1스틱소스.pdf`
