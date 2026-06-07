export type CampaignStageId = "graduation" | "summer" | "school";

export type CampaignStage = {
  id: CampaignStageId;
  name: string;
  title: string;
  subtitle: string;
  line: string;
  image: string;
  tags: string[];
  actions: string[];
};

export type MatchQuestion = {
  id: string;
  prompt: string;
  options: string[];
  itemHint: string;
};

export type BingoCell = {
  id: string;
  title: string;
  prompt: string;
  reward: string;
  tag: string;
};

export const campaignStages: CampaignStage[] = [
  {
    id: "graduation",
    name: "阶段一",
    title: "毕业新「题」案",
    subtitle: "三福帮你打个样",
    line: "毕业不是一张空白合照，而是换一种方式重新出场。",
    image: "/assets/campaign/web/graduation-campus.jpg",
    tags: ["毕业打样间", "学士服内搭", "小红书挑战", "毕业搭案卡"],
    actions: ["抽毕业题卡", "到店试穿", "生成搭案清单", "发布毕业新题案"]
  },
  {
    id: "summer",
    name: "阶段二",
    title: "夏日默契「题」",
    subtitle: "三福牵线不翻车",
    line: "搭子不怕风格不同，就怕没人一起乱搭。",
    image: "/assets/campaign/web/shopping-mall.jpg",
    tags: ["连线题 H5", "搭子试衣间", "自拍机", "九宫格快闪"],
    actions: ["测默契", "点亮九宫格", "合拍证书", "到店完成第二题"]
  },
  {
    id: "school",
    name: "阶段三",
    title: "开学态度「题」",
    subtitle: "三福懂你敢定义",
    line: "新学期先别急着像谁，先搭出自己。",
    image: "/assets/campaign/web/campus-students.jpg",
    tags: ["搭案报告", "搭案寻句", "开学第一套", "高校快闪"],
    actions: ["抽态度问题", "寻找共鸣句", "生成开学报告", "领取开学搭案"]
  }
];

export const relationTypes = ["闺蜜搭子", "宿舍搭子", "情侣搭子", "同事搭子", "旅行搭子", "亲子搭子"];

export const summerPlans = ["商圈逛街", "海边假日", "音乐节夜游", "夜市 Citywalk", "开学前采购", "毕业旅行"];

export const matchQuestions: MatchQuestion[] = [
  {
    id: "gear",
    prompt: "夏天出门，TA 最不能少的装备是？",
    options: ["轻便斜挎包", "星星墨镜", "清爽帽子", "消暑小物"],
    itemHint: "对应三福包袋、眼镜、帽子和夏日小物货架。"
  },
  {
    id: "style",
    prompt: "你们今天更适合哪种夏日风格？",
    options: ["清爽出片", "甜酷上街", "机能不累", "随便但好看"],
    itemHint: "用于推荐同色系不同款，避免同款尴尬。"
  },
  {
    id: "emergency",
    prompt: "如果临时下雨，TA 希望你怎么救场？",
    options: ["先找店躲雨", "递上随身伞", "继续拍照", "买件小物补救"],
    itemHint: "让门店把功能小物包装成关系补给。"
  },
  {
    id: "photo",
    prompt: "你们最想完成哪张合拍？",
    options: ["背靠背同频照", "互相递包照", "比心合拍照", "错位出片照"],
    itemHint: "引导用户去自拍机生成默契搭子水印。"
  },
  {
    id: "gift",
    prompt: "看到一件适合 TA 的单品，你会怎么做？",
    options: ["直接拿给 TA", "先试给 TA 看", "拍照发给 TA", "偷偷买成同款"],
    itemHint: "把挑选动作转为反向安利和加购。"
  }
];

export const bingoCells: BingoCell[] = [
  {
    id: "blind-pick",
    title: "盲选不翻车",
    prompt: "为搭子盲选一件配饰，戴上后说一句理由。",
    reward: "获得「懂你」章",
    tag: "关系"
  },
  {
    id: "thirty-sec",
    title: "30 秒搭案",
    prompt: "抽一个暑期场景，30 秒内选出三件能出门的装备。",
    reward: "获得「快答」章",
    tag: "商品"
  },
  {
    id: "line-wall",
    title: "默契连线墙",
    prompt: "把夏日心愿和三福搭案连成一条线。",
    reward: "获得「连线」章",
    tag: "互动"
  },
  {
    id: "photo-pose",
    title: "同频合拍站",
    prompt: "抽姿势卡，完成一张同频合拍。",
    reward: "获得「合拍」章",
    tag: "传播"
  },
  {
    id: "reverse",
    title: "反向安利台",
    prompt: "给搭子挑一件单品，并写下 12 字安利语。",
    reward: "获得「安利」章",
    tag: "种草"
  },
  {
    id: "style-swap",
    title: "风格交换间",
    prompt: "用对方抽到的风格，替 TA 选一个单品。",
    reward: "获得「反差」章",
    tag: "风格"
  },
  {
    id: "supply",
    title: "夏日补给站",
    prompt: "面对突发状况，选一个三福小物救场。",
    reward: "获得「补给」章",
    tag: "实用"
  },
  {
    id: "budget",
    title: "预算搭案局",
    prompt: "按预算卡搭出一套能一起出门的组合。",
    reward: "获得「会买」章",
    tag: "转化"
  },
  {
    id: "manifesto",
    title: "自由定义宣言",
    prompt: "补全一句不设限宣言，贴到现场句子墙。",
    reward: "获得「自由」章",
    tag: "态度"
  }
];

export const bingoLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const campaignSourceNotes = [
  {
    id: "graduation-campus",
    title: "毕业季活动氛围参考图",
    path: "/assets/campaign/web/graduation-campus.jpg"
  },
  {
    id: "retail-store",
    title: "门店陈列与试衣间氛围参考图",
    path: "/assets/campaign/web/retail-store.jpg"
  },
  {
    id: "shopping-mall",
    title: "商圈快闪人群氛围参考图",
    path: "/assets/campaign/web/shopping-mall.jpg"
  },
  {
    id: "music-festival",
    title: "音乐节夜游氛围参考图",
    path: "/assets/campaign/web/music-festival.jpg"
  },
  {
    id: "campus-students",
    title: "开学季高校人群氛围参考图",
    path: "/assets/campaign/web/campus-students.jpg"
  }
];

export const campaignGeneratedAssets = [
  {
    id: "graduation-keyvisual",
    title: "毕业新题案 KV",
    path: "/assets/campaign/generated/graduation-keyvisual.png"
  },
  {
    id: "summer-keyvisual",
    title: "夏日默契题 KV",
    path: "/assets/campaign/generated/summer-keyvisual.png"
  },
  {
    id: "school-keyvisual",
    title: "开学态度题 KV",
    path: "/assets/campaign/generated/school-keyvisual.png"
  },
  {
    id: "summer-match-certificate",
    title: "H5 默契证书",
    path: "/assets/campaign/generated/summer-match-certificate.png"
  },
  {
    id: "summer-bingo-pop-up-board",
    title: "九宫格快闪题盘",
    path: "/assets/campaign/generated/summer-bingo-pop-up-board.png"
  }
];
