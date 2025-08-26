import React from "react";
import ColumnResize from "react-table-column-resizer";

function App() {
  const Columns = [
    { id: 1, field: "sr" },
    { id: 2, field: "disabled" },
    { id: 3, field: "minWidth1" },
    { id: 4, field: "minWidth2" },
    { id: 5, field: "minWidth3" },
  ];

  const Rows = Array.from({ length: 100 }).map((_, i) => {
    return {
      sr: i + 1,
      disabled: i < 2,
      minWidth1: Math.random() * 2,
      minWidth2: Math.random() * 2,
      minWidth3: Math.random() * 2,
    };
  });
  return (
    <div>
      <table>
        <thead
          style={{
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          <tr>
            {Columns?.map((val,i)=>{
              return <>
               <th>{val?.field}</th>
            <ColumnResize
              id={val?.id}
              resizeEnd={(width) => console.log("resize end", width)}
              resizeStart={() => console.log("resize start")}
              className="columnResizer"
            />
              </>
            })}
            {/* <th>1</th>
            <ColumnResize
              id={1}
              resizeEnd={(width) => console.log("resize end", width)}
              resizeStart={() => console.log("resize start")}
              className="columnResizer"
            />
            <th>disabled</th>
            <ColumnResize
              id={2}
              className="columnResizer"
              minWidth={120}
              disabled
            />
            <th>3</th>
            <ColumnResize
              id={3}
              resizeEnd={(width) => console.log("resize end", width)}
              resizeStart={() => console.log("resize start")}
              className="columnResizer"
            />
            <th>minWidth 120 </th>
            <ColumnResize id={4} minWidth={120} className="columnResizer" />
            <th>5</th> */}
          </tr>
        </thead>
        <tbody>
       {Rows?.map((val,i)=>{
         return <tr>
            <td>{val?.sr}</td>
            <td className="column_resizer_body" />
            <td>{val?.disabled}</td>
            <td className="column_resizer_body" />
            <td>{val?.minWidth1}</td>
            <td className="column_resizer_body" />
            <td>{val?.minWidth2}</td>
            <td className="column_resizer_body" />
            <td>{val?.minWidth3}</td>
          </tr>
       })}
         
        </tbody>
      </table>
      <p style={{ marginTop: 50 ,position:'fixed',bottom:0 }}>
        NOTE: The icon in the table for resize is added only for demo from the
        CSS, You can either add this icon or udjust it with your usecase
      </p>
    </div>
  );
}

export default App;
