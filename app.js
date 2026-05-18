/* ── 페이지 이동 (fade out) ── */
function go(url) {
  document.querySelector('.phone').style.opacity = '0';
  document.querySelector('.phone').style.transition = 'opacity 0.12s ease';
  setTimeout(() => window.location.href = url, 120);
}

document.addEventListener('DOMContentLoaded', () => {

  /* ── 탭바 ── */
  const TAB_PAGES = ['edit-home.html', 'calendar.html', 'weight.html'];
  document.querySelectorAll('.tab-item').forEach((tab, i) => {
    tab.addEventListener('click', () => go(TAB_PAGES[i]));
  });

  /* ── 뒤로가기 ── */
  document.querySelectorAll('.back-btn, .back-btn-dark').forEach(btn => {
    btn.addEventListener('click', () => go(btn.dataset.back || 'calendar.html'));
  });

  /* ── 편집 홈 ── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => go('edit-clips.html'));
  });
  const fab = document.querySelector('.fab');
  if (fab) fab.addEventListener('click', () => go('edit-clips.html?date=' + Store.today()));

  /* ── 클립 편집 ── */
  document.querySelectorAll('.clip-card').forEach(card => {
    card.addEventListener('click', () => go('edit-caption.html'));
  });

  /* ── 자막 편집 ── */
  const saveBtn = document.querySelector('.save-btn-dark');
  if (saveBtn) saveBtn.addEventListener('click', () => go('edit-clips.html'));
  const doneBtn = document.querySelector('.done-btn');
  if (doneBtn) doneBtn.addEventListener('click', () => go('edit-clips.html'));

  /* ── 날짜 상세 ── */
  const editVideoBtn = document.querySelector('.btn-secondary');
  if (editVideoBtn) editVideoBtn.addEventListener('click', () => go('edit-clips.html'));

});
