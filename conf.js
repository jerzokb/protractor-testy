const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
  framework: 'jasmine2',
  specs: ['*spec.ts'],
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--window-size=1600,900']
    }
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
  }
}
