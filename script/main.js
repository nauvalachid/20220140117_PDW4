function Submit() {
  Swal.fire({
      title: "⇛DONE⇚", 
      text: "WeLcOmE to ReD DeViLs",
      icon: "success" 
});
}

const waktu = document.getElementById("waktu");

function tanggal(){
  const date = new Date(); 
  const options = {
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short' 
  };
  waktu.innerHTML = date.toLocaleString('id-ID', options); 
}

setInterval(tanggal, 1000);

tanggal();