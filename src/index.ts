import "./index.scss";
import {getApi, ApiInterface, PoiInterface} from "@navvis/indoorviewer";
import {VTagContextMenuEntryLayer} from "./Layers/ContextMenu"

class TestApp
{
	public ivApi: ApiInterface;

	constructor()
	{
		getApi("https://safavieh.iv.navvis.com/", {"menu.login.visible":true})
			.then((iv: any) => {
				//we need to add some here if we have no user show normal view of vtag
				///console.log("iv:", );
				this.ivApi = iv;
				if(iv.auth.currentUser && iv.auth.currentUser.id != undefined && iv.auth.currentUser.username == "admin"){
					new VTagContextMenuEntryLayer(this.ivApi, this.ivApi.view.mainView, true);
				}else{
					new VTagContextMenuEntryLayer(this.ivApi, this.ivApi.view.mainView, false);
				}
			});
	}
}

(<any>window).TestApp = new TestApp();
