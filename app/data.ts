type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  grade?: string
  thesis?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Bitcoin2Go GmbH',
    description: 'Das führende Kryptovergleichs- und Newsportal im DACH-Raum mit über 7 Mio. jährlichen Page Views und 300.000+ Social-Media-Abonnenten.',
    link: 'https://bitcoin-2go.de',
    image: '/images/bitcoin2go.webp',
    id: 'project1',
  },
  {
    name: 'Finanzwissen GmbH',
    description:
      'Finanzbildungs- und Vergleichsplattform. 2026 mehrheitlich an die Börsenmedien AG verkauft.',
    link: 'https://finanzwissen.de',
    image: '/images/finanzwissen.webp',
    id: 'project2',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Karlsruher Institut für Technologie (KIT)',
    degree: 'Master of Science - Wirtschaftsingenieurwesen',
    start: '2018',
    end: '2020',
    grade: '1,0',
    thesis: 'Asset Pricing Factors in Cryptocurrency Markets',
    id: 'edu1',
  },
  {
    institution: 'Karlsruher Institut für Technologie (KIT)',
    degree: 'Bachelor - Wirtschaftsingenieurwesen',
    start: '2013',
    end: '2018',
    grade: '1,3',
    thesis: 'Development of a web application for an autonomous picking robot.',
    id: 'edu2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Börsenmedien AG übernimmt Mehrheit an der Finanzwissen GmbH',
    description: 'Mehrheitsübernahme der von Daniel Wenz mitgegründeten Finanzwissen GmbH',
    link: 'https://www.presseportal.de/pm/60313/6278030',
    uid: 'blog-5',
  },
  {
    title: 'Bitcoin im Höhenflug: Zwischen Rekorden, Regulierung und Reife',
    description: 'Analyse der aktuellen Bitcoin-Entwicklung und Marktlage',
    link: 'https://www.cash-online.de/a/bitcoin-im-hoehenflug-zwischen-rekorden-regulierung-und-reife-701142/',
    uid: 'blog-1',
  },
  {
    title: 'Bitcoin Halving: Das musst du darüber wissen',
    description: 'Alles was private Anleger über das Bitcoin Halving wissen müssen',
    link: 'https://www.dasinvestment.com/bitcoin-halvering-das-musst-du-darueber-wissen-private-anleger/?viewall',
    uid: 'blog-2',
  },
  {
    title: 'Kryptowährungen haben das Darknet-Image schon lange abgelegt',
    description: 'Interview über die Entwicklung der Kryptowährungen im Mainstream',
    link: 'https://www.wirtschaftsforum.de/interviews/kryptowaehrungen-haben-das-darknet-image-schon-lange-abgelegt',
    uid: 'blog-3',
  },
  {
    title: 'Dezentrale Applikationen auf Ethereum',
    description: 'Technische Einblicke in die Ethereum-Entwicklung',
    link: 'https://www.it-finanzmagazin.de/dezentrale-applikationen-auf-ethereum-162590/',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/daniel-wenz/?originalSubdomain=de',
  },
  {
    label: 'Bitcoin2Go',
    link: 'https://bitcoin-2go.de/author/daniel-wenz/',
  },
  {
    label: 'Finanzwissen',
    link: 'https://finanzwissen.de/autor/daniel/',
  },
]

export const EMAIL = 'daniel@bitcoin-2go.de'
