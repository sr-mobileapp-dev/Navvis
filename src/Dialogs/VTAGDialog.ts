export default class VTAGDialog
{

    constructor()
	{
		this.htmlModalElement = document.getElementById("vTage-entry");
		const span = document.getElementById("vTage-modal-close");
		span.onclick = () => this.hideDialog();

		const saveBtn = document.getElementById("save");
		saveBtn.onclick = () => this.saveVTag();

		this.htmlModalElement.onclick = () =>
		{
			if (event.target === this.htmlModalElement)
			{
				this.hideDialog();
			}
		};
    }
    

	public title: string = "";

	public url: string = "";

	public completionHandler: (title: string, url: string) => void;

	private htmlModalElement: HTMLElement;

	
	public showDialog(): void
	{
		(<HTMLInputElement>document.getElementById("title")).value = this.title;
		(<HTMLTextAreaElement>document.getElementById("URL")).value =
			this.url;
		this.htmlModalElement.style.display = "block";
	}

	// public EditDialog(title: name ){

	// }


	public saveVTag(): void
	{
		const title = (<HTMLInputElement>document.getElementById("title")).value;
		const url = (<HTMLTextAreaElement>document.getElementById(
            "URL")).value;
		this.completionHandler(title, url);
		this.hideDialog();
	}
	private hideDialog(): void
	{
		(<HTMLInputElement>document.getElementById("title")).value = "";
		(<HTMLTextAreaElement>document.getElementById("URL")).value = "";
		this.htmlModalElement.style.display = "none";
	}

	
}
