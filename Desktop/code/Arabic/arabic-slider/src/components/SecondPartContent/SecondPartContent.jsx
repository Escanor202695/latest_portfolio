import React from 'react';
import './SecondPartContent.scss'
import {  dataContent } from '../../Data/Data';

const SecondPartContent = () => {

    return (
        <>
        <div className='container pb-5 ' style={{marginBottom:"100px"}}>
            <div className="content">
                <div className="text-end" data-aos="zoom-in-left" data-aos-duration="1200">
                    <h3 className='semi-bold'>ملخص أبرز التحديات والحلول لمحطات تجربة العميل</h3>
                </div>

                <div className="flex_content_container" data-aos="zoom-in-left" data-aos-duration="1400">
                    <div className="flex__content" >
                     <h4 className='semi-bold_'>مستوى تقدم</h4>
                     <h4 className='semi-bold_'>الحلول</h4>
                    </div>
                    <div className="flex__content" >
                       <h4 className='semi-bold_'>المحطات</h4>
                       <h4 className='semi-bold_'>أبرز التحديات</h4>
                    </div>
                </div>

            </div>
            {/*  */}

            <div className="row">
             
            {
                dataContent.map(item=>{
                    return(
                        <div className="col-lg-12" key={item.id}>
                        <div className="contents__description" data-aos={`zoom-in-left`} data-aos-duration={item.time}>
                           <div className="parcantaze">
                            <p className="text-end">
                             {
                                item.parcentageTagline
                             }
                            </p>
                            <div className="border-shap">
                                <div className="border-shap-absolute" style={{width:`${item.parent}%`}}>
                                </div>
                            </div>
                           </div>
                           <div>
                            {
                                item.otherList.map(i=>{
                                    return (
                                        <div className="lines" key={i.id}>
                                        <p>{i.name}</p>
                               <p> .{i.id}</p>
                               </div>
                                    )
                                })
                            }
                              
                            
                           </div>
                           <div>

                           {
                                item.list.map(i=>{
                                    return (
                                        <div className="lines" key={i.id}>
                                        <p>{i.name}</p>
                                        <p> .{i.id}</p>
                               </div>
                                    )
                                })
                            }
                    
                              
                           </div>
                            <div className="tag-line-flex">
                           <div className="tag-line">
                            <div className="tag-line-caption">
                                <h3 className='semi-bold' style={{color:"#5bab22"}}>{item.name}</h3>
                            </div>
                            <div className="number">
                                <span>{item.id}</span>
                            </div>
                           </div></div>
                           
                        </div>
                     </div>
                    )
                })
            }

            </div>

            {/*  */}
           

            {/*  */}
        </div>
          
        </>
    );
};

export default SecondPartContent;