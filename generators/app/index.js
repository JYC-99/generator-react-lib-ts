const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const glob = require('glob');
const path = require('path');
const validateNPMPkgName = require('validate-npm-package-name');

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
      },
      {
        type: 'input',
        name: 'componentType',
        message:
`What is the type of your component?
  0 = Default
  1 = With fabric-ui
: `,
      },
    ]).then(function(props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    if (!validateNPMPkgName(this.props.name).validForNewPackages) {
      this.log(`${chalk.red(`The package name '${this.props.name}' is not valid!`)}`);
      this.log('Pleas follow the naming rules and try again.');
      this.log('https://www.npmjs.com/package/validate-npm-package-name#naming-rules');

      return;
    }

    const exportName = changeCase.pascalCase(this.props.name);
    const packageName = changeCase.paramCase(this.props.name);

    const translateOptionToComponentType = (option) => {
      switch (option) {
        case '1':
          return 'fabric-ui';
        default:
          return 'default';
      }
    };

    const type = translateOptionToComponentType(this.props.componentType);

    this.fs.copyTpl(
      glob.sync(this.templatePath(`${type}/**`), { dot: true }),
      this.destinationPath(path.join(this.props.path, packageName)),
      {
        packageName,
        exportName,
      });
  }
};
