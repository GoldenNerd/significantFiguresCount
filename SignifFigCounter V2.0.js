/*
current Revision Information:
html 1.1 2021-04-03.00
css  1.0 2021-04-03.00
js   2.0 2021-04-08.00

*///####################################
   /* signifFigCounter v2.0.js */
//####################################

var xtract={

functionNameLocked: false,

myNameIs: function (funcNam){
if(this.functionNameLocked){
// Do nothing
return;
}
// Report name of last called function
const functionName=document.querySelector('#function-name');
functionName.innerHTML=`${funcNam}( )`;
console.log(`${funcNam}( )`);
},  
  
algebraicSign: function (aNum){
if(aNum<0||aNum.slice(0,1)==='-'){
impliedSign='-';
return impliedSign;}
if(aNum>0||aNum.slice(0,1)==='+'){
impliedSign='+';
return impliedSign;}
impliedSign='';
return impliedSign;}, 

hasASign: function (aNum){
this.myNameIs('hasASign');
const entryStr=aNum;
if(entryStr.slice(0,1)==='+' || entryStr.slice(0,1)==='-'){
// yes
const hasSign=true;
return hasSign;}
//no
const hasSign=false;
return hasSign;}, 

fetchTheSign: function (aNum){
if(this.hasASign(aNum)){
this.myNameIs('fetchTheSign');
// yes
const fetchedSign=aNum.slice(0,1);
return fetchedSign;}
//no
const fetchedSign='';
return fetchedSign;}, 

numericPart: function (aNum){
this.myNameIs('numericPart');
this.functionNameLocked=true;
let userEntryAbsVal;
if(aNum.slice(0,1)==='-' || aNum.slice(0,1)==='+'){
userEntryAbsVal=aNum.slice(1);
}else{
userEntryAbsVal=aNum.slice(0);
}
let wholeNumStr;
if(this.hasAnE(aNum)){
wholeNumStr=userEntryAbsVal;
const sliceStop=wholeNumStr.indexOf('e');
const numPortion=wholeNumStr.slice(0, sliceStop);
this.functionNameLocked=false;
return numPortion; // a string.
}
const numPortion=userEntryAbsVal;
this.functionNameLocked=false;
return numPortion;
}, 

integerPart: function (aNum){
const numbStr=this.numericPart(aNum);  
if(this.hasADot(aNum)){
this.myNameIs('integerPart');
const sliceStop=numbStr.indexOf('.');
const integerPortion=numbStr.slice(0, sliceStop);
return integerPortion;}
const integerPortion=numbStr;
return integerPortion;},

trailingZeroesCount: function (aNum){
const numStr=this.integerPart(aNum);
this.myNameIs('trailingZeroesCount');
let zeroesCount=0;
for (let digit of numStr) {
if(digit==='-' || digit==='+'){
// Don't count. Not a trailing zero
}else if(digit==='.' |digit!=='0'){
const trailing0sCnt=zeroesCount;
return trailing0sCnt;
}else if(digit==='0'){
zeroesCount++;
}
} 
const trailing0sCnt=zeroesCount;
return trailing0sCnt;
},

zeroTrimmedCore: function (aNum){
this.myNameIs('zeroTrimmedCore');
this.functionNameLocked=true;
// Zero valueds with or without dot somewhere:
if(1*aNum===0 && this.hasADot()){
const non0Cluster='.';
this.functionNameLocked=false;
return non0Cluster;}
if(1*aNum===0 && !this.hasADot(aNum)){
const non0Cluster='';
this.functionNameLocked=false;
return non0Cluster;}
let numbStr=this.numericPart(aNum);
let absNumbStr;
//numbers that have the form ".x"
if(numbStr.slice(0,1)==='.'){
numbStr=(1*numbStr).toString(); // trim leading zeroes
const non0Cluster=numbStr.slice(0); // trim trailing 0 introduced by 1* operation
this.functionNameLocked=false;
return non0Cluster;}
if(numbStr.slice(-1)==='.'){ // x. case
numbStr=(1*numbStr).toString(); // trim trailing zeroes
const non0Cluster=numbStr.concat('.'); // append '.' trimmed by 1* operation
this.functionNameLocked=false;
return non0Cluster;}
// For all other cases not covered above:
const non0Cluster=(1*numbStr).toString();
this.functionNameLocked=false;
return non0Cluster;},

significantFigures: function (aNum){
this.myNameIs('significantFigures');
this.functionNameLocked=true;
const alphamericCoreStr=this.numericPart(aNum); 
// Any number of only zeroes with a dot somewhere:
if(1*alphamericCoreStr===0 && alphamericCoreStr.includes('.')){ 
const signifFigs='0'+this.fractionalPart(aNum); // Leftmost 0 is implied. Therefore, correct the original user entry adding a Leftmost 0.
this.functionNameLocked=false;
return signifFigs;}
// Any number of only zeroes with no dot anywhere:
if(1*alphamericCoreStr===0 && !alphamericCoreStr.includes('.')){
const signifFigs='0';
this.functionNameLocked=false;
return signifFigs;}
// Non-zero valued numeric part that starts with a dot:
if(alphamericCoreStr.slice(0,1)==='.'){
const signifFigs='0'+this.fractionalPart(aNum);
this.functionNameLocked=false;
return signifFigs;}
this.functionNameLocked=true;
let non0ClusterStr=this.zeroTrimmedCore(aNum);
this.functionNameLocked=false;
// Any other except previous "returns", that contain a dot somewhere:
if(non0ClusterStr.includes('.')){
const indexOfDot=non0ClusterStr.indexOf('.');
const jointString=non0ClusterStr.slice(0,indexOfDot) + non0ClusterStr.slice(1+indexOfDot);
const signifFigs=jointString;
this.functionNameLocked=false;
return signifFigs;}
// Any numeric part that doesn't contain a dot:
// +011e-2
const signifFigs=this.zeroTrimmedCore(aNum);
this.functionNameLocked=false;
return signifFigs;},

sigFiguresCount: function (aNum){
this.myNameIs('sigFiguresCount');
this.functionNameLocked=true;
const sigDigCnt=this.significantFigures(aNum).length;
this.functionNameLocked=false;
return sigDigCnt;},

reverseNumCluster: function (aNum){ 
this.myNameIs('reverseNumCluster');
this.functionNameLocked=true;
const numStr=this.numericPart(aNum);
let reversedNumCluster='';
for (var i = 0; i < numStr.length; i++) {
  reversedNumCluster=numStr[i].concat(reversedNumCluster);
}
this.functionNameLocked=false;
return reversedNumCluster;},

leadingZeroesCount: function (aNum){
this.myNameIs('leadingZeroesCount');
this.functionNameLocked=true;
if(!this.numericPart(aNum).includes('.')){
const leading0s=0;
this.functionNameLocked=false;
return leading0s;}
/*
if(aNum==='0'){
const leading0s=0;
this.functionNameLocked=false;
return leading0s;}
*/
this.functionNameLocked=true;
const reversedNumCluster=this.reverseNumCluster(aNum);
let zeroesCount=0;
for (let digit of reversedNumCluster) {
if(digit==='-' || digit==='+'){
// Don't count. Not a trailing zero
}else if(digit==='.' |digit!=='0'){
const leading0s=zeroesCount;
this.functionNameLocked=false;
return leading0s;
}else if(digit==='0'){
zeroesCount++;
}
} 
const leading0s=zeroesCount;
this.reverseNumCluster=false;
return leading0s;
},

fractionalPart: function (aNum){
this.myNameIs('fractionalPart');
this.functionNameLocked=true;
if(this.hasADot(aNum)){
let numbStr=this.numericPart(aNum);
const sliceStop=numbStr.indexOf('.');
const fractCluster=numbStr.slice(sliceStop+1);
this.functionNameLocked=false;
return fractCluster;}
const fractCluster='';
this.functionNameLocked=false;
return fractCluster;},

hasADot: function (aNum){
this.myNameIs('hasADot');
if(aNum.includes('.')){
// yes
const hasDot=true;
return hasDot;}
//no
const hasDot=false;
return hasDot;},

fetchTheDot: function (aNum){
this.myNameIs('fetchTheDot');
this.functionNameLocked=true;
if(this.hasADot(aNum)){
// yes
const fetchedDot='.';
this.functionNameLocked=false;
return fetchedDot;}
//no
const fetchedDot='';
this.functionNameLocked=false;
return fetchedDot;},

hasAnE: function (aNum){
this.myNameIs('hasAnE');
this.functionNameLocked=true;
if(aNum.includes('e')){
// yes
const hasExp=true;
this.functionNameLocked=false;
return hasExp;}
//no
const hasExp=false;
this.functionNameLocked=false;
return hasExp;}, 

fetchTheE: function (aNum){
this.myNameIs('fetchTheE');
this.functionNameLocked=true;
if(this.hasAnE(aNum)){
// yes
const fetchedE='e';
this.functionNameLocked=false;
return fetchedE;}
//no
const fetchedE='';
this.functionNameLocked=false;
return fetchedE;},

exponentialSign: function (aNum){
this.myNameIs('exponentialSign');
this.functionNameLocked=true;
const wholeNumStr=aNum;
if(!wholeNumStr.includes('e')){
const expSign='';
this.functionNameLocked=false;
return expSign;}
if(wholeNumStr.includes('e+')){
const expSign='+';
this.functionNameLocked=false;
return expSign}
if(wholeNumStr.includes('e-')){
const expSign='-';
this.functionNameLocked=false;
return expSign;}
const expSign='+';
this.functionNameLocked=false;
return expSign;},

exponentialValue: function (aNum){
this.myNameIs('exponentialValue');
this.functionNameLocked=true;
if(!this.hasAnE(aNum)){
const expVal='';
this.functionNameLocked=false;
return expVal;}
const wholeNumStr=aNum;
const sliceStop=wholeNumStr.indexOf('e');
const expStr=wholeNumStr.slice(sliceStop+1);
if(!isNaN(expStr[0])){
const expVal=expStr;
this.functionNameLocked=false;
return expVal;}
const expVal=expStr.slice(1);
this.functionNameLocked=false;
return expVal;},

exponentialWhole: function (aNum){
this.myNameIs('exponentialWhole');
this.functionNameLocked=true;
if(!this.hasAnE(aNum)){
const expWhole='';
this.functionNameLocked=false;
return expWhole;}
const wholeNumStr=aNum;
const sliceStop=wholeNumStr.indexOf('e');
const expStr=wholeNumStr.slice(sliceStop+1);
if(!isNaN(expStr[0])){
const expWhole=expStr;
this.functionNameLocked=false;
return expWhole;}
const expWhole=expStr.slice(0);
this.functionNameLocked=false;
return expWhole;}
};

//#################################
//     DETERMINATION OF RESULT
//#################################
// Composer function:
function origSigFigsCnt (){
// Test the applicability of this function. It's only valid for exponential numbers
if(!xtract.hasAnE(userEntry)) { 
  // ot an exponential number call the fixed number handler
const fxdNumDigFigCnt=fixedNumSigFigCnt();
return fxdNumDigFigCnt;}  
// Test the applicability of this function. It's only valid for exponential numbers, with integer exponential values.
if(!Number.isInteger(1*xtract.exponentialValue(userEntry))){ // error: This Calculator  version can only handle integer exponentials.
console.log('error: This Calculator  version can only handle integer exponentials.'); 
return;} 
// Case 1: exponentialValue=0
if(xtract.exponentialValue(userEntry)==='0'){
// Test Case: +0012.3400e0
// Rule:
const originalSigFigsCnt=xtract.sigFiguresCount(userEntry) + xtract.leadingZeroesCount(userEntry);
return originalSigFigsCnt;}

// Case 2: exponentialSign is negative
if(xtract.exponentialSign(userEntry)==='-'){
const outcomeA=negSubCaseA();
const outcomeB=negSubCaseB();
if(outcomeA){
return outcomeA;}
if(outcomeB){
return outcomeB;}
return '';}

// Case 3: exponentialSign is positive
if(xtract.exponentialSign(userEntry)==='+'){
const outcomeC=posSubCaseA();
const outcomeD=posSubCaseB();
if(outcomeC){
return outcomeC;}
if(outcomeD){
return outcomeD;}
return '';}
}

// Case 2: exponentialSign is negative
function negSubCaseA (){
// Subcase a:
// exponentialValue() <= integerPart().length - trailingZeroesCount()
if(xtract.exponentialValue(userEntry)<=xtract.integerPart(userEntry).length - xtract.trailingZeroesCount(userEntry)) {
// Test Case: +0012.3400e-1
// Rule:
const originalSigFigsCnt=xtract.sigFiguresCount(userEntry) + xtract.leadingZeroesCount(userEntry);
return originalSigFigsCnt;}
return '';}

// Case 2: exponentialSign is negative
function negSubCaseB (){
// Subcase b:
// exponentialValue() > integerPart().length - trailingZeroesCount()
if(xtract.exponentialValue(userEntry)>xtract.integerPart(userEntry).length - xtract.trailingZeroesCount(userEntry)) {
// Test Case: +0012.3400e-3
// Rule:
const originalSigFigsCnt=1 * xtract.sigFiguresCount(userEntry) + 1 * xtract.leadingZeroesCount(userEntry) + 1 * xtract.exponentialValue(userEntry) - 1 * (xtract.integerPart(userEntry).length - 1 * xtract.trailingZeroesCount(userEntry));
return originalSigFigsCnt;}
return ''}

// Case 3: exponentialSign is positive
function posSubCaseA (){
// Subcase a:
// exponentialValue() <= fractionalPart().length
if(xtract.exponentialValue(userEntry)<=xtract.fractionalPart(userEntry).length) {
// Test Case: +0012.3400e+1
// Rule:
const originalSigFigsCnt=xtract.sigFiguresCount(userEntry) + xtract.leadingZeroesCount(userEntry);
return originalSigFigsCnt;}
return '';}

// Case 3: exponentialSign is positive
function posSubCaseB (){
// Subcase b:
// exponentialValue() > fractionalPart().length
if(xtract.exponentialValue(userEntry)>xtract.fractionalPart(userEntry).length) {
// Test Case: +0012.3400e+5
// Rule:
const originalSigFigsCnt=xtract.sigFiguresCount(userEntry) + xtract.leadingZeroesCount(userEntry) + (xtract.exponentialValue(userEntry) - xtract.fractionalPart(userEntry).length);
return originalSigFigsCnt;}
return '';}

// case 4: exponential absent
function fixedNumSigFigCnt (){
// Test Case: .00, 0.00, 0., 00.
// Any number of only zeroes with a dot somewhere:
// Rule:   @
let alphamericCoreStr=xtract.numericPart(userEntry);
if(1*alphamericCoreStr===0 && alphamericCoreStr.includes('.')){
const fixedSigFigsCnt=xtract.sigFiguresCount(userEntry)
return fixedSigFigsCnt;}
// Test Case: .x00
// Rule:
if(xtract.numericPart(userEntry).slice(0,1)==='.'){
const fixedSigFigsCnt=xtract.sigFiguresCount(userEntry);
return fixedSigFigsCnt;}
// Test Case: +0012.3400
// Rule:
const fixedSigFigsCnt=xtract.sigFiguresCount(userEntry) + xtract.leadingZeroesCount(userEntry);
return fixedSigFigsCnt;}

//#################################
//   EVENT HANDLER FOR THE CLICK
//#################################
// Grab user entry and output elements from DOM
const inputElement=document.querySelector('#numerical-entry');
const outputElement=document.querySelector('#outcome');
// Output to display once button is pressed
let userEntry; 
let result;
// Capture user entry on button input click:
function captureInputValue (){
userEntry=inputElement.value; 
return userEntry;
}
// Determine desired parameter:
function xtractParam (){
result=origSigFigsCnt(captureInputValue());
return result;
}
// Display to DOM:
function displayResult (){
outputElement.innerHTML=result;
}
// Event listener:
const xtractBtn=document.querySelector('#xtract-num-property');
xtractBtn.addEventListener('click', ()=>{
captureInputValue();
xtractParam();
displayResult();
});

