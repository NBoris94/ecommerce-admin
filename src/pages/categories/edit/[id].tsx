import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import UpdateCategory from "@/components/pages/Categories/UpdateCategory"

const UpdateCategoryPage = () => {
  return (
    <>
      <Head>
        <title>Редактирование категории - Ecommerce Devorum Dashboard</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mb-3">Редактирование категории</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <UpdateCategory />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default UpdateCategoryPage
