const SidebarItem = ({ icon, title, active, onClick, expanded }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 ${
        active ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'
      }`}
    > 
      {icon}
      {expanded && <span>{title}</span>}  
    </button>
  );
  
  export default SidebarItem