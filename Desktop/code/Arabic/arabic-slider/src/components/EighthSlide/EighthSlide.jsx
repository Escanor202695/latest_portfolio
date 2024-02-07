import React from 'react';
import './EighthSlide.scss'
import img from '../../assets/images/banner/logo.png'
import img2 from '../../assets/images/banner/logo2.png'
import img11 from '../../assets/images/banner/banner6.png'
import Slider from '../Slider/Slider';
const EighthSlide = () => {
  
    return (
        <div className='eighth-slide'>
            <div className="container">
            <div className="fourth-header mb-5" data-aos="zoom-in-left" data-aos-duration="1300">
                <h2 className='text-end semi-bold'> تحليل نظام التذاكر <span style={{color:"#9735C7"}}> 
                (الحلول)
               </span>
                </h2>

                <div className="headline-of-eighthSlide">
                 <p>الا أنه بناءً على بحثنا حول المتطلبات التنظيمية الدولية لأدلة تصنيف البلاغات وتصنيف الشكاوى، يوصى بتصنيف بلاغات خدمة العملاء على أنها متعددة الأبعاد (multi-dimensional) ...</p>
                </div>
             </div>
             <div className="eighth-grid-container">
                <div className="main____height" data-aos="zoom-in-left" data-aos-duration="1000">
                <div className="eighth-item" >
                    <h6 >التصنيف الرابع</h6>
                    <div className="eighth-headline" >
                        <h5>السبب الأولي/ الهدف من رفع البلاغ</h5>
                    </div>
                    {/*  */}
                     <div className="eighth-content height-adjust">
                     <div className="list-style-container">
                       <span>تأخير</span>
                       <span>عطل تقني</span>
                       <span>عدم مطابقة المنتج / الخدمة</span>
                     </div>
                     <div className="parent mt-2">
                       <span>معلومات غير واضحة</span>
                       <span>خدمة العملاء</span>
                       <span>ملاءمة المنتج / الخدمة</span>
                     </div>
                     <div className="text-end-side__">
                       <span>حماية بيانات العميل</span>
                     </div>
                     </div>

                     <div className="eighth-content height-adjust " data-aos="zoom-in-left" data-aos-duration="1200">
                        <div className="more-class">
                        <span>طلب مستندات متعلقة بـ (منتج/خدمة)</span>
                         <span>طلب تمديد (منتج/خدمة)</span>
                         <span>تحديث بيانات العميل (الاسم / العنوان / رقم الجوال)</span>
                         <span>طلب تعديل (منتج/خدمة)</span>
                         <span>طلب إلغاء (منتج/خدمة)</span>
                         <span>طلب إضافات على (منتج/خدمة)</span>
                         </div>
                     </div>

                     <div className="eighth-content height-adjust" data-aos="zoom-in-left" data-aos-duration="1500">
                     <div className="text-end-side__">
                       <span>استفسار عن آلية طلب <br />(منتج / خدمة)</span>
                     </div>
                     <div className="text-end-side__">
                      <span>استفسار عن (منتج / خدمة) <br /> متعلق بالعميل</span>
                     </div>
                     </div>
                     
                    {/*  */}
                </div>
                </div>
                <div className="eighth-item" data-aos="zoom-in-left" data-aos-duration="1500" >
                    <h6 >التصنيف الثالث</h6>
                    <div className="eighth-headline" >
                        <h5>أين في رحلة العميل¹ / نقطة التواصل مع العميل (Touchpoint)</h5>
                    </div>
                    <div className="eighth-content" >
                         <div className="img-section-for-content">
                            <img src={img} alt="" />
                            <h6>نقاط التواصل</h6>
                            <h4>قبل المنتج/الخدمة</h4>
                         </div>

                         <div className="img-section-for-content content-positon-changing" >
                            <img src={img2} alt="" />
                            <h4 className='mt-3'>خلال المنتج/الخدمة</h4>
                         </div>

                         <div className="img-section-for-content content-positon-changing" style={{top:'170px'}} >
                            <img src={img2} alt="" />
                            <h4 className='mt-3'>بعد المنتج/الخدمة</h4>
                         </div>
                    </div>
                </div>
                <div className="eighth-item" data-aos="zoom-in-left" data-aos-duration="1100" >
                     <h6 >التصنيف الثاني</h6>
                    <div className="eighth-headline">
                        <h5>ما هي مجموعة (المنتج / الخدمة) و(المنتج / الخدمة)</h5>
                    </div>
                    <div className="eighth-content" >
                       <div className="eighth-slide-third-section">
                        <div className="flex-eight-content-item">
                            <h3>مجموعة (المنتج / الخدمة)</h3>
                            <h3>.1</h3>
                        </div>
                        <div className="white-border-design" >
                        <h4>المنتج/الخدمة</h4>
                        <h4>.1</h4>
                    </div>
                    <div className="white-border-design" >
                        <h4>المنتج/الخدمة</h4>
                        <h4>.2</h4>
                    </div>
                    <div className="white-border-design" >
                        <h4>....</h4>
                        <h4>.</h4>
                    </div>


                    <div className="flex-eight-content-item mt-4" >
                            <h3>مجموعة (المنتج / الخدمة) </h3>
                            <h3>.2</h3>
                        </div>
                        <div className="white-border-design" >
                        <h4>المنتج/الخدمة</h4>
                        <h4>.1</h4>
                    </div>
                    <div className="white-border-design" >
                        <h4>المنتج/الخدمة</h4>
                        <h4>.2</h4>
                    </div>
                    <div className="white-border-design">
                        <h4>....</h4>
                        <h4>.</h4>
                    </div>

                       </div>
                    </div>
                </div>
                <div className="eighth-item">
                   <h6 data-aos="zoom-in-down" data-aos-duration="1300">التصنيف الأول</h6>
                    <div className="eighth-headline" data-aos="zoom-out">
                      <h5>نوع البلاغ</h5>
                    </div>
                   <div className="box-for-some-content" data-aos="zoom-in-left" data-aos-duration="1300" >
                    <h4>شكوى</h4>
                   </div>
                   <div className="box-for-some-content" data-aos="zoom-in-left" data-aos-duration="1400">
                    <h4>طلب</h4>
                   </div>

                   <div className="box-for-some-content" data-aos="zoom-in-down" data-aos-duration="1400" >
                    <h4>استفسار</h4>
                   </div>
                </div>
             </div>
           
            </div>
          
        </div>
    );
};

export default EighthSlide;