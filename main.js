function result(){
    // Collect waec letter grades and convert to numbers
    var w1 = document.getElementById("waec1").value;
    var waecScore1 = detWaecScore(w1);
    var w2 = document.getElementById("waec2").value;
    var waecScore2 = detWaecScore(w2);
    var w3 = document.getElementById("waec3").value;
    var waecScore3 = detWaecScore(w3);
    var w4 = document.getElementById("waec4").value;
    var waecScore4 = detWaecScore(w4);
    var w5 = document.getElementById("waec5").value;
    var waecScore5 = detWaecScore(w5);

    // sum up waex score
    var waecScoreSum = parseFloat(waecScore1) + parseFloat(waecScore2) + parseFloat(waecScore3) + parseFloat(waecScore4) + parseFloat(waecScore5);

    // collect jamb score and cover to 50
    var jambScore  = document.getElementById("utme-score").value;

    if(jambScore <0 || jambScore > 400){
        document.getElementById("show-result").innerHTML = "Enter a Score between 0 and 400";
        break;
    } else{
        var jambAgg = parseFloat(jambScore)/8;
    }

        // collect post utme score
    var postJambScore  = document.getElementById("post-utme-score").value;

    if(postJambScore < 0 || postJambScore > 30){
        document.getElementById("show-result").innerHTML = "Enter a Score between 0 and 30";
        break;
    } else{
        var postJambAgg = parseFloat(postJambScore);;
    }
    

    // sum up aggregates
    var aggregareScore = waecScoreSum + jambAgg + postJambAgg;
    // console.log(aggregareScore);
    
    // show aggregate to student
    document.getElementById("show-result").innerHTML = "Your aggregate is = "+aggregareScore;
   
}

function detWaecScore(letterGrade){
    var score;

    if (letterGrade=="A1"){
        score = 4.0;
    } else if(letterGrade == "B2"){
        score = 3.6;
    } else if(letterGrade == "B3"){
        score = 3.2;
    } else if(letterGrade == "C4"){
        score == 2.8;
    } else if(letterGrade =="C5"){
        score = 2.4;
    } else if(letterGrade == "C6"){
        score = 2.0;
    } else{
        score = 0;
    }

    return score;
};

