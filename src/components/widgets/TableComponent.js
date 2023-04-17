import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext";

function TableComponent() {
  const { borderColor } = useContext(ThemeContext);

  return (
    <div>
      <h3 className="text-3xl font-bold mb-3">Lorem, ipsum.</h3>
      <p className=" mb-5">
        <span className="font-bold">117 total</span> Lorem ipsum dolor sit amet.
      </p>
      <div className="overflow-y-scroll h-72 px-5">
        <table className="table-auto lg:table-fixed w-full h-10">
          <thead>
            <tr className={`border-y-2 ${borderColor} h-14`}>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subscription</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`h-10`}>
              <td>The Sliding Mr. Bones</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
            <tr className={` h-10`}>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>The Eagles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
