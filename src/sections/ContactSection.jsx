export default function ContactSection() {
  return (
    <section className="contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="contact-icon">@</div>
      <div className="contact-copy">
        <h2 className="eyebrow" id="contact-title">Let's Connect</h2>
        <p>Open to new opportunities and collaborations.</p>
      </div>
      <div className="contact-actions">
        <a className="button button--primary" href="mailto:marcoruisilva@gmail.com">Contact</a>
        <a className="button" href={`${import.meta.env.BASE_URL}documents/Marco Silva CV.pdf`}>Download CV</a>
      </div>
    </section>
  );
}
