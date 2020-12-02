import Layout from "../components/Layout";
import Link from 'next/link'

export default function Stars({ data }) {
    console.log('Montando pagina...')
    //console.log(json)
    return (
        <Layout>
            <p>Next stars: {data.stargazers_count} / {data.watchers_count}</p>
            <p>New: {data.id} / {data.node_id}</p>
            <p><Link href="/"><a>Go Home!</a></Link></p>
        </Layout>
    )
}

// Stars.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     //console.log('Carregando dados da API...')
//     console.log(json)
//     return { data: json }
// }

export async function getStaticProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    //console.log('Carregando dados da API...')
    console.log(json)
    return {
        props: {
            data: json
        }
    }
}