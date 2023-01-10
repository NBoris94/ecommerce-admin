import TabsContent from "@/components/ui/Tabs/TabsContent"

type TabsProps = {

}

const Tabs = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <TabsContent />
    </>
  )
}

export default Tabs
