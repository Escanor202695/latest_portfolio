import React from 'react';
import './NinthSlide.scss'
import logo from '../../assets/images/nineSlider/logo.svg'
import logo2 from '../../assets/images/nineSlider/logo2.svg'
import logo3 from '../../assets/images/nineSlider/logo3.svg'
import logo4 from '../../assets/images/nineSlider/logo4.svg'
import logo5 from '../../assets/images/nineSlider/logo5.svg'
import logo6 from '../../assets/images/nineSlider/logo6.svg'
import logo7 from '../../assets/images/nineSlider/logo7.svg'
import logo8 from '../../assets/images/nineSlider/logo8.svg'
import logo9 from '../../assets/images/nineSlider/logo9.svg'
import logo10 from '../../assets/images/nineSlider/logo10.svg'
import logo11 from '../../assets/images/nineSlider/logo11.svg'
const NinthSlide = () => {
    return (
        <div style={{margin:"100px 0"}}>
        <div className='container' >
            <div className="fourth-header mb-5"  data-aos="zoom-in-left" data-aos-duration="1300">
                <h2 className='text-end semi-bold'> الموقع الإلكتروني  <span style={{color:"#feaea9"}}> 
                 (التحديات)
               </span>
                </h2>
        </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1200">
              <div className="ninth-number-box">
                 <div className="headline">
                    <h4>تصميم الموقع الجديد</h4>
                     <img src={logo} alt="" />
                 </div>
                 <p>تعارض بعض الملاحظات مع هوية وتصميم الموقع الجديد المعتمد في المراحل الأولى من تصميم الموقع</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1400">
            <div className="ninth-number-box">
                 <div className="headline">
                    <h4>معايير الأمم المتحدة- UN</h4>
                     <img src={logo2} alt="" />
                 </div>
                 <p>بعض الملاحظات الواردة تتعارض مع ما تم تصميمه وبناءه وفقا لمعايير الأمم المتحدة</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1100">
            <div className="ninth-number-box">
                 <div className="headline">
                    <h4>Live-Beta-Staging
                        تعدد بيئات العمل
                      </h4>
                     <img src={logo3} alt="" style={{position:"relative",top:"7px"}} />
                 </div>
                 <p>تم معالجة وعكس الملاحظات في جميع البيئات مما أثر سلبا على الجهد والوقت في انجاز خطة المشروع</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1300">
            <div className="ninth-number-box">
                 <div className="headline">
                    <h4>عدم وضوح الملاحظات</h4>
                     <img src={logo4} alt="" style={{position:"relative",top:"7px"}} />
                 </div>
                 <p>بعض الملاحظات لم تكن محددة وواضحة وتطلب ذلك جهدا إضافيا لتنسيق عدة اجتماعات مع الإدارات المعنية لتحديد المطلوب مما أثر سلبا على خطة انجاز المشروع</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration="1500">
            <div className="ninth-number-box">
                 <div className="headline">
                    <h4>محدودية الصلاحيات</h4>
                     <img src={logo5} alt="" style={{position:"relative",top:"7px"}} />
                 </div>
                 <p>عدم وجود الصلاحيات الكاملة في نظام إدارة المحتوى ( Kentico ) لدى فريق تجربة العميل مما أثر سلبا على عدم القدرة لمعالجة بعض الملاحظات (التقنية-والتصميم)</p>
              </div>
            </div>
          </div>

          <div className="fourth-header" data-aos="zoom-in-left" data-aos-duration="1200" style={{paddingTop:"100px"}}>
                <h2 className='text-end semi-bold'>
                الملاحظات الواردة من الإدارات <span style={{color:"#FEAEA9"}}> (الحلول)
               </span>
                </h2>
          </div>
          {/*  */}
          <div className="border-at-the-bottom-side" data-aos="zoom-in-left" data-aos-duration="1300">
          <div className="row mb-4" style={{position:"relative",top:"6px"}}>
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
                <div className="numbers">
                    <span style={{color:"#df40b6"}}>225</span>
                    <h6>الملاحظات المعالجة</h6>
                    <img src={logo6} alt="" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="numbers">
                    <span style={{color:"#24bec8"}}>45</span>
                     <h6>الملاحظات قيد التطوير</h6>
                    <img src={logo7} alt="" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="numbers">
                    <span style={{color:"#74c23d"}}>270</span>
                    <h6>عدد الملاحظات</h6>
                    <img src={logo8} alt="" />
                </div>
            </div>
          </div>
          </div>
          {/*  */}

          {/*  */}
            <div className="row " style={{marginTop:"100px",paddingBottom:"50px"}}>
             <div className="col-lg-5" data-aos="zoom-in-left" data-aos-duration="1200">
                <div className="text-box__">
                    <div className="text__box__caption">
                        <h6 className='text-end'>  الإدارات التنفيذية/الإدارات التي وثقت وشاركت 
                          <br />ملاحظاتهم
                        </h6>
                    </div>
                    <div className="ninth">
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية لتمويل المنشآت</p>
                        </div>
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية لتمويل الافراد</p>
                        </div>
                    </div>

                    <div className="ninth">
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية لتمويل العمل الحر</p>
                        </div>
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية لتمويل الاسر المنتجة</p>
                        </div>
                    </div>

                    <div className="ninth">
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية للفروع والقنوات</p>
                        </div>
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية للادخار</p>
                        </div>
                    </div>

                    <div className="ninth">
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية للتسويق</p>
                        </div>
                        <div className="ninth_col_6">
                            <p>الإدارة التنفيذية للتمكين والتنمية</p>
                        </div>
                    </div>

                    <div className="ninth">
                        <div className="ninth_col_6">
                            <p>إدارة العناية بالعملاء</p>
                        </div>
                        <div className="ninth_col_6">
                           <p>الإدارة التنفيذية للفروع</p>
                        </div>
                    </div>

                </div>
             </div>
             <div className="col-lg-7" data-aos="zoom-in-left" data-aos-duration="1500">
             <div className="col-7-container">
                <div className="children-div-of-container">
                    <div className="container-headline__________">
                        <h6>الملاحظات قيد التطوير</h6>
                    </div>
                    <div className="white______box">
                        <p>7</p>
                    </div>
                    <div className="white______box">
                        <p>26</p>
                    </div>
                    <div className="white______box">
                        <p>12</p>
                    </div>
                </div>
                <div className="children-div-of-container">
                    <div className="container-headline__________" style={{background:"#24bec8"}}>
                        <h6>الملاحظات قيد التطوير</h6>
                    </div>
                    <div className="white______box" style={{border:"1px solid #24bec8"}}>
                        <p>180</p>
                    </div>
                    <div className="white______box" style={{border:"1px solid #24bec8"}}>
                        <p>17</p>
                    </div>
                    <div className="white______box" style={{border:"1px solid #24bec8"}}>
                        <p>28</p>
                    </div>
                </div>

                <div className="children-div-of-container">
                    <div className="container-headline__________" style={{background:"#74c23d"}}>
                        <h6>عدد الملاحظات</h6>
                    </div>
                    <div className="white______box" style={{border:"1px solid #74c23d"}}>
                        <p>187</p>
                    </div>
                    <div className="white______box" style={{border:"1px solid #74c23d"}}>
                        <p>43</p>
                    </div>
                    <div className="white______box" style={{border:"1px solid #74c23d"}}>
                        <p>40</p>
                    </div>
                </div>

                <div className="children-div-of-container">
                    <div className="container-headline__________" style={{background:"#74c23d", opacity:"0"}}>
                        <h6>عدد الملاحظات</h6>
                    </div>
                    <div className="white______box" style={{background:"#FEAEA9",border:"none"}}>
                       <div className="new-element-with-img">
                        <h6>محتوى</h6>
                        <img src={logo9} alt="" />
                       </div>
                    </div>
                    <div className="white______box" style={{background:"#FEAEA9",border:"none"}}>
                    <div className="new-element-with-img">
                        <h6>تقني</h6>
                        <img src={logo10} alt="" />
                       </div>
                    </div>
                    <div className="white______box" style={{background:"#FEAEA9",border:"none"}}>
                    <div className="new-element-with-img">
                        <h6>تصميم</h6>
                        <img src={logo11} alt="" />
                       </div>
                    </div>
                </div>
             </div>
             </div>
            </div>
          {/*  */}
        </div>
        </div>
    );
};

export default NinthSlide;