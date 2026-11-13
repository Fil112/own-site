// Конфиг сайта. Меняешь данные тут — на странице всё обновится само.
window.SITE_CONFIG = {
  profile: {
    nickname: "xKeylo",
    domain: "xkeylomt.space",
    role: "Разработчик —> Сайты, боты, плагины",
    about: "Пишу код под Android, веб и игровые серверы. Здесь собраны мои основные площадки и пет-проекты.",
    socials: [
      { title: "GitHub", url: "https://github.com/Fil112/" },
      { title: "Modrinth", url: "https://modrinth.com/user/Keylo/" }
    ]
  },

  // Раздел "Мои сайты"
  sites: [
    {
      name: "Основной портал",
      url: "https://xkeylomt.space",
      description: "Главная страница и хаб со всеми ссылками.",
      status: "online" // online | dev | archived
    },
    {
      name: "Проект по литературе",
      url: "https://vk.xkeylomt.space",
      description: "ВК страница Скалозуба из произведения Грибоедова 'Горе от ума'.",
      status: "dev"
    }
  ],

  // Раздел "Проекты"
  projects: [
    {
      name: "ClickMT",
      stack: ["Kotlin", "Android", "Game"],
      description: "Мобильная игра-кликер.",
      links: [
        { label: "RuStore", url: "https://www.rustore.ru/catalog/app/mt.keylo.clickmt" }
      ]
    },
    {
      name: "ChatMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Мощное ядро для чата, объединяющее в себе поддержку HEX-градиентов, умного ИИ-бота (Gemini), продвинутую модерацию и встроенную систему наказаний.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/ChatMT" },
        { label: "Github", url: "https://github.com/ChatMT" }
      ]
    },
    {
      name: "AuthMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Оптимизированный плагин авторизации для Minecraft с поддержкой SQLite/MySQL и асинхронной защитой аккаунтов, созданный для максимальной производительности на серверах со слабым железом.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/AuthMT" },
        { label: "Github", url: "https://github.com/AuthMT" }
      ]
    },
    {
      name: "CommandMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Мощная замена устаревшим менеджерам команд. Динамически создавайте собственные команды, цепочки действий и сокращения без перезагрузки сервера. Часть экосистемы MT Studio.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/CommandMT" },
        { label: "Github", url: "https://github.com/CommandMT" }
      ]
    },
    {
      name: "VaultMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Легкое, современное API для управления экономикой на серверах Minecraft (Paper/Folia), построенное на гибкой архитектуре провайдеров.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/VaultMT" },
        { label: "Github", url: "https://github.com/VaultMT" }
      ]
    },
    {
      name: "PackMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Умный менеджер ресурс-паков для серверов Minecraft (1.16.5 - 1.20+) со встроенным HTTP-сервером и функцией автоматического слияния JSON-файлов и текстур.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/PackMT" },
        { label: "Github", url: "https://github.com/PackMT" }
      ]
    },
    {
      name: "SunShulkers",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Плагин для Minecraft серверов Paper (версии 1.16.5-26.2), который позволяет игрокам открывать шалкеры прямо из инвентаря с множеством дополнительных функций.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/SunShulkerss" },
        { label: "Github", url: "https://github.com/SunShulkers" }
      ]
    },
    {
      name: "Metel",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Хардкорный атмосферный плагин для серверов Minecraft, который погружает игроков в суровые условия вечной зимы. Плагин полностью меняет генерацию биомов, ограничивает видимость плотным туманом, вводит механику обморожения и добавляет локальный чат для большего реализма.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/plugin/Metel" },
        { label: "Github", url: "https://github.com/Metel" }
      ]
    }
  ]
};
