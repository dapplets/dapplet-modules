//#region COMMON INTERFACES
interface IExtension {
    openOverlay(id:ID, ctx: any):void;
    sendWalletConnectTx(tx:any):void;
}

interface IModule {

}

type ID = string;
type IControlFactory = (arg:any)=>void;
//#endregion COMMON INTERFACES
