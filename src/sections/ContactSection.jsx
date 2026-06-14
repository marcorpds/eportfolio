export default function ContactSection() {
  return (
    <section className="contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="contact-icon">@</div>
      <div>
        <p className="eyebrow">Let's Connect</p>
        <h2 id="contact-title">Open to new opportunities and collaborations.</h2>
      </div>
      <div className="contact-actions">
        <a className="button button--primary" href="mailto:marco@example.com">Contact</a>
        <a className="button" href="#about">Download CV</a>
      </div>
    </section>
  );
}
