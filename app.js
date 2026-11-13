(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("Не найден SITE_CONFIG. Проверь подключение config.js");
    return;
  }

  // Шапка
  document.title = `${cfg.profile.nickname} — ${cfg.profile.domain}`;
  document.getElementById("domain-badge").textContent = cfg.profile.domain;
  document.getElementById("nickname").textContent = cfg.profile.nickname;
  document.getElementById("role").textContent = cfg.profile.role;
  document.getElementById("about").textContent = cfg.profile.about;

  const socialsBox = document.getElementById("socials");
  cfg.profile.socials.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = item.title;
    socialsBox.appendChild(a);
  });

  // Сайты
  const sitesBox = document.getElementById("sites-list");
  const statusLabels = {
    online: "Online",
    dev: "В разработке",
    archived: "Архив"
  };

  cfg.sites.forEach((site) => {
    const card = document.createElement("article");
    card.className = "card";

    const st = site.status || "online";
    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="card-title">${escapeHtml(site.name)}</div>
          <span class="status ${st}">${statusLabels[st] || st}</span>
        </div>
        <p class="card-desc">${escapeHtml(site.description)}</p>
      </div>
      <div class="card-links">
        <a href="${site.url}" target="_blank" rel="noopener">Открыть сайт →</a>
      </div>
    `;
    sitesBox.appendChild(card);
  });

      // Проекты
  const projectsBox = document.getElementById("projects-list");
  cfg.projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "card";

    const tagsHtml = (proj.stack || [])
      .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
      .join("");

    // Собираем массив кнопок (плюс фоллбэк на старый формат, если остался)
    const links = proj.links ? [...proj.links] : [];
    if (proj.demoUrl) links.push({ label: "Открыть", url: proj.demoUrl });
    if (proj.repoUrl) links.push({ label: "GitHub", url: proj.repoUrl });

    const linksHtml = links
      .filter((item) => item.url && item.url.trim() !== "")
      .map(
        (item) =>
          `<a href="${item.url}" target="_blank" rel="noopener">${escapeHtml(item.label)} →</a>`
      )
      .join("");

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="card-title">${escapeHtml(proj.name)}</div>
        </div>
        <p class="card-desc">${escapeHtml(proj.description)}</p>
        <div class="tags">${tagsHtml}</div>
      </div>
      <div class="card-links">${linksHtml}</div>
    `;
    projectsBox.appendChild(card);
  });



  document.getElementById("footer-copy").textContent =
    `© ${new Date().getFullYear()} ${cfg.profile.nickname} • ${cfg.profile.domain}`;

  // Базовая защита от случайного HTML в строках конфига
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
