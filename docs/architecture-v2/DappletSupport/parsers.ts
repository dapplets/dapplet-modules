/// <reference path="./types.ts"/>

interface IRequestDataParser {
    parse(dappletRaw: ArrayBuffer): RequestData
}

class JsonPayloadParser implements IRequestDataParser {
    static PID = "http://some-url-id-here/more/specific/path"

    parse(dappletRaw: ArrayBuffer): RequestData {
        const json = String.fromCharCode.apply(null, new Uint16Array(dappletRaw))
        return JSON.parse(json) as RequestData
    }
}

class BinaryPayloadParser implements IRequestDataParser {
    static PID = "http://some-url-id-here/more/specific/path"

    parse(dappletRaw: ArrayBuffer): RequestData {
        return null; //ToDo:
    }
}
