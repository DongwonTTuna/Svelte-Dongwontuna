import fs from 'fs'
export async function load() {

const data = fs.readFileSync('./src/data.json')

  return{
    status: 200,
    headers: {
      "Content-type": "application/json",
      "Content-Disposition": "attachment; filename=data.json"
    },
    body: JSON.stringify(data)
  }
}