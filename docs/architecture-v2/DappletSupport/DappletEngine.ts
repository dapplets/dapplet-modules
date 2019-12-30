/// <reference path="./types.ts"/>
/// <reference path="./parsers.ts"/>
/// <reference path="./types.ts"/>
/// <reference path="./views.ts"/>

class DappletEngine {

    private storage : typedValueMap

    loadedDapplets: Dapplet[] = []

    async loadResource(id: PID): Promise<ArrayBuffer> {
        return null;
    }

    private async loadDappletConfig(id: string): Promise<DappletConfig> {
        const buf = await this.loadResource(id)
        const json = String.fromCharCode.apply(null, new Uint16Array(buf))
        return JSON.parse(json) as DappletConfig
    }

    private createDapplet(config: DappletConfig, requestData : typedValueMap, vartypes : typedValueMap): Dapplet {
        const dapplet = new Dapplet()
        dapplet.view = createView(config.views)
        dapplet.txEngine = createTxEngine(config.transactions)
        this.storage = requestData;
        return dapplet
    }
    
    private parseRequestData(payload: ArrayBuffer, parserPid: string): typedValueMap {
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
            // will be loaded consistently!
            const dappletCfg = await this.loadDappletConfig(frame.dappletPid); 
            const data = this.parseRequestData(frame.payload, frame.parserPid, dappletCfg.variables);
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

}//class DappletEngine
