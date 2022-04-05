const router = require("express").Router();
const Uploader = require("../utils/Uploader")
const crypto = require("crypto");

const data = []

router.get("/", async (req, res) => {
    res.render("index", {
        students: data
    })
})

router.post("/create", Uploader.single("image"), (req, res) => {
    const { full_name, direction, level, status } = req.body

    const body = {
        id: crypto.randomBytes(8).toString("hex"),
        full_name,
        direction,
        level,
        image: req.file.filename,
        status: status == 1 ? 1 : 0
    }

    data.push(body)

    res.json({
        success: true
    })   
})



router.put("/update/:id", Uploader.single("image"), (req, res) => {
    const { full_name, direction, level, status } = req.body

    data.forEach((item, index) => {
        if(item.id === req.params.id){
            data[index] = {
                id: item.id,
                full_name,
                direction,
                level,
                image: req.file.filename,
                status: status == 1 ? 1 : 0
            }
        }
    })

    res.json({
        success: true
    })
})


router.delete("/delete/:id", (req, res) => {
    data.forEach((item, index) => {
        if(item.id === req.params.id){
            data.splice(index, 1)
        }
    })

    res.json({
        success: true
    })
})

module.exports = router