// url
let page = 'http://localhost/compta-jp/';

// variable
let payment_name = 'aaa';
let payment_description = 'bbb';

module.exports = {
  'Test Add Payment' : function (browser) {
    browser
      .url(page)
      .waitForElementVisible('body')
      .pause(1000)
      .assert.visible('input[id=payment_name]')
      .click('input[id=payment_name]')
      .setValue("input[id=payment_name]", payment_name)
      .pause(1000)
      .assert.visible('textarea[id=payment_description]')
      .click('textarea[id=payment_description]')
      .setValue('textarea[id=payment_description]', payment_description)
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .pause(1000)
      .end();
  }
};
