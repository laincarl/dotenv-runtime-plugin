import loader from "../lib/loader";

it("loader", () => {
  expect(() => {
    return loader();
  }).not.toThrow();

  expect(
    loader(`
    TEST=3
    API=4
    `)
  ).toEqual('window._env_ = {"TEST":"3","API":"4"};');
});
