import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "./index";
import mock from "../../mocks/response.json";

test("component: Home Verification", () => {
  const props = {
    videos,
    search,
    setVideos,
    setSelected,
    setSearch,
  };
  const component = render(<Home videos={videos} />)
  console.log
});
