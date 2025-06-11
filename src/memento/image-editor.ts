export class ImageEditor{
    constructor( private filePath: string, private fileFormat: string){}

    convertFormatTo(format: 'jpg'| 'png' | 'gif'): void{
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + this.fileFormat; 
    }
    saveState():Memento{
        
    }
}

const img = new ImageEditor('/media/imagem.png', 'png');
img.convertFormatTo('jpg');
console.log(img);