"use strict";
/*
 * Copyright (c) 2018, Gnock
 * Copyright (c) 2018, The Masari Project
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    "url": "api.html",
    "revision": "5ae7b4a991671f9f8eb1667d0a2dab34"
  },
  {
    "url": "api.js",
    "revision": "dbc90fc2e497a450d640a40d3673460b"
  },
  {
    "url": "assets/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "assets/css/main.css",
    "revision": "c0384f48f58f32421638de535d199a4e"
  },
  {
    "url": "assets/img/favicon.ico",
    "revision": "2f6d855fc0aac990a5f49b59d2fd2be8"
  },
  {
    "url": "assets/img/icons/icon-128x128.png",
    "revision": "e811e677a13d26ebef437640e1bb7d30"
  },
  {
    "url": "assets/img/icons/icon-144x144.png",
    "revision": "acc05fbd2d5578b078dded25d19e731d"
  },
  {
    "url": "assets/img/icons/icon-152x152.png",
    "revision": "a4f5659dda1cfe7aba3fb84104a563c5"
  },
  {
    "url": "assets/img/icons/icon-192x192.png",
    "revision": "78dfb4755afb8642a9c43147ccb1cd08"
  },
  {
    "url": "assets/img/icons/icon-256x256.png",
    "revision": "ae887fc3850ec2b3cdb71d5a97b318be"
  },
  {
    "url": "assets/img/icons/icon-402x402.png",
    "revision": "3f37d9ffeb2d1e492a6b6d6d9e90d5bc"
  },
  {
    "url": "assets/img/landing/75-usersthink-stock-image.jpg",
    "revision": "7a00bbf57aacc5303e846055b6dae1cb"
  },
  {
    "url": "assets/img/logo_white.png",
    "revision": "021a9a3c4434d955aa6430d6f32d24f6"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "0daf6c33a5e5b443af277c7082717cdd"
  },
  {
    "url": "assets/img/logoQrCode.png",
    "revision": "db552925892bbba67897385ea2c91b39"
  },
  {
    "url": "assets/img/Masari_Vertical.png",
    "revision": "6f0560be9757e26945f1eb232474bc22"
  },
  {
    "url": "config.js",
    "revision": "6cbb1537e567c4eadc1e8d4356674f60"
  },
  {
    "url": "d/vue-i118n.js",
    "revision": "5e60d2e13017ae982538f352d04a961c"
  },
  {
    "url": "index.html",
    "revision": "b0c60b2d37d64e850459c72b68d58e20"
  },
  {
    "url": "index.js",
    "revision": "5ba1c1991b3f8bb2bfba01f211bf0077"
  },
  {
    "url": "lib/base58.js",
    "revision": "3d523c0162d6911fd675c9ed1b7389a8"
  },
  {
    "url": "lib/biginteger.js",
    "revision": "f5a873c5716a9d3481501cad3f3e5ca7"
  },
  {
    "url": "lib/cn_utils_native.js",
    "revision": "94d65c88ed19007552b6593fa6fc68d1"
  },
  {
    "url": "lib/crypto.js",
    "revision": "d51c76b2e08308f8cca1f68c5c298a6f"
  },
  {
    "url": "lib/decoder.min.js",
    "revision": "889b2bf53f2adc26ca2688e012c4e00b"
  },
  {
    "url": "lib/FileSaver.min.js",
    "revision": "e8fdc5ad52084fa417f1fec6b6de3b29"
  },
  {
    "url": "lib/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "lib/jspdf.min.js",
    "revision": "27385efc6fa2eccc9dde7da0081b1a98"
  },
  {
    "url": "lib/kjua-0.1.1.min.js",
    "revision": "ca69d4f40f8c17ff592123dc35c1ea18"
  },
  {
    "url": "lib/mnemonic.js",
    "revision": "f30940176ec1e71b5a5f0c9b784a98b9"
  },
  {
    "url": "lib/nacl-fast-cn.js",
    "revision": "1fe1387eb865d9e843697a9d315d95b1"
  },
  {
    "url": "lib/nacl-fast.js",
    "revision": "08ac00aebba1f9457fc7927655e982c5"
  },
  {
    "url": "lib/nacl-fast.min.js",
    "revision": "72444801c9affc1654ef12860c67e976"
  },
  {
    "url": "lib/nacl-util.min.js",
    "revision": "c7b843b9e9b5aad102c855c600c7edc8"
  },
  {
    "url": "lib/nacl.js",
    "revision": "bf72b0a25fc3edf0c1a638aa43642714"
  },
  {
    "url": "lib/nacl.min.js",
    "revision": "d8eaf281c8890a60ebe82840456edc33"
  },
  {
    "url": "lib/numbersLab/Context.js",
    "revision": "40c29d848d2e19cdff2399a1f4a0ec08"
  },
  {
    "url": "lib/numbersLab/DependencyInjector.js",
    "revision": "3a74b2036a4e4730d2454b96732fb562"
  },
  {
    "url": "lib/numbersLab/DestructableView.js",
    "revision": "c34f21327cd00c4b69dd88f33a60b7fc"
  },
  {
    "url": "lib/numbersLab/Logger.js",
    "revision": "8c2a28644d0112f8934f6ac54ada17ac"
  },
  {
    "url": "lib/numbersLab/Observable.js",
    "revision": "84e5ac65bf05cee513a1fb77801de7b8"
  },
  {
    "url": "lib/numbersLab/Router.js",
    "revision": "a953a6888f51569be1a2d699c4ef986e"
  },
  {
    "url": "lib/numbersLab/VueAnnotate.js",
    "revision": "322eccaecb8cbbfba7b1f7a10ba9cf3b"
  },
  {
    "url": "lib/polyfills/core.min.js",
    "revision": "6ff449122255e7a91fb884ea7016c601"
  },
  {
    "url": "lib/polyfills/crypto.js",
    "revision": "13647291f45a582eee64e000b09d9567"
  },
  {
    "url": "lib/polyfills/textEncoding/encoding-indexes.js",
    "revision": "50f27403be5972eae4831f5b69db1f80"
  },
  {
    "url": "lib/polyfills/textEncoding/encoding.js",
    "revision": "cfc731bd62baec239b2c4daf33b5e810"
  },
  {
    "url": "lib/require.js",
    "revision": "bebd45d1f406bbe61424136b03e50895"
  },
  {
    "url": "lib/sha3.js",
    "revision": "9f298ac7e4ee707645a8d711f3ed916b"
  },
  {
    "url": "lib/sweetalert2.js",
    "revision": "4b69bbd418e85d6efdac5630ed40d76e"
  },
  {
    "url": "lib/vue-i18n.js",
    "revision": "e6661e4c9407136f4aca71aaea06b35e"
  },
  {
    "url": "lib/vue.min.js",
    "revision": "5283b86cbf48a538ee3cbebac633ccd4"
  },
  {
    "url": "manifest.json",
    "revision": "afd490cc5614ec00721df11e56c860a1"
  },
  {
    "url": "model/AppState.js",
    "revision": "23206380da5169bf1d416df9fd9a5de4"
  },
  {
    "url": "model/blockchain/BlockchainExplorer.js",
    "revision": "f38ab86de3e385035147b61190c1e1ff"
  },
  {
    "url": "model/blockchain/BlockchainExplorerRpc2.js",
    "revision": "b4403d195432222239984637b3829117"
  },
  {
    "url": "model/Cn.js",
    "revision": "0af2c950c511d9a643cc781e3be6bf9c"
  },
  {
    "url": "model/CoinUri.js",
    "revision": "a8d4eea58a272c4af50db832644c4c54"
  },
  {
    "url": "model/Constants.js",
    "revision": "b1cbabd41b94bf64be95526bf46c4f23"
  },
  {
    "url": "model/KeysRepository.js",
    "revision": "1d20a0a5c60b5cf292fd81da981b109d"
  },
  {
    "url": "model/MathUtil.js",
    "revision": "7f559b68c432164e2ad261f162d57335"
  },
  {
    "url": "model/Mnemonic.js",
    "revision": "10fe4d111971235b8c1d8e45129074d6"
  },
  {
    "url": "model/MnemonicLang.js",
    "revision": "5e8a6217a74c3dc5f50d7e8d2f8fa25f"
  },
  {
    "url": "model/Nfc.js",
    "revision": "5e79dba2eccb2e4a6be22903911ef4d0"
  },
  {
    "url": "model/Password.js",
    "revision": "c0c85c860432cce2a11c6c713d4c4898"
  },
  {
    "url": "model/QRReader.js",
    "revision": "075c42294139c4d342d3dfe3b64ef850"
  },
  {
    "url": "model/Storage.js",
    "revision": "ef81f34a9d7f8db75d2e6bb8709fae5f"
  },
  {
    "url": "model/Transaction.js",
    "revision": "318d8cc97f0c1eadd424136d0df2b85e"
  },
  {
    "url": "model/TransactionsExplorer.js",
    "revision": "787224dabc25d606949efcfe93a4b866"
  },
  {
    "url": "model/Translations.js",
    "revision": "554041f979415c00deb2710211c461fc"
  },
  {
    "url": "model/Wallet.js",
    "revision": "f8aa636e5cd06bed64874c6e998f2d1f"
  },
  {
    "url": "model/WalletRepository.js",
    "revision": "536888b647438ad583c8be01d449d34a"
  },
  {
    "url": "pages/account.html",
    "revision": "53563a0a922cb5cbccb8c9b3320fb29c"
  },
  {
    "url": "pages/account.js",
    "revision": "7f9e1e1741554a911714640ccf3da85d"
  },
  {
    "url": "pages/changeWalletPassword.html",
    "revision": "cf44f48e8c60b3c2e19e22e825a89724"
  },
  {
    "url": "pages/changeWalletPassword.js",
    "revision": "ed9d0d811f01dc4e195535b023e2593f"
  },
  {
    "url": "pages/createWallet.html",
    "revision": "9a3e881c0eb3caf000e99ef54e98c5db"
  },
  {
    "url": "pages/createWallet.js",
    "revision": "2cf6db6bd7951d6f62a11b2d44367209"
  },
  {
    "url": "pages/disconnect.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/disconnect.js",
    "revision": "3594698740c48755bfb42a88ac737180"
  },
  {
    "url": "pages/donate.html",
    "revision": "88c8059a0e51a9dffce46af677044cf7"
  },
  {
    "url": "pages/donate.js",
    "revision": "fbd9a3915391c25ee01c7fd7fbe777f2"
  },
  {
    "url": "pages/export.html",
    "revision": "f6f0d1d508eb813bc930c58885938332"
  },
  {
    "url": "pages/export.js",
    "revision": "6ccba9e694dab3f45ba3adbb15de9b53"
  },
  {
    "url": "pages/import.html",
    "revision": "45f5c149574bd7cf2bc91794c4adee55"
  },
  {
    "url": "pages/import.js",
    "revision": "16a4b5d6f0489c94418372e05af982d6"
  },
  {
    "url": "pages/importFromFile.html",
    "revision": "b824f9fc68ce358032faecd70b0e099b"
  },
  {
    "url": "pages/importFromFile.js",
    "revision": "7498a3f7e079ebe259b83cf4f842bb53"
  },
  {
    "url": "pages/importFromKeys.html",
    "revision": "1388fc183805920f522c5cb26e3c2714"
  },
  {
    "url": "pages/importFromKeys.js",
    "revision": "9e490de691f19902432534577bc203a5"
  },
  {
    "url": "pages/importFromMnemonic.html",
    "revision": "367f09264b3c3008ee0eda752d4a0ea7"
  },
  {
    "url": "pages/importFromMnemonic.js",
    "revision": "b04aff2f1820156e313830fa585cf353"
  },
  {
    "url": "pages/importFromQr.html",
    "revision": "172fc490fa9a97ed146895e0f35aeedc"
  },
  {
    "url": "pages/importFromQr.js",
    "revision": "ce4f27af88edaa212bd9e5f80390a254"
  },
  {
    "url": "pages/index.html",
    "revision": "bce2d288af79114facd74d5523f878d4"
  },
  {
    "url": "pages/index.js",
    "revision": "bebc03756da9c036b7a1aa7fd55231bd"
  },
  {
    "url": "pages/network.html",
    "revision": "b22bc334c2e5067d11f2856f9dbe3b0a"
  },
  {
    "url": "pages/network.js",
    "revision": "1e23fc640a6ad459c26a335695b83a23"
  },
  {
    "url": "pages/privacyPolicy.html",
    "revision": "0bdfeea940590b665b5764b4167c4de2"
  },
  {
    "url": "pages/privacyPolicy.js",
    "revision": "a06e415fe7eaf88807bf25d83989dc1c"
  },
  {
    "url": "pages/receive.html",
    "revision": "f0ef8b9315d0017680a73ceabe624c88"
  },
  {
    "url": "pages/receive.js",
    "revision": "f2d8ea6d27b1e9d457bd04fce8a7d921"
  },
  {
    "url": "pages/send.html",
    "revision": "f08844563340434f62a0f0d10fc52b14"
  },
  {
    "url": "pages/send.js",
    "revision": "e4af41e39b958826be285302790777c7"
  },
  {
    "url": "pages/settings.html",
    "revision": "e5756856e314246c5951dda64cf6f8e6"
  },
  {
    "url": "pages/settings.js",
    "revision": "a0d005fc4f757238303fafd439549680"
  },
  {
    "url": "pages/support.html",
    "revision": "2b1792ba4adf2bc99c52ebca9a3b194b"
  },
  {
    "url": "pages/support.js",
    "revision": "b9dc72108aa6602ee5e3eb8614c4913d"
  },
  {
    "url": "pages/termsOfUse.html",
    "revision": "ce92ca19f2d5233e26d9b3fac4c600ea"
  },
  {
    "url": "pages/termsOfUse.js",
    "revision": "1e0462ca4750db68f111cd17bbd9d740"
  },
  {
    "url": "providers/BlockchainExplorerProvider.js",
    "revision": "d18a3f35721765ac104887de560afe93"
  },
  {
    "url": "service-worker-raw.js",
    "revision": "3f7443e2724e74587330aff15f93149e"
  },
  {
    "url": "translations/de.json",
    "revision": "d39bbc3f2bd8123d1cbe64caafb07d5f"
  },
  {
    "url": "translations/en.json",
    "revision": "fc84fb2a99581e2da9795f50bcf5d0ea"
  },
  {
    "url": "translations/fr.json",
    "revision": "eeaeeb082aa608aa74da25373065d658"
  },
  {
    "url": "translations/gr.json",
    "revision": "66036f5ed2b542974a4b7ff1cbc3f0cf"
  },
  {
    "url": "translations/hu.json",
    "revision": "7c87e2e3bed9797627df0d0b98c15e1a"
  },
  {
    "url": "translations/it.json",
    "revision": "b9c2bf2f7a9978ffde14175899b32a11"
  },
  {
    "url": "translations/sr.json",
    "revision": "69d0552902bce1feaa356f97d77a6ec2"
  },
  {
    "url": "utils/Url.js",
    "revision": "bea48b6015e471205293f17c12d76e6c"
  },
  {
    "url": "workers/TransferProcessing.js",
    "revision": "143e683c63d657e58e977a90229cd712"
  },
  {
    "url": "workers/TransferProcessingEntrypoint.js",
    "revision": "c9b62ea80cf497c90437be91d5c7da5d"
  }
]);
self.addEventListener('message', function (event) {
    if (!event.data) {
        return;
    }
    switch (event.data) {
        case 'force-activate':
            self.skipWaiting();
            self.clients.claim();
            self.clients.matchAll().then(function (clients) {
                clients.forEach(function (client) { return client.postMessage('reload-window-update'); });
            });
            break;
        default:
            // NOOP
            break;
    }
});
