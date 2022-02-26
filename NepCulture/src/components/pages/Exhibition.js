import React from 'react';
import './Exhibition.css';
import ExhibitItem from './ExhibitItem';

function Exhibition() {
    return (
        <div className='exhibition'>
            <h1> FEATURED EXHIBITION </h1>
            <div className='exhibit__container'>
                <div className='exhibit__wrapper'>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/Dipankara_buddha.jpg'
                            text='DIPANKARA BUDDHA, the destroyer of evil, protector of merchants'
                            label='Acrylic on Canvas'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Dharmapala Mahakala.jpg'
                            text='Embrace the wrathful and terrifying looking DHARMAPALA MAHAKALA'
                            label='Sculpture'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Bhairava.jpg'
                            text='BHAIRAVA, The face of Bhairava with the standing figure'
                            label='Mineral Pigment on Canvas'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/gods in moonlight.jpeg'
                            text='Refresh yourself in the Moonlight with LORD KRISHNA'
                            label='Canvas Art'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/Wood_Mandala.jpg'
                            text='Wood Mandala, Apartment Decor, Elegant Wall Art'
                            label='Wood Craft'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/TOB.jpg'
                            text='TEACHING OF BUDDHA'
                            label='Oil on Canvas'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Mountain.jpg'
                            text='Mount Kantega, Himalaya, Nepal Watercolor Painting, Himalaya Painting '
                            label='Original Watercolor Painting'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/madal.jpg'
                            text='माडालको धुनमा'
                            label='Musical Instrument'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/Sarangi.jpg'
                            text='The sound of Sarangi is believed to resemble a human voice'
                            label='Acrylic on Canvas'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/PB.jpg'
                            text='Traditional paintbrush made from the “tufi” or broom'
                            label='Paintbrush'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/SriHari.jpg'
                            text='SHREE HARI VISHNU, the "Preserver" of the Universe'
                            label='Black Stone'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/AY.jpg'
                            text='Enrich yourself with wisdom goddess, AKASH YOGINI'
                            label='Canvas Art'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/mithila.jpg'
                            text='Madhubani Style'
                            label='Mithila Art'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/lalitkala.jpg'
                            text='नेपालीको हँसिलो अनुहार'
                            label='Oil Color'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/PNS.jpg'
                            text='मैले मेरो सानो राज्य सिर्जना गर्न धेरै त्याग गरें'
                            label='Painting'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Kali on shiva.jpg'
                            text='Standing Kaali On The Top Of Shiva'
                            label='Statue'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/khukuri.jpg'
                            text='Nepalese Khukuri'
                            label='Antique'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/handi.jpg'
                            text='Gautama Buddha'
                            label='Handicraft'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Gayatri.jpg'
                            text='Recite the most chanted mantra of GAYATRI'
                            label='Canvas Art'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Jambala.jpg'
                            text='Explore JAMBALA, the showerer of wealth, wisdom and intelligence'
                            label='Gold Statue'
                            path='/item_detail'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Exhibition;