import "./App.css";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import { OverviewCard } from "./features/dashboard/components/OverviewCard";
import { SalesChart } from "./features/dashboard/components/SalesChart";
import UsersIcon from "./assets/usersOverview.svg";
import ListingsIcon from "./assets/listingsOverview.svg";
import { PropertyCard } from "./features/dashboard/components/PropertyCard";
import PropertyImg from "./assets/img.png"


function App() {
  const listingStats = [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ];

  const userStats = [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-10">
      <Header />
      <Navbar />

      <main className="w-full px-[78px] py-[24px]">
        <h1 className="text-[#191919] text-[20px] font-semibold mb-[24px]">
          Welcome, Ahmed
        </h1>

        <div className="grid grid-cols-12 gap-[24px] mb-[24px]">
          <div className="col-span-8">
            <SalesChart />
          </div>

          {/* Right Section: Overviews (4 columns total) */}
          <div className="col-span-4 flex flex-col gap-[20px]">
            <OverviewCard
              title="Listings Overview"
              icon={ListingsIcon}
              stats={listingStats}
            />
            <OverviewCard
              title="Users Overview"
              icon={UsersIcon}
              stats={userStats}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          <PropertyCard
            tag="MOST CLICKED"
            title="Urban Prime Plaza Premiere"
            image={PropertyImg}
          />
          <PropertyCard
            tag="MOST WATCHLISTED"
            title="Urban Prime Plaza Premiere"
            image={PropertyImg}
          />
          <PropertyCard
            tag="HOTTEST LISTING"
            title="Urban Prime Plaza Premiere"
            image={PropertyImg}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
