const client = new MongoClient(uri);
async function run() {
    try {
        var dbo = client.db("mydb");
        await dbo.collection("users").insertOne(user, function(err, res) {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);