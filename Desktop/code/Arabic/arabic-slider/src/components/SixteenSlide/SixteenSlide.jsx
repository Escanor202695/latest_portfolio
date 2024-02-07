import React from 'react';
import './SixteenSlide.scss'
import Slider from '../Slider/Slider';
import img22 from '../../assets/images/fifteenSlide/chart.png'
import logo from '../../assets/images/fifteenSlide/logo.svg'
import logo1 from '../../assets/images/fifteenSlide/logo1.svg'
import chart from '../../assets/images/common-img/chart.png'
import chart1 from '../../assets/images/common-img/chart2.png'
import banner from '../../assets/images/banner/last.jpg'

const SixteenSlide = () => {
    const h1 = `برنامج ولاء العميل`
    const h3 = ``
    const bg = `#469c09cc`
    return (
        <div style={{marginBottom:"100px"}}>
        <Slider h1={h1} h3={h3} img={banner} bg={bg} />
        <div className="container" style={{marginTop:"100px"}}>
        <div className='SixthSlide' data-aos="zoom-in-left"
        data-aos-duration="1000">
                 <div className="fourth-header" >
                <h2 className='text-end semi-bold'>تحليل الوضع الراهن <span style={{color:"#469c09"}}> 
                (التحديات)
               </span>
                </h2>
            </div>
        </div>
        {/*  */}
        <div className="row">
            <div className="col-lg-7" data-aos="zoom-in-left"
                 data-aos-duration="1300">
                <div className="sixteen-headline">
                    <div className="headline_______">
                    <p>مجموعات التركيز</p>

                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="charts">
                            <div className="inside-headline">
                                <h6>صافي نقاط الترويج NPS</h6>
                            </div>
                            <div className="three-dote-flex">
                                <div className="dote1">
                                    <p>المعترضون</p>
                                    <span style={{background:"#e71f12"}}></span>
                                </div>
                                <div className="dote1">
                                    <p>السلبيون</p>
                                    <span style={{background:"#ed9718"}}></span>
                                </div>
                                <div className="dote1">
                                    <p>المروجون</p>
                                    <span style={{background:"#19e3bc"}}></span>
                                </div>
                            </div>
                            <div className="chart__image">
                                <img src={img22} alt="" />
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="box__texts">
                        <div className="little-small-headline">
                            <h5>المبادرات المقترحة</h5>
                            <img src={logo} alt="" />
                        </div>
                        <div className="number-and-text-item">
                            <p>إبلاغ العميل بسبب الرفض 
    عبر الرسائل النصية</p>
    <span>.1</span>
                        </div>
                        <div className="number-and-text-item">
                         <p>منح حوافز للعملاء المتضررين من تأخير الصرف</p>
                         <span>.2</span>
                        </div>
                        <div className="number-and-text-item">
                            <p>توفير خدمة الدفع المبكر وتوضيح آلية الدفع</p>
                         <span>.3</span>
                        </div>
                      </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="box__texts">
                        <div className="little-small-headline">
                            <h5 style={{color:'red'}}>أبرز التحديات</h5>
                            <img src={logo1} alt="" />
                        </div>
                        <div className="number-and-text-item">
                           <p>رفض طلبات التمويل دون 
   إعلام العميل بأسباب الرفض</p>
    <span>.1</span>
                        </div>
                        <div className="number-and-text-item">
                        <p> تأخير صرف مبالغ التمويل</p>
                         <span>.2</span>
                        </div>
                        <div className="number-and-text-item">
                        <p>صعوبة فهم آلية السداد 
    المبكر</p>
                         <span>.3</span>
                        </div>
                      </div>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        {/*  */}
                          <div className="sixteen-headline min-hight-calcuate">
                          <div className="headline_______">
                             <p>تحليل المشاعر</p>
                          </div>
                          <div className="charts " style={{border:"2px solid white"}}>
                            <div className="inside-headline">
                                <h5 style={{color:"black"}}>معدل الرضا (تويتر)</h5>
                            </div>
                        </div>
                          </div>
                        {/*  */}
                    </div>
                    <div className="col-lg-7">
                         {/*  */}
                         <div className="sixteen-headline min-hight-calcuate">
                          <div className="headline_______">
                            <p>المسح الداخلي</p>
                          </div>
                          <div className="charts " style={{border:"2px solid white"}}>
                          
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="some-of-important-content-border">
                                    <div className="some-of-important-content">
                                        <p>إرسال رسالة للعميل لإخباره بحصوله على حوافز حال تسجيله في برامج الادخار</p>
                                        <span>.1</span>
                                    </div>
                                    <div className="some-of-important-content">
                                        <p>تصميم بوابة لوسطاء التمويل في كافة تطبيقات البنك</p>
                                        <span>.2</span>
                                    </div>
                                    <div className="some-of-important-content">
                                        <p>توفير خصومات خاصة في المناسبات والمهرجانات الموسمية الخاصة بالبنك وشركائه</p>
                                        <span>.3</span>
                                    </div>
                                    <div className="some-of-important-content">
                                        <p>منصة للشركات التي من شأنها أن تساعد المنتجات التجارية في التسويق</p>
                                        <span>.4</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{padding:"0"}}>
                                      <div className="inside-headline">
                                <h6 style={{color:"black",fontSize:"17px"}}>
                                الحوافز حسب النوع                                    
                                    </h6>
                                </div>
                                <div className="chart________image text-center">
                                    <img src={chart} alt="" />
                                </div>
                                <div className="black-shape-radius-text mt-1">
                                    <div className="black____shape">
                                        <p>خدمات</p>
                                        <span style={{background:"#0a9ba5"}}></span>
                                    </div>
                                    <div className="black____shape" style={{position:"relative", left:"7px"}}>
                                        <p>كسب النقاط</p>
                                        <span style={{background:"black"}}></span>
                                    </div>
                                </div>
                                <div className="black-shape-radius-text mt-1">
                                    <div className="black____shape">
                                        <p>هدايا</p>
                                        <span style={{background:"#469c09"}}></span>
                                    </div>
                                    <div className="black____shape" style={{position:"relative", left:"7px"}}>
                                        <p>خصومات</p>
                                        <span style={{background:"#13baeb"}}></span>
                                    </div>
                                </div>

                                <div className="black-shape-radius-text mt-1">
                                    <div className="black____shape">
                                    </div>
                                    <div className="black____shape" style={{position:"relative", left:"7px"}}>
                                        <p>جميع ما سبق</p>
                                        <span style={{background:"#545767"}}></span>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                          </div>
                        {/*  */}
                    </div>
                </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-in-left"
                 data-aos-duration="1500">
                   {/*  */}
                   <div className="sixteen-headline min-hight-calcuates">
                          <div className="headline_______">
                            <p>إجمالي عدد الشكاوى(يناير-مايو 2023)</p>
                          </div>
                          <div className="charts " style={{border:"2px solid white"}}>
                            <div className="inside-headline">
                                <h5 style={{color:"black"}}>
                                تحليل الوضع الراهن <span >(التحديات)  </span>
                                  </h5>
                                
                            </div>
                            <div className="text-center mt-2 image-resiing">
                                     <img src={chart1} alt="" />
                                  </div>

                                  <div className="inside-headline " style={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"end"}}>
                                <h6 style={{color:"black"}}>
                               <span style={{color:"black"}}>
                               أهم أسباب الشكاوى
                                 </span>
                                  </h6>
                                  <img style={{position:"relative",bottom:"6px"}} src={logo} alt="" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <div className="col-lg-side-content__">
                                    <p>تعثر عملية إكمال الطلبات إلكترونيا</p>
                                    <span>.1</span>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="col-lg-side-content__" style={{height:"70px"}}>
                                    <p>التأخر في معالجة طلب القرض</p>
                                    <span>.2</span>
                                  </div>
                                </div>
                                <div className="col-lg-6" style={{opacity:"0"}}>
                                  <div className="col-lg-side-content__" style={{height:"70px"}}>
                                    <p>التأخر في معالجة طلب القرض</p>
                                    <span>.2</span>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="col-lg-side-content__" style={{height:"70px"}}>
                                    <p>رفض طلبات التمويل دون إعلام العميل بأسباب الرفض</p>
                                    <span>.3</span>
                                  </div>
                                </div>

                            </div>
                        </div>
                          </div>
                        {/*  */}
            </div>
        </div>
        {/*  */}
        </div>
        </div>
    );
};

export default SixteenSlide;