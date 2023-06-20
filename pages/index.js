import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import YouTube from "react-youtube";

import { BounceLoader
 } from 'react-spinners';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
    
  const onReady = (event) => {
    const timeout = setTimeout(() => {
      setVideoReady(true);
    }, 400);
   

  };

  const onPlay = (event) => {
    // Effectuez les actions lorsque la vidéo démarre
  };

  const onPause = (event) => {
    // Effectuez les actions lorsque la vidéo est mise en pause
  };

  var dateActuelle = new Date();

  // Créez une nouvelle date pour le 4 mars 2000
  var date2000 = new Date("March 4, 2000");

  // Calculez la différence en millisecondes entre les deux dates
  var difference = dateActuelle.getTime() - date2000.getTime();

  // Convertissez la différence de millisecondes en années
  var differenceEnAnnees = Math.floor(
    difference / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <>
      <main id="content" class="site-main" style={{position:"relative"}}>
      
        {/* home banner section html start */}
        <section
          class="home-banner"
          style={{ backgroundImage: "url(https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/347142254_924476702146153_6628312326437862807_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tdTponUaMVsAX9WBnJ-&_nc_ht=scontent.frba3-2.fna&oh=00_AfDmZszjUhovKaoYAI1mDy2fIrIfmuqXewu_7u4t3fzD7Q&oe=64915770)" }}
        >
          <div class="container">
         
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="banner-content text-center">
                  <div class="section-head">
                    <div class="back-title">الانضمام</div>
                    <h1 class="section-title banner-title">
                      {" "}
                      أحدث تأثيرًا <br></br>{" "}
                      <span class="primary-color">
                        بالانضمام
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                      واقدم علينا{" "}
                    </h1>
                  </div>
                  <div class="banner-text">
                    <p>
                      جمعية كشافة المغرب هي جمعية تربوية تطوعية تنهج نظام الحركة
                      الكشفية العالمي{" "}
                    </p>
                  </div>
                  <div class="banner-button">
                    <Link
                      style={{ textDecoration: "none", fontSize: "16px" }}
                      href="/about"
                      class="button-round-primary"
                    >
                      تعرف أكثر
                    </Link>
                    <Link
                      style={{ textDecoration: "none", fontSize: "16px" }}
                      href="/contact"
                      class="button-round-white"
                    >
                      {" "}
                      كن متطوعًا
                    </Link>
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
             
               <figure style={{ position: 'relative' }}  class="video-banner">
                <div style={{ display:videoReady?'none': 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'black' }} 
                >
                <div className="loading-spinner">
      <BounceLoader color="#ffffff" size={30} />
    </div>
                </div>
                
                <YouTube
                    videoId="bA2LjfsYK7k"
                    onReady={onReady}
                    onPlay={onPlay}
                    onPause={onPause}
                
                  />
                </figure>
                </div>
              
                <div class="col-lg-6">
                  <div
                    style={{ textAlign: "right" }}
                    class="section-head white-section-head"
                  >
                    <div class="back-title">شارك الآن</div>
                    <h1 class="section-title">
                      {" "}
                      انضم الآن لبناء<br></br>
                      <span class="primary-color">
                        معًا
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                      عالم أفضل
                    </h1>

                    <div class="section-disc">
                      <p>: برامج تدريبية لأول مرة بالمغرب عن طريق الجمعية</p>
                      <ul
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <li>
                          {" "}
                          (ستة أجزاء ) لتنمية مهارات التفكير(كورت CORT) برنامج{" "}
                        </li>
                        <li>برامج القراءة السريعة – القراءة التصورية</li>
                        <li>الخريطة الذهنية – تقوية الذاكرة</li>
                      </ul>
                    </div>
                  </div>
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
                      <img
                        width={100}
                        src="https://cdn-icons-png.flaticon.com/512/80/80120.png"
                        alt=""
                      />
                    </figure>
                    <div class="service-content">
                      <h4>مناهج تربوية</h4>
                      <p>فرصة فريدة لتعزيز الهوية الوطنية والقيم الأخلاقية</p>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="/program_educatif"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="service-item">
                    <figure class="service-icon">
                      <img
                        width={100}
                        src="https://cdn-icons-png.flaticon.com/128/860/860380.png"
                        alt=""
                      />
                    </figure>
                    <div class="service-content">
                      <h4>تنمية القيادات</h4>
                      <p>إعداد خلف صالح في مستوى تحديات الواقع والمجتمع</p>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="/program_leader"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="service-item">
                    <figure class="service-icon">
                      <img
                        width={100}
                        src="https://www.fay3.com/isT46GQ8vZg/download"
                        alt=""
                      />
                    </figure>
                    <div class="service-content">
                      <h4>مخيمات و عطل</h4>
                      <p>
                        تشكيل وعي الطفل بخصوصيات محيطه وقدرته على الاندماج فيه
                      </p>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="/program_camps"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="service-item">
                    <figure class="service-icon">
                      <img
                        width={100}
                        src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-happy-icon-png-image_1024845.jpg"
                        alt=""
                      />
                    </figure>
                    <div class="service-content">
                      <h4>تربية وترفيه</h4>
                      <p>
                     بناء شخصية الإنسان وتحقيق
                        التوازن الذاتي في حياته
                      </p>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="/program_loisir"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </Link>
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
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWfOZIhCa8-X7rC_n2eZrJde78QHhU1hUUg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div class="home-about-image right-image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtLIlWfcEWPs5YDWALnjxVrpsK67Pqj0c-Q&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div class="home-about-image bottom-image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUTlzv8h4dQ3vcToHw76ApbH1_lxRN8Wo6w&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="section-about-right">
                  <div class="section-about-content">
                    <div class="section-head">
                      <div class="back-title">عنّا</div>
                      <h1 class="section-title">
                        <span class="primary-color">
                          !الغد
                          <svg
                            class="title-shape"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                          </svg>
                        </span>{" "}
                        لدينا القوة اليوم لتغيير
                      </h1>
                      <div class="section-disc">
                        : تتوفر الجمعية على خبرة في المجالات التالية
                      </div>
                    </div>
                    <div class="about-list">
                      <div class="exp-date">
                        <h3>{differenceEnAnnees}</h3>
                        <h4> سنة</h4>
                        <span class="date-decs"> من الخبرة</span>
                      </div>
                      <ul>
                        <li>
                          المخيمات الربيعية (7 أيام) والصيفية (15 يوما) تأطير
                          أزيد من 15000{" "}
                        </li>
                        <li>التنشيط السوسيو ثقافي</li>
                        <li>التسيير المالي والإداري</li>
                        <li>التخطيط الاستراتيجي</li>
                        <li>تقنيات إعداد المشاريع التنموية</li>
                        <li>تنظيم دورات تدريبية متخصصة في التنمية البشرية</li>
                        <li>العمل الاجتماعي التطوعي</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/* home charity section html start */}
       {/*  <section class="charity-section bg-light-grey">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                  <div class="back-title"> الأسباب الشعبية</div>
                  <h1 class="section-title">
                    {" "}
                    تحقق من{" "}
                    <span class="primary-color">
                      {" "}
                      الأسباب
                      <svg
                        class="title-shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                    </span>{" "}
                    الشعبية
                  </h1>
                  <div class="section-disc">
                    Assumenda occaecat cursus iaculis ab non, assumenda natoque
                    aliquid sunt fusce quasi quod unde, ridiculus.
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
                        <a
                          style={{ textDecoration: "none" }}
                          href="donate.html"
                          class="button-round-primary"
                        >
                          DONATE NOW
                        </a>
                      </div>
                    </figure>
                    <div class="charity-content">
                      <h4>Afforestation Program And Fundraising Event</h4>
                      <p>
                        Dolorem interdum iure pharetra quia sapien, ipsum
                        eligendi rerum volups tatibus sed dolor hymenaeos veh.
                      </p>
                      <div class="progress-wrapper">
                        <div
                          class="ab-progress example"
                          data-progress
                          data-value="82"
                        ></div>
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
                        <a
                          style={{ textDecoration: "none" }}
                          href="donate.html"
                          class="button-round-primary"
                        >
                          DONATE NOW
                        </a>
                      </div>
                    </figure>
                    <div class="charity-content">
                      <h4>One Home - One Solar Panel Awareness Program</h4>
                      <p>
                        Dolorem interdum iure pharetra quia sapien, ipsum
                        eligendi rerum volups tatibus sed dolor hymenaeos veh.
                      </p>
                      <div class="progress-wrapper">
                        <div
                          class="ab-progress example"
                          data-progress
                          data-value="90"
                        ></div>
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
                        <a
                          style={{ textDecoration: "none" }}
                          href="donate.html"
                          class="button-round-primary"
                        >
                          DONATE NOW
                        </a>
                      </div>
                    </figure>
                    <div class="charity-content">
                      <h4>Protecting the Wild Herb of the Amazon</h4>
                      <p>
                        Dolorem interdum iure pharetra quia sapien, ipsum
                        eligendi rerum volups tatibus sed dolor hymenaeos veh.
                      </p>
                      <div class="progress-wrapper">
                        <div
                          class="ab-progress example"
                          data-progress
                          data-value="65"
                        ></div>
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
                <a
                  style={{ textDecoration: "none" }}
                  href="charity-archive.html"
                  class="button-round-primary"
                >
                  VIEW ALL CAUSES
                </a>
              </div>
            </div>
          </div>
        </section>/*}
        {/* home contact section html start */}
        <section
          class="contact-section"
          style={{ backgroundImage: "url(/assets/images/img5.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="home-contact-form">
                  <form class="contact-form row">
                    <div class="col-12 mb-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="ادخل الاسم*"
                      />
                    </div>
                    <div class="col-12 mb-4">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="ادخل البريد الإلكتروني*"
                      />
                    </div>
                    <div class="col-sm-7 mb-4">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="ادخل رقم الهاتف*"
                      />
                    </div>
                    <div class="col-sm-5 mb-4">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="ادخل الكود*"
                      />
                    </div>
                    <div  class="text-right col-12">
                      <button type="submit" class="button-round-secondary">
                        انضم الآن
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div  class=" text-right section-head white-section-head">
                  <div  class="mb-1 back-title">رؤيتنا</div>
                  <h1 class="section-title">
                    <span class="primary-color">
                      ! الغد
                      <svg
                        class="title-shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                    </span>{" "}
                    لدينا القوة اليوم لتغيير
                  </h1>
                  <div class="section-disc">
                  نحن نسعى لأن نكون مؤسسة رائدة في العمل الكشفي وطنيا و دوليا ينظر إليها الجميع أفرادا و مؤسسات باعتبارها النموذج الأمثل و المرجع في صناعة الفرد الصالح و المصلح و خصوصا الناشئة وفق مقوماتنا الحضارية.
                  </div>
                </div>
               
              </div>
              
            </div>
          </div>
          <div class="overlay"></div>
        </section>
        {/* home event section html start */}
      {/*  <section class="event-section secondary-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="section-head white-section-head text-center">
                  <div class="back-title">فعالياتنا</div>
                  <h1 class="section-title">
                    <span class="primary-color">
                      فعالياتنا
                      <svg
                        class="title-shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                    </span>{" "}
                    انضم إلى
                  </h1>
                  <div class="section-disc">
                    AUt commodo pulvinar veritatis occaecati mauris, tristique
                    tristique turpis pharetra beatae litora donec pharetra,
                    recusandae, volutpat.
                  </div>
                </div>
              </div>
            </div>
            <div class="event-inner">
              <div class="event-item">
                <div class="event-date">
                  <h3>23</h3>
                  <h4>
                    AUG<span>2022</span>
                  </h4>
                </div>
                <div class="event-image">
                  <figure>
                    <img src="/assets/images/img11.jpg" alt="" />
                  </figure>
                </div>
                <div class="event-content">
                  <h4>Afforestation Program And Fundraising Event</h4>
                  <p>
                    Dolorem interdum iure pharetra quia sapien, ipsum eligendi
                    rerum volups tatibus sed dolor hymenaeos veh.
                  </p>
                </div>
                <div class="event-btn text-right">
                  <a
                    style={{ textDecoration: "none" }}
                    href="event-single.html"
                    class="button-round-secondary"
                  >
                    ATTEND EVENT
                  </a>
                </div>
              </div>
              <div class="event-item">
                <div class="event-date">
                  <h3>18</h3>
                  <h4>
                    SEP<span>2022</span>
                  </h4>
                </div>
                <div class="event-image">
                  <figure>
                    <img src="/assets/images/gallery-img6.jpg" alt="" />
                  </figure>
                </div>
                <div class="event-content">
                  <h4>Protecting the Wild Animal of the Amazon</h4>
                  <p>
                    Dolorem interdum iure pharetra quia sapien, ipsum eligendi
                    rerum volups tatibus sed dolor hymenaeos veh.
                  </p>
                </div>
                <div class="event-btn text-right">
                  <a
                    style={{ textDecoration: "none" }}
                    href="event-single.html"
                    class="button-round-secondary"
                  >
                    ATTEND EVENT
                  </a>
                </div>
              </div>
              <div class="event-item">
                <div class="event-date">
                  <h3>25</h3>
                  <h4>
                    NOV<span>2022</span>
                  </h4>
                </div>
                <div class="event-image">
                  <figure>
                    <img src="/assets/images/gallery-img7.jpg" alt="" />
                  </figure>
                </div>
                <div class="event-content">
                  <h4>Cleanliness Event And Awareness Program</h4>
                  <p>
                    Dolorem interdum iure pharetra quia sapien, ipsum eligendi
                    rerum volups tatibus sed dolor hymenaeos veh.
                  </p>
                </div>
                <div class="event-btn text-right">
                  <a
                    style={{ textDecoration: "none" }}
                    href="event-single.html"
                    class="button-round-secondary"
                  >
                    ATTEND EVENT
                  </a>
                </div>
              </div>
            </div>
            <div class="list-more-btn text-center">
              <a
                style={{ textDecoration: "none" }}
                href="event-archive.html"
                class="button-round-primary"
              >
                EXPLORE ALL EVENT
              </a>
            </div>
          </div>
        </section>
        {/* home gallery section html start */}
        <section class="gallery-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                  <div class="back-title">أعمالنا</div>
                  <h1 class="section-title">
                    {" "}
                    <span class="primary-color">
                      أعمالنا
                      <svg
                        class="title-shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                    </span>{" "}
                    معرض
                  </h1>
                  <div class="section-disc">
                    معرض جمعية الكشافة هو كنز من الصور التي تلتقط اللحظات
                    المميزة والمغامرات المثيرة والقيم المشتركة لدى الكشافة،
                    معكساً روح التعاون والتفاني في الطبيعة ورغبتهم في المساهمة
                    في المجتمع
                  </div>
                </div>
              </div>
            </div>
            <div class="gallery-inner">
              <div class="gallery-container grid">
                <div class="single-gallery grid-item">
                  <figure class="gallery-img">
                    <a
                      style={{ textDecoration: "none" }}
                      href="data:image/jpeg;base64,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"
                      data-fancybox="gallery"
                    >
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div class="single-gallery grid-item">
                  <figure class="gallery-img">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://2msoread-ww.amagi.tv/mediasfiles/2019/3/5/1551797084/1551797084scoutisme_PDiu3A5.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="https://2msoread-ww.amagi.tv/mediasfiles/2019/3/5/1551797084/1551797084scoutisme_PDiu3A5.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div class="single-gallery grid-item">
                <figure class="gallery-img">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.mapexpress.ma/wp-content/uploads/2017/05/Scouts-Maroc.jpg"
                    data-fancybox="gallery"
                  >
                    <img
                      src="https://www.mapexpress.ma/wp-content/uploads/2017/05/Scouts-Maroc.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
                <div class="single-gallery grid-item">
                  <figure class="gallery-img">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/345041007_198219293140064_1860466132361327567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUNsjC8t-6rPnErGWr4ZikAasE99nCfPkBqwT32cJ8-cl27HFq073Sj1GrIxZng3Cb2xpHUur-ILibRwQWU7lZ&_nc_ohc=beJiFtNUN9YAX85dJN4&_nc_ht=scontent.frba2-2.fna&oh=00_AfCw-_0Mq8jB7atw5whn368TBVnrCn7nWfSidogf61XxWA&oe=6490F262"
                      data-fancybox="gallery"
                    >
                      <img
                        src="https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/345041007_198219293140064_1860466132361327567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUNsjC8t-6rPnErGWr4ZikAasE99nCfPkBqwT32cJ8-cl27HFq073Sj1GrIxZng3Cb2xpHUur-ILibRwQWU7lZ&_nc_ohc=beJiFtNUN9YAX85dJN4&_nc_ht=scontent.frba2-2.fna&oh=00_AfCw-_0Mq8jB7atw5whn368TBVnrCn7nWfSidogf61XxWA&oe=6490F262 "
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div class="single-gallery grid-item">
                  <figure class="gallery-img">
                  
                  </figure>
                </div>
                <div class="single-gallery grid-item">
                <figure class="gallery-img">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/301850688_2715613338571558_3182608565266867256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEA0cdjbyq8vv19z0-d6nBP-jmRoVdQITP6OZGhV1AhM_3qrUFyczHCH3KzsKsSK_tOlGccJvOCx8l0U6LoQ7iV&_nc_ohc=-aD70a7sebIAX9oUqbP&_nc_ht=scontent.frba2-1.fna&oh=00_AfBUdZx5gXmhq5eDkutP8yu1Zla5H6l3_R4msNSfTNtNnw&oe=649068CC"
                      data-fancybox="gallery"
                    >
                      <img
                        src="https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/301850688_2715613338571558_3182608565266867256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEA0cdjbyq8vv19z0-d6nBP-jmRoVdQITP6OZGhV1AhM_3qrUFyczHCH3KzsKsSK_tOlGccJvOCx8l0U6LoQ7iV&_nc_ohc=-aD70a7sebIAX9oUqbP&_nc_ht=scontent.frba2-1.fna&oh=00_AfBUdZx5gXmhq5eDkutP8yu1Zla5H6l3_R4msNSfTNtNnw&oe=649068CC"
                       
                      alt=""
                    />
                  </a>
                </figure>
              </div>
                <div class="single-gallery grid-item">
                  <figure class="gallery-img">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/301233708_2715613335238225_1332153739526183206_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFEQf6_xErKpL2mG2t9vmn_gZahSy5XWnmBlqFLLldaeaSRqxAH1wa7iEKNptDNqKsLwKvo29Mf5VyoNCFlNcF7&_nc_ohc=j1tNxhfWJXoAX9qdBCs&_nc_oc=AQk1eysZ2gqy3pNH-BKQNLs0wJx-4yTouiqCsE560VcD96Yqw_rEuYIFWDef10suLW4&_nc_ht=scontent.frba2-1.fna&oh=00_AfCXokQvuVDdGQ8ytsjaAbW10Jg4FEASwre818FpKsfpow&oe=6490E353"
                      data-fancybox="gallery"
                    >
                      <img
                        src="https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/301233708_2715613335238225_1332153739526183206_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFEQf6_xErKpL2mG2t9vmn_gZahSy5XWnmBlqFLLldaeaSRqxAH1wa7iEKNptDNqKsLwKvo29Mf5VyoNCFlNcF7&_nc_ohc=j1tNxhfWJXoAX9qdBCs&_nc_oc=AQk1eysZ2gqy3pNH-BKQNLs0wJx-4yTouiqCsE560VcD96Yqw_rEuYIFWDef10suLW4&_nc_ht=scontent.frba2-1.fna&oh=00_AfCXokQvuVDdGQ8ytsjaAbW10Jg4FEASwre818FpKsfpow&oe=6490E353"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
               
                

                
              </div>
            </div>
          </div>
        </section>
        {/* home client section html start */}
     
        {/* home fact section html start */}
        <section
          class="fact-section"
          style={{ backgroundImage: "url(/assets/images/banner-img.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="fact-item-wrap d-flex flex-wrap">
                  <div class="fact-item">
                    <div class="fact-item-content">
                      <div class="fact-icon">
                        <i aria-hidden="true" class="icon icon-user1"></i>
                      </div>
                      <h4>نكسب متطوعينا من خلال عملنا الجيد</h4>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
              <div class="col-lg-6">
                <div class="counter-inner">
                  <div  class=" section-head white-section-head">
                    <div style={{marginLeft:"50%"}} class="back-title">حقيقة ممتعة</div>
                    <h1 style={{textAlign:"right"}} class="section-title">
                      {" "}
                      <span class="primary-color">
                        ! الثقة
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                      وعد عملنا بالحفاظ على
                    </h1>
                    <div class="section-disc">
                   
                    </div>
                  </div>
                  <div class="counter-wrap">
                   
                    
                    <div class="counter-item">
                      <div style={{textAlign:"center",float:"left",width:"50%"}}>
                        <span class="counter-no sous">
                          <span class="counter ">307</span>+
                        </span>
                        <span class="counter-text">إناث</span>
                      </div>
                      <div style={{textAlign:"center",float:"right",width:"50%"}}>
                        <span class="counter-no sous">
                          <span class="counter">724</span>+
                        </span>
                        <span class="counter-text">ذكور</span>
                      </div>
                    </div>
                    <div class="counter-item">
                      <div class="counter-content">
                        <span class="counter-no">
                          <span class="counter">1031</span>+
                        </span>
                        <span class="counter-text">الأطر المتطوعة</span>
                      </div>
                    </div>
                   
                    <div class="counter-item">
                      <div style={{textAlign:"center",float:"left",width:"50%"}}>
                        <span class="counter-no sous">
                          <span class="counter">338419</span>+
                        </span>
                        <span class="counter-text">إناث</span>
                      </div>
                      <div style={{textAlign:"center",float:"right",width:"50%"}}>
                        <span class="counter-no sous">
                          <span class="counter">317716</span>+
                        </span>
                        <span class="counter-text">ذكور</span>
                      </div>
                    </div>
                    <div class="counter-item">
                    <div class="counter-content">
                      <span class="counter-no">
                        <span class="counter">656135</span>+
                      </span>
                      <span class="counter-text">عدد المستفيدين</span>
                    </div>
                  </div>
                    
                    
                    <div class="counter-item">
                    <div style={{textAlign:"center",float:"left",width:"50%"}}>
                      <span class="counter-no sous">
                        <span class="counter">2637</span>+
                      </span>
                      <span class="counter-text">إناث</span>
                    </div>
                    <div style={{textAlign:"center",float:"right",width:"50%"}}>
                      <span   class="counter-no sous">
                        <span  class="counter ">2976</span>+
                      </span>
                      <span class="counter-text">ذكور</span>
                    </div>
                  </div>
                  <div class="counter-item">
                  <div class="counter-content">
                    <span class="counter-no ">
                      <span class="counter">5613</span>+
                    </span>
                    <span class="counter-text">عدد المنخرطين</span>
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
        
        {/* home blog section html start */}
        <section class="blog-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="section-head text-center">
                  <div class="back-title">مراحل الجمعية</div>
                  <h1 class="section-title">
                    {" "}
                    <span class="primary-color">
                      {" "}التألق
                     
                      <svg
                        class="title-shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                      </svg>
                    </span>{" "}
                    مسار الجمعية نحو 
                  </h1>
                  <div class="section-disc">
                  تتميز الجمعية بحضور بارز في المشهد الجمعوي المغربي ومن خلال تتبعنا للمسار التاريخي لجمعية كشافة المغرب إلى حدود الآن يمكن تقسيم هذا المسار إلى ثلاث مراحل 
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-inner">
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <figure class="feature-image">
                      <a
                        style={{ textDecoration: "none" }}
                        href="blog-single.html"
                      >
                        <img class="img1" src="https://cdn-icons-png.flaticon.com/512/6404/6404292.png" alt="" />
                      </a>
                      <span class="cat-meta">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                        التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}} class="entry-content">
                      <h4>
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                        المرحلة الثالثة: مرحلة الارتقاء من سنة 2009 إلى سنة 2013
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                      
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                          No Comments
                        </a>
                      </span>
                    </div>
                  </article>
                </div>
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <figure class="feature-image">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/etapes"
                      >
                        <img class="img1" src="https://cdn-icons-png.flaticon.com/512/686/686921.png" alt="" />
                      </a>
                      <span class="cat-meta">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                        التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}}  class="entry-content">
                      <h4>
                        <a
                        href="/etapes"

                          style={{ textDecoration: "none" }}
                         
                        >
                        المرحلة الثانية: مرحلة التوسع والبناء ما بين سنتي 2005 و 2009
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                     
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                          No Comments
                        </a>
                      </span>
                    </div>
                  </article>
                </div>
                <div class="col-md-6 col-lg-4">
                  <article class="post">
                    <figure  class="feature-image">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/etapes"
                      >
                      <img class="img1" src="https://static.thenounproject.com/png/4133650-200.png" alt="" />
                        </a>
                     <span class="cat-meta">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                          التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}} class="entry-content">
                      <h4>
                        <a
                        href="/etapes"

                        >
                        المرحلة الأولى: مرحلة التأسيس من سنة 2000 إلى سنة 2005
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                     
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/etapes"
                        >
                          No Comments
                        </a>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* home callback section html start */}
        <section
          class="callback-section"
          style={{ backgroundImage: "url(/assets/images/img5.jpg)" }}
        >
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-8">
                <div class="callback-content">
                  <div class="section-head">
                    <div class="back-title text-center">كن متطوعًا</div>
                    <h1 class="text-center section-title">
                    لنغير العالم، انضم إلينا 
                    <br></br>
                    {" "}
                      <span class="primary-color">
                        {" "}
                        !متطوعًا
                        <svg
                          class="title-shape"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 150"
                          preserveAspectRatio="none"
                        >
                          <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                        </svg>
                      </span>{" "}
                      الآن وكن

                    </h1>
                  </div>
                </div>
              </div>
              <div class=" col-lg-4">
                <div class="text-center button-right">
                  <Link
                    style={{ textDecoration: "none", fontSize: "16px" }}
                    href="/contact"
                    class="button-round-primary"
                  >
                    كن متطوعًا
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </section>
        {/*home callback section html end*/}
      </main>
    </>
  );
}
