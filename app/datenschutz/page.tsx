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

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>
      </motion.section>

      {/* Content */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="prose prose-zinc dark:prose-invert max-w-none"
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              1. Verantwortlicher
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
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
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              2. Hosting & Content Delivery (Vercel)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Diese Website wird bei Vercel gehostet und über ein globales Content-Delivery-Network (CDN) ausgeliefert. Anbieter ist Vercel Inc., USA, ggf. mit verbundenen Unternehmen/Unterauftragsverarbeitern in der EU/EWR.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Im Rahmen der Bereitstellung verarbeitet Vercel insbesondere:
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 mb-4">
              <li>Server- und Edge-Logdaten (siehe Abschnitt 3),</li>
              <li>technische Meta-/Kommunikationsdaten (z. B. IP-Adresse, Zeitstempel, angefragte URL, HTTP-Status),</li>
              <li>sicherheitsrelevante Ereignisse (z. B. DDoS-Schutz, Fehlermeldungen).</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Zwecke:</strong> Betrieb, Auslieferung und Sicherheit der Website, Lastverteilung, Fehlerdiagnose, Missbrauchs-/Angriffserkennung.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung der Website).
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Empfänger:</strong> Vercel als Auftragsverarbeiter gem. Art. 28 DSGVO.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong>Drittländerübermittlung:</strong> Eine Übermittlung in Drittländer (insb. USA) kann stattfinden. Diese erfolgt auf Basis geeigneter Garantien i. S. v. Art. 46 DSGVO, insbesondere Standardvertragsklauseln (SCC). Soweit der Anbieter für das EU.U.S. Data Privacy Framework zertifiziert ist, stützt sich die Übermittlung ergänzend hierauf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              3. Server-Logfiles
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Beim Aufrufen der Website protokolliert der Hosting-/CDN-Anbieter automatisch folgende Daten:
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 mb-4">
              <li>IP-Adresse des anfragenden Geräts,</li>
              <li>Datum und Uhrzeit der Anfrage,</li>
              <li>Zeitzonendifferenz zur GMT,</li>
              <li>aufgerufene URL/Request-Zeile und ggf. Referrer-URL,</li>
              <li>HTTP-Statuscode, übertragene Datenmenge,</li>
              <li>User-Agent (Browser, Betriebssystem, Gerätetyp),</li>
              <li>ggf. Fehler-/Diagnose-IDs.</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Zwecke:</strong> Technische Bereitstellung, Stabilität, Sicherheit (z. B. Abwehr von Angriffen), Fehleranalyse.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong>Speicherdauer:</strong> Die Logdaten werden bis zu 30 Tage gespeichert und danach gelöscht; im Fall von sicherheitsrelevanten Ereignissen kann eine längere Speicherung zu Beweiszwecken erfolgen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              4. Cookies, Local Storage & ähnliche Technologien
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Diese Website verwendet keine zustimmungspflichtigen Tracking- oder Marketing-Cookies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Sofern einzelne, technisch notwendige Cookies oder gleichartige lokale Speichertechniken (z. B. Local Storage) zum Betrieb der Seite erforderlich sind, dienen sie ausschließlich der Funktionsfähigkeit (z. B. Session-Management, Sicherheit).
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong>Rechtsgrundlage:</strong> § 25 Abs. 2 Nr. 2 TTDSG i. V. m. Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              5. Kontaktaufnahme per E-Mail
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Bei einer Kontaktaufnahme per E-Mail verarbeiten wir Ihre Angaben (z. B. E-Mail-Adresse, Inhalt, Signaturdaten), um Ihr Anliegen zu bearbeiten.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 mb-4">
              <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation), oder</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong>Speicherdauer:</strong> Korrespondenz wird nach abschließender Bearbeitung und ggf. unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              6. Newsletter
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Wir versenden keine Newsletter und übermitteln hierfür keine Daten an Newsletter-Dienstleister.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              7. Webanalyse, Tracking, Werbenetzwerke
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Es werden keine Webanalyse- oder Tracking-Dienste eingesetzt (z. B. kein Google Analytics, keine Matomo-Instanz). Es findet kein Profiling und kein nutzerbasiertes Marketing statt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              8. Eingebettete Drittinhalte / Externe Dienste
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Auf der Website sind derzeit keine externen Inhalte oder Widgets (z. B. YouTube-Videos, Social-Media-Plugins, Karten-Dienste) eingebunden, die beim Aufruf Daten an Dritte übermitteln würden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              9. Schriftarten (Fonts)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Schriftarten werden lokal gehostet und von unseren Servern ausgeliefert. Eine Verbindung zu Drittanbietern (z. B. Google Fonts) findet dabei nicht statt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              10. Nutzerkonten, Kommentare, Formulare
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Es gibt keine Registrierungsmöglichkeit, Nutzerkonten, Kommentar- oder sonstige Eingabeformulare auf dieser Website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              11. Pflicht zur Bereitstellung von Daten
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Die Bereitstellung Ihrer Daten ist für den bloßen Besuch der Website nicht gesetzlich oder vertraglich vorgeschrieben; ohne die Verarbeitung technisch notwendiger Daten (insb. IP-Adresse) ist eine Auslieferung der Website jedoch nicht möglich.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              12. Automatisierte Entscheidungen / Profiling
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO statt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              13. Datensicherheit
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Wir treffen technische und organisatorische Maßnahmen (z. B. TLS-Verschlüsselung, Zugriffsbeschränkungen, Protokollierung), um Ihre Daten nach dem Stand der Technik zu schützen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              14. Ihre Rechte
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Sie haben im Rahmen der DSGVO folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2 mb-4">
              <li>Auskunft (Art. 15 DSGVO),</li>
              <li>Berichtigung (Art. 16 DSGVO),</li>
              <li>Löschung (Art. 17 DSGVO),</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO).</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sie haben zudem das Recht, Beschwerde bei einer Datenschutz-Aufsichtsbehörde einzulegen (Art. 77 DSGVO), insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              15. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Wir passen diese Datenschutzerklärung an, sobald Änderungen an unserer Datenverarbeitung dies erforderlich machen. Die jeweils aktuelle Fassung ist hier abrufbar.
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
