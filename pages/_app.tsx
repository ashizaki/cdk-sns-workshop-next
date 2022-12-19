import "../styles/globals.css"
import { Amplify } from "aws-amplify"
import type { AppProps } from "next/app"

import config from "../aws-config"
import { Authenticator } from "@aws-amplify/ui-react"

Amplify.configure(config)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  )
}
