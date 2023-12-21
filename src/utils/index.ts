export const isItalian = () =>{
    if(!navigator.language) return false;
    return navigator.language.includes("it");
}