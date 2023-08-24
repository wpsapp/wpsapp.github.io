declare namespace weixin{

}
declare let wx: {
    config: (e: any) => void;
    ready: (e: any) => void;
    scanQRCode: (e: any) => void;
    error: (e: any) => void;
};