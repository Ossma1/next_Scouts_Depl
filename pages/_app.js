import Footer from '@/component/Footer'
import Search from '@/component/Search'
import SideBar from '@/component/SideBar'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head >
    <link rel="icon" type="image/png" href="assets/images/favicon.png"/>
  {/* <!-- Bootstrap CSS -->*/}
    <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" media="all"/>
    {/*<!-- Fonts Awesome CSS -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/fontawesome/css/all.min.css"/>
    {/*<!-- Elmentkit Icon CSS -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css"/>
  {/*<!-- Fonts Awesome CSS -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/progressbar-fill-visible/css/progressBar.css"/>
  { /*   <!-- jquery-ui css -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/jquery-ui/jquery-ui.min.css"/>
  { /*  <!-- modal video css -->*/}
    <link rel="stylesheet" type="text/css" href="assets/vendors/modal-video/modal-video.min.css"/>
  { /*   <!-- light box css --> */}
    <link rel="stylesheet" type="text/css" href="assets/vendors/fancybox/dist/jquery.fancybox.min.css"/>
  { /*   <!-- slick slider css --> */}
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick-theme.css"/>
  { /* <!-- google fonts -->*/}
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet"/>
    <title>Environ | Environment Charity HTML5 Template</title>
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
