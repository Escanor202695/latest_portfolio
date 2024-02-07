import React from 'react';
import './ElevenSlide.scss'
const ElevenSlide = () => {

    return (
        <>
        <div className='container' style={{paddingBottom:"100px"}}>
            <div className="fourth-header my-5" data-aos="zoom-in-left" data-aos-duration="1200">
                <h2 className='text-end semi-bold'> أبرز الحلول المتعلقة بالفروع <span style={{color:"#7AD8F4"}}> 
                 (الحلول)
               </span>
                </h2>
        </div>
        <div className="some-of-text-flex" data-aos="zoom-in-left" data-aos-duration="1300">
            <div className="div1">
            <p>تواصل البنك مع الجهات</p>
            <span style={{background:"black"}}></span>
            </div>
            <div className="div1">
            <p>تواصل البنك مع الجهات</p>
            <span style={{background:"#f7752c"}}></span>
            </div>
            <div className="div1">
                <p>العمليات البنكية  </p>
            <span style={{background:"blue"}}></span>
            </div>
            <div className="div1">
              <h3>المصدر</h3>
            </div>
        </div>
        {/*  */}
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in-left" data-aos-duration="1400">
                <div className="flex-box-column_______">
                    <p>العمل على جدولة دفعات السداد حال التأخر بالسداد وعدم المطالبة بها دفعة واحدة.</p>
                    <span style={{background:"blue"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>العمل على إيضاح المدة المتوقعة لاستلام السيارة.</p>
                    <span style={{background:"black"}}></span>
                </div>

                <div className="flex-box-column_______">
                    <p>العمل على إضافة خيارات لشركات التأمين وعدم إلزام العميل على التأمين الشامل، أو إلزامه بتحديد شركة تأمين معينة.</p>
                    <span style={{background:"black"}}></span>
                </div>

                <div className="flex-box-column_______">
                   <p>توضيح شروط ضمانات الوكالات.</p>
                    <span style={{background:"black"}}></span>
                </div>

                <div className="flex-box-column_______">
                    <p>العمل على إضافة خيارات لشركات التأمين وعدم إلزام العميل على التأمين الشامل، أو إلزامه بتحديد شركة تأمين معينة.</p>
                    <span style={{background:"black"}}></span>
                </div>
                
            </div>
            <div className="col-lg-6" data-aos="zoom-in-left" data-aos-duration="1600">
            <div className="flex-box-column_______">
                    <p>توضيح الأسباب لرفض الكفيل.</p>
                    <span style={{background:"blue"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>تسهيل الشروط الخاصة بالكفيل أو العمل على إلغاء الشرط.</p>
                    <span style={{background:"blue"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>إعفاء العميل المؤهل من شرط الكفيل.</p>
                    <span style={{background:"blue"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>توحيد مبلغ القسط لجميع الأشهر وعدم اختلاف المبلغ من شهر لآخر.</p>
                    <span style={{background:"orange"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>تزويد العملاء برسائل نصية للتذكير بموعد السداد للتمويل.</p>
                    <span style={{background:"orange"}}></span>
                </div>
                <div className="flex-box-column_______">
                    <p>توضيح طريقة ورقم وتاريخ السداد من خلال رسالة نصية أو بريد بعد التقديم على التمويل،</p>
                    <span style={{background:"orange"}}></span>
                </div>
            </div>
          </div>
        {/*  */}
        </div>
     
        </>
    );
};

export default ElevenSlide;