export function confirmEmail(email) {
    var re = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
    return re.test(String(email).toLowerCase())
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function removeHyphenThenCapitalize(string) {
    return string.replace(/-/g, '').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}