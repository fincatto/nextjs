import Layout from "../components/Layout";
import Link from 'next/link'

export default function User() {
    return (
        <Layout>
            <h1>Users</h1>
            <p>
               <Link href="/">
                   <a>Inicio rapido</a>
                </Link>
            </p>
        </Layout>
    )
}