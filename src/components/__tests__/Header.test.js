import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login ●" });
  //const loginButton = screen.getByText(/Login/);

  expect(loginButton).toBeInTheDocument();
});

/*
it("Login button should be changed to Logout button on click", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login ●" });
  fireEvent.click(loginButton);
  // Wait for the welcome message to appear
  const welcomeMessage = await screen.getByTestId("username");
  expect(welcomeMessage).toBeInTheDocument();

  // Check that the logout button is now rendered
//   const logoutButton = screen.getByRole("button", { name: "Logout" });
//   expect(logoutButton).toBeInTheDocument();
});
*/
