import Component1 from "@/components/Component1";
import ComponentA from "@/components/ComponentA";


export default function Home() {
  // put the prop in the main parent
  //This is Prop Drilling  (nested no state, prop drilling)
    //like this, until react 16 -> react  context
      // Now using this with Jotai
  
  return (
    <>
       <ComponentA /><br/>
       <Component1  />
     
    </>
  );
}
