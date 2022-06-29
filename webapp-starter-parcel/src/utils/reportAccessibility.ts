import React from 'react'
import ReactDOM from 'react-dom'

type TypeOfReact = typeof React
type TypeOfReactDOM = typeof ReactDOM

const reportAccessibility = async (
  React: TypeOfReact,
  ReactDOM: TypeOfReactDOM
): Promise<void> => {
  if (process.env.NODE_ENV !== 'production') {
    // axe.default is not a function -> parcel struggles with dynamic imports
    // https://parceljs.org/features/code-splitting/#using-dynamic-imports
    // const axe = await import('@axe-core/react')
    // axe.default(React, ReactDOM, 1000)
  }
}

export default reportAccessibility
