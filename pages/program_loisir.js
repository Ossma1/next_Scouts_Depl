import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';



export default function educatif() {
  const [visible,setVisible] = useState([false,false,false]);
    
  const clicker = (neww) => {
    const newArray = [...visible]; // Crée une copie du tableau existant
    newArray[neww] = !visible[neww]; // Modifie le deuxième élément

   
    setVisible(newArray);

  }
  
  return (
 <>

 
 <main id="content" class="site-main">

 <section class="inner-banner-wrap">
    <div class="inner-baner-container"  style={{backgroundImage:" url(https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/347142254_924476702146153_6628312326437862807_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tdTponUaMVsAX9WBnJ-&_nc_ht=scontent.frba3-2.fna&oh=00_AfDmZszjUhovKaoYAI1mDy2fIrIfmuqXewu_7u4t3fzD7Q&oe=64915770)"}}>
       <div class="container">
          <div class="inner-banner-content">
             <h1 class="inner-title">برامج الجمعية</h1>
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
                        <div class="back-title">تربية وترفيه </div>
                        <h1 class="section-title">
                          {" "}
                          <span class="primary-color">
                            {" "} تربية وترفيه  
                           
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
                        <h4 style={{textAlign:"center",color: "rgba(14, 180, 180, 1)"}}>يعتبر التنشيط جزءا هاما من حياة الإنسان، وعاملا أساسيا في بناء شخصيته والتوازن الذاتي فيها
                        والتفاعل الإيجابي معه.
                          </h4>
                    <p className='text-right' >
                    تزداد أهمية الترفيه بالنسبة ل لطفل الذي يحتاج إليه بشكل خاص، لتحديد ميولاته في الحياة ومجالات تخصصه المستقبلية، وإخراج ما في جعبته من قدرات إبداعية وابتكارية. بالإضافة إلى هذا فهو وسيلة للترويح عن النفس. ويعتبر هذا المجال بالنسبة للجمعية مناسبة لتحديد الميولات التربوية والتنشيطية لها، سواء على المستوى الداخلي أو الخارجي، ويؤكد حضورها الفعلي في الساحة الجمعوية، حيث تعتبر مهمة الجمعية الأصلية تحقيق التوازن في شخصية المستفيد، بما يتناسب مع متطلبات كل مرحلة عمرية، وربما يعزز ارتباطه بالقيم الإنسانية النبيلة ويقوي طاقاته الإبداعية والابتكارية، كما يقوي ارتباطه بالمجتمع، عن طريق عدد من الأنشطة التي تزيد من قدرة الطفل والشباب على التواصل مع نفسيهما بداية، ثم مع مجتمعهما، وذلك عبر كل النشاطات التي تقوي روح العمل الجماعي، وتعزز منه كل هذا إلى جانب أن الأنشطة التربوية تعتبر بمثابة الجسر الذي تقوم عن طريقه الجمعية بإيصال رسائلها التربوية باعتماد الطرق البيداغوجية الحديثة والمناسبة والمدمجة في الأنشطة التالية </p>
   <p style={{opacity:"0"}} id="1">
d
                           </p>
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
               برنامج الكرمس
               </h4>
               </div>
               <div style={visible[0]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
               <div class="margin-bottom margin-small">
                   <div class="max-width-large">
                     <div  class="text-rich-text w-richtext">
                       <p class="text-right" >
                       وهو عبارة عن عدد من المسابقاب الترفيهية التي تجمع بين الطابع الفردي والجماعي في آن واحد. وتتم المشاركة فيها عن طريق المرور بسلسلة من الألعاب بشكل منتظم، يكون التنافس فيها على أساس الوقت المعتمد لإنهائها كلها. ويشارك فيها الأطفال بشكل أساسي، وفي العديد من الأحيان بحضور الآباء. وتتخلل المنافسة عدد من الأنشطة الترفيهية كالتنشيط الإذاعي والبهلوانات، وفضاءات لألعاب الذكاء وتنمية القدرات الفكرية والإبداعية. تعتمد فكرة الكرمس أساسا على ألعاب مرتبطة بالمهن المستقبلية للمستفيدين، إضافة إلى الهوائيات التي تخلق جوا من المتعة والفرحة لدى الأطفال على حد سواء</p>       </div>
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
                  القوافل التنشيطية
                  </h4>
                  </div>
                  <div style={visible[1]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          تنظمها الجمعية إما بشكل فردي أو بالشراكة  مع عدد آخر من الجمعيات. وتهدف هذه القوافل إلى إدخال الفرحة في قلوب أطفال المناطق النائية في المغرب، عبر تمكينهم من عدد من الأنشطة التي تتوخى تمكينهم من  الترويح عن النفس، والتمتع ببعض لحظات الطفولة التي يمنع العديد منهم منها، بسبب صعوبة الحياة، وقسوة الظروف التي يعيشون فيها. وتحمل هذه المبادرة في طياتها مشاعر من الأخوة والتضامن مع المناطق النائية. كما أنها تربي في مناضلي الجمعية روحا من استشعار نعم الخالق، والتعرف على حقيقة ما يعانيه جزء من المواطنين الذين يتقاسمون معهم  الوطن، والتاريخ، وتحفزهم إلى أخذ زمام المبادرة، واتخاذ خطوات عملية للتخفيف عنهم والتضامن الإنساني معهم</p>
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
                  برنامج التربية البدنية
                  </h4>
                  </div>
                  <div style={visible[2]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          يعزز هذا البرنامج لدى المستفيدين الوعي بأهمية الاهتمام بالجسد والتربية على الصبر والقدرة على التحمل. ولهذا تتعامل هذه الأنشطة مع المستفيدين بتجاوب تام مع المراحل العمرية لهم وما يحتاجونه من رياضات بناء على سنهم وعلى ميولاتهم الشخصية. ويضم هذا البرنامج كل الرياضات تقريبا، حيث تعرف مخيمات الجمعية محطات رياضية كبرى، مثل الأولمبياد، الرياضة الصباحية، السباحة، تسلق الجبال، دوريات كرة القدم والسلة، الفنون الحربية بمختلف أنواعها، المشي والعدو الريفي أو الماراتون. ولا تستثنى الفتيات من برنامج التربية البدنية حيث يستفدن من دورات خاصة في رياضات من اختيارهن، يستحضرن خصوصياتهن الجسمية وميولاتهن       </p>            </div>
                      </div>
                    </div>
                  </div></div>
                 
              
                  </div>
                   </section>
               {/* <!-- blog post item html end -->
  <!-- pagination html start-->*/}
           
  { /* <!-- pagination html start-->*/}
             </div>


          <div style={{marginTop:"10%"}} class="col-lg-4  secondary">
             <div class="sidebar">
                
                <div class="widget widget-bg icon-list-content text-center">
                   <h4 class="bg-title">تنمية القيادات </h4>
                   <ul >
                      <li>
                         <a  style={{textAlign:"right"}} href="#1">	برنامج الكرمس<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li>
                      <li>
                         <a   style={{textAlign:"right"}} href="#1">	القوافل التنشيطية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li> <li>
                      <a     style={{textAlign:"right"}} href="#1">	برنامج التربية البدنية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
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

