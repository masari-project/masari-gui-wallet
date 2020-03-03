const path = require('path');

module.exports = {
  
      packagerConfig: {
        executableName: "masari-gui-wallet",
        icon: path.normalize(__dirname+'/src/assets/img/favicon.ico')

      },
      makers: [
        {
          name: "@electron-forge/maker-squirrel",
          config: {
            name: "masari-gui-wallet",
            iconUrl: path.normalize(__dirname+'/src/assets/img/favicon.ico'),
            setupIcon: path.normalize(__dirname+'/src/assets/img/favicon.ico')
          }
        },
        {
          name: "@electron-forge/maker-zip",
          platforms: [
            "darwin"
          ]
        },
        {
          name: "@electron-forge/maker-deb",
          config: {
            name: "masari-gui-wallet",
            icon: __dirname +'/src/assets/img/icons/icon-128x128.png',
	    productName: "Masari Desktop Wallet",
	    productDescription: " Masari is a privacy-centric innovative cryptocurrency that allows users to send money around the globe with low fees very quickly.\n\n Masari ($MSR) is a proof of work peer-to-peer internet currency using the well researched and cryptographically sound CryptoNote and RingCT protocols. This means that every transaction origin, amount, and destination is obfuscated by default. \n\n Masari is an open source project that is fully decentralized, similar to bitcoin. With several CryptoNote firsts such as uncle mining via the SECOR protocol, a fully client side web wallet, and PoW sharding via the blocktree protocol, Masari is a fast, fungible, secure, private and soon-to-be scalable currency.",
	    homepage: "https://getmasari.org/"
          }
        },
        {
          name: "@electron-forger/maker-dmg",
          config: {
            name: "masari-gui-wallet",
            icon: __dirname +'/src/assets/img/icons/favicon.icns',
          }
        }
      ]
    }
