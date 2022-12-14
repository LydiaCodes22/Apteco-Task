import "../styles/App.css";
import React from "react";
import DataTable from "./DataTable";

const startingData = {
  title: null,
  notes: null,
  ranSuccessfully: null,
  systemName: null,
  systemLoadDate: "2021-07-07T15:03:02",
  userName: null,
  runDate: null,
  queryDescription: null,
  dimensionResults: [
    {
      id: "dimension-1",
      headerCodes:
        " !\t04\t23\t05\t06\t07\t08\t09\t13\t24\t29\t10\t38\t12\t16\t14\t21\t25\t27\t28\tiTOTAL",
      headerDescriptions:
        "Unclassified\tAustralia\tNew Zealand\tDenmark\tFrance\tGermany\tGreece\tItaly\tLatvia\tPortugal\tSweden\tJamaica\tUnited States\tKuwait\tMongolia\tMali\tNamibia\tSenegal\tSierra Leone\tSouth Africa\tiTOTAL",
    },
    {
      id: "dimension-2",
      headerCodes: "0000\t2018\t2019\t2020\t2021\t2022\t2023\tiTOTAL",
      headerDescriptions:
        "Unclassified\t2018\t2019\t2020\t2021\t2022\t2023\tiTOTAL",
    },
  ],
  measureResults: [
    {
      id: "measure-1",
      rows: [
        "0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0",
        "6697\t28001\t93\t158\t51822\t24702\t10995\t2665\t62\t2187\t2457\t19\t30436\t2356\t24\t103\t241\t85\t465\t87\t125238",
        "7904\t32043\t108\t168\t60101\t30059\t12771\t3191\t67\t2471\t2911\t14\t36561\t2745\t17\t122\t250\t99\t612\t119\t151455",
        "16108\t66702\t224\t352\t125551\t60345\t26639\t6553\t147\t5049\t6116\t41\t75735\t5512\t38\t214\t536\t184\t1078\t207\t311775",
        "11045\t45946\t113\t242\t85783\t54356\t18346\t5023\t97\t3531\t4110\t32\t62853\t3893\t15\t135\t381\t167\t787\t164\t255218",
        "12946\t53780\t178\t298\t102409\t63754\t21540\t5937\t89\t4143\t4927\t38\t72556\t4534\t32\t209\t465\t146\t936\t199\t297910",
        "12312\t51162\t158\t284\t97846\t62683\t20155\t5861\t112\t3995\t4670\t34\t71055\t4396\t28\t187\t426\t158\t902\t178\t290359",
        "67012\t274857\t870\t1497\t522932\t214163\t109564\t25958\t551\t21230\t25175\t178\t273879\t23388\t154\t968\t2276\t777\t4778\t954\t1156553",
      ],
      cells: [],
    },
  ],
  cube: null,
  counts: [
    {
      tableName: "People",
      countValue: 1156553,
    },
  ],
};
const columnTitles =
  startingData.dimensionResults[0].headerDescriptions.split("\t");
const rowTitles =
  startingData.dimensionResults[1].headerDescriptions.split("\t");
const data = startingData.measureResults[0].rows.map((item) => {
  const secondaryArray = item.split("\t");
  return secondaryArray;
});

const App = () => {
  return (
    <div>
      <h1>Apteco task</h1>
      <DataTable
        columnTitles={columnTitles}
        rowTitles={rowTitles}
        data={data}
      />
    </div>
  );
};

export default App;
