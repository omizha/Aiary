import App from "./src";
import StorybookUIRoot from "./storybook";
import Constants from "expo-constants";

console.log(Constants.manifest.extra.STORYBOOK_TOGGLE);

export default Constants.manifest.extra.STORYBOOK_TOGGLE
    ? StorybookUIRoot
    : App;
