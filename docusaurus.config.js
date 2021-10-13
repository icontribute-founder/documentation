const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "iContribute Documentation",
        tagline: "iContribute",
        url: "https://icontribute-founder.github.io",
        baseUrl: "/documentation/",
        projectName: "documentation",
        organizationName: "icontribute-founder",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        trailingSlash: false,
        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve("./sidebars.js"),
                        routeBasePath: "/",
                        editUrl:
                            "https://github.com/icontribute-founder/documentation/edit/main/",
                        showLastUpdateTime: true,
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                hideableSidebar: true,
                colorMode: {
                    defaultMode: "light",
                    disableSwitch: true,
                    respectPrefersColorScheme: true,
                },
                navbar: {
                    title: "iContribute Developers",
                    hideOnScroll: true,
                    logo: {
                        alt: "iContribute Logo",
                        src: "img/logo.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "overview",
                            position: "left",
                            label: "Documentation",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    copyright: `Copyright © ${new Date().getFullYear()} iContribute Team. Built with Docusaurus.`,
                },
                prism: {
                    darkTheme: lightCodeTheme,
                    theme: darkCodeTheme,
                },
            }),
    }
);
