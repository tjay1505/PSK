const data = [
    {
        img : 'apple1.jpg',
        pname : 'apple 14 pro',
        cost : '$4400',
        spec : '16mp cam | 8mp + 12mp | 5000maH battery | 50watt fast charing | headphone within box | face Id version - 30.3054.34'
    },
    {
        img : 'apple2.webp',
        pname : 'apple 13 max',
        cost : '$2300',
        spec : '12mp cam | 8mp + 12mp | 4000maH battery | 50watt fast charing | no headphone within box | face Id version - 10.54.34'
    },
    {
        img : 'apple3.webp',
        pname : 'apple 13 pro max',
        cost : '$1340',
        spec : '12mp cam | 8mp + 12mp | 4000maH battery | 50watt fast charing | no headphone within box | face Id version - 70.54.34'
    },
    {
        img : 'apple4.webp',
        pname : 'apple 11 max',
        cost : '$2300',
        spec : '12mp cam | 8mp + 12mp | 4000maH battery | 50watt fast charing | no headphone within box | face Id version - 10.54.34'
    },
    {
        img : 'oppo1.webp',
        pname : 'oppo reno 2',
        cost : '$900',
        spec : '200mp cam | 48mp + 12mp | 4500maH battery | 65watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
    {
        img : 'oppo2.webp',
        pname : 'oppo a45 5g',
        cost : '$630',
        spec : '200mp cam | 48mp + 12mp | 4500maH battery | 65watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
    {
        img : 'sam1.jpg',
        pname : 'samsung q43 5g',
        cost : '$330',
        spec : '40mp cam | 8mp + 12mp | 4500maH battery | 25watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
    {
        img : 'sam2.webp',
        pname : 'samsung s24 ultra 5g',
        cost : '$430',
        spec : '40mp cam | 8mp + 12mp | 4500maH battery | 35watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
    {
        img : 'samsung-36.webp',
        pname : 'samsung A43',
        cost : '$330',
        spec : '40mp cam | 8mp + 12mp | 4500maH battery | 25watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
    {
        img : 'samsung-41.webp',
        pname : 'samsung q32 5g',
        cost : '$330',
        spec : '40mp cam | 8mp + 12mp | 4500maH battery | 25watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },{
        img : 'vivo1.jpg',
        pname : 'vivo s1 pro 5g',
        cost : '$430',
        spec : '40mp cam | 8mp + 12mp | 4500maH battery | 25watt fast charing | no headphone within box | fingerprint version - 10.54.34'
    },
]

const lapdata = [
    {
        img : 'lap1.webp',
        lname : 'dell latitude 5500',
        cost : '$1020',
        spec : 'i5 core 12055H | 4000maH battery | fingerprint | 512GB NVme ssd | 19"inch display |20watt fast charging | 16GB DDR4 ram'
    },
    {
        img : 'lap2.jpg',
        lname : 'dell book 5500',
        cost : '$1220',
        spec : 'i9 core 12099k | 3500maH battery | fingerprint | 512GB NVme ssd | 16"inch display |20watt fast charging | 32GB DDR4 ram'
    }
]

const sb = document.getElementById('SB')
let tf = false

function searchBar(s){

   

    if(s.length == 0){
        toggleSearchBar()
    }
    else{
        tf = false
        toggleSearchBar()
        doSearch(s)
    }
}

//=================
const sec0 = document.getElementById('sec-0')
function doSearch(s){
    sec0.innerHTML = ''
    data.forEach( (q) => {
        if(s === q.pname){
            console.log('sucsecc');
            const qwer = document.createElement('div')
           // qwer.classList.add('lcard')
            sec0.append(qwer)
            qwer.innerHTML = `
                        <img src="/ASSETS/${q.img}" />
                        <h3>${q.pname}</h3>
                        <h4>${q.cost}</h4>
                        <p>${q.spec}</p>
                        `
        }
        else{
            console.log('fail');
        }
    });
}
//=================
function toggleSearchBar(){
    if(tf){
        sb.style.width = '0%'
        sb.style.paddingLeft = '0%'

    }
    else{
        sb.style.width = '90%'
        sb.style.paddingLeft = '3%'
    }
    tf = !tf
}

const menux = document.getElementById('menubox')
menux.style.display = 'none'
function openMenu(){

    if(menux.style.display === 'none'){
        menux.style.display = 'block'
    }
    else{
        menux.style.display = 'none'
    }
}


const xy = document.getElementById('sec-a')
const zy = document.getElementById('lapcards')
lapdata.forEach( (s) => {
    const er = document.createElement('div')
    er.classList.add('lcard')
    zy.appendChild(er)
    er.innerHTML = `
    <img src="/ASSETS/${s.img}" />
    <h3>${s.lname}</h3>
    <h4>${s.cost}</h4>
    <p>${s.spec}</p>
    `
});

data.forEach( (e) => {
    const newel = document.createElement('div')
    newel.classList.add('card')
    xy.appendChild(newel)
    newel.innerHTML = `
                        <img src="/ASSETS/${e.img}" />
                        <h3>${e.pname}</h3>
                        <h4>${e.cost}</h4>
                        <p>${e.spec}</p>
                        `
});
