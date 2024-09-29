export default function Header() {
  return(
      <header className="text-center mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4">Mining Dashboard</h2>
        <div className="mx-auto w-full">
          <progress className="progress1" value="30" max="100" />
        </div>
      </header>
    )
}