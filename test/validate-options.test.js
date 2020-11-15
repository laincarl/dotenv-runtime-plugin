import DotEnvRuntimePlugin from "../lib";

it("validation", () => {
  /* eslint-disable no-new */
  expect(() => {
    new DotEnvRuntimePlugin({ entry: "./.env" });
  }).not.toThrow();

  expect(() => {
    new DotEnvRuntimePlugin({ entry: ".env" });
  }).not.toThrow();

  expect(() => {
    new DotEnvRuntimePlugin({ test: "foo" });
  }).toThrowErrorMatchingSnapshot();

  expect(() => {
    new DotEnvRuntimePlugin({ extra: "foo" });
  }).toThrowErrorMatchingSnapshot();
});
