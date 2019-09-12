// kinds of ids
// 1. "http:// string"                              // PID
// 2. sha256(1.)
// 3. alias(1.)                                     // alias
// 4. indexId - small nr (compact binary format)    // ?? ID
/*
Payload => RequestData

//json
{
"addr:sol_address" : "0xDEADBEEF" // UTF8
}

const x = {
    "@type" : "@builder-tx-sol",
    "@when" : "storeToSwarm.hash",
    "to": "0xccf7930d9b1fa67d101e3de18de5416dc66bd852",
    "function": "storeTweetHash(uint256,uint256)",
    "args": ["addr:hexToNumber:bigNumberify", "text:toUtf8Bytes:sha256"]
}

"0xDEADBEEF" -> 10009


//binary
[0x11 0xDEADBEEF]

"alias": {
    "@dd":"http://types.dapplets.org"
    "view-plain-mustache": "@dd/view/plain-mustache/1.0",
    "view-html-mustache": "@dd/view/html-mustache/1.0"
    "builder-tx-sol": "@dd/txbuilder/solidity/1.0",
    "builder-tx-swarm": "@dd/txbuilder/solidity/1.0"
    "dapplets-types" : "@dd/1.0/types"
},

//Rel 2.0
"variables": {                                                      
    "toAddr": "@builder-tx-sol/types/address",                              //0
    "index": "@builder-tx-sol/types/uint8",                                 //1    
    "filehash": "@builder-tx-swarm/types/swarmhash",                        //2    
    "kittyIcon": "@dapplets-types/image"                                    //3
}

*/




type PID = string;        // PID - Public IDentifier. 
type typePID = PID;
type variableRef = string;

type typedValue = [string, typePID];
type typedValueMap = Map<variableRef, typedValue>;


class Dapplet {
    view: IViewSupport
    txEngine: TxEngine
}

type DappletConfig = {
    alias: AliasSection
    variables: { [key: string]: string }
    views: ViewSection
    transactions: TransactionSection
}

type AliasSection = { [key: string]: PID }                  // PID alias definitions
type VariableSection = { [key: string]: PID }               // mapping: variable -> type
type ViewSection = ViewConfig[]
type TransactionSection = { [key: string]: TxRunnerConfig }

type ViewConfig = {
    type: string,
    [key: string]: any
}

type TxRunnerConfig = {
    type: string
    when: string?
    events: TxEvent[]
}

type TxEvent = {
    //ToDo to be done
}

type DappletRequest = {
    //1st tx - main, next "infrastructural"
    frames: RequestFrame[];
}

type RequestFrame = {
    dappletPid: string
    parserPid: string
    payload: any
}