const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const glob = require('glob');
const path = require('path');

module.exports = class extends Generator{
  prompting() {
    const greetingMessage = `Welcome to ${chalk.black.bold.bgWhite('generator-react-lib-ts')} generator!`;

    this.log(yosay(greetingMessage));

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'input a name for the library',
        default: 'new-lib',
      },
      {
        type: 'input',
        name: 'path',
        message: 'input path for your library',
        default: '',
      }
    ]).then(function(props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    const exportName = changeCase.pascalCase(this.props.name);
    const packageName = changeCase.paramCase(this.props.name);

    const type = 'default'; // reserved for more types in the future

    this.fs.copyTpl(
      glob.sync(this.templatePath(`${type}/**`), { dot: true }),
      this.destinationPath(path.join(this.props.path, packageName)),
      {
        packageName,
        exportName,
      });
  }
};
