export default function PageNotFound() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <p className="eyebrow">Page Not Found</p>
      <h1 id="not-found-title">This page does not exist.</h1>
      <p>
        The link may be broken, or the address may have been typed incorrectly.
      </p>
      <div className="not-found-actions">
        <a className="button button--primary" href={import.meta.env.BASE_URL}>Back Home</a>
        <a className="button" href={`${import.meta.env.BASE_URL}#contact`}>Contact</a>
      </div>
    </main>
  );
}
