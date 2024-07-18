import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurantcard component with props data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);
  const name = screen.getByText("Taj Mahal-Abids");
  expect(name).toBeInTheDocument();
});
