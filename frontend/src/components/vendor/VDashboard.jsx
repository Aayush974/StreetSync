import { useAuthStore } from "../../zustand/user.store";

export const VDashboard = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-base-100">

      {/* Header */}
      <div className="navbar bg-base-200 shadow-md px-6">
        <h1 className="text-2xl font-bold">
          {user.stallName}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">

        {/* Basic Info Section */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Owner</h2>
              <p>{user.name}</p>
              <p className="text-sm opacity-70">{user.email}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Location</h2>
              <p>{user.address.country}</p>
              <p>{user.address.state}</p>
              <p>{user.address.city}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Joined</h2>
              <p>
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

        </div>

        {/* Menu Section */}
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Menu</h2>

            {user.menu.length === 0 ? (
              <p className="opacity-70">No items added yet.</p>
            ) : (
              <div className="space-y-2">
                {user.menu.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{item.itemName}</span>
                    <span className="font-semibold">₹{item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Quick Actions</h2>

            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                Update Location
              </button>

              <button className="btn btn-secondary">
                Modify Menu
              </button>

              <button className="btn btn-accent">
                View Menu
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer - Reviews */}
      <footer className="bg-base-200 py-6 mt-8">
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-lg">Customer Reviews</h3>

          <div className="rating rating-lg">
            <input type="radio" className="mask mask-star" disabled />
            <input type="radio" className="mask mask-star" disabled />
            <input type="radio" className="mask mask-star" disabled />
            <input type="radio" className="mask mask-star" disabled />
            <input type="radio" className="mask mask-star" disabled />
          </div>

          <p className="text-sm opacity-70">
            0 Reviews Yet
          </p>
        </div>
      </footer>

    </div>
  );
};
