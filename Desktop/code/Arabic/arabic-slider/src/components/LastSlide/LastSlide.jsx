import React from "react";
import "./LastSlide.scss";
import img1 from "../../assets/images/lastSlide/1.svg";
import img2 from "../../assets/images/lastSlide/2.svg";
import img3 from "../../assets/images/lastSlide/3.svg";
import img4 from "../../assets/images/lastSlide/4.svg";
import img5 from "../../assets/images/lastSlide/5.svg";
import img6 from "../../assets/images/lastSlide/6.svg";
import logo1 from "../../assets/images/last/1.svg";
import logo2 from "../../assets/images/last/2.svg";
import logo3 from "../../assets/images/last/3.svg";
import arrow from "../../assets/images/last/arrow.png";


const LastSlide = () => {
  const mydata = [
    {
      id: "1",
      name: "متطلبات الاستضافة",
      post: "يجب استضافة الأنظمة إما مباشرة على خوادم البنك أو محليًا في المملكة",
      img: img1,
    },
    {
      id: "2",
      name: `نظام تطبيق الهاتف`,
      post: `(ionic 6+, API: .net core 5+, Databased: Microsoft SQL…)`,
      img: img2,
    },
    {
      id: "3",
      name: `متطلبات الوصول`,
      post: `لا يمكن الوصول الى صلاحيات التحرير والتطوير الا في مقر البنك`,
      img: img3,
    },
    {
      id: "4",
      name: `الخدمات السحابية`,
      post: "تحتاج جميع التطبيقات إلى استخدام خادم البنك الموجود في الموقع",
      img: img4,
    },
    {
      id: "5",
      name: "نظام علاقات العملاء",
      post: `النظام المستخدم في البنك حالياMicrosoft Dynamics`,
      img: img5,
    },
    {
      id: "6",
      name: `API Availability`,
      post: `توفير واجهات برمجة قابلة للتخصيص بناءً على متطلبات البائع`,
      img: img6,
    },
  ];

  return (
    <>
      <div className="container" style={{ marginBottom: "160px" }}>
        <div
          className="SixthSlide"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <div className="fourth-header">
            <h2 className="text-end semi-bold">
              المتطلبات الأساسية{" "}
              <span style={{ color: "#469C09" }}>(الحلول)</span>
            </h2>
          </div>
        </div>
        <div className="row mb-5">
          <div
            className="col-lg-6"
            data-aos="zoom-in-left"
            data-aos-duration="1300"
          >
            <div className="last-slide">
              <div className="headline_______">
                <p>مراعاة متطلبات تقنية المعلومات</p>
              </div>
              <div className="row">
                {mydata.map((item) => {
                  return (
                    <div className="col-lg-4" key={item.id}>
                      <div className="column-item____">
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <p>{item.post}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <div className="last-slide">
              <div className="headline_______">
                <p>مراعاة متطلبات الأعمال</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="last-box">
                    <img src={logo1} alt="" />
                    <h3>التقنية</h3>
                    <p>إضافته في تطبيق البنك</p>
                    <p>تصميم واجهة برمجة متوافقة مع التطبيقات</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="last-box">
                    <img src={logo2} alt="" />
                    <h3>تحليل البيانات</h3>
                    <p>اتاحة الوصول إلى التقارير</p>
                    <p>تقارير السوق</p>
                    <p>مؤشرات الأداء الرئيسية</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="last-box">
                    <img src={logo3} alt="" />
                    <h3>البرنامج</h3>
                    <p>كسب وصرف النقاط</p>
                    <p>القسائم الشرائية</p>
                    <p>الألعاب</p>
                    <p>سوق المتاجر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          className="row-refactor-again mb-5"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-12-headline">
                <p>تحديد أهم المعايير</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>تخصيص البرنامج</h6>
                </div>
                <div className="bottom__side__arrow">
                  <img src={arrow} alt="" />
                </div>
                <div className="col-lg-2-box">
                  <p>تقدیم متاجر خاصة من البنك إلى قاعدة التجار</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>الدعم الفني</h6>
                </div>

                <div className="col-lg-2-box">
                  <p>
                    توفير الدعم الفني المطلوب وتنفيذ التحسينات خلال عام واحد
                  </p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>خدمة العملاء</h6>
                </div>
                <div className="bottom__side__arrow">
                  <img src={arrow} alt="" />
                </div>
                <div className="col-lg-2-box">
                  <p>التعامل مع الشكاوى ذات الأهمية الأعلى</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>إدارة المتاجر</h6>
                </div>

                <div className="col-lg-2-box">
                  <p>التعاقد والإشراف على أصحاب المتاجر</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>تنوع الشراكات</h6>
                </div>
                <div className="bottom__side__arrow">
                  <img src={arrow} alt="" />
                </div>
                <div className="col-lg-2-box">
                  <p>مقدمي الخدمة المحليين والعالميين</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="col-lg-2-headline___">
                  <h6>التوافق الفني</h6>
                </div>

                <div className="col-lg-2-box">
                  <p>قادر من الناحية الفنية على التكامل مع برامج البنك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default LastSlide;
