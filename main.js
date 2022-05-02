nomedosalunos = [];

function submit(){
    var aluno1 = document.getElementById("name1").value;
    var aluno2 = document.getElementById("name2").value;
    var aluno3 = document.getElementById("name3").value;
    var aluno4 = document.getElementById("name4").value;

    nomedosalunos.push(aluno1);
    nomedosalunos.push(aluno2);
    nomedosalunos.push(aluno3);
    nomedosalunos.push(aluno4);

        console.log(nomedosalunos);

    document.getElementById("displayName").innerHTML = nomedosalunos;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting(){
    nomedosalunos.sort();
    console.log(nomedosalunos);
    document.getElementById("displayName").innerHTML = nomedosalunos;
}