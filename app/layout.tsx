import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkedIn Post Scheduler & Analytics',
  description: 'Schedule LinkedIn posts at optimal times and predict engagement with AI-powered content analysis.',
  keywords: 'LinkedIn scheduler, post scheduling, engagement prediction, LinkedIn analytics, content marketing',
  openGraph: {
    title: 'LinkedIn Post Scheduler & Analytics',
    description: 'Schedule LinkedIn posts at optimal times and predict engagement with AI-powered content analysis.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="58725a26-b6a2-4ad3-ac35-cfb9736639e2"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
