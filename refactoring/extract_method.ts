// problem

function printOwing(): void {
    printBanner();
    // print details
    console.log("name");
    console.log("amount")
}

function printBanner(): void {

}

//solution refactoring pattern extract method

function printOwingRefactored(): void {
    printBanner();
    printDetails(30);
}

function printDetails(amount: number): void {
    console.log("name");
    console.log("amount" + amount)
}