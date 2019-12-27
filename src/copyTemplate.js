#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const yargs = require('yargs');
const ejs = require('ejs');

function render(content, data) {
    return ejs.render(content, data);
}

const CHOICES = fs.readdirSync(path.join(__dirname, '../templates'));
const QUESTIONS = [{
        name: 'template',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES,
        when: () => !yargs.argv['template']
    },
    {
        name: 'name',
        type: 'input',
        message: 'Project name:',
        when: () => !yargs.argv['name'],
        validate: (input) => {
            if (/^([A-Za-z\-\_\d])+$/.test(input))
                return true;
            else
                return 'Project name may only include letters, numbers, underscores and hashes.';
        },
        default: 'new-feature'
    },
    {
        name: 'title',
        type: 'input',
        message: 'Project title:',
        when: () => !yargs.argv['title'],
        default: 'New feature'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Project description:',
        when: () => !yargs.argv['description'],
        default: 'Description of new feature'
    },
    {
        name: 'author',
        type: 'input',
        message: 'Project author:',
        when: () => !yargs.argv['author'],
        default: 'Feature generator'
    },
    {
        name: 'hostname',
        type: 'input',
        message: 'In which hostname do you want to use the feature?',
        when: () => !yargs.argv['hostname'],
        default: 'twitter.com'
    }
];
const CURR_DIR = process.cwd();
inquirer.prompt(QUESTIONS)
    .then(answers => {
        answers = Object.assign({}, answers, yargs.argv);
        const projectChoice = answers['template'];
        const projectName = answers['name'];
        const hostname = answers['hostname'];
        const templatePath = path.join(__dirname, '../templates', projectChoice);
        const tartgetPath = path.join(CURR_DIR, 'packages', projectName);
        const templateConfig = getTemplateConfig(templatePath);
        const options = {
            projectName,
            templateName: projectChoice,
            templatePath,
            tartgetPath,
            config: templateConfig
        };
        if (!createProject(tartgetPath)) {
            return;
        }
        createDirectoryContents(templatePath, projectName, templateConfig, answers);
        updateSiteBindings(projectName, hostname);
        if (!postProcess(options)) {
            return;
        }
        showMessage(options);
    });

function showMessage(options) {
    console.log('');
    console.log(chalk.green('Done.'));
    console.log(chalk.green(`Run building: npm start`));
    const message = options.config.postMessage;
    if (message) {
        console.log('');
        console.log(chalk.yellow(message));
        console.log('');
    }
}

function getTemplateConfig(templatePath) {
    const configPath = path.join(templatePath, '.template.json');
    if (!fs.existsSync(configPath))
        return {};
    const templateConfigContent = fs.readFileSync(configPath);
    if (templateConfigContent) {
        return JSON.parse(templateConfigContent.toString());
    }
    return {};
}

function createProject(projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
        return false;
    }
    fs.mkdirSync(projectPath);
    return true;
}

function postProcess(options) {
    if (isNode(options)) {
        return postProcessNode(options);
    }
    return true;
}

function isNode(options) {
    return fs.existsSync(path.join(options.templatePath, 'package.json'));
}

function postProcessNode(options) {
    shell.cd(CURR_DIR);
    let cmd = '';
    if (shell.which('npm')) {
        cmd = 'npm install';
    }
    if (cmd) {
        const result = shell.exec(cmd);
        if (result.code !== 0) {
            return false;
        }
    } else {
        console.log(chalk.red('No npm found. Cannot run installation.'));
    }
    return true;
}
const SKIP_FILES = ['node_modules', '.template.json'];
const JUST_COPY = ['.png'];

function createDirectoryContents(templatePath, projectName, config, answers) {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
        if (SKIP_FILES.indexOf(file) > -1)
            return;
        if (stats.isFile()) {
            const writePath = path.join(CURR_DIR, 'packages', projectName, file);
            if (JUST_COPY.map(e => file.indexOf(e) > -1).reduce((acc, cur) => acc || cur)) {
                fs.copyFileSync(origFilePath, writePath);
                return;
            }
            let contents = fs.readFileSync(origFilePath, 'utf8');
            contents = render(contents, {
                projectName,
                ...answers
            });
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(CURR_DIR, 'packages', projectName, file));
            // recursive call
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), config, answers);
        }
    });
}

function updateSiteBindings(name, hostname) {
    const configPath = path.join(__dirname, '../src/server/config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    if (!config['hostnames']) config['hostnames'] = {};
    if (!config['hostnames'][hostname]) config['hostnames'][hostname] = {};
    config['hostnames'][hostname][name + '.dapplet-base.eth'] = '0.1.0';

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
}