

//=======================
type aliasRef = string;
type typeRef = aliasRef;
type variableRef = string;

type typedValue = [string, typeRef];
type TypedStorage = Map<variableRef, typedValue>;

type PID = string; // pID - public identifier
type AliasMap = Map<aliasRef, PID>;

interface ID {
    ID: PID;
};

// ========= Parsers ==========

interface IDappletPayloadParser {
    parse(dappletRaw: ArrayBuffer): DappletConfig
}

class JsonPayloadParser implements IDappletPayloadParser {
    static PID = "http://some-url-id-here/more/specific/path"

    parse(dappletRaw: ArrayBuffer): DappletConfig {
        const json = String.fromCharCode.apply(null, new Uint16Array(dappletRaw))
        return JSON.parse(json) as DappletConfig
    }
}

class BinaryPayloadParser implements IDappletPayloadParser {
    static PID = "http://some-url-id-here/more/specific/path"

    parse(dappletRaw: ArrayBuffer): DappletConfig {
        
    }
}

//===================

//========= VIEWS ==========
interface IViewSupport {
    render(storage: TypedStorage, viewTemplates: ParsedView[]): void;
}

class PlainTextView implements IViewSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    constructor(viewCfg: DappletViewConfig) {

    }
    render(storage: TypedStorage): void { }
}

class TableMustasheView implements IViewSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    constructor(viewCfg: DappletViewConfig) {

    }
    render(storage: TypedStorage): void { }
}

//==========================    

//========= Transaction Support ==========
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

interface ITransactionSupport {
    viewFilters: Map<aliasRef, ViewFilter[]>;
    createTransacion(config: any): Transaction;
}

abstract class ViewFilter {
    abstract render(varRef: variableRef): void; //ToDo: what is here?
}

class EthereumSupport implements ITransactionSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    viewFilters = new Map<aliasRef, ViewFilter[]>();
    createTransacion(config: any): Transaction {
        //ToDo: implement Tx.
        return null;
    }
}

class IPFSSupport implements ITransactionSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    viewFilters = new Map<aliasRef, ViewFilter[]>();
    createTransacion(config: any): Transaction {
        //ToDo: implement Tx.
        return null;
    }
}

//==========================    

class DappletEngine {
    loadedDapplets: Dapplet[] = []

    transactionSupport: ITransactionSupport[] = [
        new EthereumSupport(), new IPFSSupport()
    ]

    async loadResource(id: resourceRef): Promise<ArrayBuffer> {
        return null;
    }

    private async loadDappletConfig(id: string): Promise<DappletConfig> {
        const buf = await this.loadResource(id)
        const json = String.fromCharCode.apply(null, new Uint16Array(buf))
        return JSON.parse(json) as DappletConfig
    }

    private createDapplet(config: DappletConfig): Dapplet {
        const dapplet = new Dapplet()
        dapplet.view = this.createView(config.views)
        return dapplet
    }
    
    private createView(viewsCfg: DappletViewConfig[]): IViewSupport {
        for (const viewCfg of viewsCfg) {
            switch (viewCfg.type) {
                case PlainTextView.PID:
                    return new PlainTextView(viewCfg)
                case TableMustasheView.PID:
                    return new TableMustasheView(viewCfg)
                default:
                    break;
            }
        }
        throw new Error("Incompatible view")
    }

    private parsePayload(payload: ArrayBuffer, parserPid: string): TypedStorage {
        switch (parserPid) {
            case JsonPayloadParser.PID:
                return new JsonPayloadParser().parse(payload)
            case BinaryPayloadParser.PID:
                return new BinaryPayloadParser().parse(payload)
            default:
                break;
        }

        throw new Error("Incompatible parser")
    }

    async onRequest(dappletRequest: DappletRequest): Promise<void> {
        for (const frame of dappletRequest.frames) {
            // будут загружаться последовательно!
            const dappletCfg = await this.loadDappletConfig(frame.dappletPid); 
            const data = this.parsePayload(frame.payload, frame.parserPid);
            const dapplet = this.createDapplet(dappletCfg, data)
            this.loadedDapplets.push(dapplet)
        }
    }

    show(){
        //1. Render view header
        for (const dapplet of this.loadedDapplets) {
            //2. render dapplet
            //3. render dapplet separator
            
        }
        //4. render view footer
    }
}

class Dapplet {
    view: IViewSupport
}

type DappletViewConfig = {
    type: string,
    [key: string]: any
}

class DappletConfig {
    alias: AliasMap
    variables: { [key: string]: string }
    views: DappletViewConfig[]
    transactions: { [key: string]: any }
}

// ======= SCRATCH PAD ===============
class DappletRequest {
    //1st tx - main, next "infrastructural"
    frames: RequestFrame[];
}

// может быть зашифрованным
class RequestFrame {
    dappletPid: string
    parserPid: string
    payload: any
}


class DappletCallParser { }

