'use client'
import { motion } from 'motion/react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
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

export default function ImpressumPage() {
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
         Impressum
       </h1>
     </motion.section>


      {/* Content */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="prose prose-zinc dark:prose-invert max-w-none"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Diese Website wird betrieben von:
            </p>
            <div className="mt-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                Daniel Wenz
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Albert-Schweitzer-Str. 41<br />
                76676 Graben-Neudorf<br />
                Deutschland
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                E-Mail: daniel@bitcoin-2go.de
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV         
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Daniel Wenz
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Haftungsausschluss
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Haftung für Links
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Urheberrecht
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Datenschutz
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              Weitere Informationen finden Sie in unserer{' '}
              <Link 
                href="/datenschutz" 
                className="text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Datenschutzerklärung
              </Link>.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Letzte Aktualisierung: 2025
            </p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
