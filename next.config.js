module.exports = {
    images:{
        domains: [
            "links.papareact.com",
            "www.google.com",
            "platform-lookaside.fbsbx.com", 
            "firebasestorage.googleapis.com",
            "scontent.fblr13-1.fna.fbcdn.net",
        ],
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
    }
};