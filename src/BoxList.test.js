import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BoxList from "./BoxList";

function addBoxHelper(getByLabelText,queryByText) {

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const submitBox = queryByText("Add a new box!");

  // fill out the form
  fireEvent.change(widthInput, { target: { value: 100 }});
  fireEvent.change(heightInput, { target: { value: 100 }});
  fireEvent.change(colorInput, { target: { value: "red" }});
  fireEvent.click(submitBox);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes yet
  expect(queryByTestId("boxes-container")).not.toContainHTML("box-element-");

  addBoxHelper(getByLabelText, queryByText);

  // item exists!
  expect(queryByTestId("boxes-container")).toContainHTML("box-element-");
  expect(queryByTestId("boxes-container")).toContainHTML('style="width: 100px; height: 100px; background-color: red;"');
});

it("can delete a box", function() {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes yet
  expect(queryByTestId("boxes-container")).not.toContainHTML("box-element-");

  addBoxHelper(getByLabelText, queryByText);

  // item exists!
  expect(queryByTestId("boxes-container")).toContainHTML("box-element-");
  expect(queryByTestId("boxes-container")).toContainHTML('style="width: 100px; height: 100px; background-color: red;"');

  // delete the box
  const deleteBox = queryByText("Delete this box!");
  fireEvent.click(deleteBox);

  // no boxes should be on the page
  expect(queryByTestId("boxes-container")).not.toContainHTML("box-element-");

});