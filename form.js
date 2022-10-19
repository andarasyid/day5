function showData() {
    let showName = document.getElementById('input-name').value 
    let showEmail = document.getElementById('input-email').value 
    let showPhoneNumber = document.getElementById('input-phone').value
    let showCompany = document.getElementById('input-company').value
    let showSubject = document.getElementById('input-subject').value
    let showYourMessage = document.getElementById('input-message').value


console.log(showName)
console.log(showEmail)
console.log(showPhoneNumber)
console.log(showCompany)
console.log(showSubject)
console.log(showYourMessage)

if (showName =='') {
    return alert('Nama harus diisi!')
}
if  (showEmail =='') {
    return alert('Email harus diisi!')
}
if (showPhoneNumber =='') {
    return alert('Phone Number harus diisi')
}
if (showCompany =='') {
    return alert('Company harus diisi')
}

let emailReciever = 'randaalrasyid21@gmail.com'
let a = document.createElement('a')
a.href = `mailto:${emailReciever}?subject:${showSubject}&body= Hello, my name is ${showName}, ${showYourMessage}`

a.click()

}