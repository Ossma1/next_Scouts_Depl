import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const contact = () => {
   
  return (
 <>

      <div id="page" class="full-page">
     
         <main id="content" class="site-main">
  {/*  <!-- Inner Banner html start-->*/}
            <section class="inner-banner-wrap">
               <div class="inner-baner-container" style={{backgroundImage: "url(https://static.lematin.ma/files/lematin/images/articles/2017/07/Jeunesse-Ouverture-officielle-du-rassemblement.jpg)"}}>
                  <div class="container">
                     <div class="inner-banner-content">
                        <h1 class="inner-title">راسلنا</h1>
                     </div>
                  </div>
               </div>
            </section>
            {/*<!-- Inner Banner html end-->
            <!-- contact form html start -->*/}
            <div class="contact-page-section">
               <div class="contact-form-inner">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-6">
                           <div class="contact-detail-container">
                              <div class="section-head">
                                 <div class="back-title">! تواصل معنا</div>
                                 <h2 class="section-title">  <span class="primary-color">! و الإنضمام لنا
                                    <svg class="title-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                                       <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                                    </svg>
                                    </span> لا تتردد في الإتصال 
                                 </h2>
                                
                              </div>
                              <div class="contact-details-list">
                                 <ul>
                                    <li>
                                       <span class="icon">
                                          <i class="fas fa-map-marker-alt"></i>
                                       </span>
                                       <div class="details-content">
                                          <h4>: المقر الاجتماعي</h4>
                                          <span>المعهد الموسيقي العربي باطمة شارع الشفشاوني عين السبع</span>
                                       </div>
                                    </li>
                                    <li>
                                       <span class="icon">
                                          <i class="fas fa-phone-volume"></i>
                                       </span>
                                       <div class="details-content">
                                          <h4>: الهاتف / الفاكس</h4>
                                          <span>00212522938456</span>
                                       </div>
                                    </li>
                                    <li>
                                       <span class="icon">
                                          <i class="fas fa-envelope-open-text"></i>
                                       </span>
                                       <div class="details-content">
                                          <h4>: البريد الإليكتروني للجمعية</h4>
                                          <span>scoutsmaroc@gmail.com</span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="mt-lg-5 col-md-6">
                           <div class="contact-from-wrap"  style={{backgroundImage: "url(https://bnj.blob.core.windows.net/assets/Htdocs/Images/Pictures/2695104.jpg?puid=877bcf27-1fbc-45c5-a4c0-58afef95f35c)"}}>
                                                         <form class="contact-from">
                                 <p>
                                    <input type="text" name="name"  placeholder="أكتب الاسم"/>
                                 </p>
                                 <p>
                                    <input type="email" name="email"   placeholder="أكتب البريد الإلكتروني"/>
                                 </p>
                                 <p>
                                    <input type="text" name="subject" placeholder="أكتب الموضوع"/>
                                 </p>
                                 <p>
                                    <input type="number" name="name" placeholder="أكتب رقمك"/>
                                 </p>
                                 <p class="width-full">
                                    <textarea rows="8"  placeholder="أكتب رسالة"></textarea>
                                 </p>
                                 <p class="width-full">
                                    <input type="submit" name="submit" value="أرسل الآن"/>
                                 </p>
                              </form>
                              <div class="overlay"></div>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.001001938683!2d-7.542209188579671!3d33.60527847321733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc8eb7d111f1%3A0x3b91db9e2810f7a7!2sConservatoire%20Larbi%20Batma%20A%C3%AFn%20Sebaa!5e0!3m2!1sfr!2sus!4v1687023154990!5m2!1sfr!2sus" height="400" allowfullscreen="" loading="lazy"></iframe>
      </div>
            </div>
           {/* <!-- contact form html end -->*/}
         </main>
        
      </div>

 </>
    
   
    
  )
}

export default contact
