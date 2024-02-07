import React from 'react';
import './TopSlide.scss'
import logo from '../../assets/images/tweleSlide/logo.svg'
import logo1 from '../../assets/images/tweleSlide/logo2.svg'
import logo3 from '../../assets/images/tweleSlide/logo3.svg'
import logo4 from '../../assets/images/tweleSlide/logo4.svg'
import logo5 from '../../assets/images/tweleSlide/logo5.svg'

import arrow from '../../assets/images/tweleSlide/arrow.png'

const TopSlide = () => {
    return (
        <div className='TopSlide ' style={{padding:"50px 0"}}>
            <div className='container'>
                <div className="fourth-header my-5" data-aos="zoom-in-left" data-aos-duration="1200">
                <h2 data-aos="zoom-in-left" data-aos-duration="1600" className='text-end semi-bold'> المتطلبات الأساسية <span style={{color:"#F09713"}}> 
                (التحديات)
               </span>
                </h2>
        </div>
        <div className="orange-headline__" data-aos="zoom-in-left" data-aos-duration="1400" >
        <h6 >تم اقتراح هذه المبادرات بعد إجراء بحث وتحليل البيانات بناءً على المتطلبات التي يمكن تعديلها في المرحلة  <br /> الحالية والفجوات في رحلة العميل</h6>
        </div>
        {/*  */}
        <div className="row" data-aos="zoom-in-left" data-aos-duration="1400">
            <div className="col-lg-3" data-aos="zoom-in-left" data-aos-duration="1100">
                <div className="custome-headline-for-rules">
                    <h6>الحالة</h6>
                </div>
                <div className="orange-bg-tagline">

                 <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"70%"}}></div>
                     </div>
                     <h6 style={{color:"#F09713"}}>جاري العمل</h6>
                 </div>

                </div>

                   <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"100%",borderRadius:"10px"}}></div>
                     </div>
                     <h6 style={{color:"#f09713"}}>
                     متوفر
                    </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير متوفر
                    </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير منتظم
                    </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير متوفر          
                               </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير متوفر
                     </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير متوفر
                     </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"30%",}}></div>
                     </div>
                     <h6 style={{color:"red"}}>
                     غير متوفر
                     </h6>
                 </div>

                </div> 
                <div className="orange-bg-tagline">
                   <div className="flex-container-of-parcent-test">
                     <div className="parcentaze-point-div">
                        <div className="child-div-for-parcentaze" style={{width:"70%",}}></div>
                     </div>
                     <h6 style={{color:"#f09713"}}>
                     جاري العمل
                     </h6>
                 </div>

                </div> 
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1200">
            <div className="custome-headline-for-rules">
                  
                    <h6 >نوع المتطلب</h6>
                </div>
            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>منظمة</h6>
                    <img src={logo1} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>منظمة</h6>
                    <img src={logo1} alt="" />
                </div>
            </div>

          

            
            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>عمليات</h6>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                   <h6>عمليات</h6>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>منظمة</h6>
                    <img src={logo3} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                    <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>
                    عميل داخلي
                        </h6>
                    <img src={logo3} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                    <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>
                    نظام
                    </h6>
                    <img src={logo5} alt="" />
                </div>
            </div>
             
            <div className="image___and____text___grid">
                <div className="arrow____icon">
                    <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>
                    عمليات
                    </h6>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                    <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>
                    عميل داخلي
                    </h6>
                    <img src={logo3} alt="" />
                </div>
            </div>

            </div>
            <div className="col-lg-5" data-aos="zoom-in-left" data-aos-duration="1400">
            
            <div className="image___and____text___grid">
                <div className="arrow____icon top-side">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="custome-headline-for-rules">
                    <h6>نوع المتطلب</h6>
                </div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    المواقع المحدثة في خرائط قوقل                        
                        </p>
                </div>
                </div>

                 <div className="span-number">
                    <span>1</span>
                 </div>

            </div>
            
            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    إدارة مركزية لتوحيد التواصل مع الفروع
                    </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>2</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    مؤشرات الأداء الرئيسية
                    </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>3</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    قياس مستويات الرضا
                    </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>4</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    برامج لتطوير المعرفة والوعي
                     </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>5</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    ألية تصعيد و تواصل مع الإدارات المعنية
                                </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>6</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    الخدمة الذاتية من خلال Kiosk
                                                    </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>7</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    رحلات العملاء الموحدة                          
                                              </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>8</span>
                 </div>

            </div>

            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>
                    دليل تواصل بأنواع سيناريوهات        
                                                          </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>9</span>
                 </div>

            </div>

            </div>
        </div>
        {/*  */}
        </div>
        </div>
    );
};

export default TopSlide;