import * as fs from 'fs';
import * as path from 'path';
import { PropItem, withCustomConfig } from 'react-docgen-typescript';
import { sync } from 'glob';

(async function generateDocs() {
  const tsConfigPath = path.join(
    process.cwd(),
    'packages/snow/tsconfig.lib.json'
  );
  const parser = withCustomConfig(tsConfigPath, {
    // propFilter: {
    //   skipPropsWithName: ['as', 'id', 'role', 'ref', 'sx', 'key'],
    //   skipPropsWithoutDoc: false,
    // },
    propFilter: (prop: PropItem, component: any) => {
      if (['as', 'id', 'role', 'ref', 'sx', 'key'].includes(prop.name)) {
        return false;
      }

      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        const hasPropAdditionalDescription = prop.declarations.find(
          (declaration) => {
            return !declaration.fileName.includes('node_modules');
          }
        );

        return Boolean(hasPropAdditionalDescription);
      }

      return true;
    },
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    // shouldRemoveUndefinedFromOptional: true,
  });

  // Use glob to find files first
  // This pattern finds all .tsx files in packages/snow/src/lib/Button
  // excluding .stories and .test files.
  const pattern = 'packages/snow/src/lib/**/!(*.stories|*.test).{ts,tsx}';
  const matchedFiles = sync(pattern, { absolute: true });

  // console.log('Matched files:', matchedFiles);

  // Now, instead of passing the pattern, pass the matched files array directly
  const docs = parser.parse(matchedFiles);

  if (docs.length === 0) {
    console.warn(
      'No component docs found. Make sure components are exported and return JSX.'
    );
  }

  const outputPath = path.join(
    process.cwd(),
    'packages/docs/src/snow-component-docs.json'
  );
  fs.writeFileSync(outputPath, JSON.stringify(docs, null, 2));
  // console.log(`Component docs generated at: ${outputPath}`);
})();
