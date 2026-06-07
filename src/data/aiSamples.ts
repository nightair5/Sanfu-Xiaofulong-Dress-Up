import type { SceneId } from "./assets";

export type AISample = {
  id: string;
  type: "poster" | "video-cover";
  sceneId: SceneId;
  personality: string;
  title: string;
  image: string;
  tags: string[];
  slogan: string;
  recommendation: string;
};

export const aiSamples: AISample[] = [
  {
    id: "ai_school_001",
    type: "poster",
    sceneId: "school",
    personality: "元气校园搭子",
    title: "开学态度「题」潮酷大片",
    image: "/assets/posters/school-poster.png",
    tags: ["开学", "校园", "青春", "学院风", "分享"],
    slogan: "开学态度题，三福懂你敢定义",
    recommendation: "系统结合开学节点、晴朗天气和校园商品库存，生成更适合社交分享的开学搭案。"
  },
  {
    id: "ai_commute_001",
    type: "video-cover",
    sceneId: "commute",
    personality: "轻机能行动派",
    title: "今天出门不费力",
    image: "/assets/posters/commute-poster.png",
    tags: ["通勤", "机能", "效率", "轻便", "城市"],
    slogan: "每天出门，都有一套轻松答案",
    recommendation: "高温天气优先保留轻便单品，库存策略则把机能马甲提升为本次重点装备。"
  },
  {
    id: "ai_blindbox_001",
    type: "poster",
    sceneId: "blindbox",
    personality: "甜酷社交搭子",
    title: "夏日默契「题」社交大片",
    image: "/assets/posters/blindbox-poster.png",
    tags: ["盲盒", "甜酷", "同频", "社交", "分享"],
    slogan: "夏日默契题，三福牵线不翻车",
    recommendation: "分享欲较高的甜酷单品获得额外权重，让生成结果更适合朋友圈和小红书传播。"
  },
  {
    id: "ai_gift_001",
    type: "poster",
    sceneId: "gift",
    personality: "浪漫礼物搭子",
    title: "礼物搭案局 AI 海报",
    image: "/assets/posters/gift-poster.png",
    tags: ["礼物", "节日", "仪式感", "温暖", "惊喜"],
    slogan: "送礼不踩雷，关系更好搭",
    recommendation: "系统识别礼物场景与关系任务，优先突出柔和配色和更有仪式感的商品组合。"
  },
  {
    id: "ai_graduation_001",
    type: "poster",
    sceneId: "graduation",
    personality: "人生封面搭子",
    title: "毕业新「题」案封面",
    image: "/assets/posters/graduation-poster.png",
    tags: ["毕业", "纪念", "拍照", "花束", "封面"],
    slogan: "毕业新题案，三福帮你打个样",
    recommendation: "毕业节点提高拍照和纪念类装备权重，生成一张像人生新封面的毕业搭案。"
  },
  {
    id: "ai_cocreation_001",
    type: "video-cover",
    sceneId: "cocreation",
    personality: "灵感共创搭子",
    title: "我的小福龙新搭案",
    image: "/assets/posters/cocreation-poster.png",
    tags: ["共创", "灵感", "设计", "投稿", "内容资产"],
    slogan: "你的灵感，就是下一个新可能",
    recommendation: "系统把当前搭配转换成共创投稿封面，并自动生成可复用的视觉标签。"
  },
  {
    id: "ai_music_001",
    type: "video-cover",
    sceneId: "music",
    personality: "夜游态度搭子",
    title: "夜色越亮，态度越响",
    image: "/assets/posters/music-poster.png",
    tags: ["音乐节", "夜游", "霓虹", "派对", "态度"],
    slogan: "夜色越亮，搭子越有态度",
    recommendation: "夜游节点与分享值共同提升机能、墨镜和斜挎包的曝光权重。"
  },
  {
    id: "ai_seaside_001",
    type: "poster",
    sceneId: "seaside",
    personality: "清爽假日搭子",
    title: "把夏天穿成明信片",
    image: "/assets/posters/seaside-poster.png",
    tags: ["海边", "假日", "清爽", "阳光", "出片"],
    slogan: "暑你有默契，穿出夏日新搭案",
    recommendation: "厦门晴热天气提高轻便、清爽与防晒标签权重，形成更适合夏日出片的搭案。"
  }
];
