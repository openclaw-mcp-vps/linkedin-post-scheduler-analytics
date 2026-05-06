export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered LinkedIn Scheduling
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Schedule LinkedIn Posts &amp;<br />
          <span className="text-[#58a6ff]">Predict Engagement</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Post at the perfect moment. Our AI analyzes your content and audience activity patterns to maximize reach, impressions, and meaningful engagement on every post.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Scheduling — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📅', title: 'Smart Scheduling', desc: 'Auto-schedule posts when your audience is most active.' },
            { icon: '🤖', title: 'AI Engagement Score', desc: 'Get a predicted engagement score before you publish.' },
            { icon: '📊', title: 'Analytics Dashboard', desc: 'Track impressions, clicks, and follower growth over time.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited scheduled posts',
              'AI engagement prediction',
              'Optimal timing recommendations',
              'Analytics dashboard',
              'LinkedIn API integration',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the engagement prediction work?',
              a: 'Our AI analyzes your post content, hashtags, length, and historical audience activity patterns to generate an engagement score and suggest the best time to publish.'
            },
            {
              q: 'Do I need a LinkedIn Premium account?',
              a: 'No. You only need a standard LinkedIn account. We connect via the official LinkedIn API using OAuth — no credentials are ever stored.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel anytime from your billing portal. You keep access until the end of your billing period with no hidden fees.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} LinkedIn Post Scheduler. All rights reserved.
      </footer>
    </main>
  )
}
