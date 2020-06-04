const app = require('./src/app')
const port = 3001

const startServer = () =>{
    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`)
    })

}

startServer()
