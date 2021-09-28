import { render } from "@testing-library/react";

import { ChallengeComponent } from "../ChallengeComponent";

describe("ChallengeComponent", () => {
  it("renders an empty board", () => {
    const { getByTestId } = render(
      <ChallengeComponent status={[]} tasks={[]} />
    );

    const board = getByTestId("board");

    expect(board.children.length).toBe(0);
  });

  it("renders the right number of status columns and tasks within the board", () => {
    const { getAllByTestId } = render(
      <ChallengeComponent
        status={[{ id: "1", name: "To Do" }]}
        tasks={[{ id: "1", status: "1", description: "Task" }]}
      />
    );

    const columns = getAllByTestId("board-column-status");
    const tasks = getAllByTestId("board-task");

    expect(columns.length).toBe(1);
    expect(tasks.length).toBe(1);
  });
});
