import type { PageContextBuiltIn } from "vite-plugin-ssr"
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client"

interface PageProps {}
type Page = (pageProps: PageProps) => JSX.Element

interface PageContextCustom {
  Page: Page
  pageProps?: PageProps
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export type {
  PageProps,
  PageContextClient,
  PageContextServer,
  PageContext,
}
