import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import TableComponent from "../../components/widgets/TableComponent";
import CardComponent from "../../components/widgets/CardComponent";
import GraphComponent from "../../components/widgets/GraphComponent";
import Banner from "../../models/banner";

export default function DashboardView({ pageTitle }) {
  const [setTitle] = useOutletContext();

  useEffect(() => {
    setTitle(pageTitle);
    Banner.getBanner("admin/api/get-banners")
      .then((response) => {
        console.log("My response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageTitle, setTitle]);

  return (
    <>
      <CardComponent>
        <TableComponent />
      </CardComponent>
      <div className="grid grid-cols-2 gap-6">
        <CardComponent>
          <TableComponent />
        </CardComponent>
        <CardComponent>
          <GraphComponent />
        </CardComponent>
      </div>
    </>
  );
}
