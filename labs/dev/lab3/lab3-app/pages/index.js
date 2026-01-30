import ColorBox from "@/components/ColorBox";
import CountDown from "@/components/CountDown";
import Greeting from "@/components/Greeting";
import RandomQuote from "@/components/RandomQuote";
import Timer from "@/components/Timer";


export default function Home() {
  return (
    <>
     <ColorBox color="orange"/>
     <Timer />
     <Greeting name="Nikola" />
     <RandomQuote />
     <CountDown start={10} />
    </>
  );
}
