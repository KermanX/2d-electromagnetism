import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

async function exportGraph(name) {
  const path = fileURLToPath(new URL(`./${name}.ipynb`, import.meta.url))
  const json = JSON.parse(await fs.promises.readFile(path, 'utf8'))
  let i = 0
  for (const cell of json.cells) {
    if (!cell.outputs) return
    for (const output of cell.outputs) {
      if (output.data['image/png']) {
        const base64Data = output.data['image/png'].replace(/^data:image\/png;base64,/, '')
        const path = fileURLToPath(new URL(`../src/assets/${name}-${++i}.png`, import.meta.url))
        fs.promises.writeFile(path, base64Data, 'base64')
      }
    }
  }
}

exportGraph('b')
exportGraph('e')
