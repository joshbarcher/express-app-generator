// scripts/update-template.js
import { execSync } from 'child_process';
import path from 'path';
import { rmSync, mkdirSync, existsSync, readdirSync, cpSync } from 'fs';

// Config
const repo = 'https://github.com/joshbarcher/project-template.git';
const tempDir = './.tmp-template';
const targetDir = './template';

// Step 1: Remove old template
if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true });
}
mkdirSync(targetDir);

// Step 2: Clone repo into temp folder
execSync(`git clone ${repo} ${tempDir}`, { stdio: 'inherit' });

// Step 3: Remove .git from temp folder
rmSync(path.join(tempDir, '.git'), { recursive: true, force: true });

// Step 4: Copy everything to ./template
cpSync(tempDir, targetDir, { recursive: true });

// Step 5: Delete temp folder
rmSync(tempDir, { recursive: true, force: true });

console.log('✅ Template updated successfully!');
