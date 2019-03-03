const redis = require("redis");

const client = redis.createClient();

client.set("name", "xiaoyun");

client.get("name", (err, reply) => {
    console.log(reply);
    client.quit();
});