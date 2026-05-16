import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GYMAPP',
  tagline: 'Plateforme de gestion pour salles de sport',
  favicon: 'images/logo_md.png',

  future: {
    v4: true,
  },

  url: 'https://chesterkxng.github.io',
  baseUrl: '/Gym-App/',

  organizationName: 'Chesterkxng',
  projectName: 'Gym-App',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // 👈 docs at root, no /docs/ prefix
        },
        blog: false, // 👈 disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'GYMAPP',
      logo: {
        alt: 'GymApp Logo',
        src: 'images/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs', // 👈 matches sidebars.js
          position: 'left',
          label: 'DOCUMENTATION',
        },
        {
          href: 'https://www.gymxapp.com/',
          label: 'GYMAPP',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  scripts: [
    {
      src: 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js',
      async: true,
    },
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
};

export default config;
