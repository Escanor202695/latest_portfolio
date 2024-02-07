import React from 'react';
import './FiveSlide.scss'
import logo from '../../assets/images/fiveSlide/logo.svg'
import logo2 from '../../assets/images/fiveSlide/logo1.svg'
import arrowdown from '../../assets/images/fiveSlide/arrow-down.svg'
import search from '../../assets/images/fiveSlide/search.svg'
import img from '../../assets/images/fiveSlide/img.png'
import Slider from '../../components/Slider/Slider'
import clock from '../../assets/images/fiveSlide/clock.png'
import clock1 from '../../assets/images/fiveSlide/clock2.png'
import clock2 from '../../assets/images/fiveSlide/clock3.png'
import chart from '../../assets/images/fiveSlide/chart.svg'
import table from '../../assets/images/fiveSlide/table.svg'
import text from '../../assets/images/fiveSlide/text.svg'
import charts from '../../assets/images/fiveSlide/chart.png'
import charts2 from '../../assets/images/fiveSlide/chart2.png'
import charts22 from '../../assets/images/fiveSlide/chart22.png'


const FiveSlide = () => {
    const h1 = `إدارة المنتجات`
    const h3 = ``
    return (
        <>
        <div className='fiveSlide' style={{padding:"100px 0"}}>
             <div className="navbar-container" data-aos="zoom-in-left"
             data-aos-duration="1100">
                <div className="logo text-end">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-item">
                <a href="">NPS</a>
                <a href="">CSAT</a>
                <a href="">CES</a>
                <a href="">Focus Groups</a>
                <a href="">Complaint</a>
                <a href="">Sentiment</a>
                <a href="">Loss Tree</a>
                <a href="" style={{background:"#0a9ba5",color:"white"}}>Executive</a>
             </div>
             </div>

             <div className="sidebar-and-dashboard ">
                <div className="______sidebar" data-aos="zoom-in-left"
             data-aos-duration="1500">
                    <div className="position-changing-those-item">
                    <h5>التاريخ</h5>
                    <div className="side-bar-text-containers-flex">
                        <p>تاريخ البدء</p>
                        <img src={logo2} alt="" />
                    </div>
                    <div className="side-bar-text-containers-flex">
                        <p>تاريخ الانتهاء</p>
                        <img src={logo2} alt="" />
                    </div>
                    </div>

                    <div className="position-changing-those-item mt-4">
                        <h5>تصنيف العملاء</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={arrowdown} alt="" />
                        <p>تاريخ البدء</p>
                    
                    </div>
                   
                    </div>

                    <div className="position-changing-those-item mt-4">
                        <h5>الجنس</h5>
                    <div className=" flex-those-lines">
                    <span className="box-1">
                    أنثى
                    </span>  
                    <span className="box-2" style={{background:"#0a9ba5",color:"white"}}>
                    ذكر
                    </span>
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                        <h5>المنطقة</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={arrowdown} alt="" />
                    <p>الرياض</p>                    
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                        <h5>نقاط الإتصال</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={search} alt="" />
                    <p>الرياض</p>
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                    <h5>العم</h5>
                     <div className="full-widthimages">
                        <img src={img} alt="" />
                     </div>
                   
                    </div>
                </div>
                <div className="dashboard___ px-3">
                    <div className="dashboard-headline text-end mt-5 pt-4" data-aos="zoom-in-left"
             data-aos-duration="1000">
                      <h5>توضيحي</h5>
                      <p>*سيتم استيراد جميع البيانات التاريخية وإضافتها إلى هذه لوحة المعلومات.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1100">
                            <div className="dashboard_card">
                                <div className="dashboard__headline">
                                    <h6>صافي نقاط الترويج</h6>
                                </div>
                                <p className='text-end'>معاودة الاتصال = <span>100</span>% - 24 ساعة</p>
                                 <div className="text-center">
                                    <img src={clock} alt="" style={{height:"150px"}} />
                                 </div>
                                 <div className="table-image_____" >
                                    <img  style={{width:"90%",height:"100px",objectFit:"contain"}} src={table} alt="" />
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1300">
                            <div className="dashboard_card">
                                <div className="dashboard__headline">
                                    <h6>مؤشر رضا العملاء</h6>
                                </div>
                                <p className='text-end'>معاودة الاتصال = 90% <span> - 24</span> ساعة</p>
                                 <div className="text-center mt-3">
                                    <img src={clock1} style={{height:"150px"}} alt="" />
                                 </div>
                                 <div className="table-image_____">
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1400">
                            <div className="dashboard_card">
                                <div className="dashboard__headline">
                                    <h6>مؤشر جهد العميل</h6>
                                </div>
                                <p className='text-end'>معاودة الاتصال = 60% <span style={{color:"#ed9718"}}> 24</span> ساعة</p>
                                 <div className="text-center mt-3">
                                    <img src={clock2} style={{height:"160px"}} alt="" />
                                 </div>
                                 <div className="table-image_____">
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1300">
                            <div className="dashboard_card need-custom-height-for-vh">
                                <div className="dashboard__headline">
                                    <h6>مجموعات التركيز</h6>
                                </div>
                                
                                 <div className="table-image_____ mt-3" >
                                    <img style={{width:"100%"}} src={chart} alt="" />
                                 </div>
                                 <div className="table-image_____ mt-5 pt-5 end-sid-flex">
                                    <img style={{width:"100%"}} src={text} alt="" />
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1400">
                            <div className="dashboard_cards __card_height">
                               <img src={charts} style={{height:"120px",objectFit:"fill"}} alt="" />
                            </div>
                            <div className="dashboard_cards _card-height mt-3">
                            <div className="dashboard__headline">
                                    <h6>مجموعات التركيز</h6>
                                </div>
                                <div className="table-image_____">
                                    <img  src={charts2} alt="" />
                                 </div>
                                 <div className="last-headline_____ px-2 mt-3">
                                 <h6 className='text-end'>أهم الشكاوى</h6>
                            </div>
                            <div className="grid-and-flex-box">
                            <div className="cards___flex___div">
                                <p>إلغاء طلب القرض <br />دون ذكر السبب</p>
                                <span>.2</span>
                            </div>
                            <div className="cards___flex___div">
                                <p>تأخير في معالجة<br /> طلب القرض</p>
                                <span>.1</span>
                            </div>
                             </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 mt-3" data-aos="zoom-in-left"
             data-aos-duration="1500">
                            <div className="dashboard_cards __card_height">
                               <img style={{height:"120px",objectFit:"fill"}}  src={charts22} alt="" />
                            </div>
                            <div className="dashboard_cards _card-height mt-3">
                            <div className="dashboard__headline">
                                    <h6>تحليل المشاعر</h6>
                                </div>
                                {/* <div className="table-image_____">
                                    <img src={charts2} alt="" />
                                 </div> */}
                                 {/* <div className="last-headline_____ px-2 mt-3">
                                 <h6 className='text-end'>أهم الشكاوى</h6>
                            </div> */}
                            {/* <div className="grid-and-flex-box">
                            <div className="cards___flex___div">
                                <p>إلغاء طلب القرض <br />دون ذكر السبب</p>
                                <span>.2</span>
                            </div>
                            <div className="cards___flex___div">
                                <p>تأخير في معالجة<br /> طلب القرض</p>
                                <span>.1</span>
                            </div>
                             </div> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
             </div>
            
        </div>
       
        </>
    );
};

export default FiveSlide;