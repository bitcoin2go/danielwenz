'use client'
import { motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Navigation } from './navigation'
import {
  PROJECTS,
  EDUCATION,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

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


function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      <motion.section
        id="ueber-mich"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Founder von Bitcoin2Go und Co-Founder der Finanzwissen GmbH, die 2026 mehrheitlich an die Börsenmedien AG verkauft wurde.
            Spezialist für Kryptowährungsmärkte, Finanzanalysen und -bildung.
            Master-Absolvent in Wirtschaftsingenieurwesen am KIT mit Note 1,0.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Privat lebe ich in Deutschland und in Luang Prabang, Laos. Ich bin leidenschaftlicher Gravel-Bikepacker,
            unter anderem auf der Trans Dinarica und dem EuroVelo 13, und sportlich aktiv, zum Beispiel beim Paddeln.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="unternehmen"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Meine Unternehmen</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-w-[240px] w-full h-[200px] overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 transition-all duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950 p-4">
                <div className="flex flex-col gap-1 h-full">
                  <div className="flex items-center max-w-max pr-2.5">
                    <h3 className="text-lg font-medium m-0 w-max whitespace-nowrap overflow-hidden text-ellipsis flex-1 mr-2 text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 m-0 text-pretty flex-1">
                    {project.description}
                  </div>
                </div>
                <img
                  alt={`Logo und Screenshot von ${project.name} - ${project.description}`}
                  loading="lazy"
                  width="300"
                  height="100"
                  className="absolute top-[110px] -right-10 rotate-[-5deg] border border-solid border-gray-300 dark:border-zinc-700 rounded-md transition-transform duration-100 ease-out group-hover:-rotate-3 group-hover:-translate-y-1 group-hover:-translate-x-0.5 max-h-16 max-w-32 object-contain filter grayscale group-hover:grayscale-0"
                  style={{ boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' }}
                  src={project.image}
                />
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="bildung"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Bildung</h2>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((education) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={education.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950 p-4">
                <div className="relative flex w-full flex-row justify-between">
                  <div className="flex-1">
                    <h3 className="font-normal dark:text-zinc-100 mb-1">
                      {education.degree}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-2">
                      {education.institution}
                    </p>
                    {education.grade && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                        <strong>Note:</strong> {education.grade}
                      </p>
                    )}
                    {education.thesis && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        <strong>Thesis:</strong> {education.thesis}
                      </p>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 ml-4">
                    {education.start} - {education.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="medienauftritte"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium">Medienauftritte</h2>
          <Link 
            href="/presse" 
            className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
          >
            Alle ansehen
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
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
            {BLOG_POSTS.map((post) => (
              <a
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3 group"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h3 className="font-normal dark:text-zinc-100 inline-flex items-center gap-2">
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        id="kontakt"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Kontakt</h2>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Kontaktiere mich gerne unter{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
