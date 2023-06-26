import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';



export default function camps() {
  const [visible,setVisible] = useState([false,false,false,false,false]);
    
  const clicker = (neww) => {
    const newArray = [...visible]; // Crée une copie du tableau existant
    newArray[neww] = !visible[neww]; // Modifie le deuxième élément

   
    setVisible(newArray);

  }
  
  return (
 <>

 
 <main id="content" class="site-main">

 <section class="inner-banner-wrap">
    <div class="inner-baner-container"  style={{backgroundImage:" url(https://static.lematin.ma/files/lematin/images/articles/2017/07/Jeunesse-Ouverture-officielle-du-rassemblement.jpg)"}}>
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
                        <div class="back-title">مخيمات و عطل </div>
                        <h1 class="section-title">
                          {" "}
                          <span class="primary-color">
                            {" "} مخيمات و عطل  
                           
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
                        <h4 style={{textAlign:"center",color: "#000"}}>تساهم المخيمات بشكل خاص في تشكيل وعي الطفل بخصوصيات محيطه وقدرته على الاندماج فيه
                        والتفاعل الإيجابي معه.
                          </h4>
                      {/*  <p className='text-right' >
                         يعتبر تكوين وتأهيل الرأسمال البشري الشريان الذي يجعل الحياة تنبض داخل أي مؤسسة. وقد انطلقنا في عملنا في جمعية كشافة المغرب من قناعة أن تأهيل العنصر البشري يشكل تميزنا الحقيقي في الساحة الجمعوية، لهذا الغرض وضعت الجمعية ضمن مخططها الاستراتيجي رؤية واضحة في مجال تكوين وتأهيل وتنمية رأسمالها البشري، وفق منظومة متجددة تخرج أفرادا قادرين على الفعل الإيجابي في مجتمعهم، والتأثير فيه بشكل يعزز روح المواطنة والإبداع والابتكار انطلاقا من الهوية المغربية المشتركة و الدين الإسلامي الحنيف. ولهذا فقد كانت الجمعية رائدة في الاهتمام وتكوين وتدريب قادتها و أطرها، إذ كانت السباقة لتنظيم تكاوين علمية وعملية وقيادية في عدد من المواضيع ولأول مرة في المغرب. واندمجت بفاعلية في كل المبادرات التي أطلقتها وزارة الشباب والرياضة والثقافة والتواصل، وعدد من الهيئات الأخرى الجمعوية والمتخصصة. كما عملت على تحفيز وتشجيع كافة الفروع والقادة للاهتمام بتأهيل الخلف وتكوينهم للمضي قدما بمشروعها نحو مستقبل مشرق، ضمانا لاستمرارية الفعل والقعالة، مما خلق أجواء من التنافس بين الأعضاء، وجعل من الإبداع في مجال التكوين والتأطير السمة الغالية على كل ما ينظم من دورات على امتداد فروع المملكة ومن أجل تأطير محكم لهذا المجال، تم خلق مجموعة من البرامج أهمها  </p>
  */}    <p style={{opacity:"0"}} id="1">
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
               المخيمات الصيفية
               </h4>
               </div>
               <div style={visible[0]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
               <div class="margin-bottom margin-small">
                   <div class="max-width-large">
                     <div  class="text-rich-text w-richtext">
                       <p class="text-right" >
                        تعتبر محطة المخيمات الصيفية وسيلة أساسية لتفعيل تواصل الأطر مع بعضهم البعض من جهة، وبين الأعضاء المستفيدين فيما بينهم من جهة أخرى. إن المخمات الصيفية محطة أساسية بالنسبة للجمعية تمكنها من اختيار طاقاتها البشرية، ومن الانفتاح على فئات جديدة من المجتمع لم تكن قد انفتحت عليهم خلال السنة. يضاف إلى كل هذا، العملية التربوية التي تتم عبر مصاحبة الطفل والشباب، والتي تمكنه من تحديد أهدافه في الحياة، والتعرف على قدراته وصقلها، وجعل عطلة الصيف محطة للإنتاج والإبداع، عوض أن تكون محطة للفراغ وتضييع الوقت. وفي هذا الإطار تقدم الجمعية العديد من الفقرات التربوية والتعليمية خلال المخيم في طابع ترفيهي، يمكن الأطفال من التعلم السهل والسريع. من بين الفقرات التي تقدم خلال المخيم الصيفي، فقرات إبداعية كالمسرح والأدب والأنشودة والرسم والأعمال اليدوية، وفقرات تعليمية عن طريق أشرطة سمعية وبصرية، ومجالس الأخوة، وورشات الصحافة و الإعلام، وفقرات ترفهية كاللعبة الكبرى، والجيمكانا، والكرمس، وغيرها من الأنشطة وغيرها     </p>       </div>
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
                  المخيمات الربيعية
                  </h4>
                  </div>
                  <div style={visible[1]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          تساهم المخيمات الربيعية في تقديم خدمة مميزة للتلاميذ والطلبة، حيث يجتمع تلاميذ المستويات المراحل الثانوية الإعدادية والتأهيلية لتلقي دروس الدعم التربوي بعيدا عن فضاء حجرات الدراسة والروتيني المعتاد و بطريقة بيداغوجية معتمدة على أصعدة عالية وسلسة، فتتعدد الورشات المقدمة للمستفيدين خلال المخيم الربيعي. فيحظون بعناية خاصة من طرف أطر الجمعية الذين يوفرون لهم كل ظروف الراحة والتركيز. كما يستطيعون أيضا الاستفادة من دروس مجانية من طرف عدد من الأساتذة المتخصصين الذين يواكبون بدورهم المستفيدين طيلة مدة المخيم</p>
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
                  الرحلات والخرجات
                  </h4>
                  </div>
                  <div style={visible[2]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          تنظم جمعية كشافة المغرب بمختلف فروعها خرجات ورحلات عديدة، تكون إما ترفيهية أو كشفية، أو بمواضيع أخرى متنوعة. وتهدف الجمعية من خلال الخرجات إلى تعزيز ثقافة خدمة المجتمع عن طريق الحث على عدد من الأخلاقيات خلال الخرجة، والتعاون والأخوة. كما يكون لها أيضا طابع ترفيهي وتثقيفي يمكن من الترويح على النفس من جهة، والتعريف بالتراث الثقافي والطبيعي للمملكة           </p>            </div>
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
                  برنامج العمرة الكشفية
                  </h4>
                  </div>
                  <div style={visible[3]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                        
                          <p   class=" text-right">
                          ينظم برنامج العمرة الكشفية مرة كل سنة، ويهدف إلى إعادة ارتباط العبد بربه، وتجديد العهد مع الله لخدمة الدين والوطن ابتداء من كون المعتمر كشافا. هذا البرنامج يضم بالإضافة إلى العمرة برنامجا ثقافيا مكثفا، يرمي إلى جعل العمرة محطة للعبادة وأيضا للاستكشاف والتعلم ذلك عددا من الأنشطة من بينها الطبخ الخلوي وبناء الخيام والتجمع والخرجات الكشفية، والأعمال اليدوية والعقد وغيرها  </p>           </div>
                    </div>
                  </div></div></div>
                  <div class="faq-_accordion">
                  <div 
                  onClick={() =>clicker(4)}
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
                  المخيمات الموضوعاتية
                  </h4>
                  </div>
                  <div style={visible[4]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                        
                          <p   class=" text-right">
                          المخيمات الموضوعاتية مجال آخر من المجالات كانت فيها الجمعية نموذجا يحتذى به. حيث تنظم بمختلف فروعها كل سنة مخيمات عديدة، بمواضيع مختلفة تمكن الآباء من القيام بالاختيار الذي يوافق ميولات أبنائهم وما ينوون تربيتهم عليه من مبادئ. هذه الاختيارات تعددت بين المخيم القرآني والبيئي، ومخيم اللغات والجالية، والعلم، والقيم، والمخيم الدولي، ومخيم الموهوب، ومخيم الرائدات، وغيرها كثير. هذا التنوع يخدم ليس فقط المستفيدين، لكن رؤية الجمعية الطامحة إلى الشمولية والانفتاح على آفاق متعددة من الفعل التربوي في الساحة الجمعوية </p>           </div>
                    </div>
                  </div></div></div>
                  </div>
                   </section>
               {/* <!-- blog post item html end -->
  <!-- pagination html start-->*/}
           
  { /* <!-- pagination html start-->*/}
             </div>


          <div style={{marginTop:"10%"}} class="col-lg-4  secondary">
             <div class="sidebar">
                
                <div class="widget widget-bg icon-list-content text-center">
                   <h4 class="bg-title">مخيمات و عطل </h4>
                   <ul >
                      <li>
                         <a  style={{textAlign:"right"}} href="#1">	المخيمات الصيفية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li>
                      <li>
                         <a   style={{textAlign:"right"}} href="#1">	المخيمات الربيعية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li> <li>
                      <a     style={{textAlign:"right"}} href="#1">	الرحلات والخرجات<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                   </li> <li>
                   <a    style={{textAlign:"right"}} href="#1">	برنامج العمرة الكشفية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                </li>
                    <li>
                   <a    style={{textAlign:"right"}} href="#1">	المخيمات الموضوعاتية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                </li>
                
                   </ul>
                </div>
                <div class="widget widget-bg information-content widget-bg-image text-center" style={{backgroundImage: "url(https://bnj.blob.core.windows.net/assets/Htdocs/Images/Pictures/2695104.jpg?puid=877bcf27-1fbc-45c5-a4c0-58afef95f35c)"}}>
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

