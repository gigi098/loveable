import nikeEvent from "@/assets/nike-event.jpg";

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  videoUrl?: string;
  details: string[];
}

export const works: WorkItem[] = [
  {
    id: "nike-campus",
    title: "Nike 校園活動",
    subtitle: "Run Your Stress Away",
    tag: "Brand Campaign",
    description:
      "為 Nike 策劃的校園跑步活動，以「跑掉壓力」為核心概念，結合品牌精神與大學生活情境，打造沉浸式運動體驗。",
    image: nikeEvent,
    videoUrl: "",
    details: [
      "活動企劃與創意發想",
      "視覺設計與品牌識別",
      "社群媒體行銷策略",
      "現場活動執行與統籌",
    ],
  },
  {
    id: "mv-production",
    title: "MV 製作",
    subtitle: "Music Video Production",
    tag: "Video Production",
    description:
      "參與多支音樂錄影帶的製作，擔任不同角色，從前期企劃到後期剪輯，完整參與影像創作流程。",
    image: nikeEvent,
    videos: [
	{
	title:"作品一：你好，未來", url: "https://drive.google.com/file/d/1rWMvPZgIMipwKuqmeG_IRcNB3dM-lpGp/preview"
	},
	{
	title:"作品二：尋人啓事", url: "https://drive.google.com/file/d/1lqZ19BCMwlxmd8ZX5rnlAZJ_05cdYlA3/preview"
	}
	],
    details: ["前期腳本與分鏡", "現場拍攝執行", "後期剪輯與調色", "音樂與畫面節奏配合"],
  },
  {
    id: "film-remake",
    title: "電影翻拍",
    subtitle: "Film Remake Project",
    tag: "Film",
    description:
      "以經典電影為靈感，重新詮釋並翻拍短片，訓練敘事能力與影像語言的掌握。",
    image: nikeEvent,
    videos: [
	{
	title:"作品一：花樣年華", url: "https://drive.google.com/file/d/1n62bMyk7WQnU2jtc5QFNSnJHYBukmHO6/preview"
	},
	{
	title:"作品二：戀戀風塵", url: "https://drive.google.com/file/d/1liGe_Zkk58iVRVqJTqyPEV3g_dm6Gcte/preview"
	},
	{
	title:"作品三：廣告翻拍", url: "https://drive.google.com/file/d/14ymr9Jrzp6SpNyjSnkpWJaESI0Ugowaa/preview"
	}

	],
    details: ["劇本改編與分析", "場景設計與美術", "演員指導", "後期製作"],
  },
  {
    id: "original-short",
    title: "原創短片",
    subtitle: "Original Short Film",
    tag: "Film",
    description:
      "從零開始的原創短片創作，展現獨立思考與完整的影像敘事能力。",
    image: nikeEvent,
      videos: [
	{
	title:"作品一：泡泡馬特微電影《不趕》", url: "https://drive.google.com/file/d/1cdlAAWlJ6cB9UmUs3HjmLERmXIjeGmSP/preview"
	},
	{
	title:"作品二：煲仔飯商家宣傳片", url: "https://drive.google.com/file/d/1JQJ3C1Besh15ou9EYETEgENf-Dx64Mk2/preview"
	}
	],
    details: ["原創劇本撰寫", "導演與製片", "攝影與燈光設計", "後期剪輯與音效"],
  },
];

export const creativeExperiments = [
  {
    id: "spotify-playlist",
    num: "01",
    title: "Spotify 學習歌單計畫",
    desc: "用音樂連結學習情境，打造專屬讀書歌單體驗",
    fullDesc:
      "探索音樂與學習效率之間的關係，透過 Spotify 平台設計情境化歌單，讓學生在不同學習階段找到最適合的音樂陪伴。",
  },
  {
    id: "milk-tea-identity",
    num: "02",
    title: "奶茶社交身份概念",
    desc: "探索飲品選擇如何反映個人社交身份認同",
    fullDesc:
      "以飲品文化為切入點，研究年輕世代如何透過奶茶品牌偏好建構社交身份，並發展成完整的品牌概念提案。",
  },
  {
    id: "night-run",
    num: "03",
    title: "校園夜跑品牌活動",
    desc: "結合運動與社群文化的校園品牌體驗設計",
    fullDesc:
      "設計一個融合夜跑運動與校園社群文化的品牌活動，從活動概念、視覺識別到社群策略的完整規劃。",
  },
];
