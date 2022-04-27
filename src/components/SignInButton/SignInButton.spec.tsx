import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { mocked } from "jest-mock";
import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("SignInButton component", () => {
  it("renderes correctly when user is not authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign in with github")).toBeInTheDocument();
  });

  it("renderes correctly when user is authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          email: "john.doe@example.com",
          name: "John Doe",
          image: "",
        },
        expires: "fake-expire",
      },
      status: "authenticated",
    });

    const { debug } = render(<SignInButton />);

    debug();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
