export let siteMetadata = {
  title: "HODL",
  author: 'Caner İzci',
  fullName: 'Caner İzci',
  headerTitle: "Caner's Website",
  footerTitle: "Running Bitcoin",
  description:
    "Work and life stories through the keyboard of an open-minded Software Engineer",
  language: 'en-us',
  siteUrl: 'https://www.mcanerizci.com',
  siteRepo: 'https://github.com/mcanerizci/mcanerizci.com',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'izcicaner@protonmail.com',
  github: 'https://github.com/mcanerizci',
  twitter: 'https://twitter.com/mcanerizci',
  // facebook: 'https://facebook.com/hta218',
  // youtube: 'https://www.youtube.com/@hta218_',
  linkedin: 'https://www.linkedin.com/in/mcanerizci/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.umami.is/share/pKMR218CsA7tMfSI/blog',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '2f38ec86-dbb2-411f-bfdc-e9d28fca1db2', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'mcanerizci',
    twitter: 'mcanerizci',
    linkedin: 'mcanerizci',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
