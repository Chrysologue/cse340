const invModel = require("../models/inventory-model")
const utilities = require("../utilities/index")

const invCont = {}

invCont.buildByClassificationId = async function(req, res){
    const nav = await utilities.getNav()
    const classificationId = req.params.classificationId
    const data = await invModel.getInventoryByClassificationId(classificationId)
    const grid = await utilities.buildClassificationGrid(data)
    const className = data[0].classification_name

    res.render("./inventory/classification", {
        title: className + " vehicles",
        grid,
        nav
    })

}

module.exports = invCont