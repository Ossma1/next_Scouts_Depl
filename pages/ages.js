import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';



export default function ages() {
  const [visible,setVisible] = useState([false,false,false,false]);
    
  const clicker = (neww) => {
    const newArray = [...visible]; // Crée une copie du tableau existant
    newArray[neww] = !visible[neww]; // Modifie le deuxième élément

   
    setVisible(newArray);

  }
  
  return (
 <>

 
 <main id="content" class="site-main">

 <section class="inner-banner-wrap">
    <div class="inner-baner-container"  style={{backgroundImage:" url(assets/images/inner-banner-img-1.jpg)"}}>
       <div class="container">
          <div class="inner-banner-content">
             <h1 class="inner-title">المراحل العمرية</h1>
          </div>
       </div>
    </div>
 </section>
{/* <!-- Inner Banner html end-->*/}
 <section class="event-page-section">
    <div class="container">
       <div class="row">
       

      <div class="col-lg-8  primary right-sidebar">
                {/*<!-- blog post item html start -->*/}
                <section style={{padding:"0px"}} class="blog-section">
                <div class="container">
                  <div >
                    <div style={{marginLeft:"0px"}} >
                      <div class="section-head text-center">
                        <div class="back-title">المراحل العمرية </div>
                        <h1 class="section-title">
                          {" "}
                          <span class="primary-color">
                            {" "} نظام المراحل  
                           
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
                        <div class="back-title" style={{textAlign:"right",color: "rgba(184, 180, 180, 0.29)"}}>أهمية التقسيم  </div>
                        <p >
                       .تتميز الحركة الكشفية بأنها تهتم بالشباب في جميع المراحل العمرية فتقدم لكل مرحلة ما يتلاءم معها من برامج تربوية هادفة، مبنية على دراسات علمية تتماشى والخصائص المميزة للنمو في كل مرحلة <br></br>
                        ولا بد من الإشارة إلى أن الحصص الأسبوعية القارة تقسم حسب الأقسام الكشفية المعتمدة في النظام الكشفي , وتكمن أهمية هذا التقسيم، (نظام المراحل)،أنه يتيح الفرصة لتكوين فرق أكثر انسجاما، وإعداد برامج وأنشطة ملائمة وشيقة ومثيرة لكل أعضاء المرحلة </p><p>
                           ومن هنا تأتي أهمية قيام الحركة الكشفية بتحديد الحد الأدنى والأعلى لكل مرحلة من مراحلها، والتي تستهدفها عبر مناهجها وبرامجها، كما أن تحديد المراحل يعتبر ضروريا من أجل تحقيق الأهداف المسطرة لكل مرحلة. ويأتي ذلك من خلال تحليل أطوار النمو، والتعرف على الخصائص، وتفهم التطلعات والاحتياجات والميول المرتبطة بكل مرحلة، كما أن هذا التقسيم يساعد القادة على وضع الأهداف التربوية الخاصة لكل فئة عمرية، وعلى اختيار الأساليب المناسبة في تطبيق الطريقة الكشفية، وعلى تحديد الأنشطة الملائمة لكل مرحلة
                           </p>
                           <p  id="1">
                           
                           </p>
                           <p >: وهي كالتالي</p>
                        </div>
                        </div>
                    </div>
                  </div>
               
            <div class="faq-_accordion">
               <div 
               onClick={() =>clicker(0)}
                 data-w-id="9ebe62c6-9452-ca1d-3d43-acb5354d8917"
                 class="aa faq-_question"
               >
               <div class="faq-_icon w-embed"  >
               <svg
                 width="currentwidth"
                 height="currentcolor"
                 viewBox="0 0 24 14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                   fill="#666D6D"
                 ></path>
               </svg>
             </div>
               <h4   class="heading-medium text-color-grey_fonce">
               مرحلة الأشبال والزهرات
               </h4>
               </div>
               <div style={visible[0]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
               <div class="margin-bottom margin-small">
                   <div class="max-width-large">
                     <div  class="text-rich-text w-richtext">
                       <p class="text-right" >
                       الشبل في الميدان الكشفي هو ذلك الطفل الذي يتراوح عمره ما بين 6 و 12 عاما. ويعتبر قسم الأشبال والزهرات من أهم الأقسام احتياجا للعناية والرعاية، لأنه يعد اللبنة الأولى لخلق كشاف حقيقي نافع لنفسه ولمجتمعه. ونظرا لصغر سن الشبل، فإن هذه المرحلة لها مميزات وخصوصيات ما يجعلها تكتسي أهمية بالغة. كما يعتبر سن الأشبال والزهرات هو السن الذي يشهد بداية تفتح شخصية الإنسان، وقابليتها للتواصل مع الآخرين والتفاعل معهم
                       </p>
                     </div>
                   </div>
                 </div>
               </div></div>
               <div class="faq-_accordion">
                  <div 
                  onClick={() =>clicker(1)}
                    data-w-id="9ebe62c6-9452-ca1d-3d43-acb5354d8917"
                    class="aa faq-_question"
                  >
                  <div class="faq-_icon w-embed"  >
                  <svg
                    width="currentwidth"
                    height="currentcolor"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                      fill="#666D6D"
                    ></path>
                  </svg>
                </div>
                  <h4   class="heading-medium text-color-grey_fonce">
                   مرحلة الكشافة والمرشدات
                  </h4>
                  </div>
                  <div style={visible[1]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          الكشافة هم أعضاء الحركة الكشفية الذين تتراوح أعمارهم بين 12 و15 عاما، وهذه المرحلة تشمل اثنين من أطوار النمو هما مرحلة ما قبل البلوغ والبلوغ. ويتميز فيها اليافعون بمجموعة من الخصائص في جوانب النمو. كما أن المرحلة العمرية لهذا القسم تتوسط المراحل الكشفية كاملة. وهو بالتالي ثاني حلقة في سلسلة المسار الكشفي. حيث يتم الاعتماد خلال هذه المرحلة على الربط بين التغيرات البدنية ومتطلباتها، وبين اكتشاف وتنمية الميول والهوايات الشخصية، واكتساب القيم الأخلاقية والاجتماعية والوطنية.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div></div>
                  <div class="faq-_accordion">
                  <div 
                 onClick={() =>clicker(2)}
                    data-w-id="9ebe62c6-9452-ca1d-3d43-acb5354d8917"
                    class="aa faq-_question"
                  >
                  <div class="faq-_icon w-embed"  >
                  <svg
                    width="currentwidth"
                    height="currentcolor"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                      fill="#666D6D"
                    ></path>
                  </svg>
                </div>
                  <h4   class="heading-medium text-color-grey_fonce">
                   مرحلة الكشاف المتقدم
                  </h4>
                  </div>
                  <div style={visible[2]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                    <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          الكشاف التمقدم هو اليافع الذي يتراوح عمره بين 15 و 18 عاما. وتتلقى هذه المرحلة عناية خاصة، حيث يتم وضع البرامج الملائمة التي توافق التطور النفسي، والعقلي والبدني والاجتماعي، والهدف من هذه المرحلة هو تنمية القدرات الفكرية والإبداعية. وأيضا التدريب على القيام بأدوار حقيقية مفيدة للمجتمع</p>
                        </div>
                      </div>
                    </div>
                  </div></div>
                     <div class="faq-_accordion">
                       <div 
                       onClick={() =>clicker(3)}
                         data-w-id="9ebe62c6-9452-ca1d-3d43-acb5354d8917"
                         class="aa faq-_question" 
                       >
                       <div class="faq-_icon w-embed"  >
                         <svg
                           width="currentwidth"
                           height="currentcolor"
                           viewBox="0 0 24 14"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                             fill="#666D6D"
                           ></path>
                         </svg>
                       </div>
                         <h4   class="heading-medium text-color-grey_fonce">
                         مرحلة الجوالة والرائدات
                         </h4>
                       </div>
                       <div style={visible[3]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                       <div class="margin-bottom margin-small">
                           <div class="max-width-large">
                             <div  class="text-rich-text w-richtext">
                               <p class="text-right" >
                               الجوال هو الشاب المنتمي للكشفية والذي يتراوح عمره ما بين 18 و21 عاما. وهذه الفترة من العمر تتفق بما لها من خصائص وميزات فكرية وجسدية، مع الغرض التربوي الذي حددته الحركة الكشفية في مرحلة الجوالة. فوسائل التربية وإجراء التجارب لاكتساب الخبرات، تكون عادة خلال هذه الفترة من حياة الإنسان. ليدخل بعدها في معترك الحياة بإزارة قوية وعزيمة جادة تكسبانه الثقة وتمنحانه القدرات اللازمة لحياة أفضل
                               </p>
                             </div>
                           </div>
                         </div>
                       </div></div>
                  </div>
                  <p style={{textAlign:"right"}}>
                  ويتفق هذا تماما مع رأي علماء النفس، بل ويتفق أيضا مع تراثنا وقيمنا الدينية فقد ورد في ا لأثر: لاعب ابنك سبعا، وأدبه سبعا، وآخيه سبعا، ثم اترك له الحبل على الغارب"
                  </p>
                  <p style={{textAlign:"right"}}>
                  وبعد اكتساب الخبرات والقيم والاتجاهات الطيبة، يجد الجوال نفسه قادرا على أن يقود قاربه في الحياة بنجاح، مجتازا الصعاب التي تصادفه، متجها إلى السعادة المنشودة. وتكون متعته الحقة في العمل الاجتماعي والإنساني داخل المواقع المختلفة في المجتمع </p>
                  <p style={{textAlign:"right"}}>
                    ويمكن تحديد الغرض من هذه المرحلة في الاندماج في محيطه، والعمل معه والإنتاج له... ويتم الوصول إلى هذا الغرض من خلال اندماج الجوال في مجموعة تسمى العشيرة، واشتراكه في أنشطتهما. حيث تتاح له فرص التدريب، واكتساب المهارات والثقة في قدراته في نفسه، فيتحمل مسؤولية ما يوكل إليه من أعمال، لأنه أهل لهذه المسؤولية. ومع حبه للخير وسعيه لخدمة الآخرين، يندمج في هيئات المجتمع ويعمل معها، مصداقا للمبدإ القائل: ما استحق أن يولد من عاش لنفسه فقط</p>
              </section>
               {/* <!-- blog post item html end -->
  <!-- pagination html start-->*/}
           
  { /* <!-- pagination html start-->*/}
             </div>


          <div style={{marginTop:"10%"}} class="col-lg-4  secondary">
             <div class="sidebar">
                
                <div class="widget widget-bg icon-list-content text-center">
                   <h4 class="bg-title">المراحل العمرية</h4>
                   <ul >
                      <li>
                         <a   onClick={() =>clicker(0)} style={{textAlign:"right"}} href="#1">	مرحلة الأشبال والزهرات<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li>
                      <li>
                         <a   onClick={() =>clicker(1)} style={{textAlign:"right"}} href="#1">	مرحلة الكشافة والمرشدات<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li> <li>
                      <a    onClick={() =>clicker(2)} style={{textAlign:"right"}} href="#1">	مرحلة الكشاف المتقدم<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                   </li> <li>
                   <a   onClick={() =>clicker(3)} style={{textAlign:"right"}} href="#1">	مرحلة الجوالة والدليلات<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                </li>
                   </ul>
                </div>
                <div class="widget widget-bg information-content widget-bg-image text-center" style={{backgroundImage: "url(assets/images/banner-img.jpg)"}}>
                   <h3>انضم إلينا الآن</h3>
                   <h4 > جمعية كشافة المغرب  تقدر مجهوداتكم ، واقتراحاتكم ، واستفساراتكم</h4>
                     
                   <a href="/contact" class="button-round-primary">إنضم الآن</a>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
</main>




 </>
    
   
    
  )
}

