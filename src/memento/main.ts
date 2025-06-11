import { ImageBackupManager } from "./image-backup-manager";
import { ImageEditor } from "./image-editor";

const imageEditor = new ImageEditor('/media/imagem.png', 'png');
const backupManager = new ImageBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('jpg');
backupManager.backup();
imageEditor.convertFormatTo('gif');
backupManager.backup();
imageEditor.convertFormatTo('bmp');


console.log(imageEditor);
console.log("******");
backupManager.undo()
console.log(imageEditor);
