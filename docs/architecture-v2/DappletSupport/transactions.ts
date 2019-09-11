/// <reference path="./types.ts"/>

function createTxEngine(config: TransactionSection): TxEngine {
    for (const name in config) {
        let txConfig = config[name];
        switch (txConfig.type) {
            case EthereumSupport.PID:
                return new EthereumSupport(txConfig)
            case TableMustasheView.PID:
                return new IPFSSupport(txConfig)
            default:
                break;
        }
    }
    throw new Error("Incompatible view")
}

abstract class TransactionStatus {
    abstract update();
}

interface Transaction {
    isValid: boolean; // Tx configuration is internally valid 
    hasRejectionReasons: boolean; // Some reasons for Tx rejection by chain are known (nonce, sufficient balance, and so on) 
    // nevertheless Wallet can force Tx execution. 
    isExecReady: boolean; // can be executed right now - prerequisites are met.

    execute(): TransactionStatus; //???
}

interface TxEngine {
    viewFilters: Map<aliasRef, ViewFilter[]>;
    createTransacion(config: any): Transaction;
}

type TransactionConfig = {[name:string]:any}

abstract class ViewFilter {
    abstract render(varRef: variableRef): void; //ToDo: what is here?
}

class EthereumSupport implements TxEngine {
    constructor (txConfig:){
        
    }
    static PID = "http://some-url-id-here/more/specific/path"

    viewFilters = new Map<aliasRef, ViewFilter[]>();
    createTransacion(config: any): Transaction {
        //ToDo: implement Tx.
        return null;
    }
}

class IPFSSupport implements TxEngine {
    static PID = "http://some-url-id-here/more/specific/path"

    viewFilters = new Map<aliasRef, ViewFilter[]>();
    createTransacion(config: any): Transaction {
        //ToDo: implement Tx.
        return null;
    }
}

