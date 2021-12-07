const config = {
    development: {
        db: 'mongodb://localhost:27017/schs',
        port: 3000,
        allowedOrigins: [
            'http://localhost:4200'
        ]
    },
    production: {
        db: 'mongodb://localhost:27017/schs-prod',
        port: 3000,
        allowedOrigins: [
            'http://localhost:4200'
        ]        
    }
}

export { config }