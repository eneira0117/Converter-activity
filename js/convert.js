function convert() {
    const phpValue = parseFloat(document.getElementById('php').value);
    const xrpValue = phpValue * 0.0060;  
    const usdtValue = phpValue * 0.017;  
    const dogeValue = phpValue * 0.05427;   
    const trxValue = phpValue * 0.0722;     
    
    document.getElementById("xrp").value = xrpValue;
    document.getElementById("usdt").value = usdtValue;
    document.getElementById("doge").value = dogeValue;
    document.getElementById("trx").value = trxValue;
}
