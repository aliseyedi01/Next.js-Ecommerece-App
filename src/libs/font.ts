import { Ubuntu , Exo_2 , Kanit , Grenze_Gotisch } from "next/font/google";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});


const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "700"],
});




const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "700" , "800" , "900"],
});


const grenze = Grenze_Gotisch({
  subsets: ["latin"],
  variable: "--font-grenze_gotisch",
  weight: ["300", "400", "500", "700" , "800" , "900"],
});


export {ubuntu , kanit , grenze , exo}