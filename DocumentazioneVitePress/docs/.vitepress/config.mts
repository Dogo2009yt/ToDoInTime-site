import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  ignoreDeadLinks: true,
  title: "ToDoInTime",
  description: "A documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '../static/index.html' },
    ],

    sidebar: [
      {
        text: 'Basics',
        items: [
          { text: 'Getting started', link: '/Getting started' },
          { text: 'Create task', link: '/Create Task' },
          { text: 'Edit task', link: '/Edit a Task' },
          { text: 'Delete task', link: '/Delete a Task' },
          { text: 'Complete a task', link: '/Complete a Task' },
        ]
      },
      {
        text: 'Advanced',
        items: [

        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Masterpat48/ToDoInTime' }
    ]
  }
})
