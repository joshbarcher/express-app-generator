#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

const program = new Command();

// 🔧 Set your template repo URL here
const TEMPLATE_REPO = 'https://github.com/joshbarcher/project-template.git';

program
    .name('create-express-app')
    .description('Scaffold a new Express.js project from a remote template')
    .argument('<project-name>', 'Name of the new project directory')
    .action(async (projectName) => {
        const targetPath = path.join(process.cwd(), projectName);
        const tempPath = path.join(process.cwd(), '__temp__');

        try {
            // Step 1: Clone the repo to a temp folder
            console.log(`🔄 Pulling template files...`);
            execSync(`git clone --depth 1 ${TEMPLATE_REPO} "${tempPath}"`, {
                stdio: 'ignore'
            });

            // Step 2: Copy contents (excluding .git) to target project folder
            console.log(`📁 Copying files to '${projectName}'...`);
            await fs.copy(tempPath, targetPath, {
                filter: (src) => !src.includes(`${path.sep}.git`)
            });

            // Step 3: Clean up temporary clone folder
            await fs.remove(tempPath);

            // Step 4: Write a .gitignore
            const gitignorePath = path.join(targetPath, '.gitignore');
            const gitignoreContents = `
node_modules
coverage
.vscode
server.log
`;
            console.log(`📝 Writing .gitignore...`);
            await fs.writeFile(gitignorePath, gitignoreContents.trim());

            console.log(`✅ Project '${projectName}' created successfully.`);
        } catch (err) {
            console.error('❌ Error during project creation:', err.message);
            process.exit(1);
        }
    });

program.parse();
