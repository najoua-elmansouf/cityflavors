import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../style/pagerepas.css'


const Pagerepas = () => {
    const { name } = useParams();
    const { ville } = useParams();
    const [repas, setRepas] = useState('');
    const [image, setImage] = useState('');
    const [ingrd, setIngredient] = useState('');
    let iframe;

  if (ville == 'casablanca') {
    iframe = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.887345158212!2d-7.635242925660873!3d33.6082273410474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2607994d58f%3A0x67a1d618e7b0d072!2sMosqu%C3%A9e%20Hassan-II!5e0!3m2!1sfr!2sma!4v1702658001426!5m2!1sfr!2sma" width="600" height="450" style={{ border: 0 ,margin: 'auto',marginTop:'60px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
  } else if (ville == 'marrackech') {
    iframe = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.6473737437807!2d-7.990119961604324!3d31.625779277420808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee43ad1cec7d%3A0x91b033ce5d01bbb1!2sJama%C3%A2%20El-Fna%2C%20Marrakech%2040000!5e0!3m2!1sfr!2sma!4v1702658209348!5m2!1sfr!2sma" width="600" height="450" style={{ border: 0 ,margin: 'auto',marginTop:'60px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
  } else if (ville == 'rabat') {
    iframe = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.7712574833167!2d-6.82549172563869!3d34.02408201921909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b9194140af1%3A0x13366c999246615c!2sTour%20Hassan!5e0!3m2!1sfr!2sma!4v1702658290483!5m2!1sfr!2sma" width="600" height="450" style={{ border: 0 ,margin: 'auto',marginTop:'60px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
  } else if (ville == 'tanger') {
    iframe = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.7052666929253!2d-5.933355725541915!3d35.78261562440017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7710497c98c7%3A0xf8bec8e7c07d55d3!2sTanger%20cap%20spartel!5e0!3m2!1sfr!2sma!4v1702658365073!5m2!1sfr!2sma" width="600" height="450" style={{ border: 0 ,margin: 'auto',marginTop:'60px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../../json/${ville}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const desc = data[name].ingredient;
        const img = data[name].image;
        const repas = data[name].nom;
        setRepas(repas);
        setIngredient(desc);
        setImage(img);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ville]);

    return (
      <div className = 'repasContainer'>
        <div className = 'repasSubContainer'>
        <img src ={image}/>
        <div className = 'texte'>
        <p><h1>{repas}</h1>{ingrd}</p>
        </div>
        </div>
        <div className ='carte'>
            {iframe}
        </div>
        
    </div>
    );
}

export default Pagerepas