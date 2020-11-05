const InstagramClient = require('./instagramClient');

async function start() {
    const client = new InstagramClient()
    await client.start()

    console.log('@brimac1634:', await client.getFollowers('brimac1634'));

    await client.stop()
}

start()