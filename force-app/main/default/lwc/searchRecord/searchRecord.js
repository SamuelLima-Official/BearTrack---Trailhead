import { LightningElement, track } from 'lwc';
	
export default class SearchRecord extends LightningElement {
    @track searchTerm = '';
    @track loaded = true;
    @track progress = 0;

    handleSearchTerm(event) {  
        const enter = event.keyCode === 13;
        if(enter){
            this.loaded = !this.loaded;
            this.searchTerm = event.target.value;
            setTimeout(function(){
                this.loaded = !this.loaded;
            }.bind(this),1000);
            setInterval(() => {
                        this.progress = this.progress === 100 ? 0 : this.progress + 10;
                    }, 200);
        }
    }

    currentDate = new Date().toDateString();
    
    get titleSearchTerm() {
	return `Hello ${this.searchTerm.toUpperCase()}!`;
    }
}