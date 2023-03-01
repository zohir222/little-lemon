// import { createContext, useContext, useState } from "react";


// const ThemeContext = createContext(Object);

// const ThemeProvider = ({ children }) => {
//   const [style , setStyle] = useState( {  } );

//   return (
//     <ThemeContext.Provider
//       value={{
//         ... style ,
//         toggleTheme: () => { if (theme.th === "b" )  { 
//                             setTheme( {...theme ,  th: "g" } )  }
//                              else {
//                               setTheme ({ ...theme , th : "b" })
//                                 }
                                
//                            } ,
//         toogledeletee : ()=> {
//                             if (theme.koko === true )  { 
//                             setTheme( { ...theme , koko : false} )  }
//                              else {
//                               setTheme ({...theme , koko : true})
//                                 }
//                                 console.log(theme.koko); 
//                            }
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// const useTheme = () => useContext(ThemeContext);




function myStyle (style , color ){
    

    let styleHolder = {} ;
    let colorHolder = {}
    
    const styles = {
        Title : {
            fontFamily : "Markazi" ,
            fontSize : "64pt" ,
            fontWeight : 500 ,
        } ,
        subTitle : {
            fontFamily : "Markazi" ,
            fontSize : "40pt" ,
            fontWeight : 400 ,
        },
        leadText : {
            fontFamily : "Karla" ,
            fontSize : "18pt" ,
            fontWeight : 500 ,
        } ,
        sectioTitle : {
            fontFamily : "Karla" ,
            fontSize : "20pt" ,
            fontWeight : 800 ,
        } ,
        sectionCategory : {
            fontFamily : "Karla" ,
            fontSize : "16pt" ,
            fontWeight : 800 ,
        } ,
        cardtitle : {
            fontFamily : "Karla" ,
            fontSize : "18pt" ,
            fontWeight : 700 ,
        } ,
        cardText : {
            fontFamily : "Karla" ,
            fontSize : "16pt" ,
            fontWeight : 400 ,
            lineHeight: 1.5 ,
            maxWidth: "65ch"
        },
        highLightCardText : {
            fontFamily : "Karla" ,
            fontSize : "16pt" ,
            fontWeight : 500 ,
            lineHeight: 1.5 ,
            maxWidth: "65ch"
        }
    }

    const colors = {
        yellow : {
            color : "#F4CE14 "
        },
        green : {
            color : "#495E57"
        },
        white :{
            color : "#EDEFEE"
        },
        black : {
            color : "#333333"
        },
        orange : {
            color : "#EE9972"
        } ,
        lightOrange : {
            color : "#FBDABB"
        }
    }

    switch (style){
        case  "Title" :
        styleHolder = {...styles.Title}
        break ;
        case  "subTitle" :
        styleHolder = {...styles.subTitle}
        break ;
        case  "leadText" :
        styleHolder = {...styles.leadText}
        break ;
        case  "sectioTitle" :
        styleHolder = {...styles.sectioTitle}
        break ;
        case  "sectionCategory" :
        styleHolder = {...styles.sectionCategory}
        break ;
        case  "cardtitle" :
        styleHolder = {...styles.cardtitle}
        break ;
        case  "cardText" :
        styleHolder = {...styles.cardText}
        break ;
        case  "highLightCardText" :
        styleHolder = {...styles.highLightCardText}
        break ;

        default :
        styleHolder = {}
    }

    switch (color){
        case  "yellow" :
        colorHolder = {...colors.yellow}
        break ;
        case  "green" :
        colorHolder = {...colors.green}
        break ;
        case  "white" :
        colorHolder = {...colors.white}
        break ;
        case  "black" :
        colorHolder = {...colors.black}
        break ;
        case  "orange" :
        colorHolder = {...colors.orange}
        break ;
        case  "lightOrange" :
        colorHolder = {...colors.lightOrange}
        break ;

        default :
        colorHolder = {}
    }

    return {...styleHolder , ...colorHolder} ;
}

export default myStyle ;