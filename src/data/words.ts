import groundSrc from "@/assets/words/ground.png";
import iceCreamSrc from "@/assets/words/ice-cream.png";
import agoSrc from "@/assets/words/ice-cream.png";

export const words: Word[] = [
  {
    "id": "ground",
    "text": "ground",
    "pronunciations": {
      "uk": "\u0261ra\u028and",
      "us": "\u0261ra\u028and"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/u/ukg/ukgro/ukgroov019.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/g/gro/groun/ground.mp3"
    },
    "imgUrl": groundSrc
  },
  {
    "id": "ice cream",
    "text": "ice cream",
    "pronunciations": {
      "uk": "\u02cca\u026as \u02c8kri\u02d0m \u02cck\u0259\u028an",
      "us": "\u02c8a\u026as \u02cckri\u02d0m \u02ccko\u028an"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/c/cdo/cdo02/cdo0216icecuk0976.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/c/cdo/cdo03/cdo0318usicec2403.mp3"
    },
    "imgUrl": iceCreamSrc
  },
  {
    "id": "ago",
    "text": "ago",
    "pronunciations": {
      "uk": "\u0259\u02c8\u0261\u0259\u028a",
      "us": "\u0259\u02c8\u0261o\u028a"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/u/uka/ukagi/ukagita012.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/a/ago/ago__/ago.mp3"
    },
    "imgUrl": agoSrc
  }
];

const wordByModules = [
  {
    "module": "Module 1",
    "words": [
      { "id": 1, "text": "still", "translation": "仍然" },
      { "id": 2, "text": "programme", "translation": "节目" },
      { "id": 3, "text": "lady", "translation": "女士，夫人" },
      { "id": 4, "text": "life", "translation": "生活" },
      { "id": 5, "text": "different", "translation": "不同的" },
      { "id": 6, "text": "ago", "translation": "以前" },
      { "id": 7, "text": "interviewer", "translation": "采访者" },
      { "id": 8, "text": "enough", "translation": "足够的" },
      { "id": 9, "text": "television", "translation": "电视机" },
      { "id": 10, "text": "grandchildren", "translation": "孙子/孙女" },
      { "id": 11, "text": "change", "translation": "改变，变化" },
      { "id": 12, "text": "night", "translation": "夜晚，夜间" },
      { "id": 13, "text": "work", "translation": "工作；劳动；干活儿" },
      { "id": 14, "text": "field", "translation": "田地" },
      { "id": 15, "text": "fire", "translation": "火，炉火" },
      { "id": 16, "text": "or", "translation": "也不，也没" },
      { "id": 17, "text": "radio", "translation": "收音机" },
      { "id": 18, "text": "telephone", "translation": "电话" },
      { "id": 19, "text": "couldn't", "translation": "不能" }
    ]
  },
  {
    "module": "Module 2",
    "words": [
      { "id": 20, "text": "learnt", "translation": "学习" },
      { "id": 21, "text": "taught", "translation": "教，讲授" },
      { "id": 22, "text": "language", "translation": "语言" },
      { "id": 23, "text": "wrote", "translation": "写" },
      { "id": 24, "text": "dancer", "translation": "舞蹈演员" },
      { "id": 25, "text": "foreign", "translation": "外国的" },
      { "id": 26, "text": "studied", "translation": "学习" },
      { "id": 27, "text": "hard", "translation": "努力地" }
    ]
  },
  {
    "module": "Module 3",
    "words": [
      { "id": 28, "text": "hamburger", "translation": "汉堡包" },
      { "id": 29, "text": "English", "translation": "英国(式)的" },
      { "id": 30, "text": "breakfast", "translation": "早餐" },
      { "id": 31, "text": "lunch", "translation": "午餐" },
      { "id": 32, "text": "sandwich", "translation": "三明治" },
      { "id": 33, "text": "fish and chips", "translation": "炸鱼加炸薯条" },
      { "id": 34, "text": "traditional", "translation": "传统的" }
    ]
  },
  {
    "module": "Module 4",
    "words": [
      { "id": 35, "text": "library", "translation": "图书馆" },
      { "id": 36, "text": "student", "translation": "学生" },
      { "id": 37, "text": "sent", "translation": "发送，寄" },
      { "id": 38, "text": "CD", "translation": "激光唱片，光盘" },
      { "id": 39, "text": "idea", "translation": "主意，想法" },
      { "id": 40, "text": "put", "translation": "放，安放" },
      { "id": 41, "text": "shelf", "translation": "架子" },
      { "id": 42, "text": "heavy", "translation": "重的，沉的" },
      { "id": 43, "text": "dictionary", "translation": "词典" },
      { "id": 44, "text": "card", "translation": "卡片" },
      { "id": 45, "text": "library card", "translation": "借书证" },
      { "id": 46, "text": "ask", "translation": "邀请" },
      { "id": 47, "text": "wrong", "translation": "错误的" },
      { "id": 48, "text": "dear", "translation": "哎呀" },
      { "id": 49, "text": "information", "translation": "信息" },
      { "id": 50, "text": "e-book", "translation": "电子书" },
      { "id": 51, "text": "project", "translation": "项目" }
    ]
  },
  {
    "module": "Module 5",
    "words": [
      { "id": 52, "text": "light", "translation": "轻的" },
      { "id": 53, "text": "hard", "translation": "困难的" },
      { "id": 54, "text": "broken", "translation": "坏的" },
      { "id": 55, "text": "department store", "translation": "百货商店" },
      { "id": 56, "text": "pocket", "translation": "口袋" },
      { "id": 57, "text": "umbrella", "translation": "雨伞" },
      { "id": 58, "text": "sales assistant", "translation": "售货员" },
      { "id": 59, "text": "wheel", "translation": "轮子" },
      { "id": 60, "text": "easy", "translation": "容易的" },
      { "id": 61, "text": "take", "translation": "选择；购买" },
      { "id": 62, "text": "too", "translation": "太，过于" },
      { "id": 63, "text": "try", "translation": "尝试" },
      { "id": 64, "text": "lovely", "translation": "可爱的" }
    ]
  }
]
