import restorantFood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greekSalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemon dessert.jpg' ;
import bicycle from '../assets/bicycle.svg';
import WhiteStar from '../assets/whiteStarIcon.png';
import YellowStar from '../assets/yellowStaricon.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import marioAdrianA from '../assets/MarioandAdrianA.jpg'
import marioAdrianB from '../assets/MarioandAdrianB.jpg'

import myStyle from './style';
import * as React from 'react' ;

const uiKit = {
    Title : "Title" , subTitle : "subTitle" , leadText : "leadText" , sectioTitle : "sectioTitle", sectionCategory : "sectionCategory",
    cardtitle : "cardtitle" , cardText : "cardText" , highLightCardText : "highLightCardText"
}


const Herosection = ()=>{
    return (
        <div className="parentHero">
            <div className="Herosection">
              <h1 style={myStyle(uiKit.Title , "yellow") } >Little lemon</h1>
              <h2 style={myStyle(uiKit.subTitle , "white")   } >Chicago</h2>
              <p style={{...myStyle(uiKit.leadText , "white") , paddingTop : "3rem" ,paddingBottom : "2rem" }} >We are family owned mediterranean restaurant , focused on traditional recipes served with modern twist .</p>
              <button style={{ marginTop : "2rem"}} >Reserve a Table</button>
            </div>
            
            <img src={restorantFood} ></img>
            
        </div>
        
    );
}
/***************************** HAILAIGH ****************************************************** */
const cardsArr = [
    {imageLink : greekSalad ,
     titleCrad : "Greek Salad",
     textcard : "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s " ,
     price : "$ 12.99" },
     {imageLink : bruchetta ,
     titleCrad : "bruchetta",
     textcard : "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s " ,
     price : "$ 20.58"  },
     {imageLink : lemondessert ,
     titleCrad : "Lemon Dessert",
     textcard : "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s " ,
     price : "$ 12.5" },
]
    
const Card = (prop)=>{
 

    return (
        <article className = "card" >
          <img src = {prop.imag}  alt = {prop.title} ></img>
          <h1 style={myStyle(uiKit.cardtitle , "black") } >{prop.title}</h1>
          <p className='card-price' style={myStyle(uiKit.cardtitle , "orange")} >{prop.price}</p>
          <p className='card-descrip' style={myStyle(uiKit.cardText , "black")}>{prop.text }</p>
          <div className ='card-botm' style={myStyle(uiKit.cardText , "black")}>
            <p>Order a delivery </p>
            <img   src={bicycle} alt = "icon" style={{width : "1.5rem" , marginLeft : "auto" , paddingBottom : "1rem"}}></img>
          </div>
          
        </article>
    );

}
const HighLight = ()=>{
    return(
        <section className="HightLight">
           <div className = "head">
                <h1 style={{...myStyle(uiKit.sectioTitle , "black") , fontSize : "40pt" }}>This week specials !</h1>
                <button style={{ marginLeft : "auto"}} >Online Menu</button>
           </div>
           <div className = "cards">
           { cardsArr.map( (item) => { return <Card key = {cardsArr.indexOf(item)} imag = {item.imageLink} title = {item.titleCrad}  text = {item.textcard} price = {item.price} />} ) }
            
           </div>
        </section>
    );
}
/********************** Testimonial ******************************************************/ 

const StarColor = ({children  , rating })=>{
  
    return (
        <>
            { React.Children.map (children , (child , index )=> { return React.cloneElement ( child ,  {  dd : (rating > index) ?  YellowStar : WhiteStar  }  ) }  ) }
        </>
    );
  
}

const Star = (props)=>{
   
    return (
       <span>   
        <img  style = {{width : "1rem"} } src = {props.dd}></img> 
       </span>
   
    );
}

function StarPinting ( props ){
   

 return (
      <StarColor rating = {props.nbr }  >
        <Star  />
        <Star  />
        <Star  />
        <Star />
        <Star  />
      </StarColor>
        
    );

   
    
}

const Testimonials = ()=>{
    let testiArr = [
        {
            rating : 5 ,
            namee : "Amanda",
            image : person1,
            text : "very nice restaurantn,snd,q" 
        },
        {
            rating : 4 ,
            namee : "toto",
            image : person2,
            text : "very nice restaurantn,snd,q" 
        },
        {
            rating : 2 ,
            namee : "koko",
            image : person3,
            text : "i dont like pizza mmmmmmm ..............." 
        },
        {
            rating : 4 ,
            namee : "tita",
            image : person4,
            text : "very nice restaurantn,snd,q" 
        }
    ]
  
    const rates = testiArr.map((item , index )=> {
        return (
            <article key={testiArr.indexOf(item)} className='Rate' style={{gridColumn : `${2*(index) + 1}/ span 2`}}>
                <div className='stars'>
                 <StarPinting nbr = {item.rating} />
                </div>
                <img src = {item.image} ></img>
                <p style={myStyle(uiKit.cardtitle , "black")} >{item.namee} </p>
                <p style={myStyle(uiKit.leadText , "black")} >{item.text}</p>
            </article>
          );
    })
    return (
        <section className="Testimonial">
            <h1 style={{...myStyle(uiKit.sectioTitle , "black") ,fontSize : "40pt" , gridColumn : "3 / span 4" , textAlign : "center"}}>Testimonials</h1>
            {rates}
        </section>
    );
}
/*********************************************************************************/ 
const About = ()=>{

    return(
        <section id="About">
          <div className='AboutText'>
                <header style={myStyle(uiKit.Title , "black")}>Little Lemon </header>
                <h2 style={myStyle(uiKit.subTitle , "black")   } >Chicago</h2>
                <p style={{...myStyle(uiKit.leadText , "black") , paddingTop : "2rem"}} > It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='AboutImag'>
            <img src = {marioAdrianA} alt = {"about-imag"} style = {{  marginTop :"3rem" , marginRight : "-4rem"}}></img>
            <img src = {marioAdrianB} alt = {"about-imag"} style = {{marginLeft : 0}} ></img>
          </div>

        </section>
    );
}
// 
function Main(){

    return (
        <main id ="Main">
            <Herosection/>
            <HighLight/>
            <Testimonials/>
            <About/>
        </main>
    );
}

export default Main ;