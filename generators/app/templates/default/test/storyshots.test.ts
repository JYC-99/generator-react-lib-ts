import initStoryshots, { renderWithOptions } from "@storybook/addon-storyshots";
import { mount } from "enzyme";

initStoryshots({
  // @ts-ignore
  test: renderWithOptions({ mount })
});
