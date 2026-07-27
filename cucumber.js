module.exports = {
  default: {
    path:["features/login.feature"],
    require: [
      "tests/stepdefinitions/loginstep.js",
      "features/support/hooks.js"
    ],
    format: [
      "progress","allure-cucumberjs/reporter"
    ],
   formatOptions: {
      resultsDir: "allure-results"
    }	
  }
}
