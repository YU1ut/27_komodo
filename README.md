# Komodo Plan

一个基于 `DESIGN.md` 视觉规范构建的科莫多行程展示网站，覆盖 2027 年 4 月 26 日从东京出发至 5 月 10 日返回东京的完整时间线。

## 本地预览

```bash
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。

## 页面内容与交互

- 按天筛选 8 日行程
- 按日期查看 15 天完整行程与航班时间
- 查看 SQ635、SQ8452/TR292、SQ8659/TR291、SQ636 的航站楼、机型与转机时长
- 查看 Dragon Dive Komodo、Komodo Resort 和 Sudamala Resort Komodo 三段住宿
- 从住宿卡片或每日行程直接打开三家官网
- 后两段住宿按截图中的最低适用方案估算：Komodo Resort Room Only 与 Sudamala Bed & Breakfast
- 打开完整预订清单
- 清楚区分已确认信息与待潜店补充的逐日潜点、集合时间
