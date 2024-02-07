import React from 'react';
import './SixthSlide.scss'
import img from '../../assets/images/sixthSlide/logo.svg'
import img2 from '../../assets/images/sixthSlide/logo2.svg'
import servicelogo from '../../assets/images/sixthSlide/1.svg'
import servicelogo2 from '../../assets/images/sixthSlide/2.svg'
import servicelogo3 from '../../assets/images/sixthSlide/3.svg'
import servicelogo4 from '../../assets/images/sixthSlide/4.svg'
import servicelogo5 from '../../assets/images/sixthSlide/5.svg'
import logo1 from '../../assets/images/seventhSlide/logo1.svg'
import logo2 from '../../assets/images/seventhSlide/logo2.svg'
import g1 from '../../assets/images/common-img/1.svg'
import g2 from '../../assets/images/common-img/2.svg'
import g3 from '../../assets/images/common-img/3.svg'
import g4 from '../../assets/images/common-img/4.svg'
import g5 from '../../assets/images/common-img/5.svg'
import g6 from '../../assets/images/common-img/6.svg'
import g7 from '../../assets/images/common-img/7.svg'
import g8 from '../../assets/images/common-img/8.svg'
import g9 from '../../assets/images/common-img/9.svg'
import g10 from '../../assets/images/common-img/10.svg'
import g11 from '../../assets/images/common-img/11.svg'
import g12 from '../../assets/images/common-img/12.svg'
import g13 from '../../assets/images/common-img/13.svg'
import g14 from '../../assets/images/common-img/14.svg'
import g15 from '../../assets/images/common-img/15.svg'




const FourteenSlide = () => {
    const blogData =[
        {
            id:"#74c23d",
            name:"المرحلة الخامسة",
            smallTitle:"إطلاق المنتج",
            post:"إعداد مناهج مختلفة حول كيفية إطلاق المنتج، وضع خطة تواصل واضحة لإبلاغ العملاء بالمنتج الجديد ثم يتم إعداد خطة عالية المستوى لبدء الإطلاق",
            img:g1,
            smallColor:"#f7752c"
        },
        {
            id:"#24bec8",
            name:"المرحلة الرابعة",
            smallTitle:"تقييم مخاطر المنتج",
            post:`يتم تقييم المخاطر المرتبطة بإطلاق منتج/منتجات وتقييم المخاطر المادية المرتبطة بالمنتج بالإضافة الى احتواء ومراقبة المخاطر المحتملة المرتبطة`,
            img:g2,
            smallColor:"black"
        },
        {
            id:"#2e23a7",
            name:"المرحلة الثالثة",
            smallTitle:"تطوير المنتج",
            post:`إنشاء تصميم عالي المستوى وإعداد المتطلبات الفنية عالية المستوى ثم يتم تحديد عينة من العملاء لإجراء الاختبار النهائي ثم إطلاقها عليهم`,
            img:g3,
            smallColor:"#f7752c"
        },
        {
            id:"#314fed",
            name:"تصميم المنتج",
            smallTitle:"تصميم المنتج",
            post:`رسم خارطة رحلة العميل وتطوير نهج مستهدف للوصول إلى العملاء وإنشاء ومشاركة متطلبات العمل المعتمدة النهائية (بما في ذلك العمليات الداخلية).`,
            img:g4,
            smallColor:"#314fed"
        },
        {
            id:"#df40b6",
            name:"المرحلة الاولى",
            smallTitle:"دراسة المنتج",
            post:`تحديد الهدف الذي يسعى الى تحقيقه المنتج، وتحليل وإجراء البحث اللازم لتحديد شريحة وفئة العملاء المستهدفة`,
            img:g5,
            smallColor:"black"
        },
    ]
    return (
        <div className="container mb-5" style={{padding:"100px 0"}}>
        <div className='SixthSlide' data-aos="zoom-in-left" data-aos-duration="1100">
                 <div className="fourth-header" data-aos="fade-up"
                  data-aos-duration="1200">
                <h2 className='text-end semi-bold'> أفضل الممارسات
                     (الحلول)
                </h2>
            </div>
        </div>
        {/*  */}
        <div className="sixth-row mb-3">
            <div className="sixth-right-side-column" data-aos="zoom-in-left" data-aos-duration="1200">
                <div className="headline-sixth-column main-class" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
            {/*  */}
            <div className="sixth-card-content main-bg-class" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                   <div className="flex-column-title">
                    <p>تصميم دليل تواصل مبني على دراسات تمكن و تساعد المعنيين به على إتمام عمليات تواصل فعالة و مهنية.</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>تحليل الفجوات في جودة التواصل الكتابية و دمجها في دليل التواصل مع مراعات مراعاة أن ليس كل التواصل المكتوب عبارة عن كلمات، و يحتوي على رموز تعبيرية.</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>تصنيف أنماط العملاء بشكل واسع مع توصيات بكيفية التعامل مع كل نمط في اطار معين.</p>
                    <span>.3</span>
                   </div>
                  
                </div>
               {/*  */}
               <div className="headline-sixth-column main-class" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
                 {/*  */}
                 <div className="sixth-card-content main-bg-class" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                   <div className="flex-column-title">
                    <p>حصر رحلات عملاء البنك و بناء رسائل فاعلية تناسب كل مرحلة و ضمان إيصالها للعميل.</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>تحليل الفجوات في جودة التواصل الكتابية و دمجها في دليل التواصل مع مراعات مراعاة أن ليس كل التواصل المكتوب عبارة عن كلمات، و يحتوي على رموز تعبيرية.</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>تصنيف أنماط العملاء بشكل واسع مع توصيات بكيفية التعامل مع كل نمط في اطار معين.</p>
                    <span>.3</span>
                   </div>
                  
                </div>
                 {/*  */}
            </div>

            <div className="sixth-right-side-column" data-aos="zoom-in-left" data-aos-duration="1400">
            <div className="headline-sixth-column red-border___" >
                     <h5><span> تحديات </span>
                     إطلاق منتج جديد      
                   </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content need-min-height" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                   <div className="flex-column-title">
                    <p>لا يوجد اليات استجابة موحده عبر دليل تواصل شامل مما يؤدي الى تباين في الاستجابة من موظف لاخر.</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>كتابيا لا يوجد الية موحده للرد على الشكاوي او الاستفسارات على منصات التواصل الاجتماعي.</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>لا يوجد دراسة لانماط العملاء و كيفية التعامل معهم.</p>
                    <span>.3</span>
                   </div>
                   
                </div>

                <div className="headline-sixth-column red-border___" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                     <h5>
                        <span>تحديات</span> سد فجوات رحلة العميل                
                          </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content need-min-height" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                   <div className="flex-column-title">
                    <p>عدم وجود أولوية لتخصيص الموارد و ممكنات التواصل او تخصيص مخزون لسيناريوهات بعينها.</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>وجود فجوات في عملية التواصل مع العملاء في عدة نقاط في الرحلة</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>غياب منهجية للتعامل مع الأسئلة الشائعة و غياب ألية متابعة أثر الأسئلة الشائعه و مدى فعاليتها.</p>
                    <span>.3</span>
                   </div>
                   <div className="flex-column-title">
                    <p>عدم وجود تدريب مستمر وبناء المعرفة للموظفين الذين يتعاملون مع العملاء</p>
                    <span>.4</span>
                   </div>
                </div>
                
            </div>

        </div>
        {/*  */}
          {/*  */}
        </div>
    );
};

export default FourteenSlide;