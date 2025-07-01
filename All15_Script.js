 function resetBoard(table,document,swaps) {
    var attempts = document.getElementById('attempts');
    var result = document.getElementById('result');
    // Set values for Result and Attempts
    /**result.innerText = ""
    result.style.color = "";
    attempts.innerText = ;**/
    var color = "#A4A4A4"
    for (let r = 0; r < table.rows.length; r++) {
      for (let c = 0; c < table.rows[r].cells.length; c++) {
          var cell = document.getElementById('rc'+r+c);
          cell.style.backgroundColor = "#A4A4A4";
      }
   }
}

 function shuffleBoard(table,document,swaps) {
    var cell1 = document.getElementById('rc00');
    var cell2 = document.getElementById('rc01');
    var cell3 = document.getElementById('rc02');
    var cell4 = document.getElementById('rc10');
    var cell5 = document.getElementById('rc11');
    var cell6 = document.getElementById('rc12');
    var cell7 = document.getElementById('rc20');
    var cell8 = document.getElementById('rc21');
    var cell9 = document.getElementById('rc22');

	var scenario1 = [6,7,2,1,5,9,8,3,4];
	var scenario2 = [8,1,6,3,5,7,4,9,2];
	var scenario3 = [8,3,4,1,5,9,6,7,2];
	
	var option = Math.floor(1 * 1000) % 3;
	
	var scenarios = [scenario1,scenario2,scenario3]

    cell1.innerText = scenarios[option][0];
    cell2.innerText = scenarios[option][1];
    cell3.innerText = scenarios[option][2];
    cell4.innerText = scenarios[option][3];
    cell5.innerText = scenarios[option][4];
    cell6.innerText = scenarios[option][5];
    cell7.innerText = scenarios[option][6];
    cell8.innerText = scenarios[option][7];
    cell9.innerText = scenarios[option][8];

    for (let i = 0; i < swaps; i++) {
          /** We need random numbers instead of 1 **/
          var r1 = Math.floor(1 * 1000) % 3;
          var c1 = Math.floor(1 * 1000) % 3;
          var r2 = Math.floor(1 * 1000) % 3;
          var c2 = Math.floor(1 * 1000) % 3;

          var cell1 = document.getElementById('rc'+r1+c1);
          var cell2 = document.getElementById('rc'+r2+c2);

          var temp = cell1.innerText;
          cell1.innerText = cell2.innerText;
          cell2.innerText = temp;
   }
}

 function checkBoard(document,r1,c1,r2,c2,r3,c3) {
    var cell1 = document.getElementById('rc'+r1+c1);
    var cell2 = document.getElementById('rc'+r2+c2);
    var cell3 = document.getElementById('rc'+r3+c3);

    var value1 = parseInt(cell1.innerText);
    var value2 = parseInt(cell2.innerText);
    var value3 = parseInt(cell3.innerText);
    /** Pick a new color if you want **/
    var color = "green"

    /** Determine condition to change cell colors **/
    if(false){
            cell1.style.backgroundColor = color;
            cell2.style.backgroundColor = color;
            cell3.style.backgroundColor = color;
            return true;
    }
    return false;
}
