interface IAdapter {

} 

class Adapter {
     
    public main(cfg:any):void{

    }
}

class Feature {
    public configure({button, menuItem}:any){
        return {
            TIMELINE_VIEW : {
                BTN_PANEL : [
                    
                ],
                DROPDOWN_MENU: [

                ]
            }
        }
    }
}

class Feature2 {
    public configure({button, menuItem}:any){
        return {
            TIMELINE_VIEW : {
                BTN_PANEL : [

                ],
                DROPDOWN_MENU: [

                ]
            }
        }
    }
}