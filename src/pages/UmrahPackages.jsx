export default function UmrahPackages() {
  return (
    <main className="umrah-listing-page" aria-label="Umrah package listings">
      <iframe
        src="https://www.goimomi.com/holidays?category=Umrah"
        title="Goimomi Umrah package listings"
        className="umrah-listing-frame"
        sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </main>
  )
}
