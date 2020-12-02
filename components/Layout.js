import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <title>{props.title || "Imagem Filmes"} </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="Content" style={contentStyle}>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;