import React from 'react';
import './SevenSlide.scss'
import logo from '../../assets/images/sevenSlide/logo.svg'
import photo from '../../assets/images/banner/slide5.jpg'
import Slider from '../Slider/Slider';
const SevenSlide = () => {
    const blogs =[
        {
            id:"1",
            name:"عدم إمكانية ادخال طلب قرض",
            width:"86px",
        },
        {
            id:"2",
            name:"تحديث الفحص الائتماني للعميل",
            width:"80px",
        },
        {
            id:"3",
            name:"طلب تحديث بيانات السداد للعميل",
            width:"75px",
        },
        {
            id:"4",
            name:"إعتراض العميل على أسباب الرفض",
            width:"70px",
        },
        {
            id:"5",
            name:"استفسار عن مرحلة طلب تمويل منتج سيولة",
            width:"65px",
        },
        {
            id:"6",
            name:"التأخر في معالجة الطلب",
            width:"60px",
        },
        {
            id:"7",
            name:"تأخر تحويل الأمانات على الحساب",
            width:"60px",
        },
        {
            id:"8",
            name:"طلب إضافة او تعديل بيانات العميل",
            width:"55px",
        },
        {
            id:"9",
            name:"التأخر في إيداع قيمة القرض بحساب العميل",
            width:"55px",
        },
        {
            id:"10",
            name:"الغاء طلب تمويل عمل حر",
            width:"50px",
        },
        {
            id:"11",
            name:"إضافة جهة حسم",
            width:"45px",
        },
        {
            id:"12",
            name:"التأخر في معالجة طلب التمويل",
            width:"40px",
        },
        {
            id:"13",
            name:" عدم إمكانية استكمال الملاحظات من خلال الموقع",
            width:"35px",
        },
        {
            id:"14",
            name:"قسط محسوم من جهة العمل لم يتم تحديثه على",
            width:"30px",
        },
        {
            id:"15",
            name:"قسط محسوم من جهة العمل لم يتم تحديثه على ",
            width:"25px",
        },
        {
            id:"16",
            name:" طلب الغاء الشهادة الأسر المنتجة",
            width:"20px",
        },
        {
            id:"10",
            name:"تحديث الفاتورة على حساب المستفيد",
            width:"15px",
        },
    ]
    const h1 =`المهام التشغيلية`
   const h3 = ``
   const bg = `#9735c7ad`
    return (
        <>
        <Slider h1={h1} h3={h3} bg={bg} img={photo}/>
        <div className='sevenSlide'>
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                      <div className="seven-slide-image" style={{overflow:"hideen"}} data-aos="zoom-out-right" data-aos-duration="1400">
                      <img src={photo} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="seven-slide-content" style={{overflow:"hideen"}}  data-aos="zoom-out-left" data-aos-duration="1200">
                        <h2>المهام التشغيلية</h2>
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="container" style={{paddingTop:'100px', paddingBottom:'70px'}}>
        <div className="fourth-header mb-5" data-aos="zoom-in-left" data-aos-duration="1300">
                <h2 className='text-end semi-bold'> تحليل نظام التذاكر <span style={{color:"#9735c7"}}> 
                (التحديات)
               </span>
                </h2>
        </div>
        <div className="pest-banner-title" data-aos="zoom-in-left" data-aos-duration="1200">
            <p>أثناء تحليلنا المبدئي، لاحظنا أن نظام تصنيف البلاغات الحالي يتضمن قائمة واحدة من العناصر أحادية البعد (one-dimensional) التي تحاول وصف الـبلاغات الأكثر شيوعًا وفي بعض الأحيان تشمل اسم المنتج المعني</p>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="pest-bg-card-container" data-aos="zoom-in-left" data-aos-duration="1200">
                    <div className="big-blog-headline">
                        <h6>حاليًا قسم خدمة العملاء في بنك التنمية الاجتماعية يستخدم لائحة تضم 154 فئة لتصنيف تفاعلات العملاء</h6>
                        <img src={logo} alt="" />
                    </div>
                    {
                        blogs.map(item=>{
                            return(
                                <div className='blogs' key={item.id}>
                                   <span style={{width:`${item.width}`}}></span>
                                   <div className="blog______text">
                                    <p>{item.name}</p>
                                    <p>.{item.id}</p>
                                   </div>
                                </div>
                            )
                        })
                    }
                    <div className="flex_____box___">
                         <div className="parcentaze-content">
                         <p>استفسارات (7,233)</p>
                          <span style={{background:"#314fed"}}>10%</span>
                         </div>
                         <div className="parcentaze-content">
                         <p>شكاوى (49,406)</p>
                          <span style={{background:"#f7752c"}}>45%</span>
                         </div>
                         <div className="parcentaze-content">
                           <p>طلبات (39,721)</p>
                          <span style={{background:"black"}}>45%</span>
                         </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="pest-bg-card-container" data-aos="zoom-in-left" data-aos-duration="1200">
                    <div className="big-blog-headline">
                        <h6> تتطور مع مرور الوقت للتعامل مع تفاعلات العملاء الجديدة</h6>
                    
                    </div>

                      <div className="paragraph__content">
                      <p> تتطور هذه القوائم عادةً من قائمة مبدئية إلى قائمة طويلة مفصلة</p>
                    <p> حيث يبدأ المستخدمون في طلب تنصنيفات جديدة لإضافتها إلى النظام للتعامل مع أنواع جديدة من الاستفسارات أو الشكاوى أو الطلبات التي يتم التعامل معها مع العملاء</p>
                      </div>
                
                    
                </div>
            </div>
            <div className="col-lg-3">
                <div className="pest-bg-card-container" data-aos="zoom-in-left" data-aos-duration="1200">
                    <div className="big-blog-headline">
                    <h6>لائحات تصنيف تفاعلات خدمة العملاء الأولية ...</h6>
                    </div>

                      <div className="paragraph__content">
                       <p>. عند تسجيل تفاعلات خدمة العملاء، تبدأ العديد من المؤسسات باستخدام قائمة واحدة تضم فئات أحادية البعد (one-dimensional)</p>
                       <p>. يستخدم موظفين خدمة العملاء هذه الائحة لتسجيل استفسارات العملاء والشكاوى والطلبات المستلمة</p>
                      </div>
                
                    
                </div>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default SevenSlide;