import React from 'react';
import './FifteenSlide.scss'
import Slider from '../Slider/Slider';
import img from '../../assets/images/sixthSlide/logo.svg'
import img2 from '../../assets/images/sixthSlide/logo2.svg'
import imgs from '../../assets/images/banner/10.jpg'
const FifteenSlide = () => {
    const h1 = `المشاركة المجتمعية`
    const h3 = ``
    const bg = '#19e3bcc7'

    return (
        <>
        <Slider h1={h1} h3={h3} bg={bg} img={imgs} />
        <div className='container mb-4' style={{padding:"70px 0"}}>
        <div className='SixthSlide mt-5 mb-3' data-aos="zoom-in-left"
                 data-aos-duration="1200">
                 <div className="fourth-header" >
                <h2 className='text-end semi-bold'>
                تحليل تحديات التواصل
                </h2>
            </div>
        </div>
        <div className="fifteen-slide-headline items___" data-aos="zoom-in-left"
                 data-aos-duration="1300">
            <h6>يحرص البنك على وصول المعلومات إلى الجمهور، والتفاعل مع آرائهم، وتعزيز مشاركتهم في اتخاذ القرار حيث تجاوزت اجمالي عدد المشاركين في منصات المشاركة الالكترونية للبنك 7000 مشارك حيث ان لها اثر بالغ في الارتقاء بجودة الخدمة المقدمة للجمهور والحرص على وصول أصواتهم وآرائهم ومقترحاتهم للبتك من أجل النظر فيها ودر​استها وتحليلها والتجاوب معها وفقاً للأنظمة واللوائح المعمول بها، من أجل تطوير الأداء وتحقيق الأهداف المرجوة</h6>
        </div>
        <div className="border-bottom-left-side" data-aos="zoom-in-left"
                 data-aos-duration="1500">
        <p>من الأمثلة للآراء والمقترحات التي لها أثر وتم اتخاذ قرار فيها من قبل البنك</p>

        </div>
        {/*  */}
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in-left"
                 data-aos-duration="1200">
            <div className="headline-sixth-column item________" >
                    <h5 >نتائج الرأي او الاقتراح - الحل</h5>
                    <img src={img} alt="" />
                </div>
                 {/*  */}
                 <div className="sixth-card-content main-bg-class classes fifteen-card" style={{border:`1px solid #30cccb`,background:`#e6fcf8`}}>
                  <strong>تم العمل على تحسينات في واجهات وصفحات الخدمة وتوزيع المحتوى بشكل يسهل من تجربة العملاء وتلبية احتياجاتهم بشكل مباشر وإطلاق موقع جديد</strong>
                  
                </div>

                 {/*  */}
                 <div className="sixth-card-content main-bg-class classes fifteen-card" style={{border:`1px solid #30cccb`,background:`#e6fcf8`}}>
                  <strong>تم اتاحة منتج تمويل السيارات لمنتجات العمل الحر للأفراد لتمكين الفئات</strong>
                  
                </div>

                <div className="sixth-card-content main-bg-class classes fifteen-card" style={{border:`1px solid #30cccb`,background:`#e6fcf8`}}>
                 <strong>تم العمل على تحسينات في واجهات وصفحات الخدمة وتوزيع المحتوى بشكل يسهل من تجربة العملاء وتلبية احتياجاتهم بشكل مباشر وإطلاق موقع جديد</strong>
                </div>

                <div className="sixth-card-content main-bg-class classes mb-5 fifteen-card" style={{border:`1px solid #30cccb`,background:`#e6fcf8`}}>
                 <strong>تم اتاحة منتج تمويل السيارات لمنتجات العمل الحر للأفراد لتمكين الفئات</strong>
                </div>
              
            </div>
            <div className="col-lg-5" data-aos="zoom-in-left"
                 data-aos-duration="1300">
            <div className="headline-sixth-column items___" data-aos="zoom-in-left"
                 data-aos-duration="1200">
                    <h5> <span style={{color:"red"}}>الرأي او الاقتراح - التحدي</span></h5>
                    <img src={img2} alt="" />
                </div>
                
                <div className="sixth-card-content need-min-height classes fifteen-card" >
                   <strong>تم طرح استشارة عامة بغرض استشارة العموم ومعرفة مرئياتهم لقياس مراحل تجربتهم في الموقع الالكتروني لتحليلها والخروج بنتائج وقرارات تخلق تجربة عميل ومستخدم مرضية وتحسين مستوى الظهور لخدمات ومنتجات البنك على الموقع الإلكتروني</strong>
                </div>

                <div className="sixth-card-content need-min-height classes fifteen-card" >
                   <strong>تم استقبال مقترح من شاب يعمل بالقطاع الخاص ويرغب بأخذ تمويل يمكنه من شراء سيارة تمكنه من العمل في تطبيقات التوصيل</strong>
                </div>

                <div className="sixth-card-content need-min-height classes fifteen-card" >
                   <strong>تم استقبال مقترح من امرأه موظفه ومتزوجه وزوجها ذو دخل بسيط وتريد ان تستطيع ان تقترض من قرض الأسرة</strong>
                </div>

                <div className="sixth-card-content need-min-height classes fifteen-card" >
                    <strong>تم استقبال مقترح خدمه و دعم و تمويل للأفكار و المشاريع السعودية لتحصل على الامتياز التجاري والفرانشايز</strong>
                </div>

            </div>

            <div className="col-lg-1" data-aos="zoom-in-left"
                 data-aos-duration="1500">
            <div className="headline-sixth-column main-class" style={{opacity:"0"}} >
                    <h5 style={{color:"#3bdbbc"}}>الحل</h5>
                    <img src={img} alt="" />
                </div>
                <div className="number-boxes">
                    <span>1</span>
                    
                </div>
                <div className="number-boxes">
                    <span>2</span>
                </div>
                <div className="number-boxes">
                    <span>3</span>
                </div>
                <div className="number-boxes">
                    <span>4</span>
                </div>
            </div>
    
          </div>
        {/*  */}
        </div>
        </>
    );
};

export default FifteenSlide;