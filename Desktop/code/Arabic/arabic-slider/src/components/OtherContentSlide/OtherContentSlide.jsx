import React from "react";
import "./OtherContentSlide.scss";
import img from "../../assets/images/frame/vs.png";
import img2 from "../../assets/images/frame/cal1.png";
import img3 from "../../assets/images/frame/v2.png";
import img4 from "../../assets/images/frame/v3.png";
import img5 from "../../assets/images/frame/v4.png";
import img6 from "../../assets/images/frame/v5.png";
import img7 from "../../assets/images/frame/v6.png";
import banner from "../../assets/images/frame/card-banner.svg";
import svgbanner from "../../assets/images/frame/1212.png";
import close from "../../assets/images/frame/close.svg";
import emoji from "../../assets/images/frame/emoji.svg";
import imgs from "../../assets/images/frame/3.jpg";
import Slider from "../Slider/Slider";
const OtherContentSlide = () => {
    const h1 =`صوت العميل`
    const h3 =``
    const bg = `#0a9ba5c7`
    return (
        <>
        <Slider h1={h1} h3={h3} img={imgs} bg={bg} />
        <div className='other___slide___image text-center' > 
        </div>
       <div style={{marginTop:"100px",marginBottom:"40px"}}>
       <div className='container' >
            <div className="headline-of-other-slide text-end mb-2" data-aos="zoom-in-left" data-aos-duration="1100">
                <h2 className='semi-bold'>الممارسة الحالية <span style={{color:"#0a9ba5"}}>(التحديات)</span></h2>
            </div>
            <div >
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="bottom-side-spacing-adding "
                  data-aos="zoom-in-left"
                  data-aos-duration="1300"
                >
                  <div className="custom-min-height">
                    <div className="right-slide-background bottom-side-spacing ">
                      <h3>
                        <span> عناصر صوت العميل </span>
                      </h3>
                      <div className="parent___">
                        <div className="left__side___column______">
                          <h3>الوضع المستقبلي</h3>
                        </div>
                        <div className="col-center-division">
                          <img src={img} alt="" />
                        </div>
                        <div className="left__side___column______">
                          <h3>الوضع الحالي</h3>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3>نوع الاستبيان</h3>
                          <p>
                            استبيان موحد على كافة المنصات لمراقبة نقاط التواصل
                            مع العميل
                          </p>
                        </div>
                        <div className="column-image-center">
                          <img src={img2} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">نوع الاستبيان</h3>
                          <p>استبيان غير موحد حول نقاط الاتصال</p>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3 className="Line___height">
                            مؤشر رضا العملاء <br />
                            (Top-two Boxes)
                          </h3>
                        </div>
                        <div className="column-image-center">
                          <img src={img3} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">طريقة الحساب</h3>
                          <p>
                            مختلفة وغير موحدة للأنواع المختلفة من الاستبيانات
                          </p>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3>الدقة</h3>
                          <p>توحيد صوت العميل وتسييره رقمياً</p>
                        </div>
                        <div className="column-image-center">
                          <img src={img4} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">الدقة</h3>
                          <p>
                            نتيجة تحليل الاستبيان الهاتفي من خلال مراكز الاتصال
                          </p>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3>اغلاق حلقة التغذية الراجعة</h3>
                          <p>
                            تحليل السبب الجذري من خلال بناءLoss tree ضمن استبيان
                            الرضا
                          </p>
                        </div>
                        <div className="column-image-center">
                          <img src={img5} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">
                            اغلاق حلقة التغذية الراجعة
                          </h3>
                          <p>لا يوجد</p>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3>معدل الاستجابة</h3>
                          <p>
                            مراقبة عدد الاستبيانات المرسلة مقابل الاستبيانات
                            التي تم تقييمها
                          </p>
                        </div>
                        <div className="column-image-center">
                          <img src={img6} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">معدل الاستجابة</h3>
                          <p>غير مراقب</p>
                        </div>
                      </div>
                      <div className="parent___">
                        <div className="left-side-column-content text-end">
                          <h3>التدقيق والجودة</h3>
                          <p>إنشاء مصفوفة التدقيق والجودة</p>
                        </div>
                        <div className="column-image-center">
                          <img src={img7} alt="" />
                        </div>
                        <div className="left-side-column-content text-left">
                          <h3 className="text___left">التدقيق والجودة</h3>
                          <p>غير مراقب</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="right-slide-background"
                      style={{ marginTop: "15px " }}
                    >
                      {/*  */}
                      <div className="____column__container ___span__custom">
                        <div>
                          <div className="tag___line___of__column">
                            <h2>
                              <span> عناصر صوت العميل </span>
                            </h2>
                          </div>
                          {/*  */}
                          <div>
                            <div className="left-side-box-design mt-5 pt-4">
                              <h4
                                style={{ border: "1px solid rgb(211 211 211)" }}
                              >
                                المنصات
                              </h4>
                              <div className="box-sizing-design">
                                <p>
                                  على الموقع الإلكتروني (CSAT) تُجرى استطلاعات
                                  رضا العملاء(IVR) بعد تقديم الطلب ومن خلال الرد
                                  الآلي التفاعلي
                                </p>
                              </div>
                            </div>
                            {/*  */}
                            <div
                              className="left-side-box-design"
                              style={{
                                background: "#fff8f4",
                                border: "1px solid #e71f12",
                              }}
                            >
                              <h4 style={{ border: "1px solid #e71f12" }}>
                                المنصات
                              </h4>
                              <div className="box-sizing-design">
                                <p>
                                  على الموقع الإلكتروني (CSAT) تُجرى استطلاعات
                                  رضا العملاء(IVR) بعد تقديم الطلب ومن خلال الرد
                                  الآلي التفاعلي
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*  */}
                        </div>
                        <div>
                          <div className="close__icon">
                            <div className="close___icon">
                              <img src={close} alt="" />
                            </div>
                            <h6>تم إنشاء الحساب بنجاح</h6>
                          </div>
                          <div className="right_____side____contents">
                            <h2 className="text-end">تقيم الخدمة</h2>
                          </div>

                          <div
                            className="white___box__text"
                            style={{ marginTop: "35px" }}
                          >
                            <p className="text-end">
                              ما مدى رضائك عن توفر المعلومات علىالمنصه؟
                            </p>
                            <div className="text-start">
                              <img src={emoji} alt="" />
                            </div>
                          </div>

                          <div className="white___box__text ">
                            <p className="text-end">
                              ما مدى رضائك عن سهولة الوصول إلى الخدمة؟
                            </p>
                            <div className="text-start">
                              <img src={emoji} alt="" />
                            </div>
                          </div>

                          <div className="white___box__text ">
                            <p className="text-end">
                              ما مدى رضائك عن سهولة استخدام المنصة؟
                            </p>
                            <div className="text-start">
                              <img src={emoji} alt="" />
                            </div>
                          </div>

                          <div className="white___box__text ">
                            <p className="text-end">
                              ما مدى رضائك عن فعالية و استجابة الخدمة المقدمة؟
                            </p>
                            <div className="text-start">
                              <img src={emoji} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="bg-border-last"></div>
                    {/*  */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="right-slide-background bottom-side-spacing-adding"
                  style={{ padding: "20px" }}
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  <h3>
                    <span> عناصر صوت العميل </span>
                  </h3>
                  <div className="right__side__navlink">
                    <div className="left__side___column______ font-size-small">
                      <h3>الوضع المستقبلي</h3>
                    </div>

                    <div className="left__side___column______ font-size-small">
                      <h3>التقارير الحالية</h3>
                    </div>
                  </div>

                  <div className="right__side__navlink border___bottom___side">
                    <div className="left-side-column-content text-end mt-3">
                      <p> المعاملات في الربع الثالث (Q3)</p>
                      <p> سداد القرض</p>
                      <p> الموافقة على القرض</p>
                      <p> إيداع القرض</p>
                      <p> الفعاليات التي نظمها البنك</p>
                    </div>

                    <div className="left-side-column-content text-end mt-3">
                      <p> عدد الردود: قيد التحديد</p>
                      <p> النتيجة: 48%</p>
                      <p> أسباب النتيجة: غير متعلقة بالمعاملات</p>
                      <p> المقياس السوقي: 34</p>
                    </div>
                  </div>

                  <div className="position-changing____">
                    <div className="svg-bannner text-center">
                      <img src={banner} alt="" /> <br />
                      <img className="image__changing" src={svgbanner} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherContentSlide;
