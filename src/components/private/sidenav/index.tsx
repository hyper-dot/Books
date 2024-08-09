import SideNavContent from "./content";

const SideNav = () => {
  return (
    <aside className="sticky border-r inset-0 hidden h-full min-h-screen bg-secondary px-2 pt-2 md:flex md:min-w-[250px] md:flex-col">
      <SideNavContent />
    </aside>
  );
};

export default SideNav;
