export class FileNotFound extends Error {
    constructor(file: string) {
        super();
        
        this.message = file + ' not found !';
    }
    
    name = 'FileError';
    message: string;
}