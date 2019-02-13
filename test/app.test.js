const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('generator-react-component-dev-kit', () => {
  it('should create expected files', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'test-component' })
      .then((dir) => {
        assert.file([
          'test-component/webpack.config.js',
          'test-component/jest.config.js',
          'test-component/tslint.json',
          'test-component/src/index.tsx',
          'test-component/package.json',
        ]);
      });
  });
});
