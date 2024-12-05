const tableName = "Tasks";

module.exports = function({ client }) {
    return {
        getAllTasks,
        addDocKeywordEntries,
        searchForTasksFromString,
        searchForTasksUsingNewColumn,
        searchFromArray,
        fullKeywordSearchFromArray,
        searchFromJsonValue
    };

    async function getAllTasks() {
        try {
            const query = `SELECT * from "${tableName}"`;
            console.log(query);

            const res = await client.query(query);
            console.log("All Tasks", res.rows);
        } catch (error) {
            console.error("Error while getting all tasks: ", error);
        }
    }

    async function searchForTasksFromString(keyword) {
        try {
            const columns = ["taskName"];
            const query = `SELECT "${columns.join(
                ", "
            )}" FROM "${tableName}" Where "taskName" ILIKE $1 `; // ILIKE -> it is case-insensitive

            console.log(query);
            const values = [`%${keyword}%`];

            const res = await client.query(query, values);
            console.log(`task Matched with "${keyword}": `, res.rows);
        } catch (error) {
            console.error(
                "Error while getting searched tasks from simple string: ",
                error
            );
        }
    }

    async function addDocKeywordEntries(column) {
        const columnForKeywords = "taskName";

        try {
            const query = `
                UPDATE "${tableName}" 
                SET "${column}" = to_tsvector('english', COALESCE("${columnForKeywords}", ''))
            `;

            const res = await client.query(query);
            console.log(
                `Document vector generated for ${columnForKeywords}. Rows updated: ${res.rowCount}`
            );
        } catch (error) {
            console.error(
                `Error while generating documents for ${columnForKeywords}:`,
                error
            );
        }
    }


    async function searchForTasksUsingNewColumn(keyword) {
        try {

            const columns = ["taskName"];

            // const query = `SELECT "${columns.join(", ")}" FROM "${tableName} Where to_tsquery($1) @@ to_tsvector("${tableName}"."taskName") `;
            const query = `
                    SELECT "${columns.join(", ")}" FROM "${tableName}" 
                    WHERE "documnet_with_index" @@ to_tsquery('english', $1)
                `;
            const values = [`%${keyword}%`];

            const res = await client.query(query, values);
            console.log(`task Matched with word "${keyword}": `, res.rows);
        } catch (error) {
            console.error(
                "Error while getting searched tasks based on new column: ",
                error
            );
        }
    }


    async function searchFromArray(keyword) {
        try {
            const columns = ["taskName"];
            const arrayColumn = "notes";


            const query = `
                SELECT "${columns.join(", ")}", "note"
                FROM ( SELECT "${columns.join(", ")}", unnest(${arrayColumn}) as "note" from "${tableName}")
                WHERE "note" like '%${keyword}%'
            `;
            // console.log(query);

            const res = await client.query(query);

            console.log(`matched columns with whole keyword "${keyword}": `, res.rows);

        } catch (error) {
            console.error(
                "Error while searching keyword from the array: ",
                error
            );
        }
    }

    async function fullKeywordSearchFromArray(keyword) {
        try {
            const columns = ["taskName"];
            const arrayColumn = "notes";

            // whole keyword match with an element
            const query = `
                SELECT "${columns.join(", ")}", "${arrayColumn}" FROM "${tableName}"
                WHERE '${keyword}' = ANY(${arrayColumn})
            `;
            console.log(query);

            const res = await client.query(query);

            console.log(`matched columns with keyword "${keyword}": `, res.rows);

        } catch (error) {
            console.error(
                "Error while searching whole keyword from the array element: ",
                error
            );
        }
    }

    async function searchFromJsonValue(filter, keyword) {
        try {
            const columns = ["taskName"];
            const jsonColumn = "config";

            // whole keyword match with an element
            const query = `
                SELECT "${columns.join(", ")}", "${jsonColumn}" FROM "${tableName}"
                WHERE to_tsvector('english', "${jsonColumn}") @@ to_tsquery($1)
            `;
            console.log(query);

            const res = await client.query(query, [keyword]);

            console.log(`matched columns with keyword "${keyword}": `, res.rows);
        } catch (error) {
            console.error(
                "Error while searching whole keyword from the JSON value: ",
                error
            );
        }
    }
};