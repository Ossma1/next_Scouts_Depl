import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const SideBar = () => {
  return (
 
    <>
    <header id="masthead" class="site-header site-header-transparent">
   {/*  header html start */} 
    <div class="top-header">
       <div class="container">
          <div class="row">
             <div class="col-lg-8 d-none d-lg-block">
                <div class="header-contact-info">
                   <ul>
                      <li>
                         <a style={{textDecoration:"none"}} href="tel:00212522938456" ><i class="fas fa-phone-alt"></i> 00212522938456</a>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="mailto:scoutsmaroc@gmail.com"><i class="fas fa-envelope"></i> scoutsmaroc@gmail.com</a>
                      </li>
                      <li>
                         <i class="fas fa-map-marker-alt"></i>                                                        المعهد الموسيقي العربي باطمة شارع الشفشاوني عين السبع

                      </li>
                   </ul>
                </div>
             </div>
             <div class="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                <div class="header-social social-links">
                   <ul>
                      <li>
                         <a style={{textDecoration:"none"}} href="https://www.facebook.com" target="_blank">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="https://www.twitter.com" target="_blank">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="https://www.youtube.com" target="_blank">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="https://www.instagram.com" target="_blank">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                         </a>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="https://www.linkedin.com" target="_blank">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                         </a>
                      </li>
                   </ul>
                </div>
                <div class="header-search-icon">
                   <button class="search-icon">
                      <i class="fas fa-search"></i>
                   </button>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="bottom-header">
       <div class="container">
          <div class="hgroup-wrap d-flex justify-content-between align-items-center">
             <div class="site-identity">
                <h1 class="site-title">
                   <a style={{textDecoration:"none"}} href="index.html">
                      <Image  width={500} height={300}  src="/assets/images/site-logo.png" alt="logo" />
                   </a>
                </h1>
             </div>
             <div class="main-navigation">
                <nav id="navigation" class="navigation d-none d-lg-inline-block">
                   <ul>
                      <li class="current-menu-item">
                         <Link href="/"  style={{textDecoration:"none"}} >الرئيسية</Link>
                      </li>
                      <li>
                         <Link href="/about"  style={{textDecoration:"none"}} >من نحن</Link>
                      </li>
                      <li class="menu-item-has-children">
                         <a style={{textDecoration:"none"}} href="#">Pages</a>
                         <ul>
                            <li>
                               <a style={{textDecoration:"none"}} href="event-archive.html">Event List</a>
                            </li>
                            <li>
                               <a style={{textDecoration:"none"}} href="event-single.html">Event Details</a>
                            </li>
                            <li class="menu-item-has-children">
                               <a style={{textDecoration:"none"}} href="#">charity</a>
                               <ul>
                                  <li>
                                     <a style={{textDecoration:"none"}} href="charity-archive.html">charity List</a>
                                  </li>
                                  <li>
                                     <a style={{textDecoration:"none"}} href="charity-single.html">charity Details</a>
                                  </li>
                               </ul>
                            </li>
                            <li class="menu-item-has-children">
                               <a style={{textDecoration:"none"}} href="#">Career</a>
                               <ul>
                                  <li><a style={{textDecoration:"none"}} href="career.html">Career</a></li>
                                  <li><a style={{textDecoration:"none"}} href="career-detail.html">Career Single</a></li>
                               </ul>
                            </li>
                            <li><a style={{textDecoration:"none"}} href="single-page.html">Single Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="volunteer.html">Volunteer</a></li>
                            <li><a style={{textDecoration:"none"}} href="donate.html">Donate</a></li>
                            <li><a style={{textDecoration:"none"}} href="gallery.html">Gallery Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="testimonial-page.html">Testimonial Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="faq.html">FAQ Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="search-page.html">Search Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="404.html">404 Page</a></li>
                            <li><a style={{textDecoration:"none"}} href="comming-soon.html">Comming Soon</a></li>
                         </ul>
                      </li>
                      <li class="menu-item-has-children">
                         <a style={{textDecoration:"none"}} href="blog-archive.html">Blog</a>
                         <ul>
                            <li><a style={{textDecoration:"none"}} href="blog-archive.html">Blog List</a></li>
                            <li><a style={{textDecoration:"none"}} href="blog-single.html">Blog Single</a></li>
                         </ul>
                      </li>
                      <li class="menu-item-has-children">
                         <a style={{textDecoration:"none"}} href="#">Shop</a>
                         <ul>
                            <li>
                               <a style={{textDecoration:"none"}} href="product-right.html">Shop Archive</a>
                            </li>
                            <li>
                               <a style={{textDecoration:"none"}} href="product-detail.html">Shop Single</a>
                            </li>
                            <li>
                               <a style={{textDecoration:"none"}} href="product-cart.html">Shop Cart</a>
                            </li>
                            <li>
                               <a style={{textDecoration:"none"}} href="product-checkout.html">Shop Checkout</a>
                            </li>
                         </ul>
                      </li>
                      <li>
                         <a style={{textDecoration:"none"}} href="contact.html">اتصل بنا</a>
                      </li>
                   </ul>
                </nav>
                <div class="header-btn d-inline-block">
                   <a style={{textDecoration:"none"}} href="donate.html" class="button-round-primary">Donate Now</a>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="mobile-menu-container"></div>
 </header>
    </>
  )
}

export default SideBar
