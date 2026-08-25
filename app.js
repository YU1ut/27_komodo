const officialSites = {
  dragon: "https://dragondivekomodo.com/",
  komodo: "https://www.komodoresort.com/",
  sudamala: "https://www.sudamalaresorts.com/"
};

const diveDates = ["4月28日", "4月29日", "4月30日", "5月1日", "5月2日", "5月3日"];
const diveWeeks = ["周三", "周四", "周五", "周六", "周日", "周一"];

const itinerary = [
  { day: 1, date: "4月26日", week: "周一", title: "东京出发 · 新加坡过夜转机", subtitle: "SQ631 · Tokyo HND → Singapore SIN", status: "电子票确认", activities: [
    ["plane", "08:55", "SQ631 从羽田机场 T3 起飞", "Boeing 777-300ER · 高级经济舱 · 飞行7小时05分"],
    ["plane", "15:00", "抵达新加坡樟宜机场", "过夜转机23小时10分；电子票未包含新加坡住宿"]
  ], tags: ["SQ631", "Premium Economy", "35kg行李"] },
  { day: 2, date: "4月27日", week: "周二", title: "抵达拉布安巴焦 · Dragon Dive入住", subtitle: "SQ8452 · Singapore SIN → Labuan Bajo LBJ", status: "已确认", url: officialSites.dragon, activities: [
    ["plane", "14:10", "SQ8452 从樟宜机场 T1 起飞", "Scoot执飞 · Embraer 190-E2 · 经济舱 · 飞行3小时20分"],
    ["plane", "17:30", "抵达科莫多国际机场 LBJ", "Dragon Dive 距机场约5分钟车程；邮件建议抵达层乘出租车"],
    ["bed", "抵达后", "Dragon Dive Komodo 入住", "确认入住自14:00起"]
  ], tags: ["SQ8452", "Dragon Dive confirmed", "入住自14:00"] },
  ...diveDates.map((date, index) => ({
    day: index + 3,
    date,
    week: diveWeeks[index],
    title: `Komodo Taste · 潜水日 ${index + 1}`,
    subtitle: "Full day · 3 dives · 2 divers",
    status: "潜店确认",
    url: officialSites.dragon,
    activities: [
      ["bed", "06:50", "Le Resto 三楼早餐集合", "首次潜水前邮件确认的集合地点与时间"],
      ["wave", "07:20", "前往港口 · 全天3潜", "车辆预计07:20–07:30从 Dragon Dive 出发；具体潜点以当日海况为准"]
    ],
    tags: ["Komodo Taste", "3潜", "Qing + Sandra"]
  })),
  { day: 9, date: "5月4日", week: "周二", title: "Dragon Dive退房 · Komodo Resort入住", subtitle: "Dragon Dive Komodo → Komodo Resort", status: "两项已确认", url: officialSites.komodo, activities: [
    ["bed", "12:00前", "Dragon Dive Komodo 退房", "出发日无潜水活动"],
    ["bed", "待协调", "入住 Komodo Resort", "Hilltop Sunset · Full-Board · 确认页显示入住自06:00"]
  ], tags: ["Hilltop Sunset", "Full-Board", "IDR 14.895.000"] },
  { day: 10, date: "5月5日", week: "周三", title: "Komodo Resort · 第2天", subtitle: "Hilltop Sunset · Full-Board", status: "预订确认", url: officialSites.komodo, activities: [
    ["bed", "全天", "Komodo Resort 住宿", "Full-Board；具体活动未在确认图片中列出"]
  ], tags: ["Komodo Resort", "Full-Board", "自由安排"] },
  { day: 11, date: "5月6日", week: "周四", title: "Komodo Resort · 第3天", subtitle: "Hilltop Sunset · Full-Board", status: "预订确认", url: officialSites.komodo, activities: [
    ["bed", "全天", "Komodo Resort 住宿", "Full-Board；具体活动未在确认图片中列出"]
  ], tags: ["Komodo Resort", "Full-Board", "自由安排"] },
  { day: 12, date: "5月7日", week: "周五", title: "转往 Sudamala Resort Seraya", subtitle: "Komodo Resort → KP3 Harbor → Seraya Island", status: "两项已确认", url: officialSites.sudamala, activities: [
    ["bed", "确认页显示03:00", "Komodo Resort 退房", "确认图片日期为5月7日；请向酒店复核03:00的时制含义"],
    ["bed", "15:00起", "Sudamala Resort Seraya 入住", "Beach Bungalow · Bed & Breakfast"],
    ["wave", "需预约", "KP3港口前往Seraya岛", "免费定时木船11:00或16:30；约45–60分钟，需提前确认班次"]
  ], tags: ["Sudamala Seraya", "Beach Bungalow", "IDR 8.107.126已付"] },
  { day: 13, date: "5月8日", week: "周六", title: "Sudamala Resort Seraya · 第2天", subtitle: "Beach Bungalow · Bed & Breakfast", status: "已付款", url: officialSites.sudamala, activities: [
    ["bed", "全天", "Sudamala Resort Seraya 住宿", "包含早餐、浮潜、皮划艇、立式桨板及度假村设施"]
  ], tags: ["Breakfast", "Resort activities", "岛上住宿"] },
  { day: 14, date: "5月9日", week: "周日", title: "Sudamala退房 · 科莫多返程", subtitle: "Seraya Island → LBJ → Singapore", status: "已确认", activities: [
    ["wave", "09:00建议", "搭乘早班定时木船离岛", "预订偏好为早班离岛；免费船班09:00或14:30，需最终预约"],
    ["bed", "12:00前", "Sudamala Resort Seraya 退房", "机场接送已包含；预订偏好为下午送机"],
    ["plane", "16:55", "SQ8659 从 LBJ 起飞", "Scoot执飞 · Embraer 190-E2 · 经济舱 · 飞行3小时30分"],
    ["plane", "20:25", "抵达新加坡樟宜 T1", "转机2小时25分 · 行李直达"],
    ["plane", "22:50", "SQ636 从樟宜 T2 起飞", "Boeing 777-300ER · 高级经济舱 · 飞行6小时55分"]
  ], tags: ["SQ8659 + SQ636", "机场接送包含", "船班需预约"] },
  { day: 15, date: "5月10日", week: "周一", title: "抵达东京", subtitle: "SQ636 · Singapore SIN → Tokyo HND", status: "电子票确认", activities: [
    ["plane", "06:45", "抵达羽田机场 T3", "科莫多旅程结束"]
  ], tags: ["SQ636", "Premium Economy", "HND T3"] }
];

const state = { selectedDay: "all" };

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function renderDayTabs() {
  const tabs = document.querySelector("#day-tabs");
  tabs.innerHTML = `<button class="day-tab ${state.selectedDay === "all" ? "active" : ""}" type="button" data-day="all" role="tab"><b>全部</b><small>15 天</small></button>` + itinerary.map(item => `
    <button class="day-tab ${state.selectedDay === item.day ? "active" : ""}" type="button" data-day="${item.day}" role="tab"><b>Day ${item.day}</b><small>${item.date}</small></button>`).join("");
}

function renderTimeline() {
  const timeline = document.querySelector("#timeline");
  timeline.innerHTML = itinerary.map(item => `
    <article class="day-card ${state.selectedDay !== "all" && state.selectedDay !== item.day ? "hidden" : ""}" data-day-card="${item.day}">
      <div class="day-marker"><span class="day-number">${String(item.day).padStart(2, "0")}</span><span class="day-date"><b>${item.date}</b><small>${item.week}</small></span></div>
      <div class="day-content">
        <div class="day-head"><div><h3>${item.title}</h3><p>${item.subtitle}</p>${item.url ? `<a class="timeline-link" href="${item.url}" target="_blank" rel="noopener noreferrer">访问官网 ↗</a>` : ""}</div><span class="day-confirmed">${icon("check")} ${item.status}</span></div>
        <div class="activity-list">${item.activities.map(activity => `<div class="activity"><span class="activity-icon">${icon(activity[0])}</span><time>${activity[1]}</time><div><b>${activity[2]}</b><small>${activity[3]}</small></div></div>`).join("")}</div>
        <div class="day-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}

document.addEventListener("click", event => {
  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    state.selectedDay = dayButton.dataset.day === "all" ? "all" : Number(dayButton.dataset.day);
    renderDayTabs();
    renderTimeline();
    return;
  }
  if (event.target.closest("[data-open-bookings]")) document.querySelector("#booking-dialog").showModal();
});

document.querySelector(".booking-close").addEventListener("click", () => document.querySelector("#booking-dialog").close());
document.querySelector(".booking-done").addEventListener("click", () => document.querySelector("#booking-dialog").close());
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

renderDayTabs();
renderTimeline();
