import {FC, ReactNode} from "react"
import Navigation from "@/components/Layout/Navigation"
import Header from "@/components/Layout/Header";

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
