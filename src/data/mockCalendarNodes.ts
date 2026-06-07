import type { SceneId } from "./assets";

export type CalendarNode = {
  id: string;
  name: string;
  active: boolean;
  dateRange: string;
  priorityScenes: SceneId[];
  boostTags: string[];
  couponStrategy: string;
};

export const mockCalendarNodes: CalendarNode[] = [
  {
    id: "graduation",
    name: "毕业季",
    active: true,
    dateRange: "5月-6月",
    priorityScenes: ["graduation", "cocreation"],
    boostTags: ["毕业", "拍照", "花束", "相机", "纪念"],
    couponStrategy: "photo_bundle"
  },
  {
    id: "summer_match",
    name: "夏日默契季",
    active: true,
    dateRange: "6月-8月",
    priorityScenes: ["seaside", "blindbox", "music"],
    boostTags: ["夏日", "清爽", "社交", "墨镜", "短裙"],
    couponStrategy: "partner_bundle"
  },
  {
    id: "back_to_school",
    name: "开学季",
    active: true,
    dateRange: "8月-9月",
    priorityScenes: ["school", "commute"],
    boostTags: ["校园", "开学", "学院风", "背包", "运动鞋"],
    couponStrategy: "student_bundle"
  }
];
