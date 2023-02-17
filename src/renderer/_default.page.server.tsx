import ReactDOMServer from "react-dom/server"
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr"
import PageShell from "./PageShell"
import { PageContextServer } from "./types"

const render = (pageContext: PageContextServer) => {
  let pageHtml
  const { Page } = pageContext

  if (!Page) {
    // SPA
    pageHtml = ""
  } else {
    // SSR
    pageHtml = ReactDOMServer.renderToString(
      <PageShell>
        <Page />
      </PageShell>
    )
  }

  const { documentProps } = pageContext.exports
  const title = documentProps?.title || "Vite App"
  const description =
    documentProps?.description || "Description here"

  return escapeInject`<!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id='react-container'>${dangerouslySkipEscape(pageHtml)}</div>
      </body>  
    </html>
  
  `
}

export { render }
