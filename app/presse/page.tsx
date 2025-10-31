'use client'
import { motion } from 'motion/react'
import { ChevronLeft, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

// Medienauftritte nach Jahren sortiert
const mediaAppearances = {
  "2024": [
    {
      title: "Bitcoin im Höhenflug: Zwischen Rekorden, Regulierung und Reife",
      outlet: "cash-online.de",
      date: "März 2024",
      link: "https://www.cash-online.de/a/bitcoin-im-hoehenflug-zwischen-rekorden-regulierung-und-reife-701142/",
      description: "Analyse der aktuellen Bitcoin-Entwicklung und Marktlage"
    },
    {
      title: "Bitcoin Halving: Das musst du darüber wissen",
      outlet: "dasinvestment.com",
      date: "April 2024",
      link: "https://www.dasinvestment.com/bitcoin-halvering-das-musst-du-darueber-wissen-private-anleger/?viewall",
      description: "Alles was private Anleger über das Bitcoin Halving wissen müssen"
    },
    {
      title: "Bitcoin Halving 2024",
      outlet: "anlegerplus.de",
      date: "April 2024",
      link: "https://anlegerplus.de/bitcoin-halving-2024/",
      description: "Umfassende Analyse des Bitcoin Halving Events"
    }
  ],
  "2023": [
    {
      title: "World Liberty Finance (WLFI): Was steckt hinter dem Trump-Projekt?",
      outlet: "business-punk.com",
      date: "Dezember 2023",
      link: "https://www.business-punk.com/anlagepunk/world-liberty-finance-wlfi-was-steckt-hinter-dem-trump-projekt/",
      description: "Analyse des umstrittenen Trump-bezogenen Krypto-Projekts"
    },
    {
      title: "Kryptowährungen haben das Darknet-Image schon lange abgelegt",
      outlet: "wirtschaftsforum.de",
      date: "Oktober 2023",
      link: "https://www.wirtschaftsforum.de/interviews/kryptowaehrungen-haben-das-darknet-image-schon-lange-abgelegt",
      description: "Interview über die Entwicklung der Kryptowährungen im Mainstream"
    }
  ],
  "2022": [
    {
      title: "Dezentrale Applikationen auf Ethereum",
      outlet: "it-finanzmagazin.de",
      date: "Juni 2022",
      link: "https://www.it-finanzmagazin.de/dezentrale-applikationen-auf-ethereum-162590/",
      description: "Technische Einblicke in die Ethereum-Entwicklung"
    },
    {
      title: "Neobroker-Sicherheit: Finanzdaten im Fadenkreuz von Cyberkriminellen",
      outlet: "csoonline.com",
      date: "März 2022",
      link: "https://www.csoonline.com/article/3491998/neobroker-sicherheit-finanzdaten-im-fadenkreuz-von-cyberkriminellen.html",
      description: "Sicherheitsaspekte bei digitalen Finanzdienstleistungen"
    }
  ]
}

// Themenschwerpunkte
const topics = [
  {
    category: "Kryptowährungen & Blockchain",
    topics: [
      "Bitcoin und digitale Währungen",
      "DeFi (Decentralized Finance)",
      "Blockchain-Technologie",
      "Krypto-Regulierung in Deutschland und Europa",
      "NFTs und digitale Assets"
    ]
  },
  {
    category: "Finanzbildung & Investment",
    topics: [
      "Private Vermögensaufbau-Strategien",
      "Finanzbildung für junge Menschen",
      "Digitale Finanzdienstleistungen",
      "Neobroker und Trading-Plattformen",
      "Nachhaltige Geldanlagen"
    ]
  },
  {
    category: "Entrepreneurship & Innovation",
    topics: [
      "Fintech-Startups gründen",
      "Digitale Transformation im Finanzsektor",
      "Innovation in der Finanzbranche",
      "Startup-Ökosystem in Deutschland",
      "Wirtschaftsingenieurwesen und Technologie"
    ]
  }
]

export default function PressePage() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Breadcrumbs */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Breadcrumbs />
      </motion.section>

      {/* Header */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Presse & Medien
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          Informationen für Journalisten, Medienvertreter und Interessierte
        </p>
      </motion.section>

      {/* Gründer-Biografie */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Kurzbeschreibung
        </h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            Daniel Wenz ist ein deutscher Unternehmer und Krypto-Experte, der sich auf die 
            Bereiche Finanzbildung und Kryptowährungen spezialisiert hat. Als Co-Founder 
            der Finanzwissen GmbH und Founder der Bitcoin2Go GmbH hat er zwei der führenden 
            Plattformen im deutschsprachigen Fintech-Bereich aufgebaut.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            Mit einem Master-Abschluss in Wirtschaftsingenieurwesen am Karlsruher Institut 
            für Technologie (KIT) mit der Note 1,0 und einer Bachelor-Note von 1,3 bringt 
            Daniel sowohl akademische Exzellenz als auch praktische Unternehmererfahrung mit. 
            Seine Masterarbeit über "Asset Pricing Factors in Cryptocurrency Markets" zeigt 
            seine tiefgreifende wissenschaftliche Auseinandersetzung mit dem Thema.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bitcoin2Go ist mit über 7 Millionen jährlichen Page Views und mehr als 300.000 
            Social-Media-Abonnenten eine der führenden Krypto-Plattformen im DACH-Raum. 
            Finanzwissen.de hat sich als wichtige Bildungsplattform für junge Menschen 
            etabliert, die sich mit Finanzen und privatem Vermögensaufbau beschäftigen möchten.
          </p>
          
          {/* Team-Foto */}
          <figure className="mt-8">
            <Image
              src="/daniel-wenz-und-mirco-recksiek.jpg"
              alt="Daniel Wenz und Mirco Recksiek, die Gründer von Bitcoin2Go, lächelnd vor einer modernen Gebäudefassade"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
            <figcaption className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 italic">
               Mirco Recksiek (links) und Daniel Wenz (rechts): Die beiden Gründer der Kryptonews und -vergleichsplattform Bitcoin2Go im Portrait. Foto: <a href="https://www.nickleuze.com/" target="_blank" rel="noopener noreferrer" className="underline dark:text-zinc-300">Nick Leuze</a>
            </figcaption>
          </figure>
        </div>
      </motion.section>

      {/* Medienauftritte */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Medienauftritte
        </h2>
        <div className="space-y-8">
          {Object.entries(mediaAppearances)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, appearances]) => (
            <div key={year}>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                {year}
              </h3>
              <div className="flex flex-col space-y-0">
                <AnimatedBackground
                  enableHover
                  className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                  transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                  }}
                >
                  {appearances.map((appearance, index) => (
                    <a
                      key={index}
                      className="relative inline-flex -mx-3 rounded-xl px-3 py-3 group"
                      href={appearance.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-id={`media-${year}-${index}`}
                    >
                      <div className="z-10">
                        <div className="flex flex-col space-y-1">
                          <h3 className="font-normal dark:text-zinc-100 inline-flex items-center gap-2">
                            {appearance.title}
                            <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          </h3>
                          <p className="text-zinc-500 dark:text-zinc-400">
                            {appearance.outlet} • {appearance.date}
                          </p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            {appearance.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </AnimatedBackground>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Themenschwerpunkte */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Themenschwerpunkte
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Über folgende Themen spreche ich gerne und stehe für Interviews und Expertengespräche zur Verfügung:
        </p>
        <div className="space-y-6">
          {topics.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                {category.category}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <span className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rounded-full mr-3 flex-shrink-0"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bildmaterial */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Bildmaterial
        </h2>
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Professionelle Fotos und Logo-Materialien sind auf Anfrage verfügbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                Porträtfotos
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Hochauflösende Porträtfotos in verschiedenen Formaten
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                Logo-Materialien
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Logos von Finanzwissen GmbH und Bitcoin2Go GmbH
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Button */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-center"
      >
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Für Interviews, Expertengespräche oder weitere Informationen stehe ich gerne zur Verfügung.
          </p>
          <a
            href="mailto:daniel@bitcoin-2go.de"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            daniel@bitcoin-2go.de
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}
