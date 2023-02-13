$(document).ready(function () {
    console.log("ready!");
    $("#floatingInput").addClass("form-control");
});

function confirmar(title, text, icon) {
    return new Promise(resolve => {
        Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            resolve(result.isConfirmed);
        })
    });


}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
function StorageEvent(dotnetHelper) {

    window.addEventListener('storage', function (event) {
        if (event.storageArea === localStorage) {
            // It's local storage
            dotnetHelper.invokeMethodAsync("VerificarLogueo");
           
        }
    }, false);
}


function timerInactivo(dotnetHelper)
{
    var timer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.onmouseenter = resetTimer;
    document.onkeypress = resetTimer;
   

    function resetTimer()
    {
        clearTimeout(timer);
        timer = setTimeout(logout, 1800000); //30 MIN
    }

    function logout()
    {
        dotnetHelper.invokeMethodAsync("Logout");

    }
}
function spinnerJS(id) {
    $("#" + id).css("z-index", "7");
}

function spinnerJSEnd(id) {
    $("#" + id).css("z-index", "1060");
}

function modoOscuro() {
    console.log(document);
}
function AlertsToastr(Tipo,Mensaje,titulo) {
    
    toastr[Tipo](Mensaje,titulo);
};

async function downloadFileFromStream2(fileName, contentStreamReference) {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);

    triggerFileDownload(fileName, url);

    URL.revokeObjectURL(url);
}

function triggerFileDownload(fileName, url) {
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
}

/*function saveByteArray(url) {
    
    var link = document.createElement('a');
    link.href = url;
    var fileName = "Comprobante de Registro";
    link.download = fileName;
    link.click();
    link.remove();
};


function DonwloadPDF(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    var blob = new Blob([bytes.buffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    saveByteArray(url);
    URL.revokeObjectURL(url);

}*/









