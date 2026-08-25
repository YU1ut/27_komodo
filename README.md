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
- 查看 SQ631、SQ8452、SQ8659、SQ636 的航站楼、机型、舱等与转机时长
- 查看 Dragon Dive 8D/7N Komodo Immersion、Komodo Resort 和 Sudamala Resort Seraya 三段确认住宿
- 追踪 Dragon Dive 50% 已付与抵达前待付余款
- 日期导航支持触控横向滑动、左右按钮和选中日期自动定位
- 从住宿卡片或每日行程直接打开三家官网
- 展示 Komodo Resort Hilltop Sunset Full-Board 与 Sudamala Beach Bungalow B&B 的确认价格
- 打开完整预订清单
- 清楚区分已确认信息与待潜店补充的逐日潜点、集合时间
