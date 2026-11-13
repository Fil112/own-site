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
      stack: ["Kotlin", "Android"],
      description: "Мобильная игра-кликер.",
      links: [
        { label: "RuStore", url: "https://www.rustore.ru/catalog/app/mt.keylo.clickmt" }
      ]
    },
    {
      name: "ChatMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Плагин для управления серверным чатом, форматированием и каналами.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" },
        { label: "Github", url: "https://github.com/" },
      ]
    },
    {
      name: "AuthMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Плагин авторизации и защиты аккаунтов игроков на сервере.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    },
    {
      name: "CommandMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Набор полезных серверных команд и утилит для администрирования.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    },
    {
      name: "VaultMT",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "Плагин для работы с экономикой и балансом на сервере.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    },
    {
      name: "SunShulkers",
      stack: ["Java", "Minecraft", "Plugin"],
      description: "",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    },
    {
      name: "PackMT",
      stack: ["Minecraft", "Resource Pack"],
      description: "",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    },
    {
      name: "Metel",
      stack: ["Minecraft", "Modrinth"],
      description: "Атмосферный проект для Minecraft.",
      links: [
        { label: "Modrinth", url: "https://modrinth.com/project/" }
      ]
    }
  ]
};
