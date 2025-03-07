document.getElementById('screen').onclick = function() {document.getElementById('information').innerHTML = "The window is at position " + window.screenX + "x, " + window.screenY + "y in px."
    document.getElementById('extra1').innerHTML = "The screen is " + screen.width + " pixels wide and " + screen.height + " pixels tall."
    document.getElementById('extra2').innerHTML = "There's a color depth of " + screen.colorDepth + " and a pixel depth of " + screen.pixelDepth + "."
}

document.getElementById('window').onclick = function() {document.getElementById('information').innerHTML = "The window is " + window.innerWidth + " or " + window.outerWidth + " wide, and " + window.innerHeight + " or " + window.outerHeight + " tall in px."
    document.getElementById('extra1').innerHTML = "There's an offset of " + window.pageXOffset + " horizontally and " + window.pageYOffset + " vertically."
    document.getElementById('extra2').innerHTML = ""
}

document.getElementById('nav').onclick = function() {document.getElementById('information').innerHTML = "Cookies enabled? " + navigator.cookieEnabled + " || App Name: " + navigator.appName + " || App Code Name: " + navigator.appCodeName
    document.getElementById('extra1').innerHTML = "Product: " + navigator.product + " || App Version: " + navigator.appVersion
    document.getElementById('extra2').innerHTML = "User Agent: " + navigator.userAgent + " || Platform: " + navigator.platform + " || Java Enabled? " + navigator.javaEnabled() + " || Language: " + navigator.language}

document.getElementById('location').onclick = function() {document.getElementById('information').innerHTML = "Hash: " + location.hash + " || Host: " + location.host + " || Host Name: " + location.hostname
        document.getElementById('extra1').innerHTML = "HREF: " + location.href + " || Origin: " + location.origin
        document.getElementById('extra2').innerHTML = "Path: " + location.pathname + " || Port: " + location.port + " || Protocol: " + location.protocol + " || Search: " + location.search}

document.getElementById('create').onclick = function() {
            window = window.open("","myWindow","width=200, height=100,menubar=1,scrollbars=1,resizable=1")
            window.document.write("<p>This is a new window</p>");  
}

document.getElementById('close').onclick = function(){
            window.close()
}

document.getElementById('replace').onclick = function() {
    location.replace('https://www.wikipedia.com')
}

document.getElementById('history').onclick = function() {
    document.getElementById('information').innerHTML = "There have been a total of " + history.length + " pages visited this session."
    document.getElementById('extra1').innerHTML = ""
    document.getElementById('extra2').innerHTML = ""
}