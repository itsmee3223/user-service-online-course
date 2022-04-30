const { RefreshToken } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const refreshToken = req.query.refresh_token;

  const schema = {
    refresh_token: "string|empty:false",
  };

  const validate = v.validate(req.query, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: "missing query refresh_token",
    });
  }

  const token = await RefreshToken.findOne({
    where: { token: refreshToken },
  });

  if (!token) {
    return res.status(404).json({
      status: "error",
      message: "invalid token",
    });
  }

  return res.json({
    status: "success",
    token,
  });
};
