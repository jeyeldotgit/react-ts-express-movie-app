type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <nav className="bg-gray-900 text-white w-full shadow-md font-russo z-50  right-0">
      <div className="mx-auto flex justify-between items-center px-8 py-4 md:px-10">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-accent-blue">
          MovieGo 🎬
        </a>

        <div className="flex items-center relative w-52 md:w-64">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search movies..."
            className="w-full bg-gray-800 text-white rounded-full py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zM12 6.5A5.5 5.5 0 1 1 1 6.5a5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
