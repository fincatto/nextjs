import Layout from "../components/Layout";
import Link from 'next/link'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

const Index = () =>   
  <Layout>
      <h1>Hello, world!</h1>
      <p>
        <Link href="/user">
          <a>Ir para proximo nivel rapidamente</a>
        </Link>
      </p>
    
      <p>
        <Link href="/stars">
          <a>Estrelas</a>
        </Link>
      </p>
  </Layout>;

export default Index;