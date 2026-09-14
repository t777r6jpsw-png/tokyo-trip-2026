window.TRIP_DATA.push(
  {
    id: "2026-12-05", tab: "DAY 4", label: "12/05", date: "12月05日 · 星期六", theme: "原宿・表參道・澀谷",
    notice: "9090 TOKYO 實際在原宿，我把它移到午餐後、澀谷 PARCO 前。你寫的『Kaiten Sushi Ginza Onodera』本店其實也在表參道，不在銀座。",
    items: [
      {
        id: "d4-1", time: "09:00", title: "從住宿前往原宿",
        address: "Meiji-jingumae Harajuku Station, Tokyo",
        note: "池袋搭副都心線急行直達明治神宮前〈原宿〉。",
        transit: "副都心線｜25–30 分門到門｜約 ¥209 IC｜0 轉乘", mode: "trans"
      },
      {
        id: "d4-2", time: "09:30", title: "原宿・表參道散步",
        address: "Omotesando, Jingumae, Shibuya City, Tokyo",
        note: "多數服飾店約 11:00 才開，先沿表參道與巷弄散步。",
        transit: "步行", mode: "walking"
      },
      {
        id: "d4-3", time: "11:00", title: "午餐｜しゃぶしゃぶ 山笑ふ 表参道店",
        address: "2F, 4-9-4 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
        note: "請注意是 2F 的涮涮鍋／壽喜燒店。星期六建議先線上訂位。",
        transit: "表參道步行約 8–12 分", mode: "walking",
        officialUrl: "https://www.yamawarau-flavorworks.com/shabu-shabu-omotesandou"
      },
      {
        id: "d4-4", time: "12:15", title: "9090 TOKYO",
        address: "1F-A, 4-28-12 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
        note: "星期六目前公布 12:00–20:00。若你要的是 9090girl TOKYO，地址不同，請按編輯更換。",
        transit: "山笑ふ步行約 8–12 分", mode: "walking",
        officialUrl: "https://yz-store.com/en/pages/stores"
      },
      {
        id: "d4-5", time: "13:30", title: "Shibuya PARCO",
        address: "15-1 Udagawacho, Shibuya City, Tokyo 150-0042, Japan",
        note: "物販多數 11:00–21:00；6F Nintendo TOKYO 等為 10:00–21:00。",
        transit: "原宿步行約 15–20 分｜¥0", mode: "walking",
        officialUrl: "https://shibuya.parco.jp/info/"
      },
      {
        id: "d4-6", time: "16:55", title: "走回表參道・晚餐候位",
        address: "Kaiten Sushi Ginza Onodera HONTEN, 5-1-6 Jingumae, Shibuya City, Tokyo",
        note: "店名有『銀座』，但本店位置在表參道。17:30 前到可先排隊。",
        transit: "PARCO 步行約 18–25 分", mode: "walking"
      },
      {
        id: "d4-7", time: "17:30", title: "晚餐｜廻転鮨 銀座おのでら 本店",
        address: "1F, 5-1-6 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
        note: "目前一般座席無線上預約，現場排隊；營業 10:30–22:30、最晚入店 21:30。",
        transit: "現場候位抓 30–60 分", mode: "walking",
        officialUrl: "https://onodera-group.com/kaitensushi-ginza/"
      },
      {
        id: "d4-8", time: "19:30", title: "返回池袋住宿",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "從明治神宮前搭副都心線直達池袋。",
        transit: "副都心線｜約 25–35 分門到門｜約 ¥209 IC", mode: "trans"
      }
    ],
    tickets: [
      { status: "建議訂位", tone: "alert", title: "山笑ふ 表參道店｜11:00", note: "星期六午餐建議提早訂，選 2F 表參道分店。", url: "https://res-reserve.com/ja/restaurants/yamawarau-omotesando", action: "線上訂位" },
      { status: "現場排隊", tone: "walkin", title: "廻転鮨 銀座おのでら 本店", note: "一般座位未開放線上預約；17:30 前抵達候位。", url: "https://onodera-group.com/kaitensushi-ginza/", action: "官方店舖頁" },
      { status: "不用票", tone: "booked", title: "9090 TOKYO・Shibuya PARCO", note: "兩處都是自由入店；9090 先去，能少走一段回頭路。", url: "https://yz-store.com/en/pages/stores", action: "9090 店舖名單" }
    ]
  },
  {
    id: "2026-12-06", tab: "DAY 5", label: "12/06", date: "12月06日 · 星期日", theme: "銀座慢逛",
    notice: "UNIQLO 銀座店 11:00 才開；09:35 抵達後會早約 1.5 小時，所以先排早餐、銀座四丁目與街區散步。",
    items: [
      {
        id: "d5-1", time: "09:00", title: "從住宿前往銀座",
        address: "Ginza Station, Chuo City, Tokyo",
        note: "池袋搭東京 Metro 丸之內線直達銀座。",
        transit: "丸之內線｜30–35 分門到門｜約 ¥209 IC｜0 轉乘", mode: "trans"
      },
      {
        id: "d5-2", time: "09:35", title: "銀座早餐・街區散步",
        address: "Ginza 4-chome Intersection, Chuo City, Tokyo",
        note: "UNIQLO 尚未營業，先找早餐、看銀座四丁目與中央通。",
        transit: "步行", mode: "walking"
      },
      {
        id: "d5-3", time: "11:00", title: "UNIQLO 銀座店",
        address: "6-9-5 Ginza, Chuo City, Tokyo 104-0061, Japan",
        note: "全球旗艦店 1–12F，營業 11:00–21:00；可辦理適用的免稅購物。",
        transit: "銀座站 A2 出口步行約 4 分", mode: "walking",
        officialUrl: "https://map.uniqlo.com/jp/ja/detail/102383"
      },
      {
        id: "d5-4", time: "13:30", title: "銀座午餐・自由購物",
        address: "Ginza 4-chome Intersection, Chuo City, Tokyo",
        note: "這段保留彈性，不另外塞景點；可視體力回逛想看的店。",
        transit: "步行", mode: "walking"
      },
      {
        id: "d5-5", time: "17:30", title: "返回池袋住宿",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "晚上整理行李，以及明天退稅可能查驗的商品與收據。",
        transit: "丸之內線｜30–35 分門到門｜約 ¥209 IC", mode: "trans"
      }
    ],
    tickets: [
      { status: "不用預約", tone: "booked", title: "UNIQLO 銀座店", note: "11:00 開門；12/7 退稅檢查可能要看商品與收據，請集中整理。", url: "https://map.uniqlo.com/jp/ja/detail/102383", action: "官方店舖頁" }
    ]
  },
  {
    id: "2026-12-07", tab: "DAY 6", label: "12/07", date: "12月07日 · 星期一", theme: "池袋・返程",
    notice: "飯店實際 10:00 退房，不是 12:00。我把 Chiikawa Park 建議入場提前到 12:00，並把離開池袋提前至 14:10；仍需補上回程航班時間與航廈才能確認最終緩衝。",
    items: [
      {
        id: "d6-1", time: "08:30", title: "起床・整理行李與退稅商品",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "2026/11/1 起採新退稅制。商品與收據先集中，需在托運行李前完成機場確認。",
        transit: "住宿內準備", mode: "walking"
      },
      {
        id: "d6-2", time: "09:45", title: "退房・寄放行李｜已修正",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "官方訂房資料顯示最晚 10:00 退房。住宿無常駐櫃檯，退房後寄放行李要事先確認。",
        transit: "原訂 12:00 已提前", mode: "walking",
        officialUrl: "https://www.booking.com/hotel/jp/rutile-ikebukuro.ja.html"
      },
      {
        id: "d6-3", time: "10:30", title: "早午餐｜麵創房 無敵家",
        address: "1-17-1 Minami-Ikebukuro, Toshima City, Tokyo 171-0022, Japan",
        note: "10:30 開門、不可預約、僅收現金；店內不能帶行李箱，務必先寄放。",
        transit: "住宿步行約 15–20 分｜現場排隊", mode: "walking",
        officialUrl: "https://www.mutekiya.com/zh-tw/about/index.html"
      },
      {
        id: "d6-4", time: "12:00", title: "Chiikawa Park｜建議提前 1 小時",
        address: "Chiikawa Park, 3-3-5 Higashi-Ikebukuro, Toshima City, Tokyo 170-0013, Japan",
        note: "需預購指定時段票。原訂 13:00 會壓縮返程，我建議搶 12:00 左右的入場時段。",
        transit: "無敵家步行約 15–20 分", mode: "walking",
        officialUrl: "https://chiikawapark-tokyo.jp/en/"
      },
      {
        id: "d6-5", time: "13:20", title: "離開 Chiikawa Park",
        address: "RUTiLE IKEBUKURO TOKYO, 1-5-3 Ikebukuro, Toshima City, Tokyo",
        note: "回住宿領行李。若堅持 13:00 入場，園內停留時間會縮短且容易錯過機場緩衝。",
        transit: "步行約 20–25 分", mode: "walking"
      },
      {
        id: "d6-6", time: "14:10", title: "領行李・離開住宿",
        address: "Nippori Station, Arakawa City, Tokyo",
        note: "步行到池袋站，搭 JR 山手線到日暮里，預留轉搭 Skyliner 的時間。",
        transit: "JR 山手線｜約 25–35 分門到門｜約 ¥209 IC", mode: "trans"
      },
      {
        id: "d6-7", time: "15:05", title: "日暮里搭 Skyliner",
        address: "Narita International Airport, Chiba, Japan",
        note: "現行平日參考班次約 15:05 出發、15:42–15:45 抵達航廈；12 月班表出發前再確認。",
        transit: "Skyliner｜約 36–40 分｜網路優惠 ¥2,310 起", mode: "trans",
        officialUrl: "https://www.keisei.co.jp/keisei/tetudou/skyliner/e-ticket/en/"
      },
      {
        id: "d6-8", time: "15:50", title: "成田機場退稅攜出確認",
        address: "Narita International Airport, Chiba, Japan",
        note: "先到國際出境大廳的退稅程序終端／海關，完成後才托運可能含退稅商品的行李；綠燈直接完成，紅燈需帶商品受檢。",
        transit: "建議預留 45–60 分｜須在托運前完成", mode: "walking",
        officialUrl: "https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/"
      },
      {
        id: "d6-9", time: "17:00", title: "原訂退稅完成目標",
        address: "Narita International Airport, Chiba, Japan",
        note: "已保留約 1 小時緩衝；請補上回程起飛時間與航廈後再次核對。",
        transit: "接續航空公司報到、安檢與出境", mode: "walking"
      }
    ],
    tickets: [
      { status: "10/15 12:00 開賣", tone: "alert", title: "Chiikawa Park 指定時段票", note: "日本時間 2026/10/15 12:00 預計開賣 12 月票。成人 ¥3,500，先到先得，購買後不可取消或改時段。", url: "https://chiikawapark-tokyo.jp/ticket", action: "官方購票" },
      { status: "乘車前 1 個月", tone: "pending", title: "回程 Skyliner", note: "全車指定席。建議接日暮里約 15:05 班次，當天仍以正式班表為準。", url: "https://www.keisei.co.jp/keisei/tetudou/skyliner/e-ticket/en/", action: "官方 e-ticket" },
      { status: "2026 新制", tone: "pending", title: "日本機場退稅", note: "12 月已適用退款制；在托運前帶護照、收據及商品完成攜出確認。", url: "https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/", action: "官方流程" },
      { status: "尚缺資料", tone: "alert", title: "回程航班", note: "請補上起飛時間與航廈，才能判斷 15:45 抵達成田是否足夠。", url: "https://www.narita-airport.jp/en/flight/", action: "成田航班資訊" }
    ]
  }
);
