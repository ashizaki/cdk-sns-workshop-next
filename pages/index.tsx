import { Authenticator, translations } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { I18n } from "aws-amplify"
import { NextPage } from "next"

I18n.putVocabularies(translations)
I18n.setLanguage("ja")

const Page: NextPage = () => {
  return (
    <Authenticator signUpAttributes={["email"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username || "unknown"}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default Page
