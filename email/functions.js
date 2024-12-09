//função para pegar uma lista de emails com extenção xlsx
function  ListaEmails(){
    const xlsx = require('xlsx')
    const workbook = xlsx.readFile('C:\\Users\\fazenda\\Documents\\email\\email.xlsx')
  
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
  
    const data = xlsx.utils.sheet_to_json(worksheet)
  
    const emails = data.map(item => item[' Email'])
    return emails
}

module.exports = ListaEmails