function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')
    let res = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ' '
        for (c = 1; c <= 50; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

        tab2.innerHTML = ' '
        for (c = 51; c <= 100; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab1${c}`
            tab2.appendChild(item)
        }
    
    }
}