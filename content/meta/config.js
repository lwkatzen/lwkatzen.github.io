const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Isaac Martin's Personal Site", // <title>
  shortSiteTitle: "Isaac Martin's Website", // <title> ending for posts and pages
  siteDescription: "It's just a personal website dude",
  siteUrl: "https://lwkatzen.github.io/",
  pathPrefix: "",
  siteImage: "cutebot.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "Isaac Martin",
  infoTitleNote: "",
  // manifest.json
  manifestName: "Isaac Martin's Personal Website",
  manifestShortName: "Isaac Martin", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "isaac.martin@utah.edu",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/lwkatzen" },
    { name: "twitter", url: "https://twitter.com/" },
    { name: "facebook", url: "https://facebook.com/" }
  ]
};
