document.addEventListener('DOMContentLoaded', () => {

  /* ── 탭바 ── */
  const TAB_PAGES = ['edit-home.html', 'calendar.html', 'weight.html'];
  document.querySelectorAll('.tab-item').forEach((tab, i) => {
    tab.addEventListener('click', () => go(TAB_PAGES[i]));
  });

  /* ── 뒤로가기 ── */
  document.querySelectorAll('.back-btn, .back-btn-dark').forEach(btn => {
    btn.addEventListener('click', () => history.back());
  });

  /* ── 캘린더 ── */
  // 클립 있는 날짜 셀 → 날짜 상세
  document.querySelectorAll('.cell.thumb').forEach(cell => {
    cell.addEventListener('click', () => go('date-detail.html'));
  });
  // 히스토리 엔트리 카드 → 날짜 상세
  document.querySelectorAll('.entry-card').forEach(card => {
    card.addEventListener('click', () => go('date-detail.html'));
  });

  /* ── 편집 홈 ── */
  // 프로젝트 카드 → 클립 편집
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => go('edit-clips.html'));
  });
  // FAB → 클립 편집 (신규 프로젝트)
  const fab = document.querySelector('.fab');
  if (fab) fab.addEventListener('click', () => go('edit-clips.html'));

  /* ── 클립 편집 ── */
  // 클립 카드 → 자막 편집
  document.querySelectorAll('.clip-card').forEach(card => {
    card.addEventListener('click', () => go('edit-caption.html'));
  });

  /* ── 자막 편집 ── */
  // 저장 / 적용하기 → 클립 편집으로 복귀
  const saveBtn = document.querySelector('.save-btn-dark');
  if (saveBtn) saveBtn.addEventListener('click', () => go('edit-clips.html'));
  const doneBtn = document.querySelector('.done-btn');
  if (doneBtn) doneBtn.addEventListener('click', () => go('edit-clips.html'));

  /* ── 날짜 상세 ── */
  // 영상 편집 버튼 → 클립 편집
  const editVideoBtn = document.querySelector('.btn-secondary');
  if (editVideoBtn) editVideoBtn.addEventListener('click', () => go('edit-clips.html'));

  /* ── 페이지 이동 (fade out) ── */
  function go(url) {
    document.querySelector('.phone').style.opacity = '0';
    document.querySelector('.phone').style.transition = 'opacity 0.12s ease';
    setTimeout(() => window.location.href = url, 120);
  }

});
