const{Given,When}=require("@cucumber/cucumber")
const{LoginPage}=require("../pages/login.js")

let lob

Given('User navigates to the login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob=new LoginPage(this.page)
  await lob.navigate()
});

When('User enters the valid username and valid password', async function () {
  // Write code here that turns the phrase above into concrete actions
  lob=new LoginPage(this.page)
 await lob.userAndPassword()
});

When('User clicks the login button', async function () {
  // Write code here that turns the phrase above into concrete actions

  lob=new LoginPage(this.page)
  await lob.dropdown()
  await lob.temrs()
  await lob.signinbtn()
});
