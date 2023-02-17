import ReactDOM from "react-dom/client"
import PageShell from "./PageShell"
import { PageContextClient } from "./types"

let root: ReactDOM.Root

const render = async (pageContext: PageContextClient) => {
  const { Page, isHydration } = pageContext
  const container = document.getElementById("react-container") as HTMLElement
  const page = (
    <PageShell>
      <Page />
    </PageShell>
  )

  if (container.innerHTML === "" || !isHydration) {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  } else {
    root = ReactDOM.hydrateRoot(container, page)
  }
}

export { render }
