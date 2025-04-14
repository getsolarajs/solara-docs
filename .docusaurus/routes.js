import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '242'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a99'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4bd'),
            routes: [
              {
                path: '/docs/core-concepts/commands',
                component: ComponentCreator('/docs/core-concepts/commands', '88c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/events',
                component: ComponentCreator('/docs/core-concepts/events', 'fa3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/function-syntax',
                component: ComponentCreator('/docs/core-concepts/function-syntax', 'c28'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/interactions',
                component: ComponentCreator('/docs/core-concepts/interactions', '709'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/variables',
                component: ComponentCreator('/docs/core-concepts/variables', '916'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/first-bot',
                component: ComponentCreator('/docs/first-bot', '027'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/creating-embeds',
                component: ComponentCreator('/docs/guides/creating-embeds', '299'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/custom-functions',
                component: ComponentCreator('/docs/guides/custom-functions', '5d4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/installation',
                component: ComponentCreator('/docs/installation', '7b2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '52a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/reference/function-list',
                component: ComponentCreator('/docs/reference/function-list', '2ee'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
