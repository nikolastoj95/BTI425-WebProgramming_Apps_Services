import Component1 from "@/components/Component1";
import ComponentA from "@/components/ComponentA";


export default function Home({count, setCount}) {
  // put the prop in the main parent
  //This is Prop Drilling 
    //like this, until react 16 -> prop context
  
  return (
    <>
       <ComponentA setCount={setCount}/><br/>
       <Component1 count={count} />
     
    </>
  );
}
