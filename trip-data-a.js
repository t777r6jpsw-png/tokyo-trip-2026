window.TRIP_DATA = [
  {
    id: "2026-12-02", tab: "DAY 1", label: "12/02", date: "12月02日 · 星期三", theme: "抵達東京・池袋散步",
    notice: "若 06:40 是起飛時間，04:00 才離開板橋幾乎沒有緩衝，我改為 03:20。成田 10:40 落地後也不建議押 11:15 車次，寄放行李與午餐順延約 1 小時。",
    items: [
      {
        id: "d1-1", time: "03:20", title: "板橋出發｜已提前 40 分鐘",
        address: "Banqiao Station, Banqiao District, New Taipei City, Taiwan",
        note: "以板橋車站作暫定起點，可按編輯改成實際住址。清晨捷運尚未開始，請預約機場接送或計程車。",
        transit: "預約車／計程車｜35–50 分｜約 NT$1,100–1,400", mode: "driving",
        officialUrl: "https://www.uber.com/global/zh-tw/r/routes/banqiao-nwt-tw-to-tpe/"
      },
      {
        id: "d1-2", time: "04:10", title: "抵達桃園機場・報到",
        address: "Taiwan Taoyuan International Airport",
        note: "先確認航空公司航廈。若 06:40 是登機時間而非起飛時間，可再放寬出發時間。",
        transit: "車程 35–50 分｜0 轉乘", mode: "driving"
      },
      {
        id: "d1-3", time: "06:40", title: "飛往東京成田",
        address: "Narita International Airport, Chiba, Japan",
        note: "航班號碼與航廈尚未提供，可按編輯補進備註。",
        transit: "國際線航班｜台灣與日本時差 +1 小時", mode: "flight"
      },
      {
        id: "d1-4", time: "10:40", title: "抵達成田國際機場",
        address: "Narita International Airport, Chiba, Japan",
        note: "下機、入境、領行李、海關與走到月台，保守預留 60–90 分鐘。",
        transit: "入境流程｜約 60–90 分", mode: "trans"
      },
      {
        id: "d1-5", time: "12:20", title: "Skyliner 前往池袋",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "搭可趕上的班次，不要綁死 11:15。成田到日暮里轉 JR 山手線到池袋，再步行到住宿。",
        transit: "Skyliner＋JR｜60–75 分｜約 ¥2,519–2,789｜1 轉乘", mode: "trans",
        officialUrl: "https://www.keisei.co.jp/keisei/tetudou/skyliner/e-ticket/en/"
      },
      {
        id: "d1-6", time: "13:45", title: "住宿寄放行李｜需先確認",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "住宿 15:00 才能入住，而且沒有常駐櫃檯。雖列有行李寄放服務，仍要事先透過訂房訊息確認做法。",
        transit: "池袋站西口 20a 步行約 5–10 分", mode: "walking",
        officialUrl: "https://www.booking.com/hotel/jp/rutile-ikebukuro.ja.html"
      },
      {
        id: "d1-7", time: "14:00", title: "午餐｜宍道湖しじみ中華蕎麦 琥珀",
        address: "2-48-7 Ikebukuro, Toshima City, Tokyo 171-0014, Japan",
        note: "池袋店在 APA Hotel 1F，11:00–23:30；不可預約，現場食券與候位。",
        transit: "住宿步行約 3–5 分｜候位抓 30–60 分", mode: "walking",
        officialUrl: "https://www.apahotel.com/hotel/syutoken/tokyo/ikebukuro-eki-kitaguchi/restaurant_01/"
      },
      {
        id: "d1-8", time: "15:30", title: "Sunshine City 逛街",
        address: "Sunshine City, 3-1 Higashi-Ikebukuro, Toshima City, Tokyo",
        note: "alpa 商場多數店舖 10:00–20:00。抵達日不排硬行程，累了可提早回住宿。",
        transit: "步行 18–25 分｜¥0", mode: "walking",
        officialUrl: "https://sunshinecity.jp/en/information/opening_hour.html"
      },
      {
        id: "d1-9", time: "19:00", title: "回住宿・完成自助入住",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "確認已收到進門與房間密碼；住宿會在抵達日傳送入住說明。",
        transit: "步行 18–25 分｜¥0", mode: "walking"
      }
    ],
    tickets: [
      { status: "建議先預約", tone: "alert", title: "板橋 → 桃園機場接送", note: "早班機不適合搭首班捷運；03:20 出發較有緩衝。", url: "https://www.uber.com/global/zh-tw/r/routes/banqiao-nwt-tw-to-tpe/", action: "查看車程估價" },
      { status: "乘車前 1 個月", tone: "pending", title: "Keisei Skyliner", note: "全車指定席；班機可能延誤，建議清關後再指定實際班次。", url: "https://www.keisei.co.jp/keisei/tetudou/skyliner/e-ticket/en/", action: "官方 e-ticket" },
      { status: "先傳訊確認", tone: "pending", title: "住宿寄放行李", note: "15:00 入住、無常駐櫃檯；13:45 寄放方式請先問住宿。", url: "https://www.booking.com/hotel/jp/rutile-ikebukuro.ja.html", action: "打開住宿頁" },
      { status: "現場排隊", tone: "walkin", title: "琥珀拉麵", note: "不接受線上訂位，保留候位彈性。", url: "https://www.apahotel.com/hotel/syutoken/tokyo/ikebukuro-eki-kitaguchi/restaurant_01/", action: "店舖資訊" }
    ]
  },
  {
    id: "2026-12-03", tab: "DAY 2", label: "12/03", date: "12月03日 · 星期四", theme: "東京迪士尼樂園",
    notice: "你沒有指定 Disneyland 或 DisneySea；因為你問的是陸上花車，我先按 Tokyo Disneyland 排。12/3 確切遊行時間尚未公布，官方預計約 11/8 更新，網站沒有填猜測時間。",
    items: [
      {
        id: "d2-1", time: "06:00", title: "起床・簡單早餐",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "前一晚先準備行動電源、薄外套與官方 App。",
        transit: "住宿內準備｜40–50 分", mode: "walking"
      },
      {
        id: "d2-2", time: "07:00", title: "從住宿出發",
        address: "Tokyo Disneyland, 1-1 Maihama, Urayasu, Chiba",
        note: "池袋搭東京 Metro 有樂町線到新木場，轉 JR 京葉線到舞濱；避免東京站漫長轉車。",
        transit: "有樂町線＋JR 京葉線｜65–80 分｜約 ¥461 IC｜1 轉乘", mode: "trans",
        officialUrl: "https://www.tokyodisneyresort.jp/en/tdl/access"
      },
      {
        id: "d2-3", time: "08:10", title: "抵達 Tokyo Disneyland 園門",
        address: "Tokyo Disneyland, 1-1 Maihama, Urayasu, Chiba",
        note: "舞濱站南口步行約 8 分。想 08:00 前開始排隊，住宿需改在 06:35–06:45 出發。",
        transit: "舞濱站步行約 8 分", mode: "walking"
      },
      {
        id: "d2-4", time: "09:00", title: "正式開園",
        address: "Tokyo Disneyland, 1-1 Maihama, Urayasu, Chiba",
        note: "入園後立刻在官方 App 查看遊行時間、抽 Entry Request，以及評估是否購買 Premier Access。",
        transit: "園內步行", mode: "walking",
        officialUrl: "https://www.tokyodisneyresort.jp/en/tdl/daily/calendar/20261203/"
      },
      {
        id: "d2-5", time: "12:00", title: "園內午餐・依公布時刻看花車",
        address: "Tokyo Disneyland, 1-1 Maihama, Urayasu, Chiba",
        note: "目前只確定聖誕活動期間與表演名稱；確切場次約 11/8 才會出現在官方日曆。",
        transit: "保留 60–90 分彈性", mode: "walking"
      },
      {
        id: "d2-6", time: "20:30", title: "離園・返回池袋",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "21:00 閉園；提早 30 分離開可避開第一波人潮。",
        transit: "JR 京葉線＋有樂町線｜約 70–85 分｜約 ¥461 IC", mode: "trans"
      },
      {
        id: "d2-7", time: "22:00", title: "回到住宿休息",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "依體力決定是否提早離園。",
        transit: "池袋站步行 5–10 分", mode: "walking"
      }
    ],
    tickets: [
      { status: "10/03 開賣", tone: "alert", title: "12/3 一日護照｜成人 ¥10,900", note: "2026/10/3 14:00 日本時間（台灣 13:00）開賣；購票時要選定 Disneyland。", url: "https://www.tokyodisneyresort.jp/en/ticket/index.html", action: "官方購票" },
      { status: "約 11/08 公布", tone: "pending", title: "Toys Wondrous Christmas!", note: "Disneyland 聖誕花車，每日 1 回、約 45 分；12/3 的確切時間尚未公布。", url: "https://www.tokyodisneyresort.jp/en/tdl/show/detail/7003/", action: "官方表演頁" },
      { status: "約 11/08 公布", tone: "pending", title: "Electrical Parade Dreamlights", note: "夜間電子大遊行，約 45 分；聖誕期間有特別版，確切時間待公告。", url: "https://www.tokyodisneyresort.jp/en/tdl/show/detail/913/", action: "官方表演頁" },
      { status: "入園後購買", tone: "walkin", title: "Disney Premier Access", note: "不能事前買。當期官網列聖誕花車 ¥3,500、電子大遊行 ¥2,500，數量有限。", url: "https://www.tokyodisneyresort.jp/en/tdr/guide/app_service/disneypremieraccess", action: "使用說明" }
    ]
  },
  {
    id: "2026-12-04", tab: "DAY 3", label: "12/04", date: "12月04日 · 星期五", theme: "淺草・晴空塔",
    notice: "05:40 是去紅鶴排當日回店時段，不是開始吃。最新資料偏向 07:00 發券，但舊資料仍寫 08:30；請在出發前 1–2 天再看官方 Instagram。",
    items: [
      {
        id: "d3-1", time: "04:50", title: "從住宿出發｜已提前 10 分鐘",
        address: "Benitsuru, 2-1-11 Nishi-Asakusa, Taito City, Tokyo",
        note: "JR 池袋到上野，轉東京 Metro 銀座線到田原町／淺草。首班時段可能等車，04:50 較穩。",
        transit: "JR＋銀座線｜40–50 分｜約 ¥387 IC｜1 轉乘", mode: "trans"
      },
      {
        id: "d3-2", time: "05:40", title: "紅鶴 Benitsuru 排隊",
        address: "2-1-11 Nishi-Asakusa, Taito City, Tokyo 111-0035, Japan",
        note: "無網路預約。排隊後取得當日指定回店時段，每人／每盤先付 ¥1,000 訂金。",
        transit: "現場排隊｜發券時間需再確認", mode: "walking",
        officialUrl: "https://www.instagram.com/benizuru_homemade_pancake/"
      },
      {
        id: "d3-3", time: "07:00", title: "領紅鶴回店時段",
        address: "2-1-11 Nishi-Asakusa, Taito City, Tokyo 111-0035, Japan",
        note: "領到的時間可能不是 10:00；請在網站按編輯改成店家實際指定時間。",
        transit: "¥1,000 訂金／人／盤", mode: "walking"
      },
      {
        id: "d3-4", time: "07:20", title: "淺草寺",
        address: "Senso-ji, 2-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
        note: "境內可更早散步；12 月本堂 06:30–17:00 開放，免費且不用預約。",
        transit: "紅鶴步行約 12–15 分｜¥0", mode: "walking",
        officialUrl: "https://www.senso-ji.jp/guide/"
      },
      {
        id: "d3-5", time: "10:00", title: "回紅鶴吃鬆餅｜暫定",
        address: "2-1-11 Nishi-Asakusa, Taito City, Tokyo 111-0035, Japan",
        note: "以現場拿到的回店時段為準；店家供應數量有限。",
        transit: "淺草寺步行約 12–15 分", mode: "walking"
      },
      {
        id: "d3-6", time: "11:30", title: "淺草・仲見世自由散步",
        address: "Nakamise-dori Street, 1 Chome Asakusa, Taito City, Tokyo",
        note: "多數店家上午後才陸續營業，安排伴手禮與午間休息。",
        transit: "步行", mode: "walking"
      },
      {
        id: "d3-7", time: "13:15", title: "步行前往晴空塔",
        address: "Tokyo Solamachi, 1-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
        note: "沿隅田川散步視野較好；若累了，可搭東武線 1 站。",
        transit: "步行 20–25 分｜¥0；東武線約 3 分｜¥160", mode: "walking"
      },
      {
        id: "d3-8", time: "14:00", title: "Tokyo Solamachi 晴空塔百貨",
        address: "Tokyo Solamachi, 1-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
        note: "商場多數店舖 10:00–21:00。若想上展望台，需另買晴空塔指定時段票。",
        transit: "商場內步行", mode: "walking",
        officialUrl: "https://www.tokyo-solamachi.jp/en/access/"
      },
      {
        id: "d3-9", time: "18:00", title: "晚餐｜叙々苑｜已預約",
        address: "Jojoen Tokyo Skytree Town Solamachi, 1-1-2 Oshiage, Sumida City, Tokyo",
        note: "我依動線推定是 Solamachi 30F 分店；請核對訂位確認信，避免跑錯分店。",
        transit: "同棟電梯上 30F", mode: "walking",
        officialUrl: "https://www.jojoen.co.jp/shop/jojoen/soramachi/"
      },
      {
        id: "d3-10", time: "20:15", title: "返回池袋住宿",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "押上搭半藏門線到大手町，轉丸之內線到池袋。",
        transit: "半藏門線＋丸之內線｜45–50 分｜約 ¥252 IC｜1 轉乘", mode: "trans"
      }
    ],
    tickets: [
      { status: "當日現場", tone: "alert", title: "紅鶴回店時段", note: "無事前／網路預約。05:40 排隊，發券時間出發前再查官方 IG。", url: "https://www.instagram.com/benizuru_homemade_pancake/", action: "官方 Instagram" },
      { status: "選配｜2 個月前", tone: "pending", title: "東京晴空塔展望台", note: "百貨本身免費；只有上展望台才要票。指定時段票會依序開放，預售通常較便宜。", url: "https://global-official-ticket.tokyo-skytree.jp/en/home", action: "官方購票" },
      { status: "已預約", tone: "booked", title: "叙々苑 18:00", note: "請核對分店是否為『東京スカイツリータウン・ソラマチ店（30F）』。", url: "https://booking.resty.jp/webrsv/search/s014005101/2902", action: "查看分店訂位" }
    ]
  }
];
