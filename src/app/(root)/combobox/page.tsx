import React from "react"
import { ComboboxDemo } from "./components/combobox-demo"
import TooltipDemo from "./components/tooltip-demo"

const Combobox = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ComboboxDemo />
      <TooltipDemo />
    </div>
  )
}

export default Combobox