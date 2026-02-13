import { useAuthStore } from "../../zustand/user.store";

export const UDashboard = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  // Temporary mock vendors
  const nearbyVendors = [
    {
      _id: "1",
      stallName: "Chai Junction",
      city: "Lucknow",
      rating: 0,
    },
    {
      _id: "2",
      stallName: "Vada Pav Express",
      city: "Lucknow",
      rating: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Search Section */}
        <div className="card bg-base-200 shadow">
          <div className="card-body items-center text-center">
            <h2 className="card-title justify-center">Search Vendors</h2>

            <div className="flex gap-4 flex-wrap justify-center w-full mt-4">
              <input
                type="text"
                placeholder="Search by stall name..."
                className="input input-bordered w-full md:w-1/2"
              />

              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        {/* Nearby Vendors Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Vendors Near You</h2>

          {nearbyVendors.length === 0 ? (
            <p className="opacity-70">No vendors available in your area yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyVendors.map((vendor) => (
                <div
                  key={vendor._id}
                  className="card bg-base-200 shadow hover:shadow-lg transition"
                >
                  <div className="card-body">
                    <h3 className="card-title">{vendor.stallName}</h3>

                    <p className="text-sm opacity-70">{vendor.city}</p>

                    {/* Rating */}
                    <div className="rating rating-sm mt-2">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          className="mask mask-star"
                          disabled
                        />
                      ))}
                    </div>

                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-outline btn-sm">
                        View Stall
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
