// CARDINFO
document.getElementById('cardInfo').onmouseenter = function(){
    document.getElementById('cardInfo').style.transform = 'scale(1.4, 1.4)';
    document.getElementById('cardInfo').style.transition = '0.8s';
}
document.getElementById('cardInfo').onmouseleave = function(){
    document.getElementById('cardInfo').style.transform = 'scale(1,1)';
}
// CARDINFO2
document.getElementById('cardInfo2').onmouseenter = function(){
    document.getElementById('cardInfo2').style.transform = 'scale(1.4, 1.4)';
    document.getElementById('cardInfo2').style.transition = '0.8s';
}
document.getElementById('cardInfo2').onmouseleave = function(){
    document.getElementById('cardInfo2').style.transform = 'scale(1,1)';
}
// CARDINFO3
document.getElementById('cardInfo3').onmouseenter = function(){
    document.getElementById('cardInfo3').style.transform = 'scale(1.4, 1.4)';
    document.getElementById('cardInfo3').style.transition = '0.8s';
}
document.getElementById('cardInfo3').onmouseleave = function(){
    document.getElementById('cardInfo3').style.transform = 'scale(1,1)';
}
// ICONS  

// GOOGLE PLAY ICON
document.getElementById('googlePlay').onmouseenter = function(){
    document.getElementById('googlePlay').style.width = '160px';
    document.getElementById('googlePlay').style.height = '46px';
    document.getElementById('googlePlay').style.borderRadius = '6px';
    document.getElementById('googlePlay').style.display = 'flex';
    document.getElementById('googlePlay').style.justifyContent = 'space-around';
    document.getElementById('googlePlay').style.alignItems = 'center';
    document.getElementById('googlePlay').style.transition = '1s';
    document.getElementById('none').style.opacity = '1';
    document.getElementById('none').style.fontSize = '12px';
}
document.getElementById('googlePlay').onmouseleave =()=>{
    setInterval(()=>{
        document.getElementById('googlePlay').style.width = '60px';
        document.getElementById('googlePlay').style.height = '50px';
        document.getElementById('googlePlayIcon').style.width = '32px';
        document.getElementById('googlePlayIcon').style.height = '32px';
        document.getElementById('googlePlay').style.padding = '0px';
        document.getElementById('none').style.opacity = '0';
        document.getElementById('none').style.fontSize = '1px';
    }, 5000)
    document.getElementById('googlePlay').style.display = 'flex';
    document.getElementById('googlePlay').style.justifyContent = 'space-around';
    document.getElementById('googlePlay').style.alignItems = 'center';
}

// APPLE STORE ICON

document.getElementById('appleStoreIcon').onmouseenter =()=>{
    document.getElementById('appleStore').style.width = '160px';
    document.getElementById('appleStore').style.height = '46px';
    document.getElementById('appleStore').style.borderRadius = '6px';
    document.getElementById('appleStore').style.display = 'flex';
    document.getElementById('appleStore').style.justifyContent = 'space-around';
    document.getElementById('appleStore').style.alignItems = 'center';
    document.getElementById('appleStore').style.transition = '1s';
    document.getElementById('none2').style.opacity = '1';
    document.getElementById('none2').style.fontSize = '12px';
}

document.getElementById('appleStoreIcon').onmouseleave = ()=>{
    setInterval(()=>{
        document.getElementById('appleStore').style.width = '60px';
        document.getElementById('appleStore').style.height = '50px';
        document.getElementById('appleStoreIcon').style.width = '32px';
        document.getElementById('appleStoreIcon').style.height = '32px';
        document.getElementById('appleStore').style.padding = '0px';
        document.getElementById('none2').style.opacity = '0';
        document.getElementById('none2').style.fontSize = '1px';
    }, 5000)
    document.getElementById('appleStore').style.display = 'flex';
    document.getElementById('appleStore').style.justifyContent = 'space-around';
    document.getElementById('appleStore').style.alignItems = 'center';
}
