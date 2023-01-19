import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import AddCategory from "@/components/pages/Categories/AddCategory"
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {}}
}

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
