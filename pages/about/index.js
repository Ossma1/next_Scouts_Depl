import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { FacebookProvider, EmbeddedPost } from 'react-facebook';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
const about = () => {
  return (
    <div>
      <main id="content" class="site-main">
        {/*<!-- Inner Banner html start-->*/}
        <section class="inner-banner-wrap">
          <div
            class="inner-baner-container"
            style={{
              backgroundImage: "url(https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/347142254_924476702146153_6628312326437862807_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tdTponUaMVsAX9WBnJ-&_nc_ht=scontent.frba3-2.fna&oh=00_AfDmZszjUhovKaoYAI1mDy2fIrIfmuqXewu_7u4t3fzD7Q&oe=64915770)",
            }}
          >
            <div class="container">
              <div class="inner-banner-content">
                <h1 class="inner-title">عن الجمعية</h1>
              </div>
            </div>
          </div>
        </section>
        {/*  <!-- Inner Banner html end-->
  <!-- About page html start -->*/}

        <section class="about-page-section">
          <div class="container">
            <div class="mb-lg-5 about-video-wrap">
              <div style={{ textAlign: "right" }} class="about-video-content">
                <h3>!! رسالتنا </h3>
                <p>
                  نعمل على إكساب الفرد، انطلاقا من قيمنا الحضارية الاسلامية و
                  القيم الكونية للعمل الكشفي الموافقة لها، مجموعة من المعارف و
                  المهارات التي من شأنها تفعيل و تنمية قدراته و تحسين أخلاقه من
                  خلال التعلم بالممارسة وفق المنهج الكشفي، و ذلك بجهود قادة و
                  مدربين على درجة عالية من التميز، يخضعون لتدريب متقدم و مستمر
                  في بيئة حافزة، لا تتعارض مع عملهم الأصلي{" "}
                </p>
              </div>
              <div
                class="video-image"
                
              >
             
        <img
                       style={{position:"absolute",top:"0px",bottom:"0px"}}
                        src="https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/347142254_924476702146153_6628312326437862807_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tdTponUaMVsAX9WBnJ-&_nc_ht=scontent.frba3-2.fna&oh=00_AfDmZszjUhovKaoYAI1mDy2fIrIfmuqXewu_7u4t3fzD7Q&oe=64915770"
                        alt=""
                      />
                <div style={{backgroundColor:"transparent"}} class="overlay"></div>
              </div>
            </div>
            <div class="section-head">
              <div
                style={{ flexDirection: "row-reverse", textAlign: "baseline" }}
                class="row "
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  class="col-lg-6"
                >
                  <div>
                    <div class="back-title">العضوية</div>
                    <h2 class="section-title">
                      <span class="primary-color">
                        الهيآت التالية
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                      العضوية في
                    </h2>
                  </div>
                </div>
                <div class=" section-about-content col-lg-6">
                  <div
                    style={{ marginTop: "3%", justifyContent: "right" }}
                    class="about-list"
                  >
                    <ul>
                      <li> اتحاد المنظمات بالعالم الإسلامي </li>
                      <li>الجامعة الوطنية للتخييم بالمغرب</li>
                      <li> الرابطة الكشفية المغربية</li>
                      <li> مجلس الأمن الدولي للشباب: الأمم المتحدة </li>
                      <li>
                        {" "}
                        المؤتمر الدولي للأمن الإنساني العالمي: المغرب – الداخلة
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="section-head">
              <div
                style={{ flexDirection: "row-reverse", textAlign: "baseline" }}
                class="row "
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  class="col-lg-6"
                >
                  <div>
                    <div class="back-title">الشراكات</div>
                    <h2 class="section-title">
                      <span class="primary-color">
                        الشراكات الدولية
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>
                      العلاقات و{" "}
                    </h2>
                  </div>
                </div>
                <div class=" section-about-content col-lg-6">
                  <div
                    style={{ marginTop: "3%", justifyContent: "right" }}
                    class="about-list"
                  >
                    <ul>
                      <li> المؤتمر العالمي للشباب الإسلامي: أندونيسيا</li>
                      <li> مؤتمر الأمم المتحدة الدولي للشباب: المكسيك.</li>
                      <li> مؤ تمر دولي: فرنسا.</li>
                      <li>
                        {" "}
                        لقاءات واجتماعات: سويسرا – مصر – السعودية - تركيا –
                        إيطاليا. –
                      </li>
                      <li> شعلة الأمل المتوسطية: الجزائر.</li>
                      <li> شعلة الأمل المتوسطية: إسبانيا.</li>
                      <li> منتدى التدريب القيادي: الأردن.</li>
                      <li> جامعة من أجل السلام: ألمانيا/ جنوب إفريقيا</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-head text-center">
            <div style={{color: "rgba(184, 180, 180, 0.29)"}} class="back-title">قيم الجمعية</div>
          </div>
              <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
              ؤ<SwiperSlide style={{backgroundColor:"transparent"}}> <h2 style={{ textAlign: "center" }} class="section-title">
              <span class="primary-color">
                  قيم بنائية
                  <svg
                    class="title-shape"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                  </svg>
                </span>
              </h2>
  
              <div id="iconbox-container-bg2" class="iconbox-container-bg">
                <div class="iconbox-item-bg1 iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-smog"></i>
                    <h4>الفاعلية</h4>
                  </div>
                </div>
                <div class="iconbox-item-bg1 iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="icon icon-Leaf"></i>
                    <h4>الكفاءة</h4>
                  </div>
                </div>
                <div class="iconbox-item-bg1 iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-fill-drip"></i>
                    <h4>الإنتاجية</h4>
                  </div>
                </div>
                <div class="iconbox-item-bg1 iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-fill-drip"></i>
                    <h4>المسؤولية</h4>
                  </div>
                </div>
                <div class="iconbox-item-bg1 iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-fill-drip"></i>
                    <h4>الالتزام</h4>
                  </div>
                </div>
              </div></SwiperSlide>
              <SwiperSlide style={{backgroundColor:"transparent"}}>  <h2 style={{ textAlign: "center" }} class="section-title">
              <span class="primary-color">
                قيم أساسية
                <svg
                  class="title-shape"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                </svg>
              </span>
            </h2>
            <div class="iconbox-container-bg">
              <div class="iconbox-item-bg">
                <div class="iconbox-content-bg">
                  <i aria-hidden="true" class="fas fa-smog"></i>
                  <h4>الجودة</h4>
                </div>
              </div>
              <div class="iconbox-item-bg">
                <div class="iconbox-content-bg">
                  <i aria-hidden="true" class="icon icon-Leaf"></i>
                  <h4>الشمولية</h4>
                </div>
              </div>
              <div class="iconbox-item-bg">
                <div class="iconbox-content-bg">
                  <i aria-hidden="true" class="fas fa-fill-drip"></i>
                  <h4>التخصص</h4>
                </div>
              </div>
            </div></SwiperSlide>
              
                <SwiperSlide style={{backgroundColor:"transparent"}}> <h2 style={{ textAlign: "center" }} class="section-title">
                <span class="primary-color">
                  قيم مميزة
                  <svg
                    class="title-shape"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                  </svg>
                </span>
              </h2>
              <div class="iconbox-container-bg">
                <div class="iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-smog"></i>
                    <h4>الإنجاز</h4>
                    
                  </div>
                </div>
                <div class="iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="icon icon-Leaf"></i>
                    <h4>تطور الأداء</h4>
                  </div>
                </div>
                <div class="iconbox-item-bg">
                  <div class="iconbox-content-bg">
                    <i aria-hidden="true" class="fas fa-fill-drip"></i>
                    <h4>
                    مؤسسة دائمة التعلم <br></br>و التجديد
                  </h4>
                  </div>
                </div>
              </div></SwiperSlide>
               
              </Swiper>
             

           
            
          </div>
          <br></br>
          <div class="iconbox-container justify-content-evenly d-flex flex-wrap">
            <div
              style={{ marginTop: "2%", marginBottom: "2%" }}
              class=" iconbox-item-4 d-flex flex-wrap"
            >
              <div class="iconbox-border   ">
                <div class="d-flex">
                  <h4 style={{ display: " inline-block", textAlign: "right" }}>
                    شواهد متعددة تتوفر عليها الجمعية
                  </h4>
                  <div
                    style={{ marginLeft: "10%", display: " inline-block" }}
                    class="iconbox-icon"
                  >
                    <i aria-hidden="true" class="fas fa-award"></i>
                  </div>
                </div>
                <br></br>
                <div class=" section-about-content ">
                  <div
                    style={{ marginTop: "3%", justifyContent: "right" }}
                    class="about-list"
                  >
                    <ul>
                      <li> ISO-9001 شهادة</li>
                      <li> دبلومات مدربي المخيمات – وزارة الشباب والرياضة-</li>
                      <li> دبلومات مديري المخيمات - وزارة الشباب والرياضة-</li>
                      <li> دبلومات مقتصدي المخيمات - وزارة الشباب والرياضة-</li>
                      <li> دبلومات تخصصات مختلفة - وزارة الشباب والرياضة-</li>
                      <li> برنامجPNUD (الأمم المتحدة)</li>
                      <li> برنامج CORT (بريطانيا)</li>
                      <li> برنامج TONI BUZAN ( بريطانيا)</li>
                      <li> برنامج وسيط التنمية الاجتماعية ( ADS +SFD )</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{  padding: "0" }}
              class=" vacancy-container"
            >
              
                <div style={{minWidth:"300px"}} class="vacancy-form">
                  <h4>انضم إلينا</h4>
                  <form>
                    <p>
                      <input
                        class="myInput"
                        type="text"
                        name="name"
                        placeholder="ادخل الاسم"
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        class="myInput"
                        name="name"
                        placeholder="ادخل البريد الإلكتروني"
                      />
                    </p>

                    <p>
                      <textarea
                        className="myInput"
                        rows="5"
                        placeholder="ادخل رسالة"
                      ></textarea>
                    </p>
                    <p>
                      <input className="text-center" type="submit" name="submit" value="ارسال" />
                    </p>
                  </form>
                </div>
              {" "}
            </div>
          </div>

          <br></br>
          <section class="testimonial-section bg-light-grey">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <div class="section-head text-center">
                    <div class="back-title">شعار الجمعية</div>
                    <h1 class="section-title">
                      {" "}
                      <span class="primary-color">
                        {" "}
                        شعارنا
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                    </h1>
                    <div class="section-disc">
                      أصالــــــة...صناعـــــة...ريـــــــــــــادة{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-inner">
                <div class="row">
                  <div class="col-md-6">
                    <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                        <img
                          src="https://meaningnames.net/write/12/%D8%A3%D8%B5%D8%A7%D9%84%D8%A9.png"
                          alt=""
                        />
                      </figure>
                      <div class="testimonial-content">
                        <p>
                          استحضارا للمرجعية الحضارية لأمتنا والهوية الثقافية
                          المغربية، وجعلها مؤطرة لجميع أعمال وأنشطة الجمعية،
                          والسعي إلى تكون ممارستنا الجمعوية والكشفية أصيلة من
                          حيث الشكل والمضمون.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                        <img
                          src="https://meaningnames.net/write/12/%D8%B5%D9%86%D8%A7%D8%B9%D9%80%D9%80%D9%80%D9%80%D9%80%D8%A9.png"
                          alt=""
                        />
                      </figure>
                      <div class="testimonial-content">
                        <p>
                          انطلاقا من الآية الكريمة " ولتصنع على عيني " طه من
                          الآية 39، بما يمكن الجمعية من خلال أنشطتها وبرامجها
                          إلى أن تكون فضاء لصناعة الفرد الصالح لنفسه والمصلح
                          لمجتمعه، من خلال صناعة فكره وقلبه. وروحه.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="testimonial-item d-flex flex-wrap align-items-center">
                      <figure class="testimonial-img">
                        <img
                          src="https://meaningnames.net/write/12/%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9.png"
                          alt=""
                        />
                      </figure>
                      <div class="testimonial-content">
                        <p>
                          هدف تسعى الجمعية إلى تحقيقه في جميع مجالات اشتغالها،
                          بأن كون جمعية رائدة في العمل الجمعوي والكشفي وطنيا
                          ودوليا، عبر إنتاج وتنظيم برامج وأنشطة نوعية ومتميزة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pattern-overlay"></div>
          </section>
          {/*<!-- client section html start -->*/}
         
          {/* <!-- client html end -->
      <!-- home callback section html start -->*/}
          <div
            class="callback-inner-page"
            style={{ backgroundImage: "url(/assets/images/banner-img.jpg);" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <div class="callback-content text-center">
                    <div class="section-head">
                      <div class="back-title">رؤيتنا</div>
                      <h2 class="section-title">
                        نحن نسعى لأن نكون مؤسسة رائدة في العمل الكشفي وطنيا و
                        دوليا ينظر إليها الجميع أفرادا و مؤسسات باعتبارها
                        النموذج الأمثل و المرجع في صناعة الفرد الصالح و المصلح و
                        خصوصا اإليناشئة وفق مقوماتنا <br></br>{" "}
                        <span class="primary-color">
                          الحضارية
                          <svg
                            class="title-shape"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                          </svg>
                        </span>
                      </h2>
                    </div>
                    <div class="button-wrap">
                      <a href="/contact" class="button-round-primary">
                        انضم  لآن
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default about;
