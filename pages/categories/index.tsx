import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import {Button, Col, Container, Row} from "react-bootstrap"
import Categories from "@/components/pages/Categories/Categories"

const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Список категорий - Ecommerce Devorum Dashboard</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Container fluid className="mt-3">
          <Row>
            <Col>
              <h1>Список категорий</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Categories />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default CategoriesPage
