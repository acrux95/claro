import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Home from "./index";
import mock from "../../mocks/response.json";

describe('Component: Home Verification', () => {
  const props = {
    videos, search, setVideos, setSelected, setSearch
  }
  it('Should render correctly', async () => {
    render(<Home {...props} />);
    
  })
})