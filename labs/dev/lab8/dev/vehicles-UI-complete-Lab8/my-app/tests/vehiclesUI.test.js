import Vehicles from "@/pages/vehicles";
import { render } from "@testing-library/react";
import useSWR from "swr";

 jest.mock("swr", () => ({
          __esModule: true,
          default: jest.fn(),
        }));

        useSWR.mockReturnValue({
          data: [
            {
              id: 1,
              year: 1994,
              make: "Suzuki",
              model: "SJ",
              vin: "JN8AZ2KR6CT544012",
            },
            {
              id: 2,
              year: 1999,
              make: "Chrysler",
              model: "300",
              vin: "1B3CC5FB5AN648885",
            },
          ],
          error: null,
        });

describe("Vehicles Page ",()=>{
    test(' renders the title "Vehicles inside card body"', () => {

        const {container} = render(<Vehicles/>);

        const cardBody = container.querySelector('.card-body');

        expect (cardBody).toBeTruthy();
        
        // get child elements
        const childElement = cardBody.querySelector("h2")

        expect(childElement).toBeTruthy();
        expect(childElement.innerHTML).toBe("Vehicles");
    });

    test('renders a table with the correct class names', ()=> {
        const {container} = render (<Vehicles />);

        const table = container.querySelector('table');

        expect(table).toBeTruthy();

        expect(table.className).toBe('table table-striped table-bordered');
        // expect(table.className).toBe();
        // expect(table.className).toBe('table-bordered');

    });

    test("renders vehicle's data correctly in it own row with cells for year, make, model, and VIN ", ()=> {
        const {container} = render (<Vehicles/>);

        const rows = container.querySelectorAll('tbody tr');

        // make sure rows are 2 rows cause that is what we are mocking

        expect (rows.length).toBe(2);

        const firstRowCells = rows[0].querySelectorAll('td');

        expect(firstRowCells.length).toBe(4);

        expect(firstRowCells[0].innerHTML).toBe("1994");
        expect(firstRowCells[1].innerHTML).toBe('Suzuki');
        expect(firstRowCells[2].innerHTML).toBe("SJ");
        expect(firstRowCells[3].innerHTML).toBe("JN8AZ2KR6CT544012");

        const secondRowCells = rows[1].querySelectorAll('td');

        expect(secondRowCells[0].innerHTML).toBe("1999");
        expect(secondRowCells[1].innerHTML).toBe("Chrysler");
        expect(secondRowCells[2].innerHTML).toBe("300");
        expect(secondRowCells[3].innerHTML).toBe("1B3CC5FB5AN648885");

    });
})