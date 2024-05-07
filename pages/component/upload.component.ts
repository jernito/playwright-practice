import { Page, Locator } from "@playwright/test";

export class UploadComponent {
    private page: Page;
    uploadFilesInput: string;
    SubmitBtn: Locator;
    succesTxt: Locator;

    constructor(page: Page){
        this.page = page;
        this.uploadFilesInput = '//input[@id="upfile_1"]'
        this.SubmitBtn = page.locator('#upload_1')
        this.succesTxt = page.locator('#wfu_messageblock_header_1_label_1')
    }

    async uploadFile(filePath: string){
        await this.page.setInputFiles(this.uploadFilesInput,filePath) 
        await this.SubmitBtn.click();
   }
}