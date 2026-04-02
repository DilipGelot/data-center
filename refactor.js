const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const excludeFiles = [
  'ModelLabel.tsx', 
  'InteractiveModel.tsx', 
  'SelectionContext.tsx', 
  'Scene.tsx', 
  'IsometricZone.tsx', 
  'ConnectionLines.tsx'
];

files.forEach(file => {
  if (excludeFiles.includes(file)) return;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already processed or isn't a ModelComponent (doesn't have ModelLabel)
  if (content.includes('import InteractiveModel') || !content.includes('ModelLabel')) {
    return;
  }

  const modelId = file.replace('.tsx', '');

  // Add import
  const importStatement = `import InteractiveModel from "./InteractiveModel";\n`;
  content = content.replace(/(import .*;\n)+/, match => match + importStatement);

  // Replace wrapper
  // We look for <div className="relative"> (or relative flex-col... in ServerCluster)
  // And replace it with InteractiveModel wrap.
  
  if (content.includes('<div className="relative">')) {
     content = content.replace('<div className="relative">', `<InteractiveModel id="${modelId}">`);
     // Find the closing </div> of the relative block.
     // This is tricky using regex, we can replace the last </div> before the absolute wrapper closes.
     // In these files, the structure is always:
     // <div absolute>
     //   <div relative>
     //     ...
     //   </div>
     // </div>
     
     // We replace the first </div>\n    </div> with </InteractiveModel>\n    </div>
     content = content.replace(/<\/div>\s*<\/div>\s*\)\;/g, `</InteractiveModel>\n    </div>\n  );`);
  } else if (content.includes('<div className="relative flex flex-col items-center justify-center">')) {
     // For ServerCluster
     content = content.replace('<div className="relative flex flex-col items-center justify-center">', `<InteractiveModel id="${modelId}">`);
     content = content.replace(/<\/div>\s*<\/div>\s*\)\;/g, `</InteractiveModel>\n    </div>\n  );`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
});
