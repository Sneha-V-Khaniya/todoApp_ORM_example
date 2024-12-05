const tableName = "Tags";

module.exports = function({ client }) {
    return {
        getTasksByTag
    }

    // async function getTasksByTag(tagId) {
    //     try {
    //         const query = `
    //             SELECT ...
    //         `;
    //         console.log(query);

    //         const res = await client.query(query);
    //         console.log(`Tasks for tagId : "${tagId}"`, res.rows);
    //     } catch (error) {
    //         console.error("Error while getting tasks by tag: ", error);
    //     }

    // }
}