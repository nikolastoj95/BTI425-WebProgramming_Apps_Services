import Component1 from "@/components/Component1";
import ComponentA from "@/components/ComponentA";


export default function Home(props) {
  return (
    <>
       <ComponentA setCount={props.setCount} />
       <Component1 count={props.count}/>
     
    </>
  );
}
