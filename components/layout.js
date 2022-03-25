import CommandPalette from "./commandPalette"
import data from "../data/countriesdata.json"

const Layout = ({ children }) => {
  return (
    <div>
      <CommandPalette countries={data} />
      {children}
    </div>
  )
}

export default Layout