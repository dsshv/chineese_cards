const express = require('express'),
    app = express(),
    port = 3000

app.get('/', (req: any, res: any) => {
    res.send("Hello sir!")
})

app.listen(port, () => {
    console.log('server started on localhost:' + port)
})