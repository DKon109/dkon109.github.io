// Fixed, full-viewport colorful wash that sits behind all content so the
// sky / purple / pink / lime palette flows through the entire site — not just
// the hero and footer. Purely decorative.
export default function Background() {
  return (
    <div className="site-bg" aria-hidden>
      <div className="site-blob sb-sky" />
      <div className="site-blob sb-purple" />
      <div className="site-blob sb-pink" />
      <div className="site-blob sb-lime" />
      <div className="site-blob sb-sky2" />
    </div>
  )
}
