import {FiCalendar} from 'react-icons/fi';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-teal h-16 border-b border-b-white flex justify-between items-center text-white px-4">
      <div className="w-48 text-left">
        <p className="text-xl font-semibold">WSAF <span className="text-yellow">2025</span></p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-8 font-semibold uppercase">
            <li>Perform or Exhibit</li>
            <li>Join the Crew</li>
          </ul>
        </nav>
      </div>
      <div className="w-48 text-right">
        <a href="https://submit.wsaf.org.uk/2025/cfp" target="_blank" className="inline-flex items-center uppercase font-semibold text-black bg-yellow px-4 py-2 drop-shadow-sm hover:scale-105">
          <FiCalendar className="mr-1" />
          Submit Event
        </a>
      </div>
    </header>
  )
}