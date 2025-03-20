#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from '@jarcher/enhanced-chalk';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.join(__dirname, '../template');

program
    .version("1.0.0")
    .argument("<project-name>", "Name of the new project")
    .action(async projectName => {
        //get target directory
        const targetDir = path.resolve(projectName);
        if (fs.existsSync(targetDir)) {
            console.log(chalk.persimmon(`❌ Error: Directory '${projectName}' already exists!`));
            process.exit(1);
        }

        const copySpinner = ora({
            text: `📂 Creating project '${projectName}'...`,
            color: 'blue',
        }).start();

        try {
            await fs.copy(templateDir, targetDir);
            copySpinner.succeed(chalk.green('✅ Project files copied successfully!'));
        } catch (error) {
            copySpinner.fail(chalk.red('❌ Error copying project files.'));
            process.exit(1);
        }

        //copy files
        // console.log(chalk.skyblue(`📂 Creating new project: '${projectName}'...`));
        // await fs.copy(templateDir, targetDir);
        // console.log(chalk.green('✅ Project setup complete!'));

        const installSpinner = ora({
            text: '📦 Installing dependencies...',
            color: 'blue',
        }).start();

        
        try {
            execSync(`cd "${targetDir}" && npm install --silent`, { stdio: 'ignore' });
            installSpinner.succeed(chalk.green('✅ Dependencies installed!'));
        } catch (error) {
            installSpinner.fail(chalk.red('❌ Error installing dependencies. Please run "npm install" manually.'));
        }

        //dependencies
        // console.log(chalk.skyblue('📦 Installing dependencies (this may take a moment)...'));
        // try {
        //     execSync(`cd "${targetDir}" && npm install --silent`, { stdio: 'ignore' }); // Suppress output
        //     console.log(chalk.green('✅ Dependencies installed!'));
        // } catch (error) {
        //     console.log(chalk.red('❌ Error installing dependencies. Please run "npm install" manually.'));
        // }
    
        console.log(`\n🚀 Run the following commands:`);
        console.log(chalk.pink(`👉 cd ${projectName}`));
        console.log(chalk.pink('👉 npm start'));
    });

program.parse(process.argv);