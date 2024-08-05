const BasicGenerator = require('../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    this.prompts = {
      type: 'default'
    };
  }

  writing() {
    const context = {
      name: this.name,
      ...this.prompts,
      isBeta: this.isBeta,
    };

    this.writeFiles({
      context,
      filterFiles: (f) => {
        return true;
      },
    });
  }
}

module.exports = Generator;
