import {
    ContextMenuEntryInterface, CustomLayer,
	MouseEventCoordinatesInterface, MainViewInterface, ApiInterface, CursorDataInterface, PoiInterface, PoiTypeInterface
	,ViewportInterface
  } from "@navvis/indoorviewer";

import VTAGDialog from '../Dialogs/VTAGDialog'


export class VTagContextMenuEntryLayer extends CustomLayer
{

	public ivApi: ApiInterface;
	
	public completionHandler: () => void;

	public icons: Array<any>;
    public LOCALE = "en";
	
	public poiType: PoiTypeInterface;
	public poiTypeGreen: PoiTypeInterface;
	public poiTypeRed: PoiTypeInterface;

	public isLoggedIn = false;


	// onBeforeRenderViewport(viewport: ViewportInterface){
	// 	this.LoadColors();
	// }

    constructor(iv: ApiInterface, mainView:MainViewInterface, isLogged:boolean)
	{
		super(mainView);
		this.ivApi = iv;
		this.isLoggedIn = isLogged;
		this.fetchPoiType("VTAG").then((poiType:PoiTypeInterface)=>{
			this.poiType = poiType;
		});

		this.fetchPoiType("VTAG-GREEN").then((poiType:PoiTypeInterface)=>{
			this.poiTypeGreen = poiType;
		});

		this.fetchPoiType("VTAG-RED").then((poiType:PoiTypeInterface)=>{
			this.poiTypeRed = poiType;
		});
		this.ivApi.poi.service.onPoiClick.connect(this.saveItem);
		this.LoadColors();
		this.ivApi.poi.repository.findAll().then((xxx)=>{
			this.ivApi.poi.service.unhighlightPois(xxx);
		});

	}
	

	public LoadColors = ()=>{
		let icons: {[index: string]:any} = {};

		icons = this.GetIcons();
		//Object.keys(icons).forEach(key => console.log(key));
		this.ivApi.poi.repository.findAll().then((xxx)=>{
			for(var x in xxx ){
				if(icons[xxx[x].id]){
					xxx[x].icon = icons[xxx[x].id];
				}
			}
		});
	}

	public SaveColors = (icons: any)=>{
		let iconsStr = JSON.stringify(icons);
		localStorage.setItem('icons', iconsStr);
	}
	public GetIcons = ()=>{
		let strIcons = localStorage.getItem('icons');
		let Icons = {};
		if(!strIcons) Icons = {};
		else Icons = JSON.parse(strIcons);
		return Icons;
	}
	public SaveColorForPOI = (poi:any)=>{
		let icons: {[index: string]:any} = {}
		icons = this.GetIcons();
		icons[poi.id] = poi.icon;
		this.SaveColors(icons);

		this.LoadColors();

		// this.ivApi.poi.repository.findAll().then((xxx)=>{
		// 	this.ivApi.poi.service.unhighlightPois(xxx);
		// });
	};
	public saveItem = (poi:any) => {
		if(this.isLoggedIn){
			return this.EditVTag(poi)
		}else{
			if(poi.icon == this.poiTypeGreen.icon) return false;

			poi.icon = this.poiTypeRed.icon;
			this.SaveColorForPOI(poi);
			return false;
		}
		
	};

	//call this when we want to make item green
	//it should be call on  the  website

	public SetItemGreen  = (id:any)=>{
		this.ivApi.poi.repository.findOne(id).then((poi:PoiInterface)=>{
			poi.icon = this.poiTypeRed.icon;
			this.SaveColorForPOI(poi);
			return false;
		})
	}

    public onContextMenu(pos: MouseEventCoordinatesInterface): ContextMenuEntryInterface[]
    { 

		if(this.isLoggedIn){
			return [];
		}

        return [{
            name: "add VTage",
            icon: "fa-globe",
                callback: () =>
                {
                    this.createVTAG();
                }
            }
        ];
    }
    private createVTAG(): void
	{
		const dialog = new VTAGDialog();
		//Todo: Switch to new API implementation when it is available.
        const currentCursorPosition = this.ivApi.legacyApi.getCurrentCursorPosition();
        

		dialog.completionHandler = (title:any, url:any) =>
		{
			 this.createPoi(title, url, currentCursorPosition)
			 	.catch((e) => console.error(e));
		};
		dialog.showDialog();
    }
    
    private createPoi(title: string, description: string,
		cursorPosition: CursorDataInterface): Promise<PoiInterface>
	{
		const poi = this.ivApi.poi.repository.create();
		poi.titles[this.LOCALE] = title;
		poi.descriptions[this.LOCALE] =  `<iframe frameborder="0" src="${description}" style="display:block; width:100%; height:100vh;"></iframe>`;
		poi.icon = undefined;
		const localToGlobal = this.ivApi.transform.service.localToGlobal;
		poi.globalLocation = localToGlobal.transform(cursorPosition.location);
		poi.globalOrientation =
			localToGlobal.transformQuaternion(cursorPosition.orientation);
		poi.datasetLocation = cursorPosition.datasetLocation;
		poi.datasetOrientation = cursorPosition.datasetOrientation;
		poi.orientation = cursorPosition.orientation;
		poi.poiType = this.poiType;
		return this.ivApi.poi.repository.save(poi).then((pois) =>
		{
			const savedPoi = pois[0];
			this.ivApi.poi.service.goToPoi(savedPoi).catch((e) => console.error(e));
			this.completionHandler();
			return savedPoi;
		});
	}
	
	private fetchPoiType(name: String): Promise<PoiTypeInterface>
	{
		return this.ivApi.poi.poiTypeRepository.findAll().then((poiTypes) =>
		{
			const filteredPois = poiTypes.filter((poiType) => poiType.name[this.LOCALE] === name);

			return filteredPois[0];
		});
	}


	private EditVTag(poi: PoiInterface): boolean
	{
		const dialog = new VTAGDialog();
		dialog.title = poi.title;

		if (poi.description !== undefined)
		{
			dialog.url = poi.description.replace("<iframe frameborder=\"0\" src=\"", "").replace("\" style=\"display:block; width:100%; height:100vh;\"></iframe>", "");
		}
		else
		{
			dialog.url = "";
		}

		dialog.completionHandler = (title, description) =>
		{
			poi.title = title;
			poi.description = description;
			this.savePoi(poi).then().catch((e) => console.error(e));
		};
		dialog.showDialog();

		return true;
	}

	private savePoi(poi: PoiInterface): Promise<PoiInterface>
	{
		return this.ivApi.poi.repository.save(poi).then((pois) =>
		{
			const savedPoi = pois[0];
			this.ivApi.poi.service.goToPoi(savedPoi).catch((e) => console.error(e));
			return savedPoi;
		});
	}
}