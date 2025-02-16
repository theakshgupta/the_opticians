import WishlistSidebar from "./Sidebars/WishlistSidebar";
import UserSidebar from "./Sidebars/UserSidebar";
import BagSidebar from "./Sidebars/BagSidebar";

const NavIcons = () => {
  return (
    <div className="flex gap-2 relative">
      <WishlistSidebar />
      <UserSidebar />
      <BagSidebar />
    </div>
  );
};

export default NavIcons;
