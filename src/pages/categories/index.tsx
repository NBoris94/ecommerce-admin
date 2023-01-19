import {GetServerSideProps} from "next";
import Head from "next/head"
import Link from "next/link"
import Layout from "@/components/Layout/Layout"
import Categories from "@/components/pages/Categories";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {}}
}
const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Список категорий - Ecommerce Devorum Dashboard</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mb-3">Список категорий</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link className="btn btn-primary mb-3" href="/categories/add">Добавить категорию</Link>
              <Categories />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CategoriesPage
