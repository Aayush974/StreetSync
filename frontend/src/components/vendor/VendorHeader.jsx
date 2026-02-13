import { useAuthStore } from "../../zustand/user.store";

export const VendorHeader = () => {
  const user = useAuthStore((state) => state.user);
  console.log(user)
  if (!user) return null;

  return (
    <div className="navbar bg-base-200 shadow-md px-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">
          {user.name}'s Profile
        </h1>
      </div>
    </div>
  );
};
