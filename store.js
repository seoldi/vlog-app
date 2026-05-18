const Store = {
  KEY: 'vlog_data',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); }
    catch { return {}; }
  },

  get(date) {
    return this.getAll()[date] || {};
  },

  set(date, data) {
    const all = this.getAll();
    all[date] = Object.assign({}, all[date] || {}, data);
    localStorage.setItem(this.KEY, JSON.stringify(all));
    return all[date];
  },

  today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  },

  formatDate(dateStr) {
    const [y, m, d] = dateStr.split('-');
    return `${y}년 ${parseInt(m)}월 ${parseInt(d)}일`;
  },

  dayName(dateStr) {
    return ['일','월','화','수','목','금','토'][new Date(dateStr + 'T00:00:00').getDay()];
  },

  // 몸무게 기록 전체 (날짜 내림차순)
  weightRecords() {
    const all = this.getAll();
    return Object.entries(all)
      .filter(([, v]) => v.weight)
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([date, v]) => ({ date, weight: v.weight }));
  }
};
