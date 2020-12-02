import Layout from "../components/Layout";
import Link from 'next/link'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

const Index = ({ props }) =>   
  <Layout>
      <h1>Hello, world!</h1>
      <h1>{props.title}</h1>
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
  </Layout>


Index.getInitialProps = async (ctx) => {
    console.log('Carregando dados da Home...')
    return { props: { title: 'Vai diabo!' }}
}

export default Index;