import * as fs from 'fs';
import * as path from 'path';
import {
  ComponentDoc,
  PropItem,
  withCustomConfig,
} from 'react-docgen-typescript';
import { sync } from 'glob';
import { log, styledLogInfo, styledLogSuccess } from './logger';

(async function generateDocs() {
  try {
    const tsConfigPath = path.join(
      process.cwd(),
      'packages/snow/tsconfig.lib.json'
    );
    const parser = withCustomConfig(tsConfigPath, {
      // propFilter: {
      //   skipPropsWithName: ['as', 'id', 'role', 'ref', 'sx', 'key'],
      //   skipPropsWithoutDoc: false,
      // },
      propFilter: (prop: PropItem, _component) => {
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
    // This pattern finds all .ts and .tsx files in packages/snow/src/lib/
    // excluding .stories, .test and .spec files.
    const pattern =
      'packages/snow/src/lib/**/!(*.stories|*.test|*.spec).{ts,tsx}';
    const matchedFiles = sync(pattern, { absolute: true });

    // Log matched files
    styledLogInfo('Generating documentation for the following files :-');

    matchedFiles.forEach((file) => {
      log('success', `${file}`);
    });

    // Now, instead of passing the pattern, pass the matched files array directly
    const docs: ComponentDoc[] = parser.parse(matchedFiles);

    // Post-processing: Remove unwanted attributes
    const cleanedDocs: Partial<ComponentDoc>[] = docs.map((doc) => {
      const { filePath, ...rest } = doc; // Destructure to exclude filePath
      return rest;
    });

    // Check if any docs were generated
    if (cleanedDocs.length === 0) {
      log(
        'warning',
        'No component docs found. Make sure components are exported and return JSX.'
      );
    } else {
      styledLogSuccess(`Parsed ${cleanedDocs.length} component(s).`);
    }

    const outputPath = path.join(
      process.cwd(),
      'packages/docs/src/snow-component-docs.json'
    );
    fs.writeFileSync(outputPath, JSON.stringify(cleanedDocs, null, 2));

    log('success', `Component docs generated at: ${outputPath}`);
  } catch (error) {
    log('error', `Failed to generate component docs.`);
    log('error', error);

    process.exit(1); // Exit with failure code
  }
})();
