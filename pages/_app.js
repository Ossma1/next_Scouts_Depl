import Footer from '@/component/Footer'
import SideBar from '@/component/SideBar'
import '@/styles/globals.css'
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head >
    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

    <link rel="icon" type="image/png" href="assets/images/logo.png"/>
  {/* <!-- Bootstrap CSS -->*/}
    <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" media="all"/>
    {/*<!-- Fonts Awesome CSS for media icons  -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/fontawesome/css/all.min.css"/>
    {/*<!-- Elmentkit Icon CSS -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css"/>
  {/*<!-- Fonts Awesome CSS -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/progressbar-fill-visible/css/progressBar.css"/>
  { /*   <!-- jquery-ui css -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/jquery-ui/jquery-ui.min.css"/>
  { /*  <!-- modal video css -->*/}
  { /*   <!-- light box css --> */}
    <link rel="stylesheet" type="text/css" href="assets/vendors/fancybox/dist/jquery.fancybox.min.css"/>
  { /*   <!-- slick slider css --> */}
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick-theme.css"/>
  { /* <!-- google fonts -->*/}

  <link href="assets/css/index-9ce9c63f.css" rel="stylesheet"></link>
    <title>scouts maroc</title>
    
    </Head>
    <style jsx global>{`
  a {
    text-decoration: none;
  }
`}</style>
    <SideBar />
    <Component {...pageProps} />
    <Footer />
   
    </>)}
