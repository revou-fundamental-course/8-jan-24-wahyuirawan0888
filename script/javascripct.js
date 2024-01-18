function calculateArea() {
    var sideLength = document.getElementById("sideLength").value;
    var area = sideLength * sideLength;
    var areaResult = document.getElementById("areaResult");
  
    // Menambahkan pesan "L = S * S" dan hasil perhitungan ke dalam area
    areaResult.innerHTML = "L = S x S<br> L = "+sideLength +" x " +sideLength + "<br> L = "+area;
  
  
  
    // Mengizinkan pengguna mengedit kontennya
    areaResult.setAttribute("contenteditable", "true");
  }
  
  function resetInput() {
    document.getElementById("sideLength").value = "";
    document.getElementById("areaResult").innerHTML = "";
    // Mengembalikan izin pengeditan konten
    document.getElementById("areaResult").setAttribute("contenteditable", "true");
  }
  