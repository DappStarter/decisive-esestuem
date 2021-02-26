require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain purpose grace option bubble skirt'; 
let testAccounts = [
"0x7431c5cbced28ce0ab7c6b86ca1ade9641055e7e978b3fe5b104cc636d401710",
"0x8afba784578202d9633167fb9a9a41720265edf955f726b7c9d839a3c7bf46cd",
"0xaf91ad00db358601bac4a014df26225c65e3eb8d45047448c9bb3ca76c6e2695",
"0x3254911d98eec56c3c5a26038b5cad9eac57729fef10faa63bed5612506456c9",
"0x9e0f6050042d3677cc6b9b270605adaec7b49f961ab9d9ee20a06b18a50f7414",
"0x31c0fc13b659599963baa8ec84f2cfe8cc4677f64e6cf3668b3b4185c331b666",
"0xb797d1886b32d5dfaf75321047bca0a20eb026438402c31e8c15d0a523b4c934",
"0xb91ef386c413ac36ec769531fd24b20961b75471db7ca7901c6faa865386b9de",
"0xd6a0a5dd344e2a36754721a4ffda5cfa3d80c4523a24842d0d58c6229ecf3f57",
"0x14ba17ef55c01c4462051aa87e1fc235e28c4a82d378df449704cb38756eddd9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
