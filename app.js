const STORAGE_KEY = "tokyo-trip-planner-v3";
const starterDays = window.TRIP_DATA;

let days = loadDays();
let activeDayId = days[0].id;

const dayTabs = document.querySelector("#dayTabs");
const timeline = document.querySelector("#timeline");
const ticketList = document.querySelector("#ticketList");
const activeDate = document.querySelector("#activeDate");
const activeTheme = document.querySelector("#activeTheme");
const dayNotice = document.querySelector("#dayNotice");
const dialog = document.querySelector("#editorDialog");
const editorForm = document.querySelector("#editorForm");
const saveState = document.querySelector("#saveState");

function cloneDefault() {
  return JSON.parse(JSON.stringify(starterDays));
}

function loadDays() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved) || saved.length !== 6) throw new Error("Invalid itinerary");
    return saved;
  } catch {
    return cloneDefault();
  }
}

function saveDays(message = "已儲存在這台裝置") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
  saveState.textContent = message;
  window.setTimeout(() => { saveState.textContent = "已儲存在這台裝置"; }, 1800);
}

function activeDay() {
  return days.find(day => day.id === activeDayId) || days[0];
}

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function directionsUrl(origin, destination, mode = "trans") {
  const travelmode = mode === "trans" ? "transit" : mode;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${encodeURIComponent(travelmode)}`;
}

function safeUrl(value) {
  return /^https?:\/\//i.test(String(value || "")) ? String(value) : "#";
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

function renderTabs() {
  dayTabs.innerHTML = days.map(day => `
    <button class="day-tab" type="button" role="tab" aria-selected="${day.id === activeDayId}" tabindex="${day.id === activeDayId ? 0 : -1}" data-day="${escapeHtml(day.id)}">
      <span>${escapeHtml(day.tab)}</span><strong>${escapeHtml(day.label)}</strong>
    </button>`).join("");
}

function renderTimeline(day) {
  if (!day.items.length) {
    timeline.innerHTML = '<div class="empty"><strong>這一天還沒有行程</strong><br>按「新增行程」開始安排。</div>';
    return;
  }

  const sorted = [...day.items].sort((a, b) => a.time.localeCompare(b.time));
  timeline.innerHTML = sorted.map((item, index) => {
    const previous = sorted[index - 1];
    const routeButton = previous?.address && item.address && previous.address !== item.address && previous.mode !== "flight" && item.mode !== "flight"
      ? `<a class="mini-button route" href="${directionsUrl(previous.address, item.address, item.mode)}" target="_blank" rel="noreferrer">從上一站導航</a>`
      : "";
    const officialButton = item.officialUrl
      ? `<a class="mini-button official" href="${escapeHtml(safeUrl(item.officialUrl))}" target="_blank" rel="noreferrer">官方資訊</a>`
      : "";

    return `
      <article class="stop">
        <time class="stop-time">${escapeHtml(item.time)}</time>
        <div class="stop-card">
          <h3>${escapeHtml(item.title)}</h3>
          ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
          ${item.address ? `<div class="address-line">${escapeHtml(item.address)}</div>` : ""}
          ${item.transit ? `<span class="transit-line">${escapeHtml(item.transit)}</span>` : ""}
          <div class="stop-actions">
            ${item.address ? `<a class="mini-button map" href="${mapsSearchUrl(item.address)}" target="_blank" rel="noreferrer">地點地圖</a>` : ""}
            ${routeButton}
            ${officialButton}
            <button class="mini-button" type="button" data-edit="${escapeHtml(item.id)}">編輯</button>
            <button class="mini-button" type="button" data-delete="${escapeHtml(item.id)}">刪除</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderTickets(day) {
  ticketList.innerHTML = day.tickets.length ? day.tickets.map(ticket => `
    <div class="ticket-card">
      <span class="ticket-status ${escapeHtml(ticket.tone || "")}">${escapeHtml(ticket.status)}</span>
      <strong>${escapeHtml(ticket.title)}</strong>
      <p>${escapeHtml(ticket.note)}</p>
      <a href="${escapeHtml(safeUrl(ticket.url))}" target="_blank" rel="noreferrer">${escapeHtml(ticket.action || "查看官方資訊")} ↗</a>
    </div>`).join("") : '<p class="toolbar-note">今天沒有需要預約的項目。</p>';
}

function render() {
  const day = activeDay();
  renderTabs();
  activeDate.textContent = day.date;
  activeTheme.textContent = day.theme;
  dayNotice.textContent = day.notice;
  renderTimeline(day);
  renderTickets(day);
}

function openEditor(item) {
  document.querySelector("#dialogTitle").textContent = item ? "編輯行程" : "新增行程";
  document.querySelector("#itemId").value = item?.id || "";
  document.querySelector("#itemTime").value = item?.time || "12:00";
  document.querySelector("#itemTitle").value = item?.title || "";
  document.querySelector("#itemAddress").value = item?.address || "";
  document.querySelector("#itemNote").value = item?.note || "";
  document.querySelector("#itemTransit").value = item?.transit || "";
  document.querySelector("#itemMode").value = ["trans", "walking", "driving"].includes(item?.mode) ? item.mode : "trans";
  dialog.showModal();
  window.setTimeout(() => document.querySelector("#itemTitle").focus(), 20);
}

function deleteItem(dayId, id, shouldConfirm = true) {
  const day = days.find(candidate => candidate.id === dayId);
  if (!day) throw new Error("找不到指定日期");
  if (!day.items.some(item => item.id === id)) throw new Error("找不到指定行程");
  if (shouldConfirm && !window.confirm("要刪除這個行程嗎？")) return { action: "cancelled" };
  day.items = day.items.filter(item => item.id !== id);
  saveDays("已刪除行程");
  if (day.id === activeDayId) render();
  return { action: "deleted", dayId, id };
}

function upsertItem(input, requireExisting = false) {
  const day = days.find(candidate => candidate.id === (input.dayId || activeDayId));
  if (!day) throw new Error("找不到指定日期");
  const id = input.id || `custom-${Date.now()}`;
  const existingIndex = day.items.findIndex(item => item.id === id);
  if (requireExisting && existingIndex < 0) throw new Error("找不到指定行程");
  const nextItem = {
    id,
    time: input.time,
    title: String(input.title || "").trim(),
    address: String(input.address || "").trim(),
    note: String(input.note || "").trim(),
    transit: String(input.transit || "").trim(),
    mode: ["trans", "walking", "driving"].includes(input.mode) ? input.mode : "trans"
  };
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(nextItem.time)) throw new Error("時間格式需為 HH:MM");
  if (!nextItem.title) throw new Error("請填行程名稱");
  if (existingIndex >= 0) day.items[existingIndex] = { ...day.items[existingIndex], ...nextItem };
  else day.items.push(nextItem);
  saveDays(existingIndex >= 0 ? "已更新行程" : "已新增行程");
  if (day.id === activeDayId) render();
  return { dayId: day.id, item: nextItem, action: existingIndex >= 0 ? "updated" : "created" };
}

dayTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  activeDayId = button.dataset.day;
  render();
});

dayTabs.addEventListener("keydown", event => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  const index = days.findIndex(day => day.id === activeDayId);
  const nextIndex = event.key === "ArrowRight" ? (index + 1) % days.length : (index - 1 + days.length) % days.length;
  activeDayId = days[nextIndex].id;
  render();
  dayTabs.querySelector(`[data-day="${activeDayId}"]`)?.focus();
});

timeline.addEventListener("click", event => {
  const edit = event.target.closest("[data-edit]");
  const remove = event.target.closest("[data-delete]");
  if (edit) openEditor(activeDay().items.find(item => item.id === edit.dataset.edit));
  if (remove) deleteItem(activeDayId, remove.dataset.delete);
});

document.querySelector("#addButton").addEventListener("click", () => openEditor());
document.querySelector("#resetButton").addEventListener("click", () => {
  if (!window.confirm("確定恢復成查核完成的原始行程？你在這台裝置上的修改會被清除。")) return;
  days = cloneDefault();
  activeDayId = days[0].id;
  saveDays("已恢復原始行程");
  render();
});

document.querySelector("#exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(days, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "東京六日行程備份-2026-12.json";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  saveState.textContent = "備份已下載";
});

document.querySelector("#importButton").addEventListener("click", () => document.querySelector("#importFile").click());
document.querySelector("#importFile").addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported) || imported.length !== 6 || imported.some(day => !day.id || !Array.isArray(day.items))) throw new Error();
    days = imported;
    activeDayId = days[0].id;
    saveDays("已匯入行程備份");
    render();
  } catch {
    window.alert("這個檔案不是有效的六日行程備份。");
  } finally {
    event.target.value = "";
  }
});

editorForm.addEventListener("submit", event => {
  const submitter = event.submitter;
  if (!submitter || submitter.value !== "default") return;
  event.preventDefault();
  try {
    upsertItem({
      id: document.querySelector("#itemId").value,
      time: document.querySelector("#itemTime").value,
      title: document.querySelector("#itemTitle").value,
      address: document.querySelector("#itemAddress").value,
      note: document.querySelector("#itemNote").value,
      transit: document.querySelector("#itemTransit").value,
      mode: document.querySelector("#itemMode").value
    });
    dialog.close();
  } catch (error) {
    window.alert(error.message);
  }
});

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const register = tool => Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
  const dayIds = starterDays.map(day => day.id);

  register({
    name: "read_trip_itinerary",
    title: "讀取東京六日行程",
    description: "Read the current six-day Tokyo itinerary, including user edits saved in this browser.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: () => ({ days })
  });

  const fields = {
    dayId: { type: "string", enum: dayIds },
    id: { type: "string", minLength: 1 },
    time: { type: "string", pattern: "^([01]\\d|2[0-3]):[0-5]\\d$" },
    title: { type: "string", minLength: 1 },
    address: { type: "string" },
    note: { type: "string" },
    transit: { type: "string" },
    mode: { type: "string", enum: ["trans", "walking", "driving"] }
  };

  register({
    name: "create_trip_stop",
    title: "新增行程",
    description: "Create one itinerary stop on a selected day and update the visible timeline.",
    inputSchema: { type: "object", properties: fields, required: ["dayId", "time", "title"], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute: input => upsertItem(input)
  });

  register({
    name: "update_trip_stop",
    title: "更新行程",
    description: "Update an existing itinerary stop by its stable id and refresh the visible timeline.",
    inputSchema: { type: "object", properties: fields, required: ["dayId", "id", "time", "title"], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute: input => upsertItem(input, true)
  });

  register({
    name: "delete_trip_stop",
    title: "刪除行程",
    description: "Delete one itinerary stop by day and id, then update the visible timeline.",
    inputSchema: {
      type: "object",
      properties: { dayId: { type: "string", enum: dayIds }, id: { type: "string", minLength: 1 } },
      required: ["dayId", "id"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute: input => deleteItem(input.dayId, input.id, false)
  });
}

render();
registerWebMcpTools();
