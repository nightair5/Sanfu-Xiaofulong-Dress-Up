export type SceneId =
  | "school"
  | "commute"
  | "blindbox"
  | "gift"
  | "graduation"
  | "cocreation"
  | "music"
  | "seaside";

export type AssetType = "character" | "clothing" | "accessory" | "background" | "poster";

export type WardrobeCategory =
  | "top"
  | "outerwear"
  | "bottom"
  | "shoes"
  | "bag"
  | "hat"
  | "glasses"
  | "prop";

export type AssetCategory =
  | WardrobeCategory
  | "base"
  | "outfit"
  | "expression"
  | "background"
  | "poster";

export type Asset = {
  id: string;
  name: string;
  type: AssetType;
  category: AssetCategory;
  path: string;
  sourceFolder: string;
  tags: string[];
  scenes: SceneId[];
  trendScore: number;
  shareScore: number;
  isTransparentLike?: boolean;
};

export const wardrobeCategories: WardrobeCategory[] = [
  "top",
  "outerwear",
  "bottom",
  "shoes",
  "bag",
  "hat",
  "glasses",
  "prop"
];

export const assets: Asset[] = [
  {
    id: "background_school_room",
    name: "开学卧室装备场",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/school/school-room.png",
    sourceFolder: "场景图",
    tags: ["校园", "开学", "元气", "第一印象", "文具", "青春"],
    scenes: ["school"],
    trendScore: 88,
    shareScore: 86
  },
  {
    id: "background_commute_street",
    name: "通勤街道入口",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/commute/commute-street.png",
    sourceFolder: "场景图",
    tags: ["通勤", "街头", "都市", "效率", "轻便", "门店"],
    scenes: ["commute"],
    trendScore: 90,
    shareScore: 84
  },
  {
    id: "background_blindbox_space",
    name: "潮玩盲盒空间",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/blindbox/blindbox-space.png",
    sourceFolder: "场景图",
    tags: ["盲盒", "潮玩", "可爱", "社交", "分享", "互动"],
    scenes: ["blindbox"],
    trendScore: 94,
    shareScore: 96
  },
  {
    id: "background_gift_desk",
    name: "礼物桌面",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/gift/gift-desk.png",
    sourceFolder: "场景图",
    tags: ["礼物", "温暖", "节日", "惊喜", "仪式感", "柔和"],
    scenes: ["gift"],
    trendScore: 89,
    shareScore: 93
  },
  {
    id: "background_graduation_photo_zone",
    name: "毕业拍照区",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/graduation/graduation-photo-zone.png",
    sourceFolder: "场景图",
    tags: ["毕业", "拍照", "花束", "纪念", "青春", "仪式感"],
    scenes: ["graduation"],
    trendScore: 90,
    shareScore: 94
  },
  {
    id: "background_cocreation_wall",
    name: "小福龙共创展墙",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/cocreation/cocreation-wall.png",
    sourceFolder: "场景图",
    tags: ["共创", "设计", "灵感", "展览", "用户投稿", "内容资产"],
    scenes: ["cocreation"],
    trendScore: 91,
    shareScore: 91
  },
  {
    id: "background_music_festival",
    name: "音乐节舞台广场",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/music/music-festival.png",
    sourceFolder: "场景图",
    tags: ["音乐节", "夜游", "霓虹", "派对", "街头", "社交"],
    scenes: ["music"],
    trendScore: 95,
    shareScore: 95
  },
  {
    id: "background_seaside_holiday",
    name: "海边假日海报背景",
    type: "background",
    category: "background",
    path: "/assets/backgrounds/seaside/seaside-holiday.png",
    sourceFolder: "人物场景图1",
    tags: ["海边", "假日", "清爽", "阳光", "出片", "旅行"],
    scenes: ["seaside"],
    trendScore: 93,
    shareScore: 96
  },
  {
    id: "poster_school",
    name: "开学校园小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/school-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["校园", "开学", "背包", "运动鞋", "元气", "青春"],
    scenes: ["school"],
    trendScore: 94,
    shareScore: 92
  },
  {
    id: "poster_commute",
    name: "通勤街道小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/commute-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["通勤", "街头", "咖啡", "机能", "斜挎包", "效率"],
    scenes: ["commute"],
    trendScore: 95,
    shareScore: 91
  },
  {
    id: "poster_blindbox",
    name: "社交盲盒小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/blindbox-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["盲盒", "潮玩", "社交", "甜酷", "墨镜", "分享"],
    scenes: ["blindbox"],
    trendScore: 97,
    shareScore: 98
  },
  {
    id: "poster_gift",
    name: "礼物搭案小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/gift-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["礼物", "温暖", "粉色", "香氛", "花束", "仪式感"],
    scenes: ["gift"],
    trendScore: 91,
    shareScore: 95
  },
  {
    id: "poster_graduation",
    name: "毕业出片小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/graduation-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["毕业", "拍照", "花束", "毕业帽", "纪念", "青春"],
    scenes: ["graduation"],
    trendScore: 93,
    shareScore: 96
  },
  {
    id: "poster_cocreation",
    name: "共创展墙小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/cocreation-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["共创", "设计", "策展", "灵感", "用户投稿", "平板"],
    scenes: ["cocreation"],
    trendScore: 94,
    shareScore: 93
  },
  {
    id: "poster_music",
    name: "音乐节夜游小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/music-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["音乐节", "夜晚", "霓虹", "机能", "派对", "街头"],
    scenes: ["music"],
    trendScore: 98,
    shareScore: 97
  },
  {
    id: "poster_seaside",
    name: "海边假日小福龙海报",
    type: "poster",
    category: "poster",
    path: "/assets/posters/seaside-poster.png",
    sourceFolder: "人物场景图1",
    tags: ["海边", "假日", "清爽", "阳光", "墨镜", "旅行"],
    scenes: ["seaside"],
    trendScore: 96,
    shareScore: 98
  },
  {
    id: "character_base",
    name: "小福龙基础形象",
    type: "character",
    category: "base",
    path: "/assets/characters/base/xiaofulong-base.png",
    sourceFolder: "新形象图",
    tags: ["小福龙", "基础", "IP", "可换装", "品牌资产"],
    scenes: ["school", "commute", "blindbox", "gift", "graduation", "cocreation", "music", "seaside"],
    trendScore: 86,
    shareScore: 88,
    isTransparentLike: true
  },
  {
    id: "expression_happy",
    name: "小福龙开心表情",
    type: "character",
    category: "expression",
    path: "/assets/characters/expressions/xiaofulong-happy.png",
    sourceFolder: "新形象图",
    tags: ["小福龙", "开心", "互动", "元气", "社交"],
    scenes: ["school", "blindbox", "music"],
    trendScore: 87,
    shareScore: 90,
    isTransparentLike: true
  },
  {
    id: "expression_gift_hands",
    name: "小福龙提礼物",
    type: "character",
    category: "expression",
    path: "/assets/characters/expressions/xiaofulong-gift-hands.png",
    sourceFolder: "新形象图",
    tags: ["礼物", "温暖", "关系", "节日", "惊喜"],
    scenes: ["gift"],
    trendScore: 88,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "expression_graduate_mini",
    name: "小福龙毕业基础装",
    type: "character",
    category: "expression",
    path: "/assets/characters/expressions/xiaofulong-graduate-mini.png",
    sourceFolder: "新形象图",
    tags: ["毕业", "毕业帽", "纪念", "青春", "拍照"],
    scenes: ["graduation"],
    trendScore: 88,
    shareScore: 91,
    isTransparentLike: true
  },
  {
    id: "outfit_school_ready",
    name: "开学第一印象套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/school-ready.png",
    sourceFolder: "新形象图",
    tags: ["校园", "开学", "棒球夹克", "工装裤", "背包", "运动鞋"],
    scenes: ["school", "commute"],
    trendScore: 94,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "outfit_commute_utility",
    name: "通勤机能套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/commute-utility.png",
    sourceFolder: "新形象图",
    tags: ["通勤", "机能", "马甲", "斜挎包", "墨镜", "街头"],
    scenes: ["commute", "music"],
    trendScore: 96,
    shareScore: 93,
    isTransparentLike: true
  },
  {
    id: "outfit_blindbox_sweetcool",
    name: "盲盒甜酷套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/blindbox-sweetcool.png",
    sourceFolder: "新形象图",
    tags: ["盲盒", "甜酷", "短裙", "墨镜", "社交", "分享"],
    scenes: ["blindbox", "seaside"],
    trendScore: 97,
    shareScore: 97,
    isTransparentLike: true
  },
  {
    id: "outfit_gift_soft",
    name: "柔软礼物套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/gift-soft.png",
    sourceFolder: "新形象图",
    tags: ["礼物", "甜美", "柔和", "粉色", "短裙", "仪式感"],
    scenes: ["gift", "blindbox"],
    trendScore: 91,
    shareScore: 94,
    isTransparentLike: true
  },
  {
    id: "outfit_graduation_look",
    name: "毕业纪念套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/graduation-look.png",
    sourceFolder: "新形象图",
    tags: ["毕业", "毕业帽", "拍照", "纪念", "仪式感", "花束"],
    scenes: ["graduation"],
    trendScore: 90,
    shareScore: 95,
    isTransparentLike: true
  },
  {
    id: "outfit_cocreation_artist",
    name: "共创灵感套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/cocreation-artist.png",
    sourceFolder: "新形象图",
    tags: ["共创", "设计", "策展", "贝雷帽", "平板", "灵感"],
    scenes: ["cocreation"],
    trendScore: 93,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "outfit_music_hoodie",
    name: "音乐节渐变卫衣套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/music-hoodie.png",
    sourceFolder: "新形象图",
    tags: ["音乐节", "霓虹", "卫衣", "夜游", "潮流", "派对"],
    scenes: ["music", "blindbox"],
    trendScore: 96,
    shareScore: 95,
    isTransparentLike: true
  },
  {
    id: "outfit_seaside_sweetcool",
    name: "海边甜酷出片套装",
    type: "character",
    category: "outfit",
    path: "/assets/characters/outfits/seaside-sweetcool.png",
    sourceFolder: "新形象图",
    tags: ["海边", "假日", "清爽", "短裙", "墨镜", "出片"],
    scenes: ["seaside", "blindbox"],
    trendScore: 96,
    shareScore: 98,
    isTransparentLike: true
  },
  {
    id: "top_rainbow_cropped_knit",
    name: "彩虹短款针织上衣",
    type: "clothing",
    category: "top",
    path: "/assets/clothes/tops/rainbow-cropped-knit.png",
    sourceFolder: "服装",
    tags: ["甜酷", "元气", "亮色", "短款", "社交", "海边"],
    scenes: ["blindbox", "seaside", "school"],
    trendScore: 91,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "top_rainbow_sweatshirt",
    name: "彩虹撞色卫衣",
    type: "clothing",
    category: "top",
    path: "/assets/clothes/tops/rainbow-sweatshirt.png",
    sourceFolder: "服装",
    tags: ["卫衣", "元气", "校园", "青春", "舒适", "甜酷"],
    scenes: ["school", "blindbox", "music"],
    trendScore: 92,
    shareScore: 90,
    isTransparentLike: true
  },
  {
    id: "top_mint_basic_tee",
    name: "薄荷基础短袖",
    type: "clothing",
    category: "top",
    path: "/assets/clothes/tops/mint-basic-tee.png",
    sourceFolder: "服装",
    tags: ["清爽", "基础", "轻便", "实用", "海边", "日常"],
    scenes: ["seaside", "commute", "school"],
    trendScore: 84,
    shareScore: 80,
    isTransparentLike: true
  },
  {
    id: "top_star_gradient_hoodie",
    name: "星星渐变连帽卫衣",
    type: "clothing",
    category: "top",
    path: "/assets/clothes/tops/star-gradient-hoodie.png",
    sourceFolder: "服装",
    tags: ["卫衣", "甜酷", "星星", "渐变", "音乐节", "社交"],
    scenes: ["music", "blindbox", "school"],
    trendScore: 96,
    shareScore: 96,
    isTransparentLike: true
  },
  {
    id: "outerwear_beige_light_jacket",
    name: "奶油轻便外套",
    type: "clothing",
    category: "outerwear",
    path: "/assets/clothes/outerwear/beige-light-jacket.png",
    sourceFolder: "服装",
    tags: ["轻便", "通勤", "实用", "温柔", "日常", "效率"],
    scenes: ["commute", "gift", "school"],
    trendScore: 84,
    shareScore: 82,
    isTransparentLike: true
  },
  {
    id: "outerwear_beige_trench_coat",
    name: "学院感短风衣",
    type: "clothing",
    category: "outerwear",
    path: "/assets/clothes/outerwear/beige-trench-coat.png",
    sourceFolder: "服装",
    tags: ["学院风", "通勤", "实用", "第一印象", "都市", "轻熟"],
    scenes: ["commute", "school", "graduation"],
    trendScore: 86,
    shareScore: 83,
    isTransparentLike: true
  },
  {
    id: "outerwear_pink_varsity_jacket",
    name: "粉蓝星星棒球夹克",
    type: "clothing",
    category: "outerwear",
    path: "/assets/clothes/outerwear/pink-varsity-jacket.png",
    sourceFolder: "服装",
    tags: ["棒球夹克", "校园", "开学", "元气", "青春", "星星"],
    scenes: ["school", "graduation", "blindbox"],
    trendScore: 95,
    shareScore: 93,
    isTransparentLike: true
  },
  {
    id: "outerwear_pastel_bomber_jacket",
    name: "粉蓝拼色飞行夹克",
    type: "clothing",
    category: "outerwear",
    path: "/assets/clothes/outerwear/pastel-bomber-jacket.png",
    sourceFolder: "服装",
    tags: ["街头", "通勤", "机能", "拼色", "潮流", "都市"],
    scenes: ["commute", "music", "school"],
    trendScore: 93,
    shareScore: 90,
    isTransparentLike: true
  },
  {
    id: "outerwear_utility_pocket_vest",
    name: "口袋机能马甲",
    type: "clothing",
    category: "outerwear",
    path: "/assets/clothes/outerwear/utility-pocket-vest.png",
    sourceFolder: "服装",
    tags: ["机能", "马甲", "通勤", "音乐节", "街头", "实用"],
    scenes: ["commute", "music", "cocreation"],
    trendScore: 97,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "bottom_blue_mini_shorts",
    name: "蓝色元气短裤",
    type: "clothing",
    category: "bottom",
    path: "/assets/clothes/bottoms/blue-mini-shorts.png",
    sourceFolder: "服装",
    tags: ["短裤", "轻便", "海边", "清爽", "假日", "实用"],
    scenes: ["seaside", "school", "commute"],
    trendScore: 83,
    shareScore: 79,
    isTransparentLike: true
  },
  {
    id: "bottom_blue_soft_shorts",
    name: "蓝色软萌短裤",
    type: "clothing",
    category: "bottom",
    path: "/assets/clothes/bottoms/blue-soft-shorts.png",
    sourceFolder: "服装",
    tags: ["短裤", "可爱", "清爽", "轻便", "海边", "日常"],
    scenes: ["seaside", "blindbox", "school"],
    trendScore: 84,
    shareScore: 80,
    isTransparentLike: true
  },
  {
    id: "bottom_lavender_pleated_skirt",
    name: "薰衣草百褶短裙",
    type: "clothing",
    category: "bottom",
    path: "/assets/clothes/bottoms/lavender-pleated-skirt.png",
    sourceFolder: "服装",
    tags: ["短裙", "甜美", "学院风", "拍照", "礼物", "社交"],
    scenes: ["blindbox", "gift", "graduation", "seaside"],
    trendScore: 92,
    shareScore: 94,
    isTransparentLike: true
  },
  {
    id: "bottom_cream_cargo_pants",
    name: "奶油多袋工装裤",
    type: "clothing",
    category: "bottom",
    path: "/assets/clothes/bottoms/cream-cargo-pants.png",
    sourceFolder: "服装",
    tags: ["工装", "实用", "通勤", "机能", "街头", "校园"],
    scenes: ["commute", "music", "school", "cocreation"],
    trendScore: 96,
    shareScore: 90,
    isTransparentLike: true
  },
  {
    id: "bottom_blue_sport_skirt",
    name: "蓝粉运动百褶裙",
    type: "clothing",
    category: "bottom",
    path: "/assets/clothes/bottoms/blue-sport-skirt.png",
    sourceFolder: "服装",
    tags: ["短裙", "运动", "甜酷", "校园", "出片", "青春"],
    scenes: ["school", "blindbox", "seaside", "graduation"],
    trendScore: 94,
    shareScore: 95,
    isTransparentLike: true
  },
  {
    id: "shoes_blue_canvas",
    name: "蓝色帆布鞋",
    type: "clothing",
    category: "shoes",
    path: "/assets/clothes/shoes/blue-canvas-shoes.png",
    sourceFolder: "服装",
    tags: ["运动鞋", "轻便", "校园", "实用", "清爽", "日常"],
    scenes: ["school", "commute", "seaside"],
    trendScore: 82,
    shareScore: 78,
    isTransparentLike: true
  },
  {
    id: "shoes_round_blue_sneakers",
    name: "圆头蓝色运动鞋",
    type: "clothing",
    category: "shoes",
    path: "/assets/clothes/shoes/round-blue-sneakers.png",
    sourceFolder: "服装",
    tags: ["运动鞋", "轻便", "校园", "实用", "青春", "日常"],
    scenes: ["school", "commute", "gift"],
    trendScore: 83,
    shareScore: 79,
    isTransparentLike: true
  },
  {
    id: "shoes_pastel_chunky",
    name: "彩色厚底运动鞋",
    type: "clothing",
    category: "shoes",
    path: "/assets/clothes/shoes/pastel-chunky-sneakers.png",
    sourceFolder: "服装",
    tags: ["运动鞋", "厚底", "潮流", "甜酷", "音乐节", "出片"],
    scenes: ["music", "blindbox", "seaside", "school"],
    trendScore: 96,
    shareScore: 94,
    isTransparentLike: true
  },
  {
    id: "bag_candy_crossbody",
    name: "糖果斜挎包",
    type: "accessory",
    category: "bag",
    path: "/assets/clothes/bags/candy-crossbody-bag.png",
    sourceFolder: "服装",
    tags: ["斜挎包", "通勤", "轻便", "礼物", "社交", "可爱"],
    scenes: ["commute", "gift", "blindbox", "seaside"],
    trendScore: 91,
    shareScore: 92,
    isTransparentLike: true
  },
  {
    id: "bag_star_lock_satchel",
    name: "星扣锁斜挎包",
    type: "accessory",
    category: "bag",
    path: "/assets/clothes/bags/star-lock-satchel.png",
    sourceFolder: "服装",
    tags: ["斜挎包", "星星", "甜酷", "出片", "音乐节", "社交"],
    scenes: ["music", "blindbox", "seaside", "cocreation"],
    trendScore: 95,
    shareScore: 96,
    isTransparentLike: true
  },
  {
    id: "hat_pink_baseball_cap",
    name: "粉色棒球帽",
    type: "accessory",
    category: "hat",
    path: "/assets/clothes/hats/pink-baseball-cap.png",
    sourceFolder: "服装",
    tags: ["帽子", "棒球帽", "校园", "街头", "轻便", "青春"],
    scenes: ["school", "commute", "seaside"],
    trendScore: 86,
    shareScore: 82,
    isTransparentLike: true
  },
  {
    id: "hat_lavender_star_beanie",
    name: "薰衣草星星毛线帽",
    type: "accessory",
    category: "hat",
    path: "/assets/clothes/hats/lavender-star-beanie.png",
    sourceFolder: "服装",
    tags: ["帽子", "贝雷帽", "星星", "甜酷", "共创", "社交"],
    scenes: ["cocreation", "blindbox", "gift", "music"],
    trendScore: 93,
    shareScore: 94,
    isTransparentLike: true
  },
  {
    id: "glasses_star_party",
    name: "星星派对墨镜",
    type: "accessory",
    category: "glasses",
    path: "/assets/clothes/glasses/star-party-glasses.png",
    sourceFolder: "服装",
    tags: ["墨镜", "星星", "甜酷", "音乐节", "海边", "社交"],
    scenes: ["blindbox", "music", "seaside"],
    trendScore: 98,
    shareScore: 98,
    isTransparentLike: true
  },
  {
    id: "prop_pastel_headphones",
    name: "粉蓝耳机道具",
    type: "accessory",
    category: "prop",
    path: "/assets/clothes/props/pastel-headphones.png",
    sourceFolder: "服装",
    tags: ["耳机", "音乐节", "社交", "通勤", "潮流", "夜游"],
    scenes: ["music", "commute", "blindbox", "cocreation"],
    trendScore: 92,
    shareScore: 90,
    isTransparentLike: true
  }
];

export const getAssetById = (id: string) => assets.find((asset) => asset.id === id);

export const assetsByCategory = (category: AssetCategory) =>
  assets.filter((asset) => asset.category === category);

