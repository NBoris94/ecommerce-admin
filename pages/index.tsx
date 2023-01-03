import Head from 'next/head'
import {Col, Container, Row} from "react-bootstrap"
import Layout from "@/components/Layout/Layout"
// import { Inter } from '@next/font/google'
//
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная - Ecommerce Devorum Dashboard</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col>Главная</Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
