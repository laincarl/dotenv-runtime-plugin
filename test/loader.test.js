import compiler from "./helpers/compiler";

test("simple use", async () => {
  const stats = await compiler(".env");
  const output = stats.toJson({ source: true }).modules[0].source;
  expect(output).toBe(`
    var paths = '_env_'.split('.').slice(0, -1);
    paths.reduce((result, path) => {
      if (!result[path]) {
        result[path] = {};
      }
      return result[path];
    }, window);
    window._env_ = {"TEST":"3","API":"4"};
    `);
});
test("custom variable name", async () => {
  const stats = await compiler(".env", {
    variableName: "process.env",
  });
  const output = stats.toJson({ source: true }).modules[0].source;
  expect(output).toBe(`
    var paths = 'process.env'.split('.').slice(0, -1);
    paths.reduce((result, path) => {
      if (!result[path]) {
        result[path] = {};
      }
      return result[path];
    }, window);
    window.process.env = {"TEST":"3","API":"4"};
    `);
});
