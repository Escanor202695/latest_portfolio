import React from 'react';
import './ThirdSlide.scss'
import frame from '../../assets/images/logo/frame.png'
import frame11 from '../../assets/images/frame/logo.png'
import leftLogo from '../../assets/images/frame/table.png'
import mainFrame from '../../assets/images/frame/frame.png'
import mainFrame2 from '../../assets/images/frame/frame2.png'
import gridimg from '../../assets/images/frame/grid-img.svg'
import svgicon from '../../assets/images/frame/svg.svg'
import Slider from '../Slider/Slider';
import img from '../../assets/images/banner/2nd.jpg'
import img1 from '../../assets/images/banner/11.png'
import img2 from '../../assets/images/banner/22.png'
import img3 from '../../assets/images/banner/33.png'
import img4 from '../../assets/images/banner/44.png'
import img5 from '../../assets/images/banner/55.png'
import img6 from '../../assets/images/banner/66.png'


const ThirdSlide = () => {
   const  h1=`مؤشرات الاداء`
   const h3=``
   const bg = '#314fedbd'
    return (
      <div>
          <Slider h1={h1} h3={h3} bg={bg} img={img} />
        <div className='py-3' style={{margin:"100px 0",}}>
            <div className="container">
            <div className="third-navbar">
               <div
               className="navlink___"
               data-aos="zoom-in-left"
               data-aos-duration="1100"
               >
               <a href="">إدارة العمليات</a>
               <a href="">بيئة تحليلية – مكعب طلبات</a>
               <a href="">نظام رضى العميل</a>
               <a href="" className="active">
                  المصادر:
               </a>
               </div>
               <div
               className="nav___logo"
               data-aos="zoom-in-left"
               data-aos-duration="1400"
               >
               <h2>
                  {" "}
                  ملخص مؤشرات تجربة العملاء –{" "}
                  <span style={{ color: "#314FED" }}>(التحديات)</span>
               </h2>
               </div>
            </div>
             <div className="row mt-5 pt-4">
                <div className="col-lg-4">
                   <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img1} alt="" />
                   </div>
                </div>
                <div className="col-lg-4">
                    <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img2} alt="" />
                   </div>
                </div>
                <div className="col-lg-4">
                <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img3} alt="" />
                   </div>

                </div>

                {/*  */}
                <div className="col-lg-4 mt-5 pt-3">
                <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img4} alt="" />
                   </div>
                </div>

                {/*  */}

                 {/*  */}
                 <div className="col-lg-4 mt-5 pt-3">
                 <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img5} alt="" />
                   </div>
                </div>
                <div className="col-lg-4 mt-5 pt-3">
                <div className="grid-item-img" data-aos='zoom-in-left' data-aos-duration="1100">
                     <img src={img6} alt="" />
                   </div>
                </div>

                {/*  */}
            

                <div className="col-lg-4">
                    <div className="box spacing need-more-height" data-aos='zoom-in-left' data-aos-duration="1100">
                        <div className="box-caption">
                            <h6>برنامج صوت العميل</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                             <p>. التكامل مع الإدارات لتسهيل العقبات للوصول لتجربة العملاء التي نرجوها هو أولويتنا، نسعى لوضع الجميع على نفس الصفحة لفهم العميل ومراقبة تصرفاته والتمركز حوله</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                            
                           <div className="grid-container">
                              <div className="grid_box position-changing">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                 <p>تزويدنا بنصوص نتائج الإجراءات على طلبات العملاء في مرحلة المعالجة ليتم تحسينها</p>
                              </div>

                              <div className="grid_box position-changing">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                  <p>اعتماد سياسة تصنيف البلاغات وعكسها على CRM مشروع تطوير تصنيفات البلاغات</p>
                              </div>

                              <div className="grid_box">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                   <p>TATالتكامل مع إدارة العمليات في تطوير لوحة البيانات وتوضيح نسبة صحة اعتراض العميل على الرفض</p>
                              </div>

                              <div className="grid_box">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                   <p>توضيح حجم الزيارات بشكل تفصيلي للمنتجات بالموقع الإلكتروني</p>
                              </div>

                           </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="box spacing need-more-height" data-aos='zoom-in-left' data-aos-duration="1300">
                        <div className="box-caption">
                            <h6>أبرز الصعوبات وتصنيفها</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                              <p>التعمق في تصنيف الصعوبات لمعرفة مشاكل العميل وحلها بالشكل المطلوب</p>
                              <p> المشاكل التشغيلية والتقنية المتكررة تجعل ضرورة إعطاء الأولوية لتحسين عمل الأنظمة واستجابتها لأعلى معايير تجربة المستخدم وهو ما يسهل على العملاء رحلتهم</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                            <div className="grid___parent">
                              <div className="grid-tag-line">
                                 <h5>إجرائية - تشغيلية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>التأخر بمعالجة طلبات الأسر المنتجة</p>
                                    <p>التأخر بالرد على اتصالات العملاء</p>
                                    <p>التأخر في صرف التمويل</p>
                                    <p>توثيق منتج زود الادخاري</p>
                                    <p>عدم وضوح أسباب الرفض</p>
                                 </div>
                              </div>
                              <div className="grid-tag-line">
                                 <h5>تقنية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>وجود مشاكل تقنية</p>
                                    <p>عطل فني في تعبئة العمل الحر</p>
                                    <p>حدوث مشكلة أثناء رفع الملفات خطأ</p>
                                 </div>
                              </div>

                              <div className="grid-tag-line border-delete">
                                 <h5>تشريعية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>شرط الالتزامات وحد الراتب والكفيل</p>
                                 </div>
                              </div>
                            </div>
                           
                    </div>
                </div>
                   
                <div className="col-lg-4">
                    <div className="box spacing need-more-height" data-aos='zoom-in-left' data-aos-duration="1400">
                        <div className="box-caption">
                           <h6>إحصائيات مراكز الدعم</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                              <p>. الاستفسارات الأعلى هي عن مرحلة طلب تمويل والسياسات الائتمانية واللوائح وأسباب الرفض مشكلة تجربة مستخدم في نظام (LEN)</p>
                              <p>أهم أحد أسباب البلاغات هي الصعوبات والمشاكل التقنية.</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>

                         <div className="row-grid">
                           <div className="col-lg-grid">
                             <span>حجم البلاغات</span>
                             <div className="cols-flex">
                                <div className="col-one">
                                  <h6>الشكاوى</h6>
                                  <h3>5,733</h3>
                                </div>
                                <div className="col-two">
                                 <h6>طلب خدمة</h6>
                                 <h3>30,604</h3>
                                </div>
                             </div>
                             <div className="center-align-div">
                               <h5>استفسارات</h5>
                              <h3>40,688</h3>
                             </div>
                           </div>
                           <div className="col-lg-end-side text-end">
                              <span>حجم البلاغات</span>
                              <h6>إجمالي البلاغات</h6>
                              <h4><span>بلاغ</span>77,031</h4>
                              <h6 style={{color:"red",marginBottom:"12px"}}>إجمالي البلاغات</h6>
                              <img src={svgicon} alt="" />
                           </div>
                         </div>
                           
                    </div>
                </div>

             </div>
             {/* other rows */}
             <div className="other-headline-text" data-aos="zoom-in-left"
                 data-aos-duration="1100" style={{marginTop:"100px"}}>
               <h1 className="text-end mt-5 semi-bold">
               ملخص المشاريع – <span>(الحلول)</span>
               </h1>
            </div>
            {/*  */}
            <div className="row mt-5">
               <div className="col-lg-4">
               <div
                  className="more-grid height-cusstomization"
                  data-aos="zoom-in-left"
                  data-aos-duration="1200"
               >
                  <h6>الحلول</h6>
                  <p>
                     . إضافة أدوات تتبع العميل داخل الموقع لمعرفة الخرائط الحرارية
                     وطبيعة سلوكه داخل الموقع.
                  </p>
                  <p>. يجري العمل على وضع سياسة تحسين رحلة العميل وسد الفجوات.</p>
                  <p>. تجري مراقبة الصعوبات بشكل يومي.</p>
                  <p>
                     . إعادة النظر والحساب لنظام قياس تجربة العملاء باستبانات تقييم
                     تغطي جميع مراحل المنتجات والخدمات.
                  </p>
                  <p>
                     . توحيد طريقة الرد على العملاء في منصة تويتر بحيث يتم إعطاء
                     معلومات وافية لهم إن أمكن
                  </p>
                  <p>. معالجة التأخر التشغيلية وتسهيلها على العملاء.</p>
                  <div className="padding-bottom____"></div>
               </div>
               </div>
               <div className="col-lg-4">
               <div
                  className="more-grid"
                  data-aos="zoom-in-left"
                  data-aos-duration="1200"
               >
                  <h6 style={{ background: "blue" }}>نقاط الألم</h6>
                  <p>. صعوبات تقنية في النظام تعيق تجربة العملاء.</p>
                  <p>. تحديات في التعامل مع استفسارات العملاء.</p>
                  <p>. التأخر في الإجراءات.</p>
               </div>
               <div
                  className="more-grid mt-3"
                  data-aos="zoom-in-left"
                  data-aos-duration="1400"
               >
                  <h6>الانجازات</h6>
                  <p>
                     . إطلاق موقع البنك بحلته الجديدة وبتجربة مستخدمين مازالت تحت
                     الرصد.
                  </p>
                  <p>. وضوح المحتوى، مع الترجمة الكاملة للموقع.</p>
                  <p>. زيادة سرعة تحميل الصفحة عن الربع السابق.</p>
                  <p>. ارتفاع مؤشر الرضى في خدمتين.</p>
                  <p>
                     . إطلاق صفحة FAQ في الموقع الجديد لتكون مرجعاً للعملاء يغذي
                     نقاط التواصل للخدمات والمنتجات.
                  </p>
                  <p>. رسائل إتمام الخدمة.</p>
               </div>
               </div>
               <div
               className="col-lg-4"
               data-aos="fade-left"
               data-aos-duration="1400"
               >
               <div className="side__bar">
                  <div className="sidebar____text___bg">
                     <h6>المشاريع والبرامج</h6>
                  </div>
               </div>
               <div className="border-text__">
                  <p>التجهيز لمنصة الأسر المنتجة</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>برنامج ولاء العملاء</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>تحسين رحلة العملاء بالفروع</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>برنامج المشاركة الالكترونية</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>تحسين تطبيق البنك</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>برنامج مجموعات التركيز</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>مشروع رحلات العميل</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>NPS خطة تنفيذية لدراسة نسبة العملاء المروجين</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>الانضمام لجائزة تجربة العميل السعودية</p>
                  <span></span>
               </div>

               <div className="border-text__">
                  <p>الاستعداد لليوم العالمي لتجربة العميل</p>
                  <span></span>
               </div>
               </div>
            </div>
            {/*  */}
         </div>
         </div>
      </div>
   );
   };

   export default ThirdSlide;
