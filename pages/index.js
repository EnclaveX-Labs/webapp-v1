import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/Section'

const projects = [
  ['EnclaveX', 'Privacy-preserving infrastructure for teams building safer systems.'],
  ['Research notes', 'Short technical writeups on security, identity, and usable privacy.'],
  ['Open tooling', 'Small, inspectable utilities that help builders ship with fewer trust leaks.'],
]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>EnclaveX Labs — Privacy, security, and open research</title>
        <meta name="description" content="EnclaveX Labs builds privacy-first systems, open tooling, and practical security research." />
      </Head>

      <Hero />

      <main>
        <Section eyebrow="01 / Recently" title="Building privacy-first infrastructure for people who cannot afford leaky systems.">
          <div className="split">
            <p>EnclaveX Labs is an independent research and engineering group working on usable security, private computation, and open infrastructure.</p>
            <p>We care about systems that are legible, resilient, and boring enough to trust. Research becomes code. Code stays inspectable. The user keeps control.</p>
          </div>
        </Section>

        <Section eyebrow="02 / Work" title="Selected work.">
          <div className="work-list">
            {projects.map(([name, summary]) => (
              <a href="https://github.com/EnclaveX-Labs" key={name}>
                <span>{name}</span>
                <em>{summary}</em>
              </a>
            ))}
          </div>
        </Section>

        <Section eyebrow="03 / Method" title="Small surface area. Sharp guarantees.">
          <dl className="facts">
            <div><dt>What</dt><dd>Privacy engineering</dd></div>
            <div><dt>How</dt><dd>Research → prototypes → open code</dd></div>
            <div><dt>Where</dt><dd>Remote, internet-native</dd></div>
            <div><dt>Status</dt><dd>Shipping in public</dd></div>
          </dl>
        </Section>

        <Section eyebrow="04 / Reach" title="Everything public lives on GitHub.">
          <p className="contact-copy">For collaboration, issues, or early access, start with the organization profile.</p>
          <a className="text-link" href="https://github.com/EnclaveX-Labs">github.com/EnclaveX-Labs</a>
        </Section>
      </main>
    </Layout>
  )
}
