
export class Image{
        $key : string;
        name: string;
        file: File;
        size: number;
        url: string;
        progress:number;
        dateCreated: Date = new Date()
    constructor (inputfile : File)
             {
                 this.file=inputfile 
             }
        
    }