import { render, screen } from "@testing-library/react";
import React from "react";
import DataTable from "../components/DataTable";

describe("the data table", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DataTable />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct place names", () => {
    render(<DataTable />);
    expect(screen.getByText(/australia/i)).toBeInTheDocument();
    expect(screen.getByText(/New Zealand/i)).toBeInTheDocument();
    expect(screen.getByText(/Denmark/i)).toBeInTheDocument();
    expect(screen.getByText(/France/i)).toBeInTheDocument();
    expect(screen.getByText(/Germany/i)).toBeInTheDocument();
    expect(screen.getByText(/Greece/i)).toBeInTheDocument();
    expect(screen.getByText(/italy/i)).toBeInTheDocument();
    expect(screen.getByText(/Latvia/i)).toBeInTheDocument();
    expect(screen.getByText(/Portugal/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweden/i)).toBeInTheDocument();
    expect(screen.getByText(/Jamaica/i)).toBeInTheDocument();
    expect(screen.getByText(/United States/i)).toBeInTheDocument();
    expect(screen.getByText(/Kuwait/i)).toBeInTheDocument();
    expect(screen.getByText(/Mongolia/i)).toBeInTheDocument();
    expect(screen.getByText(/Mali/i)).toBeInTheDocument();
    expect(screen.getByText(/Namibia/i)).toBeInTheDocument();
    expect(screen.getByText(/Senegal/i)).toBeInTheDocument();
    expect(screen.getByText(/sierra Leone/i)).toBeInTheDocument();
    expect(screen.getByText(/South Africa/i)).toBeInTheDocument();
  });
  it("renders the correct years", () => {
    render(<DataTable />);
    expect(screen.getByText(/2018/i)).toBeInTheDocument();
    expect(screen.getByText(/2019/i)).toBeInTheDocument();
    expect(screen.getByText(/2020/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
  });
});
