import React from "react"

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>{children}</React.StrictMode>
  )
}

export default PageShell
