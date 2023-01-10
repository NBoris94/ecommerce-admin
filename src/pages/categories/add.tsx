import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import Link from "next/link"
import Categories from "@/components/pages/Categories/Categories"
import AddCategory from "@/components/pages/Categories/AddCategory"

const AddCategoryPage = () => {
  return (
    <>
      <Head>
        <title>Добавление категории - Ecommerce Devorum Dashboard</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mb-3">Добавление категории</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AddCategory />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AddCategoryPage
