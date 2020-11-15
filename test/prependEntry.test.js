import { prependEntry } from "../lib/utils";

const extraEntry = "./.env";
it("loader", () => {
  expect(prependEntry(["src/index.js"], extraEntry)).toEqual([
    "./.env",
    "src/index.js",
  ]);
  expect(prependEntry("src/index.js", extraEntry)).toEqual([
    "./.env",
    "src/index.js",
  ]);
  expect(prependEntry({ index: "src/index.js" }, extraEntry)).toEqual({
    index: ["./.env", "src/index.js"],
  });
  expect(
    prependEntry({ index: "src/index.js", app: "src/app.js" }, extraEntry)
  ).toEqual({
    index: ["./.env", "src/index.js"],
    app: ["./.env", "src/app.js"],
  });
});
