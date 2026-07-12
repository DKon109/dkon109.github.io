import type { ReactNode } from 'react'

export default function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-num">{n}</span>
      {children}
    </div>
  )
}
