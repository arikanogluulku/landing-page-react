import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Some Of Our Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem 
                src="https://promedyanet.com/wp-content/uploads/2014/02/web-tasarim-ornekleri.png" 
                text="Website for company Lorem. "
                label="Web Software"
                path='/services'
            />
            <CardItem 
                src="https://www.inovasyonlar.com/wp-content/uploads/2018/11/en-iyi-10-mobil-uygulama.jpg" 
                text="Mobile application for company Ipsum"
                label="Mobile Application"
                path='/services'
            />
          </ul>
          <ul className="cards_items">
            <CardItem 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxWAfO9IJeqixqfzrFzjrZ3RsKsL8oMolJw&usqp=CAU" 
                text="Social media consultancy service"
                label="Social Media"
                path='/services'
            />
             <CardItem 
                src="data:image/jpeg;base64,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" 
                text="Website for company Lorem. "
                label="Web Software"
                path='/services'
            />
             <CardItem 
                src="http://devnot.com/wp-content/uploads/2016/10/native-hybrit-mobile.png" 
                text="Mobile application for company Ipsum"
                label="Mobile Application"
                path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
