import { generateIndex } from 'vscode-generate-index-standalone'
import { join } from 'path'

const generateRoutes = await generateIndex({
  filePath: join(__dirname, '../src/**/index.ts'),
  replaceFile: true,
})
