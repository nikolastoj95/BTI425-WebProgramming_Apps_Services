import Login from "@/pages/login";
const { render } = require("@testing-library/react");

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('Login Page ; pages/login', () => {
   
   test('renders Login title inside card body ', () => {
        const { container } = render(<Login />);
        

        const cardBody = container.querySelector('.card-body');

        expect (cardBody).toBeTruthy();

        const childElement = cardBody.querySelector('h2');

        expect(childElement).toBeTruthy();
        expect(childElement.innerHTML).toBe("Login");

   });

   test ('checks if form element is rendered', ()=> {

        const { container } = render(<Login />);
      
       
        const form = container.querySelector('form');

        

        expect(form).toBeTruthy();

    
   });

   test ('checks existence, correctness of the "User:" input with type "text", name "userName" and empty value', ()=> {
        const  {container}  = render(<Login />);
        const userInput = 
        container.querySelector('input[name="userName"]');


        expect(userInput).toBeTruthy();

        expect(userInput.getAttribute("name")).toBe('userName');
        expect(userInput.getAttribute("type")).toBe('text');
        expect(userInput.getAttribute("value")).toBe('');

   });

   test ('checks existence and correctness of  "Password" with right input attrubutes', ()=>{

            const {container} = render(<Login/>);

            const pass_Input = container.querySelector('input[name="password"]');

            expect(pass_Input).toBeTruthy();

            expect(pass_Input.getAttribute("type")).toBe('password');
            expect(pass_Input.getAttribute("name")).toBe('password');
            expect(pass_Input.getAttribute("value")).toBe('');
            expect(pass_Input.getAttribute("id")).toBe('password');


   });




});