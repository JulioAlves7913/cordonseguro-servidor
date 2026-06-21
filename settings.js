const bcrypt = require("bcryptjs");

module.exports = {
    flowFile: 'flows.json',
    uiPort: process.env.PORT || 1880,

    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$REEMPLAZAR_CON_HASH_GENERADO",
            permissions: "*"
        }]
    },

    functionGlobalContext: {},
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
