import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from '@jarcher/enhanced-chalk';
import { execSync } from 'child_process';

const templateDir = new URL('../template', import.meta.url).pathname;

program
    .version("1.0.0")
    .argument("<project-name>", "Name of the new project")
    .action(async projectName => {
        //get target directory
        const targetDir = path.resolve(projectName);
        if (fs.existsSync(targetDir)) {
            console.log(chalk.persimmon(`Error: Directory '${projectName}' already exists!`));
            process.exit(1);
        }

        //copy files
        console.log(chalk.skyblue(`Copying project files to '${projectName}'...`));
        await fs.copy(templateDir, targetDir);
        console.log(chalk.lime('✅ Project setup complete!'));

        //dependencies
        console.log(chalk.skyblue('Installing dependencies...'));
        execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });
    
        console.log(chalk.lime('✅ All dependencies installed!'));
    
        console.log(`\nRun the following commands:\n`);
        console.log(chalk.pink(`cd ${projectName}`));
        console.log(chalk.pink('npm start'));
    });

program.parse(process.argv);