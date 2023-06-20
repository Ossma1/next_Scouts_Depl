import React from 'react'
import Search from './Search'
const Footer = () => {
  return (
   <>
    <footer id="colophon" class="site-footer footer-primary">
 
            <div class="top-footer">
               <div class="container">
                  <div class="upper-footer">
                     <div class="row">
                        <div class="col-lg-4 col-md-6">
                           <aside class="widget widget_text">
                              <div  class="text-center footer-logo">

                                 <a href="index.html"><img width={"100px"}   src="https://www.edulink.ma/wp-content/uploads/scouts2.jpg" alt=""/></a>
                              </div>
                              <div class="textwidget text-center widget-text">
                              مؤسسة رائدة في العمل الكشفي وطنيا و دوليا ينظر إليها الجميع أفرادا و مؤسسات باعتبارها النموذج الأمثل و المرجع في صناعة الفرد الصالح 
                              </div>
                           </aside>
                        </div>
                        <div class="col-lg-3 col-md-6">
                           <aside class="widget widget_text">
                           <h3 class="widget-title">معلومات الاتصال</h3>
                           <p>! لا تتردد في التواصل والوصول إلينا</p>
                              <div class="textwidget widget-text">
                              
                                 <ul>
                                    <li>
                                                        المعهد الموسيقي العربي باطمة شارع الشفشاوني عين السبع
                                                        <i aria-hidden="true" class="icon icon-map-marker1"></i>
                                       
                                                        </li>
                                    <li>
                                       <a href="tel:00212522938456">
                                       00212522938456
                                          <i aria-hidden="true" class="icon icon-phone1"></i>
                                       </a>
                                    </li>
                                    <li>
                                    <a href="mailto:scoutsmaroc@gmail.com">
                                    <i  aria-hidden="true" class="icon icon-envelope1"></i>
                                    scoutsmaroc@gmail.com
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </aside>
                        </div>

                        <div class="col-lg-4">
                           <aside style={{position:"relative"}}  class="widget">
                              <h3 class="widget-title">دعم العملاء</h3>
                              <ul>
                              
<li>
<a href="/contact">مركز المساعدة</a>
</li>
<li>
<a  href="/contact">راسلنا</a>
</li>

<li>
<a href="/event">مقترحات</a>
</li>
                              </ul>
                           </aside>
                        </div>
                     </div>
                  </div>
                  <div class="lower-footer">
                     <div class="row align-items-center">
                        <div class="col-lg-6">
                           <div class="footer-newsletter">
                              <h5>اشترك معنا للحصول على المزيد من التحديثات والأخبار!!</h5>
                              <form class="newsletter">
                                 <input style={{paddingRight:"88px"}} type="email" name="email" placeholder="أدخل بريدك الإلكتروني"/>
                                 <button type="submit" class="button-round-primary">اشترك</button>
                              </form>
                           </div>
                        </div>
                        <div class="col-lg-6 text-right">
                           <div class="social-links">
                              <ul>
                                 <li>
                                    <a href="https://www.facebook.com/scouts.maroc/" target="_blank">
                                       <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                    </a>
                                 </li>
                                
                                 <li>
                                    <a href="https://www.youtube.com/@ScoutsMaroc" target="_blank">
                                       <i class="fab fa-youtube" aria-hidden="true"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.instagram.com/scoutsmaroc/" target="_blank">
                                       <i class="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.linkedin.com/company/scoutsmaroc/" target="_blank">
                                       <i class="fab fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                           <div class="footer-menu">
                              <ul>
                              <li>
                              <a href="policy.html">سياسة الخصوصية</a>
                          </li>
                          <li>
                              <a href="policy.html">الشروط والأحكام</a>
                          </li>
                          <li>
                              <a href="faq.html">الأسئلة الشائعة</a>
                          </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="bottom-footer">
               <div class="container">
                  <div class="copy-right text-center">حقوق النشر © 2022 إنفايرن. جميع الحقوق محفوظة.</div>
               </div>
            </div>
            
         </footer>
         <a id="backTotop" href="#" class="to-top-icon">
          <i class="fas fa-chevron-up"></i>
          </a>
       {/* custom search field html*/ }
          <Search />
          </>
  )
}

export default Footer
