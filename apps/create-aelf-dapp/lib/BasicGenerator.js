const Generator = require('yeoman-generator');
const glob = require('glob');
const { statSync } = require('fs');

const { basename } = require('path');

class BasicGenerator extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.type = opts.type;
    this.typeValue = opts.typeValue;
    this.name = opts.name || basename(opts.env.cwd);
    this.isBeta = this.opts.type === 'beta' && this.typeValue === 'Yes';
  }

  isTsFile(file) {
    return file.endsWith('.ts') || file.endsWith('.tsx') || !!/(tsconfig\.json)/g.test(file);
  }

  writeFiles({ context, filterFiles = () => true }) {
    console.log(this.destinationPath());
    glob
      .sync('**/*', {
        cwd: this.templatePath(),
        dot: true,
      })
      .filter(filterFiles)
      .forEach((file) => {
        const filePath = this.templatePath(file);
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(
            this.templatePath(file),
            this.destinationPath(file.replace(/^_/, '.')),
            context,
          );
        }
      });
  }

  prompt(questions) {
    return super.prompt(questions);
  }
}

module.exports = BasicGenerator;
