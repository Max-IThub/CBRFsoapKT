const soap = require('soap')
const wsdl = 'http://localhost:8000/cbrservice/?wsdl'
const operation = process.argv[2]
const fromDate = process.argv[3]
const toDate = process.argv[4]
const valutaCode = process.argv[5]
soap.createClient(wsdl, (err, client) => {
    if (operation == 1) {
        client.GetValutes({}, (err, result) => {
            
            let json = JSON.stringify(result.result, null, 4)
                
            
                    console.log(json)
        })
    } else if (operation == 2) {
        client.GetValute({ FromDate: fromDate, ToDate: toDate, ValutaCode: valutaCode }, (err, result) => {
            let json = JSON.stringify(result.result, null, 4)
                
                console.log(json)
        })
    }
    else {
        console.log("unknowm operation")
        return
    }
})