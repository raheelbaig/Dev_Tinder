const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorize = token === "xyz";
  if (!isAdminAuthorize) {
    console.log("user is not authorize");
    res.status(401).send("UnAuthorized Request");
  } else {
    console.log("user is authorized")
    next();
  }
};

module.exports = {
    adminAuth,
}