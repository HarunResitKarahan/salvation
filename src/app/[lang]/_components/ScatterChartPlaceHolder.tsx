"use client"
import { ScatterChart } from '@ui5/webcomponents-react-charts'
import React from 'react'

export default function ScatterChartPlaceHolder() {
  return (
    <ScatterChart
        dataset={[]}
        measures={[
          {
            accessor: "users",
            axis: "x",
            label: "Users",
          },
          {
            accessor: "sessions",
            axis: "y",
            label: "Sessions",
          },
          {
            accessor: "volume",
            axis: "z",
          },
        ]}
        onClick={function _a() {}}
        onDataPointClick={function _a() {}}
        onLegendClick={function _a() {}}
      />
  )
}
