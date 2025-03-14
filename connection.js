const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URIDB;

if (!uri) {
  console.error("error: missing mmongodb uri in environment variables");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function main() {
  try {
    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to mongodb");
  } catch (error) {
    console.error("mongodb connection error:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
