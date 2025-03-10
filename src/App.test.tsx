import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Todo App", () => {
  // Test rendering
  test("renders todo app with header and input", () => {
    render(<App />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a todo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  // Test adding a todo
  test("can add a new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
    expect(input).toHaveValue(""); // Input should be cleared after adding
  });

  // Test completing a todo
  test("can toggle todo completion", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(screen.getByText("Test Todo").parentElement).toHaveClass(
      "completed"
    );
  });

  // Test editing a todo
  test("can edit a todo", () => {
    render(<App />);

    // Add a todo first
    const input = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "Original Todo" } });
    fireEvent.click(addButton);

    // Edit the todo
    const editButton = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(editButton);

    const updatedText = "Updated Todo";
    fireEvent.change(input, { target: { value: updatedText } });

    const updateButton = screen.getByRole("button", { name: "Update" });
    fireEvent.click(updateButton);

    expect(screen.getByText(updatedText)).toBeInTheDocument();
    expect(screen.queryByText("Original Todo")).not.toBeInTheDocument();
  });

  // Test deleting a todo
  test("can delete a todo", () => {
    render(<App />);

    // Add a todo first
    const input = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "Todo to delete" } });
    fireEvent.click(addButton);

    // Delete the todo
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Todo to delete")).not.toBeInTheDocument();
  });

  // Test todo history
  test("shows todo history after edit", () => {
    render(<App />);

    // Add initial todo
    const input = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "Original Todo" } });
    fireEvent.click(addButton);

    // Edit the todo
    const editButton = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(editButton);

    fireEvent.change(input, { target: { value: "Updated Todo" } });
    const updateButton = screen.getByRole("button", { name: "Update" });
    fireEvent.click(updateButton);

    // Check and toggle history
    const showHistoryButton = screen.getByRole("button", {
      name: "Show History",
    });
    fireEvent.click(showHistoryButton);

    expect(screen.getByText("History:")).toBeInTheDocument();
    expect(screen.getByText(/Original Todo/)).toBeInTheDocument();
  });
});
