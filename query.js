const { taskDb, closeClient } = require("./src/data-access/index");

const taskQueries = async() => {
    await taskDb.getAllTasks();
    await taskDb.searchForTasksFromString('oM'); // not case sensitive

    await taskDb.addDocKeywordEntries('documnet_with_index'); // column name passed
    await taskDb.searchForTasksUsingNewColumn("oM");

    await taskDb.fullKeywordSearchFromArray("carefully");

    await taskDb.searchFromArray("care");
    await taskDb.searchFromJsonValue("color", "white");

    await closeClient();
};

taskQueries();