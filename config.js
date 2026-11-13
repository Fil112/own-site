// Конфиг сайта. Меняешь данные тут — на странице всё обновится само.
window.SITE_CONFIG = {
  profile: {
    nickname: "xKeylo",
    domain: "xkeylomt.space",
    role: "Разработчик —> Сайты, боты, плагины",
    about: "Пишу код под Android, веб и игровые серверы. Здесь собраны мои основные площадки и пет-проекты.",
    // Ссылки под описанием (можно добавить сколько угодно)
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
      description: "ВК страница  Скалозуба из произведения Грибоедова 'Горе от ума'.",
      status: "dev"
    }
  ],

  // Раздел "Проекты"
  projects: [
    {
      name: "Project Alpha",
      stack: ["Java", "Kotlin", "Android"],
      description: "Мобильное приложение с нативным интерфейсом и локальной базой.",
      repoUrl: "https://github.com/",
      demoUrl: "" // если демо нет, оставь пустым — кнопка скроется
    },
    {
      name: "Server Core",
      stack: ["Java", "Paper API"],
      description: "Набор кастомных механик и утилит для сервера.",
      repoUrl: "",
      demoUrl: "https://xkeylomt.space"
    }
  ]
};
