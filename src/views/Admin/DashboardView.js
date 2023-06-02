import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import TableComponent from "../../components/widgets/TableComponent";
import CardComponent from "../../components/widgets/CardComponent";
import GraphComponent from "../../components/widgets/GraphComponent";

export default function DashboardView({ pageTitle }) {
  const [setTitle, setLoading] = useOutletContext();

  useEffect(() => {
    setTitle(pageTitle);
    setLoading(false);
  }, [pageTitle, setLoading, setTitle]);

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
