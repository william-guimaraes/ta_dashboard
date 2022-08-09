const base = require("../lib/baseAPI")

exports.getAllApps = async (req, res) => {
    const apps = await base.API.get('/apps')
    res.json(apps)
}