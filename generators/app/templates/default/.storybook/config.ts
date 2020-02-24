import { configure } from "@storybook/react";

function loadStories(): void {
  // tslint:disable-next-line: no-require-imports
  require("../stories");
}

configure(loadStories, module);
