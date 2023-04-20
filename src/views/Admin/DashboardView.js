import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import TableComponent from "../../components/widgets/TableComponent";
import CardComponent from "../../components/widgets/CardComponent";
import GraphComponent from "../../components/widgets/GraphComponent";

export default function DashboardView({ pageTitle }) {
  const [setTitle] = useOutletContext();

  useEffect(() => {
    setTitle(pageTitle);
   
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
