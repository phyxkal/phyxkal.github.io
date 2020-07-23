import React from "react"
import Intent from "./link"

export default function Appbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item mx-4">
          <Intent to="./phyxkal.github.io">Home</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="./phyxkal.github.io/projects">Projects</Intent>
        </li>
      </ul>
    </div>
  )
}
