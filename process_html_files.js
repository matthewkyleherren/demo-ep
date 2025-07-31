const fs = require('fs');
const path = require('path');

// List of HTML files to process
const htmlFiles = [
    'careers/index.html',
    'reserve/index.html',
    'newsroom/index.html',
    'ourstory/index.html',
    'community/index.html',
    'manifesto/index.html',
    'scresources/index.html',
    'vendor-setup/index.html'
];

function processHtmlFile(filePath) {
    console.log(`Processing ${filePath}...`);

    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove inline styles
        content = content.replace(/<style>[\s\S]*?<\/style>/g, '');

        // Remove inline scripts (but keep Astro module scripts)
        content = content.replace(/<script>\s*\/\/ Use existing or create new session ID[\s\S]*?<\/script>/g, '');
        content = content.replace(/<script>\s*\(\(\) => \{[\s\S]*?\}\)\(\);\s*<\/script>/g, '');

        // Add external CSS link after the existing stylesheet link
        content = content.replace(
            /(<link rel="stylesheet" href="[^"]*">)/,
            '$1\n  <link rel="stylesheet" href="/assets/css/main.css">'
        );

        // Add external JS link after the existing script tags
        content = content.replace(
            /(<script type="module" src="[^"]*"><\/script>)/,
            '$1\n  <script src="/assets/js/main.js"></script>'
        );

        // Write the processed content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Processed ${filePath}`);

    } catch (error) {
        console.error(`✗ Error processing ${filePath}:`, error.message);
    }
}

// Process all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        processHtmlFile(filePath);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('\nHTML file processing complete!');