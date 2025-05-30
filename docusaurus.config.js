import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Solara.js',
  tagline: 'Develop Discord.js v14 Bots with Simplicity and Power',
  favicon: 'img/image.png',

  url: 'https://solara.js.org',
  baseUrl: '/',

  organizationName: 'getsolarajs',
  projectName: 'solara-docs',

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/getsolarajs/solara-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/image.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Solara.js',
        logo: {
          alt: 'Solara.js Logo',
          src: 'img/image.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://discord.gg/mkuh4bPng4',
            position: 'right',
            className: 'navbar-discord-link',
            'aria-label': 'Discord server',
          },
          {
            href: 'https://github.com/getsolarajs/solara.js',
            position: 'right',
            className: 'navbar-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json', 'javascript', 'typescript'],
      },
    }),
};

export default config;
