require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift random stereo eternal grace local bottom general'; 
let testAccounts = [
"0x78d898604322bc7afe0572806492c06d6e864401875efeb540aee82d954c5e4f",
"0xa36d3b1ee894d3acef1e44a5a9006cfee3e1cb59f1558928ab21b440bc587661",
"0x4d54cb1f12a66b5ff2ba3d52d0362efdbaed9adb02b184c120c323e239aea7f8",
"0x08a924a64702832b80d241b9832e0ad976886d26ba6aaa7ad35370e12b421045",
"0xc5f0340cd9f3219b4c16cedc94cd0306b997b1af6ca35ceeb48b2cf359d8d38f",
"0x5dcf8b11d7b66eec7d8b520a7bb36a37451e0e3f0576cac980e9c3a79202462b",
"0x16bd0f678e2f41373a7c597c2794cd406e54f7ececd1ac7226380cf698d0b750",
"0xdfc3c2dc9a23e4d4a143a2ec1baa9f38922e64e74035c531de6def7666249e8a",
"0xd7686db1306d93389f8c992b592d105d89561f5b49872d0b32c9cb2c4eb43ff8",
"0x6ff9b1f88e6dad9deffab3be4a3cdcb301fedcc0f2ca38351c19b163b756f877"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

