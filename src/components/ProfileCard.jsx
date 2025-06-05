import { useUserInfo, useLogout } from "@/react-query";

const ProfileCard = () => {
  const { data: userInfo } = useUserInfo();
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <div className="font-serif bg-content-text text-primary px-6 py-10 max-w-md mx-auto shadow-md rounded-xl mb-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Profile</h2>

      <div className="space-y-5 text-sm sm:text-base">
        <div>
          <p className="font-sans text-secondary-text text-xs mb-1">Name</p>
          <p className="">{userInfo?.username || "N/A"}</p>
        </div>
        <div>
          <p className="font-sans text-secondary-text text-xs mb-1">Email</p>
          <p className="">{userInfo?.email || "N/A"}</p>
        </div>
        <div>
          <p className="font-sans text-secondary-text text-xs mb-1">UID</p>
          <p className=" break-all">{userInfo?.uid || "N/A"}</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-primary text-content-text text-sm font-semibold px-6 py-2 rounded-xl border border-primary transition hover:bg-transparent hover:text-primary"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
