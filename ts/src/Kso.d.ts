declare namespace Kso {
    
    interface Enum {
        DbSheetFieldType: {
            Attachment: "Attachment",
            AutoNumber: "AutoNumber",
            CellPicture: "CellPicture",
            Checkbox: "Checkbox",
            Complete: "Complete",
            Contact: "Contact",
            CreatedBy: "CreatedBy",
            CreatedTime: "CreatedTime",
            Currency: "Currency",
            Date: "Date",
            Email: "Email",
            Formula: "Formula",
            ID: "ID",
            Invalid: "Invalid",
            Link: "Link",
            Lookup: "Lookup",
            MultiLineText: "MultiLineText",
            MultipleSelect: "MultipleSelect",
            Note: "Note",
            Number: "Number",
            Percentage: "Percentage",
            Phone: "Phone",
            Rating: "Rating",
            SingleLineText: "SingleLineText",
            SingleSelect: "SingleSelect",
            Time: "Time",
            Url: "Url",
        }
        FindScope: { etSheet: 0, etWorkBook: 1 }
        KsoControlType: { ksoControlButton: 1 }
        LookAt: { etPart: "etPart", etWhole: "etWhole" }
        LookIn: { etSmart: 'etSmart', etFormulas: 'etFormulas', etValues: 'etValues', etComments: 'etComments' }
        MsoControlType: { msoControlButton: 1, msoControlPopup: 10, msoControlBottomBar: 20 }
        MsoTriState: { msoFalse: 0, msoTrue: -1 }
        RenderItem: { ColHeaderAddBtn: 'colHeaderAddBtn', ColHeaderMenuBtn: 'colHeaderMenuBtn', RowHeaderExpand: 'rowHeaderExpand' }
        RowHeightType: { Short: 'Short', Medium: 'Medium', Tall: 'Tall', ExtraTall: 'ExtraTall' }
        SearchDirection: { etNext: 'etNext', etPrevious: 'etPrevious' }
        SearchOrder: { etByRows: 'etByRows', etByColumns: 'etByColumns' }
        ViewType: { Grid: 'Grid', Kanban: 'Kanban', Gallery: 'Gallery', Form: 'Form', Gantt: 'Gantt' }
        XlAboveBelow: { xlAboveAverage: 0, xlBelowAverage: 1, xlEqualAboveAverage: 2 }
        XlAutoFillType: {
            xlFillCopy: 1,
            xlFillDays: 5,
            xlFillDefault: 0,
            xlFillFormats: 3,
            xlFillMonths: 7,
            xlFillSeries: 2,
            xlFillValues: 4,
            xlFillWeekdays: 6,
            xlFillYears: 8,
            xlGrowthTrend: 10,
            xlLinearTrend: 9
        }
        XlBorderWeight: { xlHairline: 1, xlMedium: -4138, xlThick: 4, xlThin: 2 }
        XlBordersIndex: {
            xlAll: 15,
            xlDiagonalDown: 5,
            xlDiagonalUp: 6,
            xlEdgeBottom: 9,
            xlEdgeLeft: 7,
            xlEdgeRight: 10,
            xlEdgeTop: 8,
            xlInside: 14,
            xlInsideHorizontal: 12,
            xlInsideVertical: 11,
            xlOutside: 13
        }
        XlCalcModeType: { manual: 'manual', automatic: 'automatic' }
        XlChartType: {
            xlArea: 1,
            xlAreaStacked: 76,
            xlAreaStacked100: 77,
            xlBarClustered: 57,
            xlBarOfPie: 71,
            xlBarStacked: 58,
            xlBarStacked100: 59,
            xlBubble: 15,
            xlColumnClustered: 51,
            xlColumnStacked: 52,
            xlColumnStacked100: 53,
            xlDoughnut: -4120,
            xlLine: 4,
            xlLineMarkers: 65,
            xlLineMarkersStacked: 66,
            xlLineMarkersStacked100: 67,
            xlLineStacked: 63,
            xlLineStacked100: 64,
            xlPie: 5,
            xlPieOfPie: 68,
            xlRadar: -4151,
            xlRadarFilled: 82,
            xlRadarMarkers: 81,
            xlStockHLC: 88,
            xlStockOHLC: 89,
            xlStockVHLC: 90,
            xlStockVOHLC: 91,
            xlXYScatter: -4169,
            xlXYScatterLines: 74,
            xlXYScatterLinesNoMarkers: 75,
            xlXYScatterSmooth: 72,
            xlXYScatterSmoothNoMarkers: 73
        }
        XlContainsOperator: { xlBeginsWith: 2, xlContains: 0, xlDoesNotContain: 1, xlEndsWith: 3 }
        XlDVAlertStyle: { xlValidAlertInformation: 3, xlValidAlertStop: 1, xlValidAlertWarning: 2 }

        XlDVType: {
            xlValidateCustom: 7,
            xlValidateDate: 4,
            xlValidateDecimal: 2,
            xlValidateList: 3,
            xlValidateTextLength: 6,
            xlValidateTime: 5,
            xlValidateWholeNumber: 1,
        }
        XlDeleteShiftDirection: { xlShiftToLeft: -4159, xlShiftUp: -4162 }
        XlDirection: { xlDown: -4121, xlToLeft: -4159, xlToRight: -4161, xlUp: -4162 }
        XlExportImgFormatType: { xlImgTypePNG: 0, xlImgTypeJPG: 1, xlImgTypeBMP: 2, xlImgTypeTIF: 3 }
        XlFixedFormatType: { xlTypePDF: 0, xlTypeXPS: 1, xlTypeIMG: 2 }
        XlFormatConditionOperator: {
            xlBetween: 1,
            xlEqual: 3,
            xlGreater: 5,
            xlGreaterEqual: 7,
            xlLess: 6,
            xlLessEqual: 8,
            xlNotBetween: 2,
            xlNotEqual: 4,
        }
        XlFormatConditionType: {
            xlAboveAverageCondition: 12,
            xlBlanksCondition: 10,
            xlCellValue: 1,
            xlColorScale: 3,
            xlErrorsCondition: 16,
            xlExpression: 2,
            xlNoBlanksCondition: 13,
            xlNoErrorsCondition: 17,
            xlTextString: 9,
            xlTimePeriod: 11,
            xlTop10: 5,
            xlUniqueValues: 8,
        }
        XlHAlign: {
            xlHAlignCenter: -4108,
            xlHAlignCenterAcrossSelection: 7,
            xlHAlignDistributed: -4117,
            xlHAlignFill: 5,
            xlHAlignGeneral: 1,
            xlHAlignJustify: -4130,
            xlHAlignLeft: -4131,
            xlHAlignRight: -4152,
        }
        XlInsertFormatOrigin: { xlFormatFromLeftOrAbove: 0, xlFormatFromRightOrBelow: 1 }
        XlInsertShiftDirection: { xlShiftDown: -4121, xlShiftToRight: -4161 }
        XlLineStyle: {
            xlContinuous: 1, xlDash: -4115, xlDashDot: 4, xlDashDotDot: 5, xlDot: -4118, xlDouble
            =
            -4119,
            xlLineStyleNone
            =
            -4142
        }
        XlPasteSpecialOperation: {
            xlPasteSpecialOperationAdd: 1,
            xlPasteSpecialOperationDivide: 4,
            xlPasteSpecialOperationMultiply: 3,
            xlPasteSpecialOperationNone: 0,
            xlPasteSpecialOperationSubtract: 2,
        }
        XlPasteType: {
            xlPasteAll: 1,
            xlPasteAllExceptBorders: 4,
            xlPasteColumnWidths: 5,
            xlPasteComments: 9,
            xlPasteFormats: 8,
            xlPasteFormulas: 2,
            xlPastePasteAll: 0,
            xlPasteValidation: 10,
            xlPasteValues: 3,
            xlPasteValuesAndNumberFormats: 7,
        }
        XlReferenceStyle: { xlA1: 1, xlR1C1: -4150 }
        XlRowCol: { xlColumns: 2, xlRows: 1 }
        XlSheetType: { xlChart: -4109, xlDialogSheet: -4116, xlExcel4IntlMacroSheet: 4, xlExcel4MacroSheet: 3, xlWorksheet: -4167 }
        XlTimePeriods: {
            xlLast7Days: 2,
            xlLastMonth: 5,
            xlLastWeek: 4,
            xlNextMonth: 8,
            xlNextWeek: 7,
            xlThisMonth: 9,
            xlThisWeek: 3,
            xlToday: 0,
            xlTomorrow: 6,
            xlYesterday: 1,
        }
        XlUnderlineStyle: { xlUnderlineStyleDouble: -4119, xlUnderlineStyleDoubleAccounting: 5, xlUnderlineStyleNone: -4142, xlUnderlineStyleSingle: 2, xlUnderlineStyleSingleAccounting: 4 }
        XlVAlign: { xlVAlignBottom: -4107, xlVAlignCenter: -4108, xlVAlignDistributed: -4117, xlVAlignJustify: -4130, xlVAlignTop: -4160 }
        XlXLMMacroType: { xlCommand: 2, xlFunction: 1, xlNotXLM: 3 }
        XlYesNoGuess: { xlGuess: 0, xlNo: 2, xlYes: 1 }
    }
    interface Events {
        Clipboard_Copy: "Clipboard_Copy",
        Copy_Paste_Success: "Copy_Paste_Success",
        DocumentSaveStatus: "DocumentSaveStatus",
        EtCellCommentModify: "EtCellCommentModify",
        EtContextMenuClearFormat: "EtContextMenuClearFormat",
        External_Chart_DataSource_Change: "External_Chart_DataSource_Change",
        Keypress: "Keypress",
        ModelVisible: "ModelVisible",
        OnBroadcast: "OnBroadcast",
        OnClosePopupPanel: "OnClosePopupPanel",
        OnDocViewChange: "OnDocViewChange",
        OnUilFinish: "OnUilFinish",
        Preferred_View_Resize: "Preferred_View_Resize",
        SecurityDocChangeReconnect: "SecurityDocChangeReconnect",
        SecurityDocPermissionChange: "SecurityDocPermissionChange",
        SecurityPasteNotify: "SecurityPasteNotify",
        SwitchCommandBar: "SwitchCommandBar",
        User_Join: "User_Join",
        User_Quit: "User_Quit",
        Version_Change: "Version_Change",
        Window_Blur: "Window_Blur",
        Window_Focus: "Window_Focus",
        Worksheet_Activate: "Worksheet_Activate",
        Worksheet_Change: "Worksheet_Change",
        Worksheet_ScrollChange: "Worksheet_ScrollChange",
        Worksheet_SelectionChange: "Worksheet_SelectionChange",
    }
    interface jssdk {
        api: {
            Application: Et.Application;
            Events: Kso.Events;
            Enum: Kso.Enum;

            off(P, p);
            on(P, p);
            ready(): Promise<Et.Application>;
        }
        sys: {
            app: {
                getAppAuthCode(): Promise<string>;
                getAppBasicInfo(): Promise<string>;
                getFileBasicInfo(): Promise<string>;
                getFileOpenId(): Promise<string>;
                getUserBasicInfo(): Promise<string>;
                getUserOpenId(): Promise<string>;
            };
            container: {
                onShow(e: () => void): void;
                offShow(e: () => void): void;
                onHide(e: () => void);
                offHide(e: () => void);
                update(e: { title: string, width: number, height: number });
                close(): Promise;
            }
        }
    }
}