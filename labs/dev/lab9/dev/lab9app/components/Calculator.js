import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Calculator() {
    const [display, setDisplay] = useState("0");

    function handleClick (value) {
        console.log(`clicked ${value}`);
        if (display === "Error") {
            setDisplay(value);
            return;
        } 
        
        if (!isNaN(value)) { // if a number 
            if (display === "0") {  // if already 0 there replace with enter value
                setDisplay(value);
            } else {
                // append to the already what is in display
                setDisplay(display + value);
            }

        } else {
            // if  value not a number like +,-,*,/ 
            // leave display there and append value
            setDisplay(display + value);
        }   
    };

    function handleClear () {
        setDisplay("0");
    };

    function handleEqual() {
         const result = eval(display);
         console.log(result);
          if (!Number.isFinite(result)) {
            setDisplay("Error");
          } else {
            setDisplay(result);
          }
        
    };
    return (
        <>
            <Container className="mt-5">
                <Row className="g-2 mb-2" >
                    <Col ><Button className="w-100 py-3" onClick={()=> handleClick("7")}>7</Button></Col>
                    <Col ><Button className="w-100 py-3" onClick={()=> handleClick("8")}>8</Button></Col>
                    <Col ><Button className="w-100 py-3" onClick={()=> handleClick("9")}>9</Button></Col>
                </Row>
               
                 <Row  className="g-2 mb-2">
                    <Col><Button className="w-100 py-3" onClick={()=> handleClick("4")}>4</Button></Col>
                    <Col> <Button className="w-100 py-3" onClick={()=> handleClick("5")}>5</Button></Col>
                    <Col><Button className="w-100 py-3" onClick={()=> handleClick("6")}>6</Button></Col>
                </Row>
                
                <Row  className="g-2 mb-2">
                    <Col><Button className="w-100 py-3" onClick={()=> handleClick("1")}>1</Button></Col>
                    <Col><Button className="w-100 py-3" onClick={()=> handleClick("2")}>2</Button></Col>
                    <Col> <Button className="w-100 py-3" onClick={()=> handleClick("3")}>3</Button></Col>
                </Row>
                
                <Row  className="g-2 mb-2"><Col><Button className="w-100 py-3" onClick={()=> handleClick("0")}>0</Button></Col></Row>

                <Col className="g-2 mb-2"> 
                    <Button onClick={()=> handleClick("+")}>+</Button>
                </Col>
                <Col className="g-2 mb-2">
                    <Button onClick={()=> handleClick("-")}>-</Button>
                </Col>
                <Col className="g-2 mb-2"> 
                    <Button onClick={()=> handleClick("*")}>*</Button> 
                </Col>
                <Col className="g-2 mb-2">
                    <Button onClick={()=> handleClick("/")}>/</Button>
                </Col>
                <Col className="g-2 mb-2">
                    <Button onClick={handleClear}>C</Button>
                </Col>
                <Row className="g-2 mb-2">
                    <Button onClick={handleEqual}>=</Button>
                </Row>

                <Form.Control type="text" value={display} readOnly />

            </Container>

        </>
    )
}

                       
                        