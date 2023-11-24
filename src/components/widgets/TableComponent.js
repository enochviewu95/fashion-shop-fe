import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function TableComponent({ tableData }) {
  const { tableBackground, borderColor } = useContext(ThemeContext);

  return (
    <div className="mb-5">
      <div className="overflow-y-scroll h-72 px-5">
        <table className="table-auto w-full h-10 border-separate border-spacing-x-0 border-spacing-y-2 divide-y divide-gray-200 rounded-lg">
          <thead className={`${tableBackground}`}>
            <tr>
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Firstname
              </th>
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lastname
              </th>
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Provider
              </th>
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className={`${tableBackground} divide-y divide-gray-200`}>
            {tableData.map((data) => {
              return (
                <tr key={data._id} className="rounded-t-lg">
                  <td className="px-6 py-3 whitespace-nowrap">
                    {data.firstname}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {data.lastname}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">{data.role}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{data.provider}</td>
                  <td className="px-6 py-3 whitespace-nowrap">{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
