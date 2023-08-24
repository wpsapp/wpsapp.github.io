declare namespace Et {
    interface Application {
        readonly Events: Kso.Events;
        readonly Enum: Kso.Enum;
        readonly Sub: {
            set Clipboard_Copy(e: () => void): void;
            set Copy_Paste_Success(e: () => void): void;
            set DocumentSaveStatus(e: () => void): void;
            set EtCellCommentModify(e: () => void): void;
            set EtContextMenuClearFormat(e: () => void): void;
            set External_Chart_DataSource_Change(e: () => void): void;
            set Keypress(e: () => void): void;
            set ModelVisible(e: () => void): void;
            set OnBroadcast(e: () => void): void;
            set OnClosePopupPanel(e: () => void): void;
            set OnDocViewChange(e: () => void): void;
            set OnUilFinish(e: () => void): void;
            set Preferred_View_Resize(e: () => void): void;
            set SecurityDocChangeReconnect(e: () => void): void;
            set SecurityDocPermissionChange(e: () => void): void;
            set SecurityPasteNotify(e: () => void): void;
            set SwitchCommandBar(e: () => void): void;
            set User_Join(e: () => void): void;
            set User_Quit(e: () => void): void;
            set Version_Change(e: () => void): void;
            set Window_Blur(e: () => void): void;
            set Window_Focus(e: () => void): void;
            set Worksheet_Activate(e: () => void): void;
            set Worksheet_Change(e: () => void): void;
            set Worksheet_ScrollChange(e: () => void): void;
            set Worksheet_SelectionChange(e: () => void): void;


        }
        readonly ActiveCell: Promise<Range> & Range;
        readonly ActiveSheet: Promise<Worksheet> & Worksheet;
        readonly ActiveWorkbook: Promise<Workbook> & Workbook;
        readonly Names: Promise<Names> & Names;
        readonly Range(address: string): Promise<Range> & Range
        readonly Selection: Promise<Range> & Range;
        readonly Sheets(e:number|string): Promise<Worksheet> & Worksheet;
        //Sheets(e:number):Worksheet;
    }
    /**当前工作簿中所有工作表集合 */
    interface Worksheets {
        Count: Promise<number>;
        GetNameList(): Promise<string[]>;
        GetSheetsId(): Promise<number[]>;
        Item(n: string | number): Promise<Worksheet>;
    }

    /**单元格区域的一个条件格式 */
    interface FormatCondition {
        Formula1: Promise<string>;
    }
    /**单元格区域的条件区域集合相同区域最多个条件件格式 */
    interface FormatConditions {
        (n: number): Promise<FormatCondition>;
        Count: Promise<number>;
    }
    /**工作表中的名称 */
    interface Name {
        get Name(): Promise<string>;
        get Value(): Promise<string>;
    }
    interface Names {
        (params: number | string): Name & Promise<Name>;
        get Count(): Promise<number>;
        Item(i: number | string): Promise<Name>;
        Add(e: { Name: string, RefersTo: string }): Promise<void>;
    }
    /**单元格区域接口 */
    interface Range {
        Address(): Promise<string>;
        Row: Promise<number>;
        Rows: { Count: Promise<number> };
        Column: Promise<number>;
        Columns: { Count: Promise<numberr> };
        Text: Promise<string>;

    }

    /**工作簿接口 */
    interface Workbook {

    }
    /**工作表接口 */
    interface Worksheet {
        get Name(): Promise<string>;
        IsDBSheet(): Promise<boolean>;
        get Record():SheetRecord;
        Type: Promise<"xlWorkshee" | "xlEtDataBaseSheet" | "xlEtAppSheet" | "xlEtAppSheet">;
    }
    interface SheetRecord{
        CreateRecords(e:{Records:[{fields:{}}]}):void;
        GetRecords():any;
    }
}

//export { Application,Workbook,Worksheets,Worksheet}


/*


{


    declare let Application: {
        Enum: jssdk.api.Enum;

    }
    Enum: {
             

           
    }



}
let sys: {
    
    
}
}
*/