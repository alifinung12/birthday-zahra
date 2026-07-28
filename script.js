function cekTanggal(){

    let bulan=document.getElementById("bulan").value;
    let tanggal=document.getElementById("tanggal").value;

    if(bulan==7 && tanggal==29){

        document.getElementById("login").style.display="none";

        document.getElementById("surprise").style.display="block";

    }else{

        document.getElementById("pesan").innerHTML="Tanggalnya belum benar ❤️";

    }

}

function bukaSurat(){

    document.getElementById("musik").play();

    document.getElementById("surprise").style.display="none";

    document.getElementById("letter").style.display="block";

}

function halamanAkhir(){

    document.getElementById("letter").style.display="none";

    document.getElementById("ending").style.display="block";

}