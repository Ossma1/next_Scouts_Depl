import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';



export default function loisir() {
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
                        <div class="back-title">مناهج تربوية </div>
                        <h1 class="section-title">
                          {" "}
                          <span class="primary-color">
                            {" "} مناهج تربوية  
                           
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
                        يعتبر المجال التربوي من أهم مرتكزات العمل داخل جمعية كشافة المغرب، بل الهدف الأساسي من وجودها والسبب في تفردها وتميزها، إذ يشمل هذا المجال عددا من الأنشطة التي تهدف إلى ربط المستفيدين منها بالهوية المغربية وكل ما هو أصيل فيها وذلك في توافق تام مع المرجعية الإسلامية للبلد. ويحظى هذا المجال باهتمام خاص ومميز. حيث توفر الجمعية عددا من البرامج والمؤطرين المتخصصين في المجالات المرتبطة بما هو تربوي. وتعمل أيضا على إدماج هذا الأخير في كل أنشطتها على اختلاف أنواعها، وتخصصاتها. حيث تقوم سياسة جمعية كشافة المغرب على تعميق روح الالتزام بتعاليم الدين الحنيف، وتعزيز العمل بأخلاقه الفاضلة، والتربية على الهوية الوطنية الجامعة حيث خصصت عدد من الفقرات في المخيمات الصيفية لهذا الغرض، والتنافس حول حفظ سور من القرآن الكريم، موازاة مع مجالس الأخوة ومجالس الإيمان التي تبرمج صباحا أو مساء، وتناقش قضايا تهم مجال المعاملات وحسن السلوك سواء في المخيم أو خارجه، والصلاة الجماعية، بالإضافة إلى تنظيم مخيم قرآني كل سنة، وليلة قرآنية مرة على الأقل في كل مخيم.  </p>
                           <p  id="1">
                           </p>
                           <p >: هذا، وتنظم الجمعية أيضا نشاط " السلكة " الذي يحتفي بالأطفال الحافظين للقرآن، وينظم احتفال على شرفهم يشكل تشجيعا لباقي أصدقائهم ليحدوا حدوهم، أما عن الأنشطة خارج المخيمات التي تخص المجال التربوي، فيمكن ذكر ما يلي
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
               برنامج تجويد القرآن الكريم للنساء والأطفال
               </h4>
               </div>
               <div style={visible[0]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
               <div class="margin-bottom margin-small">
                   <div class="max-width-large">
                     <div  class="text-rich-text w-richtext">
                       <p class="text-right" >
                       ينطلق هذا البرنامج من الأهمية التي يحظى بها كتاب الله عز وجل في مختلف مناشط الجمعية، وأيضا استنادا للإرث التاريخي للمغاربة والذي جعل هذا الشعب الأول في العالم على مر التاريخ في حفظ القرآن والحفاظ عليه، وأيضا شعبا متميزا في مجال تجويده وضبط وتلقين علومه. وحفاظا على هذا الرصيد المهم أسست الجمعية بعدد من فروعها مركز نور لتجويد وحفظ القرآن. وينفتح هذا المركز على النساء والأطفال، ويوفر دروسا متخصصة في مجال الحفظ والتجويد بطرق جديدة ومبتكرة. وقد عرف هذه المركز إقبالا كبيرا، وانتشارا واسعا في مختلف المدن المغربية عن طريق فروع الجمعية المنتشرة على امتداد التراب الوطني. لقد ساهم هذا المركز في تأطير عدد كبير من الحفظة والقراء الذين تتفاوت أعمارهم وميولاتهم الشخصية. لقد اختيرت فئة الأطفال لقدرتهم على الحفظ في سن متقدمة لما لمراحل التعليم الأولي من أهمية في تكوين شخصية الفرد والتي أرادت لها الجمعية أن تكون مرتبطة بكتاب الله عز وجل. كما استهدفت النساء لعدم توفرهن على فرص كافية لحفظ القرآن وتعلمه، وأيضا للدور الذي تلعبه المرأة في تربية الجيل الصاعد    </p>
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
                  برنامج الأمسيات الربوية
                  </h4>
                  </div>
                  <div style={visible[1]?{height:"auto",display:"block"} : {}} id="bb" class=" faq_answer">
                  <div class="margin-bottom margin-small">
                      <div class="max-width-large">
                        <div  class="text-rich-text w-richtext">
                          <p class="text-right">
                          :  من البرامج التربوية التي تنفتح عليها الجمعية على المواطنين خلال السنة تنظيم عدد من الأمسيات التربوية والفنية احتفاء بمناسبات دينية مختلفة وبمواضيع محددة. بعض هذه الأمسيات ينظم داخل المخيمات والملتقيات الطفولية والشبابية، والبعض الآخر لعموم المواطنين في عدد من المركبات الثقافية، وفي أماكن عامة. وتضمن هذه الأمسيات للحاضرين فيها الاحتفال بالفن الأصيل في جو عائلي. وتتضمن عددا من الأنشطة من بينها الليالي المحمدية، والاحتفال برأس السنة الهجرية، وليلة السابع والعشرين من رمضان، وعيد الفطر، وعيد الأضحى.... وتقدم وصلات إنشادية وقراءات قرآنية وتكريما لعدد من القراء والفرق الإنشادية المغربية<br></br>   وتستغل الجمعية هذه الأمسيات أيضا لإحياء الفن المغربي الملتزم والتراث الفني الوطني. هذا بالإضافة إلى أمسيات أخرى تحت مواضيع غير دينية بالضرورة والتي تستهدف الجيل الناشئ وتربيته على القيم الحميدة تحسيسا بقضايا متنوعة مثل التربية الطرقية وكدا ضرورة الابتعاد عن الأخلاق السيئة كالكذب والرياء والتدخين والمخدرات....</p>
                        </div>
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
                   <h4 class="bg-title">مناهج تربوية</h4>
                   <ul >
                      <li>
                         <a  style={{textAlign:"right"}} href="#1">	برنامج تجويد القرآن الكريم للنساء والأطفال<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
                      </li>
                      <li>
                         <a   style={{textAlign:"right"}} href="#1">	برنامج الأمسيات الربوية<i style={{marginLeft:"10px"}} class="icon icon-arrow-left-circle"></i></a>
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

