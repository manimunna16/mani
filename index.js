function todaysEntries(entries) {
    const currentDate = new Date().toISOString().split("T")[0];
    const todayEntries = entries
      .filter(entry => entry.date.startsWith(currentDate))
      .map(entry => entry.name);
  
    return todayEntries.join(",");
  }
  
  module.exports = todaysEntries;
