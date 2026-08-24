const officialSites = {
  dragon: "https://dragondivekomodo.com/",
  komodo: "https://www.komodoresort.com/",
  sudamala: "https://www.sudamalaresorts.com/resort/sudamala-resort-komodo/"
};

const itinerary = [
  { day: 1, date: "4月26日", week: "周一", title: "东京出发", subtitle: "Tokyo HND → Singapore → Labuan Bajo", status: "截图确认", activities: [
    ["plane", "22:55", "SQ635 · 羽田机场 T3 起飞", "Boeing 787 · 飞行7小时30分 · 次日05:25抵达新加坡"]
  ], tags: ["SQ635", "HND T3", "2人 ¥376,900"] },
  { day: 2, date: "4月27日", week: "周二", title: "抵达科莫多 · 入住 Dragon Dive", subtitle: "Labuan Bajo · Dragon Dive Komodo", status: "已确认", url: officialSites.dragon, activities: [
    ["plane", "05:25", "SQ635 抵达新加坡樟宜机场", "转机8小时45分 · 不同航站楼 · 无需过境签 · 行李直达"],
    ["plane", "14:10", "SQ8452 / 实际 TR292 从樟宜 T1 起飞", "Embraer 190-E2 · 飞行3小时20分"],
    ["plane", "17:30", "抵达 LBJ 拉布安巴焦机场", "去程总时长19小时35分"],
    ["bed", "待确认", "入住 Double Deluxe Pool Side", "PDF 确认住宿自 4月27日至5月5日，共8晚"]
  ], tags: ["Dragon Dive Komodo", "第1晚", "入住时间待确认"] },
  ...["4月28日", "4月29日", "4月30日", "5月1日", "5月2日", "5月3日", "5月4日"].map((date, index) => ({
    day: index + 3,
    date,
    week: ["周三", "周四", "周五", "周六", "周日", "周一", "周二"][index],
    title: `Dragon Dive 套餐期 · 第 ${index + 1} 天`,
    subtitle: "8D/7N Komodo Immersion + 1 extra night",
    status: "待潜店细化",
    pending: true,
    url: officialSites.dragon,
    activities: [["wave", "待确认", "潜水或套餐内安排", "这7天中安排6个潜水日、合计18潜；具体潜水日、潜点与船期未在PDF中列出"]],
    tags: ["6天18潜范围", "潜点待确认", "公园费用已含"]
  })),
  { day: 10, date: "5月5日", week: "周三", title: "Dragon Dive 退房 · 入住 Komodo Resort", subtitle: "Labuan Bajo → Komodo Resort", status: "已确认", url: officialSites.komodo, activities: [
    ["bed", "上午", "结束 Dragon Dive 8晚住宿", "具体退房时间待酒店确认"],
    ["bed", "待确认", "入住 Komodo Resort", "Hilltop Sunrise · Room Only，3晚按截图最低价 IDR 10.125.000 估算"]
  ], tags: ["Komodo Resort", "3晚", "Room Only"] },
  { day: 11, date: "5月6日", week: "周四", title: "Komodo Resort · 第2天", subtitle: "Hilltop Sunrise · Room Only", status: "价格估算", pending: true, url: officialSites.komodo, activities: [
    ["bed", "全天", "Komodo Resort 住宿", "未包含餐食，具体活动自由安排"]
  ], tags: ["Komodo Resort", "Room Only", "自由安排"] },
  { day: 12, date: "5月7日", week: "周五", title: "Komodo Resort · 第3天", subtitle: "Hilltop Sunrise · Room Only", status: "价格估算", pending: true, url: officialSites.komodo, activities: [
    ["bed", "全天", "Komodo Resort 住宿", "未包含餐食，具体活动自由安排"]
  ], tags: ["Komodo Resort", "Room Only", "自由安排"] },
  { day: 13, date: "5月8日", week: "周六", title: "入住 Sudamala Resort Komodo", subtitle: "Komodo Resort → Sudamala Resort Komodo", status: "价格估算", pending: true, url: officialSites.sudamala, activities: [
    ["bed", "上午", "Komodo Resort 退房", "3晚住宿结束"],
    ["bed", "待确认", "入住 Sudamala Resort Komodo", "Beach Bungalow · Bed & Breakfast，1晚按最低适用价 IDR 4.053.563 估算"]
  ], tags: ["Sudamala Resort", "1晚", "Bed & Breakfast"] },
  { day: 14, date: "5月9日", week: "周日", title: "退房 · 从科莫多返程", subtitle: "Labuan Bajo → Singapore → Tokyo", status: "已确认", activities: [
    ["bed", "上午", "Sudamala Resort 退房", "具体退房及前往机场安排待确认"],
    ["plane", "16:55", "SQ8659 / 实际 TR291 从 LBJ 起飞", "Embraer 190-E2 · 飞行3小时30分"],
    ["plane", "20:25", "抵达新加坡樟宜 T1", "转机2小时25分 · 不同航站楼 · 无需过境签 · 行李直达"],
    ["plane", "22:50", "SQ636 从樟宜 T2 起飞", "Boeing 777-300ER · 飞行6小时55分"]
  ], tags: ["TR291 + SQ636", "新加坡转机", "行李直挂"] },
  { day: 15, date: "5月10日", week: "周一", title: "抵达东京", subtitle: "Singapore → Tokyo HND", status: "截图确认", activities: [
    ["plane", "06:45", "SQ636 抵达羽田机场 T3", "返程总时长12小时50分 · 科莫多旅程结束"]
  ], tags: ["SQ636", "HND T3", "抵达东京"] }
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
        <div class="day-head"><div><h3>${item.title}</h3><p>${item.subtitle}</p>${item.url ? `<a class="timeline-link" href="${item.url}" target="_blank" rel="noopener noreferrer">访问官网 ↗</a>` : ""}</div><span class="day-confirmed ${item.pending ? "pending" : ""}">${icon(item.pending ? "calendar" : "check")} ${item.status}</span></div>
        <div class="activity-list">${item.activities.map(activity => `<div class="activity"><span class="activity-icon">${icon(activity[0])}</span><time>${activity[1]}</time><div><b>${activity[2]}</b><small>${activity[3]}</small></div></div>`).join("")}</div>
        <div class="day-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}

document.addEventListener("click", (event) => {
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
