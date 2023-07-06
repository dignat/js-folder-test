function getMemory() {
    if (typeof performance !== undefined && performance.getEntries){
        let size = performance.getEntries().reduce((total, entry) => 
        total + entry.transferSize || 0, 0);
        return size / (1024 * 1024); // in MB
    }
}
function measure(mb) {
    return mb * 0.5;
}
const CarbonScope = {
    measure(over) {
        function loop() {
            const co2 = measure(getMemory());
            console.log(`Carbon emission: ${co2.toFixed(2)} kg CO2e`);
        }
        this._int = setInterval(loop, over || 2000);
        loop();
    },
    stop() {
        clearInterval(this._int);
    }
}

export default CarbonScope;