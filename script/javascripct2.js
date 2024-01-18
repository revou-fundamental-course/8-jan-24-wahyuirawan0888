function calculateKeliling() {
    var sideLength = document.getElementById("sideLength").value;
    var keliling = 4 * sideLength;
    var areaResult = document.getElementById("areaResult");
  
    areaResult.innerHTML = "K = 4 x S<br> K = 4 x " +sideLength+ "<br>K = "+ keliling;

    // Mengizinkan pengguna mengedit kontennya
    areaResult.setAttribute("contenteditable", "true");
  }

  function resetInput() {
    document.getElementById("sideLength").value = "";
    document.getElementById("areaResult").innerHTML = "";
    // Mengembalikan izin pengeditan konten
    document.getElementById("areaResult").setAttribute("contenteditable", "true");
  }
  