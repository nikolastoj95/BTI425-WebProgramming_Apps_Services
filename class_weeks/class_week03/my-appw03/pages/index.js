import Hello from "@/components/Hello";
import Clock from "@/components/Clock";
import Counter from "@/components/Counter";

export default function Home() {
  let message = "Hello World!";
  let imgUrl = "https://images.adsttc.com/media/images/6196/b960/9a95/7a76/4f1e/5b68/newsletter/newnham-campus-food-hall-taylor-smyth-architects-20.jpg?1637267827"
  return (
    <> {/* <></> -  JSX Fragement */}
      <Counter  /> <br />
      <Counter start={5} /> {/* as number put {number} */}
      <Counter start={10} /> <br />
      <Clock /><br />
      <Clock locale="fr-CA" />
      <Hello message="Hello BTI 425" exclamation="!!!!!" something=" From Seneca" />
      <Hello message="Welcome to Next.js" />
      <p>{message}</p>
      <br />
      <hr />
      
      <p className= "red">BTI425</p>
      {/* <img src={imgUrl} alt="seneca"  /> */}
      <Clock locale="ko-KO" />
      

      {/* only one parent element */}
    </>
    // <div>
    //     <p>Hello World</p>
    //     <p>BTI425</p>
    //     {/* only one parent element */}
    // </div>
  ); 
};