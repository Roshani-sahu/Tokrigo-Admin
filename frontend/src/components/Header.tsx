const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search anything..."
        className="hidden md:block w-72 px-4 py-2 border rounded-lg text-sm"
      />

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">App Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
