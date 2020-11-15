function prependEntry(entry, extraEntry) {
  let newEntry = entry;
  // 单入口，且为字符串
  if (typeof entry === "string") {
    newEntry = [extraEntry, entry];
  } else if (entry instanceof Array) {
    newEntry.unshift(extraEntry);
  } else if (entry instanceof Object) {
    Object.keys(entry).forEach((key) => {
      newEntry[key] = prependEntry(newEntry[key], extraEntry);
    });
  }
  return newEntry;
}

module.exports = {
  prependEntry,
};
