import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import YouTube from "react-youtube";

import { BounceLoader
 } from 'react-spinners';

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
          style={{ backgroundImage: "url(assets/images/banner-img.jpg)" }}
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
                    <a
                      style={{ textDecoration: "none", fontSize: "16px" }}
                      href="about.html"
                      class="button-round-primary"
                    >
                      تعرف أكثر
                    </a>
                    <a
                      style={{ textDecoration: "none", fontSize: "16px" }}
                      href="donate.html"
                      class="button-round-white"
                    >
                      {" "}
                      كن متطوعًا
                    </a>
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
                      <a
                        style={{ textDecoration: "none" }}
                        href="donate.html"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </a>
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
                      <a
                        style={{ textDecoration: "none" }}
                        href="volunteer.html"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </a>
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
                      <a
                        style={{ textDecoration: "none" }}
                        href="donate.html"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </a>
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
                        القيام بالأنشطة الضرورية لبناء شخصية الإنسان وتحقيق
                        التوازن الذاتي في حياته
                      </p>
                      <a
                        style={{ textDecoration: "none" }}
                        href="volunteer.html"
                        class="button-round-primary"
                      >
                        تعرف أكثر
                      </a>
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
                      src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-6/344423567_170641615658914_2358025775561879723_n.jpg?stp=c214.0.853.853a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFu9QrQpVOiY56b8iFPrM60l07RsDbUGXmXTtGwNtQZeUBDmzbUQ73CuVYf4Ns8wxer20OWvkA1IpLupyrm0UBJ&_nc_ohc=oVwpZQWF080AX-ENhoX&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&oh=00_AfD94N0QyjwutgzpfDlEgpeOmMvYj-F3Rv4fn9ZGWQJRaQ&oe=6490412F"
                      alt=""
                    />
                  </div>
                  <div class="home-about-image right-image">
                    <img
                      src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-6/345616454_804192194646264_2566721070812661037_n.jpg?stp=dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEBtqiAShm1wMRiARjrjxakxFP7O920T1nEU_s73bRPWa0N3VGItZiNWVLlnqDbkR85pR4pkApNutzS64Il0Yf2&_nc_ohc=7oNaREWXaykAX8E3pHL&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&oh=00_AfCb8WoYckvyCBcRRbwHv-Omej3F2PJ29tkDq_jPgrfAQA&oe=648FD34E"
                      alt=""
                    />
                  </div>
                  <div class="home-about-image bottom-image">
                    <img
                      src="https://scontent.fcmn5-2.fna.fbcdn.net/v/t39.30808-6/344024005_209971208552890_6338095083790222265_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEKffwgKtZuoIMSzY4lw4ZNp6kQPqLePK2nqRA-ot48rZGetmlm5YreGJ66_WWUAGvfRuKoaSFTlfvOtJ3Vmx-m&_nc_ohc=QP3flxNybU4AX-91Z-L&_nc_zt=23&_nc_ht=scontent.fcmn5-2.fna&oh=00_AfAFnunlLv0qEIwbkgH-7yoKCcNc5zr-ItZndqABPupJ-g&oe=649024EF"
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
                    <div class="col-12">
                      <button type="submit" class="button-round-secondary">
                        انضم اليوم
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
                      href="https://scontent.fcmn5-2.fna.fbcdn.net/v/t39.30808-6/347546010_239424728774467_6550803543447931704_n.jpg?stp=c160.0.640.640a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeE7PAoim8acwXCujXHsRkM6902LG2XClaf3TYsbZcKVp3254gGuq8o8-pPJg2aRgZZDAtehvn5XKVS5UsxekZV6&_nc_ohc=Qzo6-SmhwdQAX-wpuue&_nc_zt=23&_nc_ht=scontent.fcmn5-2.fna&oh=00_AfBkad8bvGwd-ljnv8NYGcjLSHUk_U1Slvl5gZqWHJ9uPQ&oe=64901E28"
                      data-fancybox="gallery"
                    >
                      <img
                        src="https://scontent.fcmn5-2.fna.fbcdn.net/v/t39.30808-6/347546010_239424728774467_6550803543447931704_n.jpg?stp=c160.0.640.640a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeE7PAoim8acwXCujXHsRkM6902LG2XClaf3TYsbZcKVp3254gGuq8o8-pPJg2aRgZZDAtehvn5XKVS5UsxekZV6&_nc_ohc=Qzo6-SmhwdQAX-wpuue&_nc_zt=23&_nc_ht=scontent.fcmn5-2.fna&oh=00_AfBkad8bvGwd-ljnv8NYGcjLSHUk_U1Slvl5gZqWHJ9uPQ&oe=64901E28"
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
                        src="https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/345616454_804192194646264_2566721070812661037_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEBtqiAShm1wMRiARjrjxakxFP7O920T1nEU_s73bRPWa0N3VGItZiNWVLlnqDbkR85pR4pkApNutzS64Il0Yf2&_nc_ohc=7oNaREWXaykAX-k8Tq0&_nc_ht=scontent.frba2-2.fna&oh=00_AfAIUwy-DQbjghit-qhPuoo_YHhXGVKiCm93pfpALzHtPw&oe=648FD34E"
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
                          href="blog-archive.html"
                        >
                        التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}} class="entry-content">
                      <h4>
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-single.html"
                        >
                        المرحلة الثالثة: مرحلة الارتقاء من سنة 2009 إلى سنة 2013
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                      
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-single.html"
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
                        href="blog-single.html"
                      >
                        <img class="img1" src="https://cdn-icons-png.flaticon.com/512/686/686921.png" alt="" />
                      </a>
                      <span class="cat-meta">
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-archive.html"
                        >
                        التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}}  class="entry-content">
                      <h4>
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-single.html"
                        >
                        المرحلة الثانية: مرحلة التوسع والبناء ما بين سنتي 2005 و 2009
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                     
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-single.html"
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
                        href="blog-single.html"
                      >
                      <img class="img1" src="https://static.thenounproject.com/png/4133650-200.png" alt="" />
                        </a>
                     <span class="cat-meta">
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-archive.html"
                        >
                          التفاصيل
                        </a>
                      </span>
                    </figure>
                    <div style={{textAlign:"right"}} class="entry-content">
                      <h4>
                        <a
                          href="blog-single.html"
                        >
                        المرحلة الأولى: مرحلة التأسيس من سنة 2000 إلى سنة 2005
                        </a>
                      </h4>
                    </div>
                    <div class="entry-meta">
                     
                      <span class="comments-link">
                        <a
                          style={{ textDecoration: "none" }}
                          href="blog-single.html"
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
                    <div class="back-title">كن متطوعًا</div>
                    <h1 class="section-title">
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
                      لنغير العالم، انضم إلينا الآن وكن
                    </h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="button-right">
                  <a
                    style={{ textDecoration: "none", fontSize: "16px" }}
                    href="volunteer.html"
                    class="button-round-primary"
                  >
                    كن متطوعًا
                  </a>
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
