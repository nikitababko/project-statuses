const cz = require('./commitizen.config.js');

const ruleLevel = 2;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [ruleLevel, 'always', cz.scopes.map((type) => type.name)],
    'type-enum': [ruleLevel, 'always', cz.types.map((type) => type.value)],
  },
};
