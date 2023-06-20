import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';



export default function leader() {
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
                        <div class="back-title">تنمية القيادات </div>
                        <h1 class="section-title">
                          {" "}
                          <span class="primary-color">
                            {" "} تنمية القيادات  
                           
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
                        <h4 style={{textAlign:"center",color: "rgba(14, 180, 180, 1)"}}>يأتي التكوين كوسيلة لإعداد خلف في مستوى تحديات الواقع والمجتمع، فينسجم بذلك مع روح الحركة الكشفية التي تجعل صناعة المواطن الصالح الهدف الأكثر من وجودها  </h4>
                        <p className='text-right' >
                         يعتبر تكوين وتأهيل الرأسمال البشري الشريان الذي يجعل الحياة تنبض داخل أي مؤسسة. وقد انطلقنا في عملنا في جمعية كشافة المغرب من قناعة أن تأهيل العنصر البشري يشكل تميزنا الحقيقي في الساحة الجمعوية، لهذا الغرض وضعت الجمعية ضمن مخططها الاستراتيجي رؤية واضحة في مجال تكوين وتأهيل وتنمية رأسمالها البشري، وفق منظومة متجددة تخرج أفرادا قادرين على الفعل الإيجابي في مجتمعهم، والتأثير فيه بشكل يعزز روح المواطنة والإبداع والابتكار انطلاقا من الهوية المغربية المشتركة و الدين الإسلامي الحنيف. ولهذا فقد كانت الجمعية رائدة في الاهتمام وتكوين وتدريب قادتها و أطرها، إذ كانت السباقة لتنظيم تكاوين علمية وعملية وقيادية في عدد من المواضيع ولأول مرة في المغرب. واندمجت بفاعلية في كل المبادرات التي أطلقتها وزارة الشباب والرياضة والثقافة والتواصل، وعدد من الهيئات الأخرى الجمعوية والمتخصصة. كما عملت على تحفيز وتشجيع كافة الفروع والقادة للاهتمام بتأهيل الخلف وتكوينهم للمضي قدما بمشروعها نحو مستقبل مشرق، ضمانا لاستمرارية الفعل والقعالة، مما خلق أجواء من التنافس بين الأعضاء، وجعل من الإبداع في مجال التكوين والتأطير السمة الغالية على كل ما ينظم من دورات على امتداد فروع المملكة ومن أجل تأطير محكم لهذا المجال، تم خلق مجموعة من البرامج أهمها  </p>
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
               برنامج تنمية القيادات
               </h4>
               </div>
               <div style={visible[0]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
               <div class="margin-bottom margin-small">
                   <div class="max-width-large">
                     <div  class="text-rich-text w-richtext">
                       <p class="text-right" >
                       ويعتمد على دورات تكوينية في مخلف المجالات القيادية. وتهم عددا من أعضاء الجمعية من أقسام الكشافة والمرشدات والجوالة والرائدات الذين يتم اختيارهم بناء على معايير محددة وصارمة تستحضر المستوي التربوي وروح الانضباط، والإبط، والإبداع واستيعاب مشروع المنظمة وأهدافها التي تعمل على تنزيلها. الهدف الأساسي من التكوين هو تخريج قادة يمكن للجمعية الاعتماد عليهم في مسيرتها الجمعوية والتربوية. كما يمكن أن يشكلوا قيادات بالنسبة للوطن في العديد من التخصصات. وقد كانت بداية البرنامج بشكل مركزي لكنها امتدت إلى الفروع التي أبان أعضاؤها عن قدرة إبداعية كبيرة في تحديد مضامين جديدة ومتميزة للتكوين، تتماشى مع خصوصيات الجهة التي ينتمون إليها في انسجام مع التوجيهات الوطنية الكبرى للجمعية في المجال نفسه                     </p>
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
                  برنامج التربوي المدرسي
                  </h4>
                  </div>
                  <div style={visible[1]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          يستهدف أساسا تلاميذ المراحل الثانوية الإعدادية والتأهيلية، ويقوم على توفير أساتذة متخصصين في مختلف المواد الدراسية قصد تقديم دروس الدعم والمواكبة والتقوية. ويتخلل الدروس عدد من الدورات في مجال التفوق الدراسي، والتحرر من الخوف والارتباك أثناء الامتحانات، وكدا تدبير الوقت.... ويتم هذا الأمر بتأطير من أطر ومدربين متخصصين في مجال التنمية البشرية وتقوية القدرات، والدعم النفسي للتلميذ</p>
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
                  برنامج التداريب الوزارية
                  </h4>
                  </div>
                  <div style={visible[2]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          من التكاوين التي تنخرط فيها الجمعية بقوة. حيث تنظم بشراكة مع وزارة الشباب والرياضة والثقافة والتواصل عدد من التكاوين لفائدة أطرها في مجالات تخص المخيمات الصيفية. فالانخراط في هذه التكاوين يجعل الجمعية تكون قاعدة من القادة المتخصصين في مجال التأطير، والإنشاد والتعبير والاقتصاد وإدارة المخيمات الصيفية، والمعترف بقدراتهم من طرف الدولة والمؤشر عليها عن طريق ديبلومات وزارية. وتعتبر هذه التداريب فرصة لاكتشاف طاقات جديدة لدى الأعضاء، خصوصا بعد حصولهم على رصيد علمي كافي يمكنهم من فهم نفسية الطفل والتعامل معها بالشكل الصحيح والمناسب            </p>            </div>
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
                  برنامج التداريب الكشفية
                  </h4>
                  </div>
                  <div style={visible[3]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                        
                          <p   class=" text-right">
                          يختص هذا التدريب في كل ما يتعلق بالعمل الكشفي المحض. وتعنى بها كل الفئات العمرية والأقسام الكشفية في الجمعية. ويكون التكوين ميدانيا بحيث يمكن المستفيدين من مختلف أنشطة الجمعية، من عدد من القواعد التي تسهل عليهم الاعتماد عليهم الاعتماد على النفس والتأقلم مع كل الظروف المحيطة، وأيضا تحمل المسؤولية حتى في غياب أبسط شروط الراحة           </p><p class="text-right"> ويتضمن ذلك عددا من الأنشطة من بينها الطبخ الخلوي وبناء الخيام والتجمع والخرجات الكشفية، والأعمال اليدوية والعقد وغيرها  </p>           </div>
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
                   <h4 class="bg-title">تنمية القيادات </h4>
                   <ul >
                      <li>
                         <a  style={{textAlign:"right"}} href="#1">	برنامج تنمية القيادات<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li>
                      <li>
                         <a   style={{textAlign:"right"}} href="#1">	برنامج التربوي المدرسي<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li> <li>
                      <a     style={{textAlign:"right"}} href="#1">	برنامج التداريب الوزارية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                   </li> <li>
                   <a    style={{textAlign:"right"}} href="#1">	برنامج التداريب الكشفية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
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

