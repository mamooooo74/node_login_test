const index = (req, res) => {
    console.log(req.user)
    res.json(req.user)
}
module.exports = {index}