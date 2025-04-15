const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/first-bot',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/function-syntax',
        'core-concepts/commands',
        'core-concepts/interactions',
        'core-concepts/events',
        'core-concepts/variables',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
          'guides/creating-embeds',
          'guides/custom-functions',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/function-list',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
  ],
};

export default sidebars;
