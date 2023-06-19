import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
  const [clicke, setclicke] = useState(true);
  const [clicke2, setclicke2] = useState(true);
  const chnagerclick = () => {
    setclicke(!clicke);
  };
  const chnagerclick2 = () => {
    setclicke2(!clicke2);
  };
  return (
    <>
      <header id="masthead" class="site-header site-header-transparent">
        <script src="assets/vendors/jquery/jquery.js"></script>
        <script src="assets/vendors/waypoint/jquery.waypoints.min.js"></script>
        <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/vendors/progressbar-fill-visible/js/progressBar.min.js"></script>
        <script src="assets/vendors/jquery-ui/jquery-ui.min.js"></script>
        <script src="assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
        <script src="assets/vendors/counterup/jquery.counterup.js"></script>
        <script src="assets/vendors/modal-video/jquery-modal-video.min.js"></script>
        <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
        <script src="assets/vendors/fancybox/dist/jquery.fancybox.min.js"></script>
        <script src="assets/vendors/slick/slick.min.js"></script>
        <script src="assets/vendors/slick-nav/jquery.slicknav.js"></script>
        <script src="assets/js/custom.js"></script>
        <script src="assets/js/index-adc167b2.js"></script>
        {/*  header html start */}
        <div class="top-header">
          <div className="container">
            <div class="row">
              <div class="col-lg-8 d-none d-lg-block">
                <div class="header-contact-info">
                  <ul>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="tel:00212522938456"
                      >
                        <i class="fas fa-phone-alt"></i> 00212522938456
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="mailto:scoutsmaroc@gmail.com"
                      >
                        <i class="fas fa-envelope"></i> scoutsmaroc@gmail.com
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i> المعهد الموسيقي
                      العربي باطمة شارع الشفشاوني عين السبع
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                <div class="header-social social-links">
                  <ul>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/scouts.maroc/"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.youtube.com/@ScoutsMaroc"
                        target="_blank"
                      >
                        <i class="fab fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.instagram.com/scoutsmaroc/"
                        target="_blank"
                      >
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.linkedin.com/company/scoutsmaroc/"
                        target="_blank"
                      >
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
                  <Link style={{ textDecoration: "none" }} href="/">
                    <img src="/assets/images/site-logo.png" alt="logo" />
                  </Link>
                </h1>
              </div>
              <div class="main-navigation">
                
                <nav
                  id="navigation"
                  class="navigation d-none d-lg-inline-block"
                >
                  <ul>
                    <li>
                      <Link style={{ textDecoration: "none" }} href="/contact">
                        راسلنا
                      </Link>
                    </li>
                    <li>
                      <Link href="/etapes">مسار الجمعية</Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none" }} href="/ages">
                        المراحل العمرية
                      </Link>
                    </li>

                    <li class="menu-item-has-children">
                      <a href="#">برامج </a>
                      <ul>
                        <li>
                          <Link href="/program_educatif">مناهج تربوية</Link>
                        </li>
                        <li>
                          <Link href="/program_leader">تنمية القيادات</Link>
                        </li>
                        <li>
                          <Link href="program_camps">مخيمات و عطل</Link>
                        </li>
                        <li>
                          <Link href="/program_loisir">تربية وترفيه</Link>
                        </li>
                        <li>
                          <Link href="/program_seance">برامج حصصية</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/about" style={{ textDecoration: "none" }}>
                        عن الجمعية
                      </Link>
                    </li>
                    <li class="current-menu-item">
                      <Link href="/" style={{ textDecoration: "none" }}>
                        الرئيسية
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-container">
          <div class="slicknav_menu">
            <a
              href="#"
              onClick={() => chnagerclick()}
              aria-haspopup="true"
              role="button"
              tabindex="0"
              class={clicke ? "slicknav_btn slicknav_collapsed":"slicknav_btn slicknav_open"}
              style={{ outline: " none" }}
            >
              <span class="slicknav_menutxt">Menu</span>
              <span class="slicknav_icon">
                <span class="slicknav_icon-bar"></span>
                <span class="slicknav_icon-bar"></span>
                <span class="slicknav_icon-bar"></span>
              </span>
            </a>
            <nav
              class="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style={clicke ? {display: "none"}: { display: "block" }}
            >
              <ul>
                <li class="current-menu-item">
                
              <Link style={{ textDecoration: "none" }} role="menuitem" href="/contact">
              راسلنا
            </Link></li>
            <li class="current-menu-item">
            
            <Link role="menuitem" href="/etapes">مسار الجمعية</Link>
                </li>
                <li class="current-menu-item">
            
            <Link role="menuitem" href="/ages">
            المراحل العمرية</Link>
                </li>

                  <li className={`menu-item-has-children slicknav_parent slicknav_collapsed ${clicke2 ?"slicknav_open":"slicknav_collapsed"}`}><span class="slicknav_parent-link slicknav_row">
                                 <a href="#">برامج</a>
                                 <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1"  onClick={() => chnagerclick2()} class="slicknav_item"  style={{outline: "none"}}><span class="slicknav_arrow"><i class= {clicke2 ?"fas fa-plus":"fas fa-minus"}></i></span></a></span><ul role="menu" class="slicknav_hidden" aria-hidden="true" style={clicke2 ? {display: "none"}: { display: "block" }}>
                                    <li>
                                       <Link href="/program_educatif" role="menuitem" tabindex="-1">مناهج تربوية</Link>
                                    </li>
                                    <li>
                                    <Link href="/program_leader" role="menuitem" tabindex="-1">تنمية القيادات</Link>
                                  </li>
                                  <li>
                                    <Link href="program_camps" role="menuitem" tabindex="-1">مخيمات و عطل</Link>
                                  </li>
                                  <li>
                                    <Link href="/program_loisir" role="menuitem" tabindex="-1">تربية وترفيه</Link>
                                  </li>
                                  <li>
                                    <Link href="/program_seance" role="menuitem" tabindex="-1">برامج حصصية</Link>
                                  </li>
                                    </ul>
                </li>

                <li class="current-menu-item">
            
            <Link role="menuitem" href="/about">
            عن الجمعية</Link>
                </li>
                <li class="current-menu-item">
            
            <Link role="menuitem" href="/">
            الرئيسية</Link>
                </li>
               
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div id="siteLoader" class="site-loader">
        <div class="preloader-content">
          <img src="assets/images/loader1.gif" alt="" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
