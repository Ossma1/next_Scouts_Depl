import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main id="content" class="site-main">
    {/* home banner section html start */}
    <section class="home-banner"  style={{ backgroundImage: 'url(/assets/images/banner-img.jpg)' }}>
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="banner-content text-center">
                   <div class="section-head">
                      <div class="back-title">DONATION</div>
                      <h2 class="section-title banner-title">Make An Impact & Give Back To <span class="primary-color">Nature 
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span></h2>
                   </div>
                   <div class="banner-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, ipsum dolor sit pulvinar dapibus leo ipsum dolor sit.</p>
                   </div>
                   <div class="banner-button">
                      <a style={{textDecoration:"none"}} href="about.html" class="button-round-primary">Learn More</a>
                      <a style={{textDecoration:"none"}} href="donate.html" class="button-round-white">Donate Fund</a>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="overlay"></div>
    </section>
    {/* home service section html end */}
    <section class="service-section">
       <div class="heading-wrap secondary-bg">
          <div class="container">
             <div class="row align-items-center">
                <div class="col-lg-6">
                   <div class="section-head white-section-head">
                      <div class="back-title">INVOLVE NOW</div>
                         <h2 class="section-title">Let's Join To Build The Better World <span class="primary-color">Together 
                            <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                               <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                            </svg>
                         </span>
                      </h2>
                      <div class="section-disc">
                         Odit fugit excepteur eiusmod fames, aliqua odio phasellus aliqua aenean, ratione primis. Nobis molestie adipisicing iaculis vel do, assumenda rutrum? Consequatur unde impedit scelerisque cillum aliqua odio phasellus .
                      </div>
                   </div>
                </div>
                <div class="col-lg-6">
                   <figure class="video-banner">
                      <img src="/assets/images/img1.jpg" alt="" />
                      <div class="video-button">
                         <a style={{textDecoration:"none"}} id="video-container" data-video-id="IUN664s7N-c">
                            <i class="fas fa-play"></i>
                         </a>
                      </div>
                   </figure>
                </div>
             </div>
          </div>
       </div>
       <div class="service-item-inner">
          <div class="container">
             <div class="row">
                <div class="col-sm-6 col-md-3">
                   <div class="service-item">
                      <figure class="service-icon">
                         <img src="/assets/images/icon1.png" alt="" />
                      </figure>
                      <div class="service-content">
                         <h4>Solar Energy</h4>
                         <p>Ad maxime magins nam phasellus lacus nostrud eaque quisque.</p>
                         <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">DONATE NOW</a>
                      </div>
                   </div>
                </div>
                <div class="col-sm-6 col-md-3">
                   <div class="service-item">
                      <figure class="service-icon">
                         <img src="/assets/images/icon2.png" alt="" />
                      </figure>
                      <div class="service-content">
                         <h4>Planting Project</h4>
                         <p>Ad maxime magins nam phasellus lacus nostrud eaque quisque.</p>
                         <a style={{textDecoration:"none"}} href="volunteer.html" class="button-round-primary">JOIN US NOW</a>
                      </div>
                   </div>
                </div>
                <div class="col-sm-6 col-md-3">
                   <div class="service-item">
                      <figure class="service-icon">
                         <img src="/assets/images/icon4.png" alt="" />
                      </figure>
                      <div class="service-content">
                         <h4>Recycle Project</h4>
                         <p>Ad maxime magins nam phasellus lacus nostrud eaque quisque.</p>
                         <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">DONATE NOW</a>
                      </div>
                   </div>
                </div>
                <div class="col-sm-6 col-md-3">
                   <div class="service-item">
                      <figure class="service-icon">
                         <img src="/assets/images/icon3.png" alt="" />
                      </figure>
                      <div class="service-content">
                         <h4>Be A Volunteer</h4>
                         <p>Ad maxime magins nam phasellus lacus nostrud eaque quisque.</p>
                         <a style={{textDecoration:"none"}} href="volunteer.html" class="button-round-primary">JOIN US NOW</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* home about section html start */}
    <section class="about-section">
       <div class="container">
          <div class="row">
             <div class="col-lg-6">
                <div class="section-about-left about-image-wrap d-flex flex-wrap">
                   <div class="home-about-image left-image">
                      <img src="/assets/images/img2.jpg" alt="" />
                   </div>
                   <div class="home-about-image right-image">
                      <img src="/assets/images/img3.jpg" alt="" />
                   </div>
                   <div class="home-about-image bottom-image">
                      <img src="/assets/images/img4.jpg" alt="" />
                   </div>
                </div>
             </div>
             <div class="col-lg-6">
                <div class="section-about-right">
                   <div class="section-about-content">
                      <div class="section-head">
                         <div class="back-title">ABOUT US</div>
                         <h2 class="section-title">We Have Power Today To Change <span class="primary-color">Tomorrow! 
                            <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                               <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                            </svg>
                            </span>
                         </h2>
                         <div class="section-disc">
                            Odit fugit excepteur eiusmod fames, aliqua odio phasellus aliqua aenean, ratione primis. Nobis molestie adipisicing iaculis vel do, assumenda rutrum? Consequatur unde impedit scelerisque cillum aliqua odio phasellus .
                         </div>
                      </div>
                      <div class="about-list">
                         <ul>
                            <li>Praesentium voluptatum dolores, vulputate.</li>
                            <li>Cillum nullam rem volutpat earum.</li>
                            <li>Odio doloribus lacus quaerat assumenda.</li>
                            <li>Natoque, cubilia eos ipsa, vehicula.</li>
                            <li>Cillum nullam rem volutpat earum.</li>
                         </ul>
                         <div class="exp-date">
                            <h3>28</h3>
                            <h4>YEARS</h4>
                            <span class="date-decs">OF EXPERIENCE</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* home progress section html start */}
    <div class="progress-section">
       <div class="container">
          <div class="row">
             <div class="col-md-6">
                <div class="process-count-item secondary-bg">
                   <span class="process-number">
                      1.
                   </span>
                   <div class="process-content">
                      <h4>Recurrring Donation</h4>
                      <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor circum.</p>
                   </div>
                </div>
             </div>
             <div class="col-md-6">
                <div class="process-count-item primary-bg">
                   <span class="process-number">
                      2.
                   </span>
                   <div class="process-content">
                      <h4>Ongoing Circumstance</h4>
                      <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor circum.</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* home charity section html start */}
    <section class="charity-section bg-light-grey">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                   <div class="back-title">POPULAR CAUSES</div>
                      <h2 class="section-title">Checkout Popular <span class="primary-color">Causes
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      Assumenda occaecat cursus iaculis ab non, assumenda natoque aliquid sunt fusce quasi quod unde, ridiculus.
                   </div>
                </div>
             </div>
          </div>
          <div class="charity-inner">
             <div class="row">
                <div class="col-md-4">
                   <article class="charity-item">
                      <figure class="charity-image">
                         <img src="/assets/images/img12.jpg" alt="" />
                         <div class="btn-wrap">
                            <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">DONATE NOW</a>
                         </div>
                      </figure>
                      <div class="charity-content">
                         <h4>Afforestation Program And Fundraising Event</h4>
                         <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                         <div class="progress-wrapper">
                            <div class="ab-progress example" data-progress data-value="82"></div>
                         </div>
                         <div class="fund-detail">
                            <div class="fund-item">
                               <span class="fund-name">GOAL:</span>
                               <span class="fund-content">$1340</span>
                            </div>
                            <div class="fund-item">
                               <span class="fund-name">RAISED:</span>
                               <span class="fund-content">$920</span>
                            </div>
                         </div>
                      </div>
                   </article>
                </div>
                <div class="col-md-4">
                   <article class="charity-item">
                      <figure class="charity-image">
                         <img src="/assets/images/img13.jpg" alt="" />
                         <div class="btn-wrap">
                            <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">DONATE NOW</a>
                         </div>
                      </figure>
                      <div class="charity-content">
                         <h4>One Home - One Solar Panel Awareness Program</h4>
                         <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                         <div class="progress-wrapper">
                            <div class="ab-progress example" data-progress data-value="90"></div>
                         </div>
                         <div class="fund-detail">
                            <div class="fund-item">
                               <span class="fund-name">GOAL:</span>
                               <span class="fund-content">$1340</span>
                            </div>
                            <div class="fund-item">
                               <span class="fund-name">RAISED:</span>
                               <span class="fund-content">$920</span>
                            </div>
                         </div>
                      </div>
                   </article>
                </div>
                <div class="col-md-4">
                   <article class="charity-item">
                      <figure class="charity-image">
                         <img src="/assets/images/img14.jpg" alt="" />
                         <div class="btn-wrap">
                            <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">DONATE NOW</a>
                         </div>
                      </figure>
                      <div class="charity-content">
                         <h4>Protecting the Wild Herb of the Amazon</h4>
                         <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                         <div class="progress-wrapper">
                            <div class="ab-progress example" data-progress data-value="65"></div>
                         </div>
                         <div class="fund-detail">
                            <div class="fund-item">
                               <span class="fund-name">GOAL:</span>
                               <span class="fund-content">$1340</span>
                            </div>
                            <div class="fund-item">
                               <span class="fund-name">RAISED:</span>
                               <span class="fund-content">$920</span>
                            </div>
                         </div>
                      </div>
                   </article>
                </div>
             </div>
             <div class="list-more-btn text-center">
                <a style={{textDecoration:"none"}} href="charity-archive.html" class="button-round-primary">VIEW ALL CAUSES</a>
             </div>
          </div>
       </div>
    </section>
    {/* home contact section html start */}
    <section class="contact-section"  style={{ backgroundImage: 'url(/assets/images/img5.jpg)' }}>
       <div class="container">
          <div class="row align-items-center">
             <div class="col-lg-6">
                <div class="section-head white-section-head">
                   <div class="back-title">ABOUT US</div>
                   <h2 class="section-title">We Have Power Today To Change <span class="primary-color">Tomorrow! 
                      <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                         <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      Odit fugit excepteur eiusmod fames, aliqua odio phasellus aliqua aenean, ratione primis. Nobis molestie adipisicing iaculis vel do, assumenda rutrum? Consequatur unde impedit scelerisque cillum aliqua odio phasellus .
                   </div>
                </div>
                <div class="video-button">
                   <a style={{textDecoration:"none"}} id="video-container-two" data-video-id="IUN664s7N-c">
                      <i class="fas fa-play"></i>
                   </a>
                   <span>PLAY SHORT VIDEO</span>
                </div>
             </div>
             <div class="col-lg-6">
                <div class="home-contact-form">
                   <form class="contact-form row">
                      <div class="col-12 mb-4">
                         <input type="text" class="form-control" placeholder="Enter Name*" />
                      </div>
                      <div class="col-12 mb-4">
                         <input type="email" class="form-control" placeholder="Enter Email*"/>
                      </div>
                      <div class="col-sm-7 mb-4">
                         <input type="number" class="form-control" placeholder="Enter Phone No*"/>
                      </div>
                      <div class="col-sm-5 mb-4">
                         <input type="number" class="form-control" placeholder="Enter Code*"/>
                      </div>
                      <div class="col-12">
                         <button type="submit" class="button-round-secondary">Get Involve Today</button>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
       <div class="overlay"></div>
    </section>
    {/* home event section html start */}
    <section class="event-section secondary-bg">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="section-head white-section-head text-center">
                   <div class="back-title">OUR EVENT</div>
                      <h2 class="section-title">Join Our <span class="primary-color">Events
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      AUt commodo pulvinar veritatis occaecati mauris, tristique tristique turpis pharetra beatae litora donec pharetra, recusandae, volutpat.
                   </div>
                </div>
             </div>
          </div>
          <div class="event-inner">
             <div class="event-item">
                <div class="event-date">
                   <h3>23</h3>
                   <h4>AUG<span>2022</span></h4>
                </div>
                <div class="event-image">
                   <figure>
                      <img src="/assets/images/img11.jpg" alt=""/>
                   </figure>
                </div>
                <div class="event-content">
                   <h4>Afforestation Program And Fundraising Event</h4>
                   <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                </div>
                <div class="event-btn text-right">
                   <a style={{textDecoration:"none"}} href="event-single.html" class="button-round-secondary">ATTEND EVENT</a>
                </div>
             </div>
             <div class="event-item">
                <div class="event-date">
                   <h3>18</h3>
                   <h4>SEP<span>2022</span></h4>
                </div>
                <div class="event-image">
                   <figure>
                      <img src="/assets/images/gallery-img6.jpg" alt=""/>
                   </figure>
                </div>
                <div class="event-content">
                   <h4>Protecting the Wild Animal of the Amazon</h4>
                   <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                </div>
                <div class="event-btn text-right">
                   <a style={{textDecoration:"none"}} href="event-single.html" class="button-round-secondary">ATTEND EVENT</a>
                </div>
             </div>
             <div class="event-item">
                <div class="event-date">
                   <h3>25</h3>
                   <h4>NOV<span>2022</span></h4>
                </div>
                <div class="event-image">
                   <figure>
                      <img src="/assets/images/gallery-img7.jpg" alt="" />
                   </figure>
                </div>
                <div class="event-content">
                   <h4>Cleanliness Event And Awareness Program</h4>
                   <p>Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum volups tatibus sed dolor hymenaeos veh.</p>
                </div>
                <div class="event-btn text-right">
                   <a style={{textDecoration:"none"}} href="event-single.html" class="button-round-secondary">ATTEND EVENT</a>
                </div>
             </div>
          </div>
          <div class="list-more-btn text-center">
             <a style={{textDecoration:"none"}} href="event-archive.html" class="button-round-primary">EXPLORE ALL EVENT</a>
          </div>
       </div>
    </section>
    {/* home gallery section html start */}
    <section class="gallery-section">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                   <div class="back-title">PORTFOLIO</div>
                      <h2 class="section-title">Portfolio <span class="primary-color">Gallery
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      Ut commodo pulvinar veritatis occaecati mauris, tristique tristique turpis pharetra beatae litora donec pharetra, recusandae, volutpat.
                   </div>
                </div>
             </div>
          </div>
          <div class="gallery-inner">
             <div class="gallery-container grid">
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img1.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img1.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img2.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img2.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img3.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img3.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/img2.jpg" data-fancybox="gallery">
                         <img src="/assets/images/img2.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img4.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img4.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img5.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img5.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img6.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img6.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
                <div class="single-gallery grid-item">
                   <figure class="gallery-img">
                      <a style={{textDecoration:"none"}} href="/assets/images/gallery-img7.jpg" data-fancybox="gallery">
                         <img src="/assets/images/gallery-img7.jpg" alt=""/>
                      </a>
                   </figure>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* home client section html start */}
    <section class="client-section">
       <div class="container">
          <h5 class="divider-title">
             <span>PARTNER & SPONSERS</span>
          </h5>
          <div class="client-wrap client-slider text-center">
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo1.png" alt=""/>
                </figure>
             </div>
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo2.png" alt=""/>
                </figure>
             </div>
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo3.png" alt=""/>
                </figure>
             </div>
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo4.png" alt=""/>
                </figure>
             </div>
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo5.png" alt=""/>
                </figure>
             </div>
             <div class="client-item">
                <figure>
                   <img src="/assets/images/logo2.png" alt=""/>
                </figure>
             </div>
          </div>
       </div>
    </section>
    {/* home fact section html start */}
    <section class="fact-section" style={{ backgroundImage: 'url(/assets/images/banner-img.jpg)' }}>
       <div class="container">
          <div class="row align-items-center">
             <div class="col-lg-6">
                <div class="fact-item-wrap d-flex flex-wrap">
                   <div class="fact-item">
                      <div class="fact-item-content">
                         <div class="fact-icon">
                            <i aria-hidden="true" class="icon icon-user1"></i>
                         </div>
                         <h4>Our Volunteer Earned Through Our Good Work</h4>
                      </div>
                   </div>
                   <div class="fact-item">
                      <figure class="fact-image">
                         <img src="/assets/images/img9.jpg" alt=""/>
                      </figure>
                   </div>
                   <div class="fact-item">
                      <figure class="fact-image">
                         <img src="/assets/images/img10.jpg" alt=""/>
                      </figure>
                   </div>
                   <div class="fact-item">
                      <div class="fact-item-content">
                         <div class="fact-icon">
                            <i aria-hidden="true" class="icon icon-Leaf"></i>
                         </div>
                         <h4>Our Fundraising For Any Nature Related Program</h4>
                      </div>
                   </div>
                </div>
             </div>
             <div class="col-lg-6">
                <div class="counter-inner">
                   <div class="section-head white-section-head">
                      <div class="back-title">FUN FACT</div>
                         <h2 class="section-title">Our Work Promise To Uphold The <span class="primary-color">Trust ! 
                            <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                               <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                            </svg>
                         </span>
                      </h2>
                      <div class="section-disc">
                         Odit fugit excepteur eiusmod fames, aliqua odio phasellus aliqua aenean, ratione primis. Nobis molestie adipisicing iaculis vel do, assumen.
                      </div>
                   </div>
                   <div class="counter-wrap">
                      <div class="counter-item">
                         <div class="counter-content">
                            <span class="counter-no">
                               <span class="counter">320</span>+
                            </span>
                            <span class="counter-text">
                               Project Done
                            </span>
                         </div>
                      </div>
                      <div class="counter-item">
                         <div class="counter-content">
                            <span class="counter-no">
                               <span class="counter">25</span>+
                            </span>
                            <span class="counter-text">
                               Award Achieved
                            </span>
                         </div>
                      </div>
                      <div class="counter-item">
                         <div class="counter-content">
                            <span class="counter-no">
                               <span class="counter">18</span>+
                            </span>
                            <span class="counter-text">
                               Office Branches
                            </span>
                         </div>
                      </div>
                      <div class="counter-item">
                         <div class="counter-content">
                            <span class="counter-no">
                               <span class="counter">5</span>K+
                            </span>
                            <span class="counter-text">
                               Happy Volunteer
                            </span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="overlay"></div>
    </section>
    {/* home testimonial section html start */}
    <section class="testimonial-section bg-light-grey">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                   <div class="back-title">TESTIMONIAL</div>
                      <h2 class="section-title">Donator's <span class="primary-color">Reviews
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      Ut commodo pulvinar veritatis occaecati mauris, tristique tristique turpis pharetra beatae litora donec pharetra, recusandae, volutpat.
                   </div>
                </div>
             </div>
          </div>
          <div class="testimonial-inner">
             <div class="row">
                <div class="col-md-6">
                   <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                         <img src="/assets/images/author-img1.jpg" alt=""/>
                      </figure>
                      <div class="testimonial-content">
                         <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias.”</p>
                      </div>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                         <img src="/assets/images/author-img2.jpg" alt=""/>
                      </figure>
                      <div class="testimonial-content">
                         <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias.”</p>
                      </div>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                         <img src="/assets/images/author-img3.jpg" alt=""/>
                      </figure>
                      <div class="testimonial-content">
                         <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias.”</p>
                      </div>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                         <img src="/assets/images/author-img4.jpg" alt=""/>
                      </figure>
                      <div class="testimonial-content">
                         <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias.”</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="pattern-overlay"></div>
    </section>
    {/* home blog section html start */}
    <section class="blog-section">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                   <div class="back-title">RECENT BLOG</div>
                      <h2 class="section-title">Our Latest <span class="primary-color">Insights
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                      </span>
                   </h2>
                   <div class="section-disc">
                      Ut commodo pulvinar veritatis occaecati mauris, tristique tristique turpis pharetra beatae litora donec pharetra, recusandae, volutpat.
                   </div>
                </div>
             </div>
          </div>
          <div class="blog-inner">
             <div class="row">
                <div class="col-md-6 col-lg-4">
                   <article class="post">
                      <figure class="feature-image">
                         <a style={{textDecoration:"none"}} href="blog-single.html">
                            <img src="/assets/images/img7.jpg" alt=""/>
                         </a>
                         <span class="cat-meta">
                            <a style={{textDecoration:"none"}} href="blog-archive.html">NATURE</a>
                         </span>
                      </figure>
                      <div class="entry-content">
                         <h4>
                            <a style={{textDecoration:"none"}} href="blog-single.html">Inceptos totam sociosqu eum, sapien velit maiores.</a>
                         </h4>
                      </div>
                      <div class="entry-meta">
                         <span class="posted-on">
                            <a style={{textDecoration:"none"}} href="blog-single.html">Oct 17, 2022</a>
                         </span>
                         <span class="comments-link">
                            <a style={{textDecoration:"none"}} href="blog-single.html">No Comments</a>
                         </span>
                      </div>
                   </article>
                </div>
                <div class="col-md-6 col-lg-4">
                   <article class="post">
                      <figure class="feature-image">
                         <a style={{textDecoration:"none"}} href="blog-single.html">
                            <img src="/assets/images/img8.jpg" alt=""/>
                         </a>
                         <span class="cat-meta">
                            <a style={{textDecoration:"none"}} href="blog-archive.html">CHARITY</a>
                         </span>
                      </figure>
                      <div class="entry-content">
                         <h4>
                            <a style={{textDecoration:"none"}} href="blog-single.html">Anim purus in posuere itaque irure donec.</a>
                         </h4>
                      </div>
                      <div class="entry-meta">
                         <span class="posted-on">
                            <a style={{textDecoration:"none"}} href="blog-single.html">Oct 17, 2022</a>
                         </span>
                         <span class="comments-link">
                            <a style={{textDecoration:"none"}} href="blog-single.html">No Comments</a>
                         </span>
                      </div>
                   </article>
                </div>
                <div class="col-md-6 col-lg-4">
                   <article class="post">
                      <figure class="feature-image">
                         <a style={{textDecoration:"none"}} href="blog-single.html">
                            <img src="/assets/images/img8.jpg" alt=""/>
                         </a>
                         <span class="cat-meta">
                            <a style={{textDecoration:"none"}} href="blog-archive.html">NATURE</a>
                         </span>
                      </figure>
                      <div class="entry-content">
                         <h4>
                            <a style={{textDecoration:"none"}} href="blog-single.html">Sequi in molestie dolor sociosqu tellus eros.</a>
                         </h4>
                      </div>
                      <div class="entry-meta">
                         <span class="posted-on">
                            <a style={{textDecoration:"none"}} href="blog-single.html">Oct 17, 2022</a>
                         </span>
                         <span class="comments-link">
                            <a style={{textDecoration:"none"}} href="blog-single.html">No Comments</a>
                         </span>
                      </div>
                   </article>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* home callback section html start */}
    <section class="callback-section"  style={{ backgroundImage: 'url(/assets/images/img5.jpg)' }}>
       <div class="container">
          <div class="row align-items-center justify-content-between">
             <div class="col-lg-8">
                <div class="callback-content">
                   <div class="section-head">
                      <div class="back-title">BE A VOULNTEER</div>
                      <h2 class="section-title">Let's Change The World, Join Us Now And Become A <span class="primary-color">Volunteer ! 
                         <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                         </svg>
                         </span>
                      </h2>
                   </div>
                </div>
             </div>
             <div class="col-lg-4">
                <div class="button-right">
                   <a style={{textDecoration:"none"}} href="volunteer.html" class="button-round-primary">BECOME A VOLUNTEER</a>
                </div>
             </div>
          </div>
       </div>
       <div class="overlay"></div>
    </section>
     {/*home callback section html end*/} 
    </main>   
    </>
  )
}
