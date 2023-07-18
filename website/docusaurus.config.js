// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SmartArmStack',
  tagline: 'Modularized robot control for ROS and ROS 2.',

  //favicon: 'img/favicon.ico',
  favicon: 'img/logo2.svg',

  // Set the production url of your site here
  url: 'https://SmartArmStack.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SmartArmStack', // Usually your GitHub org/user name.
  projectName: 'SmartArmStack.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SmartArmStack/SmartArmStack',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SmartArmStack/SmartArmStack',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          {
            label: 'SAS ROS Documentation',
            //to: '/citations',
            href: 'https://smartarmstack.github.io/html/annotated.html',
            position: 'right'
          },
          {
            label: 'SAS ROS2 Documentation',
            //to: '/citations',
            href: 'https://smartarmstack.github.io/docs_ros2/annotated.html',
            position: 'right'
          },
          {
            //label: 'GitHub',
            href: 'https://github.com/SmartArmStack',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right'
          },
          {
            label: 'Citations',
            to: '/citations',
            position: 'right'
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/intro',
              },
              {
                label: 'AISP Platform',
                href: 'https://aiscienceplatform.github.io/'
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'DQ Robotics',
                href: 'https://dqrobotics.github.io/',
              },
              {
                label: 'Learning DQ Robotics',
                href: 'https://github.com/dqrobotics/learning-dqrobotics-in-matlab',
              },
              {
                label: 'Learning ROS2',
                href: 'https://ros2-tutorial.readthedocs.io/en/latest/',
              },


            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SmartArmStack',
              },
              {
                label: 'Citations',
                to: '/citations',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. SmartArmStack is brought to you by Murilo Marques Marinho.
        The SmartArmStack LGPLv3 packages are provided “as is”, 
        without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, 
        fitness for a particular purpose and noninfrigement. 
        
        Built with Docusaurus by Juan Jose Quiroz Omana.`,
      },
      prism: {
        //theme: lightCodeTheme,
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
