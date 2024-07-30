import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import TableComponent from "../../components/widgets/TableComponent";
import TileComponent from "../../components/widgets/TileComponent";
import { useGetDashboardQuery } from "../../redux/services/dashboard";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import GraphComponent from "../../components/widgets/GraphComponent";
import ErrorSection from "../../components/sections/ErrorSection";

export default function DashboardView({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const { data, isFetching, error } = useGetDashboardQuery();

  const labels = ["Products", "Categories", "Users", "Collections"];

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isFetching) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorSection/>
  }

  return data != null && data.msg === "success" ? (
    <>
      <div className="my-3 mb-10">
        <h2 className="text-xl font-bold mb-10">Analytic Report</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <TileComponent title={"Banners"} data={data.response.bannerTotal} />
          <TileComponent
            title={"Categories"}
            data={data.response.categoryTotal}
          />
          <TileComponent
            title={"Collections"}
            data={data.response.collectionTotal}
          />
          <TileComponent title={"Products"} data={data.response.productTotal} />
          <TileComponent title={"Users"} data={data.response.userTotal} />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-10">Users Report</h2>
        <TableComponent tableData={data.response.userRegistered} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-10">Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GraphComponent dataLabels={labels} />
          <GraphComponent dataLabels={labels} />
          <GraphComponent dataLabels={labels} />
          <GraphComponent dataLabels={labels} />
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
