import { fireEvent, render, waitFor } from "@testing-library/react";

import { FormCreateTask } from "../FormCreateTask";

describe("FormCreateTask", () => {
  it("renders the form properly", () => {
    const { container } = render(<FormCreateTask />);

    expect(container).toBeTruthy();
  });

  it("should get an error when submitting due invalid value", async () => {
    const { getByRole, getByTestId, getByPlaceholderText } = render(
      <FormCreateTask />
    );

    const submit = getByRole("button");
    const input = getByPlaceholderText("Add Task");

    submit.click();

    await waitFor(() => getByTestId("message-error"));

    expect(input).toHaveAttribute("aria-invalid");
    expect(getByTestId("message-error")).toHaveTextContent(
      "This field is required"
    );
  });

  it("should fill the input", () => {
    const { getByPlaceholderText } = render(<FormCreateTask />);

    const input = getByPlaceholderText("Add Task");
    const value = "I am creating a new task";

    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);
  });

  it("should submit the form", async () => {
    const handleOnSubmit = jest.fn(() => null);

    const { getByPlaceholderText, getByRole } = render(
      <FormCreateTask onSubmit={handleOnSubmit} />
    );

    const submit = getByRole("button");
    const input = getByPlaceholderText("Add Task");

    fireEvent.change(input, { target: { value: "Text" } });

    submit.click();

    await waitFor(() => expect(input).toHaveValue("")); // it resets the form when submitting

    expect(handleOnSubmit.mock.calls.length).toBe(1);
  });
});
