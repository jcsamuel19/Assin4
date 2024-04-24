import Home from "./Home.js";

test("Test 1: Home page renders title", () => {
  render(<Home />);
  const element = screen.getByText(/Welcome To Assingment 4 with Routing by Jeremy Samuel/i);
  expect(element).toBeInTheDocument();
});
