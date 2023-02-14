/**
 * Gets sum of two numbers in params
 * 
 * Expects url params a and b
 *
 * @param {HttpRequest} req request object
 * @param {HttpResponse} res response object
 * @returns json object with message and list of roles
 */
const getSum = async (req, res) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    console.log(req)
    console.log(`a = ${a} ; and b = ${b}`);
    const sum = a + b;
    return res.status(200).json({ result: sum, message: "Success" });
  } catch (e) {
    console.log(err);
    return res.status(500).json({ result: [], message: "Error getting roles" });
  }
}

module.exports = {
  getSum
}