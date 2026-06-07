import type { SceneId } from "./assets";

export type Scene = {
  id: SceneId;
  name: string;
  theme: string;
  keywords: string[];
  style: string[];
  slogan: string;
  backgroundId: string;
  posterId: string;
  outfitId: string;
  accent: string;
};

export const scenes: Scene[] = [
  {
    id: "school",
    name: "开学校园",
    theme: "开学装备局",
    keywords: ["校园", "开学", "元气", "第一印象", "实用", "青春"],
    style: ["学院风", "棒球夹克", "卫衣", "背包", "运动鞋", "文具道具"],
    slogan: "新学期第一套，一次搭好第一印象",
    backgroundId: "background_school_room",
    posterId: "poster_school",
    outfitId: "outfit_school_ready",
    accent: "#ff7fbd"
  },
  {
    id: "commute",
    name: "通勤街道",
    theme: "通勤搭子局",
    keywords: ["通勤", "效率", "轻便", "街头", "实用", "都市"],
    style: ["工装", "机能风", "马甲", "斜挎包", "咖啡", "运动鞋"],
    slogan: "每天出门，都有一套轻松答案",
    backgroundId: "background_commute_street",
    posterId: "poster_commute",
    outfitId: "outfit_commute_utility",
    accent: "#71c7ff"
  },
  {
    id: "blindbox",
    name: "社交盲盒空间",
    theme: "社交盲盒局",
    keywords: ["潮玩", "盲盒", "社交", "可爱", "互动", "分享"],
    style: ["甜酷风", "星星墨镜", "短裙", "潮玩配饰", "亮色单品"],
    slogan: "盲盒社交，遇见同频搭子",
    backgroundId: "background_blindbox_space",
    posterId: "poster_blindbox",
    outfitId: "outfit_blindbox_sweetcool",
    accent: "#b99cff"
  },
  {
    id: "gift",
    name: "礼物桌面",
    theme: "礼物搭案局",
    keywords: ["礼物", "温暖", "节日", "惊喜", "关系", "仪式感"],
    style: ["甜美", "柔和", "粉色", "礼盒", "香氛", "饰品", "花束"],
    slogan: "送礼不踩雷，关系更好搭",
    backgroundId: "background_gift_desk",
    posterId: "poster_gift",
    outfitId: "outfit_gift_soft",
    accent: "#ff9fc7"
  },
  {
    id: "graduation",
    name: "毕业拍照区",
    theme: "毕业出片局",
    keywords: ["毕业", "纪念", "拍照", "花束", "仪式感", "青春"],
    style: ["毕业帽", "毕业服", "相机", "花束", "纪念配饰"],
    slogan: "毕业不是结束，是人生封面的开始",
    backgroundId: "background_graduation_photo_zone",
    posterId: "poster_graduation",
    outfitId: "outfit_graduation_look",
    accent: "#ffd166"
  },
  {
    id: "cocreation",
    name: "共创展墙",
    theme: "小福龙搭子共创展",
    keywords: ["共创", "设计", "灵感", "展览", "用户投稿", "内容资产"],
    style: ["设计师", "策展人", "贝雷帽", "画板", "平板", "色卡", "创意道具"],
    slogan: "你的灵感，就是下一个新可能",
    backgroundId: "background_cocreation_wall",
    posterId: "poster_cocreation",
    outfitId: "outfit_cocreation_artist",
    accent: "#a7d8ff"
  },
  {
    id: "music",
    name: "音乐节夜游",
    theme: "音乐节搭子局",
    keywords: ["音乐节", "夜晚", "霓虹", "社交", "街头", "派对"],
    style: ["机能马甲", "墨镜", "斜挎包", "工装裤", "炫彩配饰"],
    slogan: "夜色越亮，搭子越有态度",
    backgroundId: "background_music_festival",
    posterId: "poster_music",
    outfitId: "outfit_music_hoodie",
    accent: "#8a6cff"
  },
  {
    id: "seaside",
    name: "海边假日",
    theme: "海边假日搭子局",
    keywords: ["海边", "假日", "清爽", "阳光", "出片", "旅行"],
    style: ["短裙", "墨镜", "饮料", "草帽", "轻便包", "清爽配色"],
    slogan: "把夏天穿成一张明信片",
    backgroundId: "background_seaside_holiday",
    posterId: "poster_seaside",
    outfitId: "outfit_seaside_sweetcool",
    accent: "#67d9d6"
  }
];

export const getSceneById = (id: SceneId) => scenes.find((scene) => scene.id === id) ?? scenes[0];

