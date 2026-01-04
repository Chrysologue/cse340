const invModels = require("../models/inventory-model");

const Util = {};

Util.getNav = async function (req, res, next) {
  const data = await invModels.getClassification();
  console.log(data);
  let list = "";
  list += '<a href="/" title="Home Page">Home</a>';
  data.rows.forEach((item) => {
    list += `
            <a 
                href="/inv/type/${item.classification_id}"
                title="See our inventory ${item.classification_name} vehicules"
            >
            ${item.classification_name}
            </a>
        `;
  });
  return list;
};

Util.buildClassificationGrid = async function (data) {
  let grid;
  if (data.length > 0) {
    grid = "<ul class='inv-display'>";
    data.forEach((vehicle) => {
      grid += `<li>
                <a href="/inv/detail/${vehicle.inv_id}"
                title="View ${vehicle.inv_make} ${vehicle.inv_model} details"
                >
                    <img src="${vehicle.inv_thumbnail}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}" on CSE Motors/>
                </a>
                <div class="namePrice">
                    <h2>
                        <a href="/inv/detail/${vehicle.inv_id}"
                title="View ${vehicle.inv_make} ${vehicle.inv_model} details">
                    ${vehicle.inv_make} ${vehicle.inv_model}
                </a>
                >
                    </h2>
                    <span>
                        $ ${new Intl.NumberFormat('en-US').format(vehicle.inv_price)}
                    </span>
                </div>
            </li>`;
    });
    grid += "</ul>"
  }
  else {
    grid += '<p class="notice">Sorry, no matching vehicles could be found.</p>'
  }
  return grid
};

module.exports = Util;
