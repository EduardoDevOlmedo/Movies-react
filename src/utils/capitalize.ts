export const capitalize = (str: string) => {
    let upperCaseLetter;
    upperCaseLetter = str.split("")[0].toUpperCase()
    str = str.substring(1, str.length)
      
    return upperCaseLetter + str
}