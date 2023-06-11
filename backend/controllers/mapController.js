const asyncHandler = require("express-async-handler");
const Explore = require("../models/exploreModel");

const explorationDetails = asyncHandler(async (req, res) => {
  if (req.user.role === "admin") {
    const explores = await Explore.find();
    let result = { response: [] };
    for (const explore of explores) {
      result.response.push([
        explore.community,
        explore.location,
        explore.isExplored,
      ]);
    }
    res.status(200).json(result);
  } else {
    res.status(403);
    throw new Error("You are not authorized to view this page");
  }
});

module.exports = { explorationDetails };
