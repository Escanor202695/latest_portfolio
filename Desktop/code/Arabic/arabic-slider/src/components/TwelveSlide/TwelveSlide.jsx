import React from 'react';
import './TwelveSlide.scss'
import logo from '../../assets/images/tweleSlide/logo.svg'
import logo1 from '../../assets/images/tweleSlide/logo2.svg'
import logo3 from '../../assets/images/tweleSlide/logo3.svg'
import arrow from '../../assets/images/tweleSlide/arrow.png'
import TopSlide from '../TopSlide/TopSlide';
const TwelveSlide = () => {
    return (
        <>
        <TopSlide/>
        <div style={{paddingBottom:"80px"}}>
        <div className='container'>
                <div className="fourth-header my-5" data-aos="zoom-in-left" data-aos-duration="1000">
                <h2 className='text-end semi-bold'> المتطلبات الأساسية <span style={{color:"#F09713"}}> 
                 (التحديات)
               </span>
                </h2>
        </div>
        <div className="orange-headline__" data-aos="zoom-in-left" data-aos-duration="1400">
       <h6 data-aos="zoom-in-left" data-aos-duration="1500">تم اقتراح هذه المبادرات بعد إجراء بحث وتحليل البيانات بناءً على المتطلبات التي يمكن تعديلها في المرحلة <br/>الحالية  والفجوات في رحلة العميل</h6>
        </div>
        {/*  */}
        <div className="row" data-aos="zoom-in-left" data-aos-duration="1400">
            <div className="col-lg-3">
                <div className="custome-headline-for-rules">
                    <h6>المبادرة</h6>
                </div>
                <div className="orange-bg-tagline">
                 <p>إنشاء مؤشرات الأداء الرئيسية لحساب TAT وFCR</p>
                </div>
                <div className="orange-bg-tagline">
                 <p>إنشاء قياسات لحساب NPS وCSAT و CES</p>
                </div>

                <div className="orange-bg-tagline">
                 <p>بناء آلية تصعيد لتقديم الدعم من قبل الأقسام الأخرى</p>
                </div>

                <div className="orange-bg-tagline">
                    <p>انشاء دليل ارشادي للتواصل مع العملاء عبر الفروع</p>
                </div>

                <div className="orange-bg-tagline">
                    <p>رفع مستوى الاستثمار في بناء شخصيات العملاء لتوجيه الحملات بالشكل الصحيح</p>
                </div>

                <div className="orange-bg-tagline">
                    <p>انشاء سياسة لاتفاقيات مستوى الخدمة في جميع مراحل رحلة العميل</p>
                </div>
            </div>
            <div className="col-lg-4">
            <div className="custome-headline-for-rules">
                    <h6>نوع المتطلب</h6>
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
                    <h6>عميل داخلي</h6>
                    <img src={logo1} alt="" />
                </div>
            </div>

            
            <div className="image___and____text___grid">
                <div className="arrow____icon">
                <img src={arrow} alt="" />
                </div>
                <div className="arrow-text-flex">
                    <h6>عميل داخلي</h6>
                    <img src={logo1} alt="" />
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
                    <h6>عمليات</h6>
                    <img src={logo} alt="" />
                </div>
            </div>


            </div>
            <div className="col-lg-5">
            
            <div className="image___and____text___grid">
                <div className="arrow____icon top-side">
                <img src={arrow} alt="" />
                </div>
                <div>
                <div className="custome-headline-for-rules">
                    <h6>نوع المتطلب</h6>
                </div>
                <div className="arrow-text-flex">
                    <p style={{fontSize:"16px"}}>عدم وجود مؤشرات الأداء الرئيسية</p>
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
                    عدم وجود مستويات الرضا
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
                    لا يوجد آلية تصعيد
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
                    لا يوجد سيناريو موحد
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
                    الحملات التسويقية لا تصل للفئة المستهدفة            
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
                    لا يوجد اتفاقية مستوى الخدمة واضحة للموظف وإن كانت موجودة فلا يعلم بها العميل
                                </p>
                </div>
                </div>

                 <div className="span-number">
                    <span style={{top:"-6px"}}>6</span>
                 </div>

            </div>

            </div>
        </div>
        {/*  */}
        </div></div>
        </>
    );
};

export default TwelveSlide;