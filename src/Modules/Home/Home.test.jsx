import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Home from "./index";
import mock from "../../mocks/response.json";

const videos = mock.response.groups;
const mockStore = configureStore([]);

describe("test suite", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      videos: mock.response.groups,
      search: mock.response.groups[0].title,
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should dispatch an action on button click", () => {
    renderer.act(() => {
      component.root.findByType("button").props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(myAction({ payload: "sample text" }));
  });
  
});
