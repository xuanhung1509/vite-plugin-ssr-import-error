import React, { createContext, useContext } from "react"
import { PageContext as PageContextValue } from "./types"

const PageContext = createContext<PageContextValue | null>(null)

interface PageProviderProps {
  pageContext: PageContextValue
  children: React.ReactNode
}

function PageProvider({ pageContext, children }: PageProviderProps) {
  return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
}

const usePageContext = () => useContext(PageContext)

export { PageProvider, usePageContext }
