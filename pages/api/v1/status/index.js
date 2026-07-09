import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).json({ msg: "reponse do status paginação" });
}

export default status;
