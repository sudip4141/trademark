import React from 'react'
import './trademark.css';
import trade_lic from './trade_lic.jpg';
import trade_obj from './trade_obj.jpg';
import trade_reg from './trade_reg.jpg';

const Trademark = () => {
    return (
        <div className='trademark'>
            <div className='head'>
                <h1>Our Trademark Services</h1>
            </div>
            <div className='content'>
                {/* /-------------------------------------------------------------------------card1-----------------------------------------------------/ */}
                <div className='trademark-card'>
                    <div className='left'>
                        <img src={trade_reg}></img>
                    </div>
                    <div className='right'>
                        <h1>Trademark registration</h1>
                        <p>A Trademark plays an important role in promoting the goods and provides information about the quality of the product. It enables an enterprise to acquire individual rights to utilize, distribute or assign a mark. This can be done through Trademark Registration. India is a huge competitive market for business and company owners, where there are vast numbers of new yet identical brands / products that keep emerging everyday. Here, protecting your brand becomes necessary to prevent anybody else taking the advantage of your name or brand.</p>
                    </div>
                </div>
                {/* /---------------------------------------------------------------------------card2-----------------------------------------------------/ */}
                <div className='trademark-card'>

                    <div className='right'>
                        <h1>Trademark objection</h1>
                        <p>Trademark objection is one of the initial stages in the trademark registration process where the trademark examiner objects to your application due to certain reasons. It is not a straight forward denial to your claim, but the registrar seeks valid reasons or explanations about the mark and its registrability. He gives the applicant an opportunity to explain how the said trademark fits the criteria to avail valid registration.</p>
                    </div>
                    <div className='left'>
                        <img src={trade_obj}></img>
                    </div>
                </div>
                {/* /-----------------------------------------------------------------------------card3----------------------------------------------/ */}
                <div className='trademark-card'>
                    <div className='left'>
                        <img src={trade_lic}></img>
                    </div>
                    <div className='right'>
                        <h1>Trade License</h1>
                        <p>A trade license is a document or certificate that allows the applicant to commence a particular trade or business in a specific area or location. The holder of the trade license cannot use it for any other work or business. A business within a state, corporation, or municipality will require trade license registration from the concerned central or state government to commence with any business in a particular area or location. To obtain registration, the applicant must first understand the jurisdiction under which they are operating the business and the applicable Act.</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Trademark