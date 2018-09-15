router.get('/all', (req, res) => {
    const ms = Model.all()
    console.log('debug ms', req.headers)
    const dict = {
        success: true,
        data: ms,
        message: ''
    }
    jsonResponse(req, res, dict)
})