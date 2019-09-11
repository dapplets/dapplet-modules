/// <reference path="./types.ts"/>

interface IViewSupport {
    render(storage: TypedStorage, viewTemplates: ParsedView[]): void;
}

function createView (viewsCfg: ViewConfig[]): IViewSupport {
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

class PlainTextView implements IViewSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    constructor(viewCfg: ViewConfig) {

    }
    render(storage: TypedStorage): void { }
}

class TableMustasheView implements IViewSupport {
    static PID = "http://some-url-id-here/more/specific/path"

    constructor(viewCfg: ViewConfig) {

    }
    render(storage: TypedStorage): void { }
}

