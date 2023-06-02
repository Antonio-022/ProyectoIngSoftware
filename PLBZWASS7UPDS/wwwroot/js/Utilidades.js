$(document).on("dragover", "#inputShared", function (e) {
    var timeout = window.dropZoneTimeout;
    if (!timeout) {
        $('.container-inputShared').addClass('image-dropping');
    } else {
        clearTimeout(timeout);
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        $('.container-inputShared').removeClass('image-dropping');
    }, 100);
});

function confirmar(title, text, icon, theme) {
    var fg = "";
    var bg = "";
    if (theme == true) {
        fg = "#f1f3f7";
        bg = "#333";
    }
    else {

        fg = "#333";
        bg = "#f1f3f7";

    }
    return new Promise(resolve => {
        Swal.fire({
            title,
            text,
            icon,
            color: fg,
            background: bg,
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
function alerta(title, text, icon, theme) {
    var fg = "";
    var bg = "";
    if (theme == true) {
        fg = "#f1f3f7";
        bg = "#333";
    }
    else {

        fg = "#333";
        bg = "#f1f3f7";
    }
    Swal.fire({
        title,
        text,
        icon,
        color: fg,
        background: bg
    })
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
function timerInactivo(dotnetHelper) {
    var timer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.onmouseenter = resetTimer;
    document.onkeypress = resetTimer;
    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(logout, 1800000); //30 MIN
    }

    function logout() {
        dotnetHelper.invokeMethodAsync("Logout");
    }
}
function spinnerJS(id) {
    $("#" + id).css("z-index", "7");
}

function spinnerJSEnd(id) {
    $("#" + id).css("z-index", "1060");
}
function AlertsToastr(Tipo, Mensaje, titulo) {

    toastr[Tipo](Mensaje, titulo);
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

function ReadyDataTable(table, responsive, paging, searching, ordering, info, columnDefs) {

    $(document).ready(function () {
        $(table).DataTable({
            
            responsive: responsive,
            paging: paging,
            searching: searching,
            ordering: false,
            "info": info,
            columnDefs: columnDefs,
            autoWidth: false,
 
        
        });

    });
}

function RemoveDataTable(table) {
    $(document).ready(function () {
        $(table).DataTable().destroy();
    });
}


