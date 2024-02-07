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




const SixthSlide = () => {
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
        <div style={{margin:"100px 0"}}>
        <div className="container ">
        <div className='SixthSlide'>
                 <div className="fourth-header" data-aos="zoom-in-left"
                  data-aos-duration="1200">
                <h2 className='text-end semi-bold'> أفضل الممارسات <span style={{color:"#f7752c"}}> 
                     (الحلول)
               </span>
                </h2>
            </div>
        </div>
        {/*  */}
        <div className="sixth-row">
            <div className="sixth-right-side-column">
                <div className="headline-sixth-column" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
                <div className="sixth-card-content" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                    <h5 >يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك</h5>
                    <div className="card___container">
                        <div className="card___content___left_side">
                            <h6>منتجات البنك لقطاع الاعمال</h6>
                            <img src={servicelogo} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات البنك الموجه للأفراد</h6>
                            <img src={servicelogo2} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side">
                             <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات القطاع غير الربحي</h6>
                            <img src={servicelogo4} alt="" />
                        </div>
                    </div>
                </div>
               {/*  */}
               <div className="headline-sixth-column" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
                <div className="sixth-card-content" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                    <h5>يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك</h5>
                    <div className="card___container">
                        <div className="card___content___left_side">
                            <h6>منتجات البنك لقطاع الاعمال</h6>
                            <img src={servicelogo} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات البنك الموجه للأفراد</h6>
                            <img src={servicelogo2} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side">
                            <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                             <h6>منتجات القطاع غير الربحي</h6>
                            <img src={servicelogo4} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side" style={{opacity:"0"}}>
                            <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>العناية بالعملاء</h6>
                            <img src={servicelogo5} alt="" />
                        </div>
                    </div>
                </div>
               
                 {/*  */}
            </div>

            <div className="sixth-right-side-column">
            <div className="headline-sixth-column" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                     <h5><span> تحديات</span> إطلاق منتج جديد
                     </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content" data-aos="zoom-in-left"
                 data-aos-duration="1400">
                   <div className="flex-column-title">
                    <p>عملية إطلاق المنتج الجديد غير واضحة وغير منظمة، مما يؤدي إلى تأخيرات ومشاكل</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>عدم وضوح في الأدوار والمسؤوليات لإطلاق المنتجات الجديدة</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                     <p>قد يتعارض إطلاق منتج جديد مع المهام القائمة، مما قد يؤدي إلى مشاكل في العمليات أو الخدمات</p>
                    <span>.3</span>
                   </div>
                   <div className="flex-column-title">
                     <p>ارتفاع عدد البلاغات والشكاوى بسبب التغييرات الغير مجدولة والتي تتضمن إطلاق او تغيير او اغلاق منتجات دون تخطيط او تبرير مسبق</p>
                    <span>.4</span>
                   </div>
                </div>

                <div className="headline-sixth-column" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                     <h5><span> تحديات</span> سد فجوات رحلة العميل
                     </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                   <div className="flex-column-title">
                    <p>رحلة العميل مع البنك غير سلسة أو فعالة، مما قد يؤدي إلى عدم رضا العملاء أو فقدانهم</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك فجوات في رحلة العميل مع البنك، مما قد يؤدي إلى تجربة غير مرضية للعملاء</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك عدم وضوح في المسؤوليات والإجراءات المتعلقة بحوكمة البنك</p>
                    <span>.3</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك عدم وضوح في الأدوار والمسؤوليات المتعلقة بتحسين الخدمات والمنتجات</p>
                    <span>.4</span>
                   </div>
                </div>
                
            </div>

        </div>
        {/*  */}
         
         {/* second section start here */}
         <div className="fourth-header" data-aos="zoom-in-left" data-aos-duration="1000" style={{marginTop:"120px"}}>
                <h2 className='text-end semi-bold'>سياسات إدارة المنتجات <span style={{color:"#F7752C"}}> 
                (الحلول)
               </span>
                </h2>
            </div>
         <div className="second-section-row">
             <div className="green-headline-column">
                <div className="green-headline-flex" data-aos="zoom-in-left" data-aos-duration="1200">
                <h2>مراحل إطلاق منتج جديد</h2>
                <img src={logo1} alt="" />
                </div>
                {/*  */}
                     <div className="green-grids-rows max-height" data-aos="zoom-in-left" data-aos-duration="1300">
                       {
                        blogData.map(item=>{
                            return(
                                <div className='blog-item text-center' key={item.id}  data-aos="zoom-in-left" data-aos-duration="1400">
                                   <img src={item.img} alt="" />
                                   <h3 style={{background:`${item.id}`}}>{item.name}</h3>
                                   <small style={{color:`${item.smallColor}`}}>{item.smallTitle}</small> <br />
                                   <p>{item.post}</p>
                                </div>
                            )
                        })
                       }
                     </div>
                {/*  */}
             </div>
             <div className="green-headline-column ">
             <div className="green-headline-flex"  data-aos="zoom-in-left" data-aos-duration="1200">
                  <h2>دور إدارة تجربة العميل في سياسة إطلاق منتج جديد</h2>
                  <img src={logo2} alt="" />
             </div>
               <div className="left-side-green-rows-grids max-height" data-aos="zoom-in-left" data-aos-duration="1400">
                <div className="left-side-blog-content">
                    <p>التأكد من إتمام تصميم رحلة العميل مع القطاع/ الإدارة التنفيذية المعنية.</p>
                    <img src={g6} alt="" />
                </div>
                <div className="left-side-blog-content">
                     <p>التأكد من اتباع ما ورد في السياسة ومطابقة كافة المتطلبات لاعتماد إطلاق المنتجات الجديدة أو إيقافها من خلال استخدام واستيفاء نموذج قائمة المستندات المطلوبة لإطلاق-إيقاف منتج.</p>
                    <img src={g7} alt="" />
                </div>
               </div>
             </div>
         </div>
          {/*  */}
          {/* bs grid */}
        
          <div className="row" style={{marginBottom:"150px"}}>
            <div className="col-lg-4">
                <div className="blog-headline___" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h6>متطلبات إغلاق الفجوات</h6>
                    <img src={logo1} alt="" />
                </div>
                <div className="single__blog___card___item___ content-align" data-aos="zoom-in-left" data-aos-duration="1200">
                   <div className="single-card-contents">
                    <img src={g8} alt="" />
                    <h6>التكامل والدقة واختيار الوقت المناسب</h6>
                   </div>
                   <div className="single-card-contents">
                    <img src={g9} alt="" />
                    <h6>تفعيل نظام التذاكر في الCRM</h6>
                   </div>
                </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1200">
                <div className="blog-headline___" >
                    <h6>خطوات إغلاق الفجوات</h6>
                    <img src={logo1} alt="" />
                </div>
                <div className="single__blog___card___item___ three-grid-box">
                   <div className="first-grid-box-">
                    <h6>الخطوة الثالثة</h6>
                    <img src={g10} alt="" />
                    <h5>التواصل</h5>
                    <p>يتم التواصل مع العميل من الإدارة المختصة خلال 24 ساعة عمل</p>
                   </div>

                   <div className="first-grid-box-">
                    <h6>الخطوة الثانية</h6>
                    <img src={g11} alt="" />
                     <h5>القرار</h5>
                    <p>عند اكمال الاستبيان يقرر العميل في حال رغبته بتواصل البنك معه ام لا وفي حال رغبته بالتواصل يتم انشاء تذكرة معاودة اتصال</p>
                   </div>

                   <div className="first-grid-box-">
                    <h6>الخطوة الأولى</h6>
                    <img src={g12} alt="" />
                     <h5>التصويت</h5>
                    <p>عند اختيار العميل تقييم منخفض يتم انسدال قائمة بالأسباب</p>
                   </div>

                </div>
                
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1200">
                <div className="blog-headline___" >
                    <h6>الأدوار والمسؤوليات في سياسة سد </h6>
                    <img src={logo2} alt="" />
                </div>
                <div className="single__blog___card___item___ " >
                 <div className="flex-blog-container___">
                   <div className="post-content">
                      <h6>إدارة تجربة العميل</h6>
                      <p>تتبع رأي العملاء وتحليليها ومشاركتها مع القطاعات المسؤولة بعد وضع المقترحات التحسينية والالتزام بمتابعة التحسينات وقياس اثرها على رضا العملاء</p>
                   </div>
                   <div className="post-image">
                     <img src={g13} alt="" />
                   </div>
                 </div>

                 <div className="flex-blog-container___">
                   <div className="post-content">
                      <h6>قطاع الأعمال</h6>
                       <p>التفاعل الإيجابي مع نتائج الاستبيانات والالتزام بخطة العمل والتحسينات واخطار تجربة العملاء بأي تحديث</p>
                   </div>
                   <div className="post-image">
                     <img src={g14} alt="" />
                   </div>
                 </div>

                 <div className="flex-blog-container___">
                   <div className="post-content">
                      <h6>تقنية المعلومات</h6>
                      <p>توفير قاعدة بيانات ومعلومات العملاء لضمان وصول النتائج من العملاء المعنين (المدة الزمنية) وكذلك التعاون في تطوير آلية قياس الرضا</p>
                   </div>
                   <div className="post-image">
                     <img src={g15} alt="" />
                   </div>
                 </div>


                </div>
            </div>
          </div>

          {/*  */}
        </div></div>
    );
};

export default SixthSlide;