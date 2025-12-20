let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

function addSubject() {
  let name = document.getElementById("subjectName").value;
  let hours = document.getElementById("studyHours").value;
  let day = document.getElementById("day").value;

  if (name === "" || hours === "") {
    alert("من فضلك اكملي البيانات");
    return;
  }

  subjects.push({ name, hours, day });
  localStorage.setItem("subjects", JSON.stringify(subjects));
  showPlan();
}

function showPlan() {
  let plan = document.getElementById("plan");
  plan.innerHTML = "";

  subjects.forEach(sub => {
    let li = document.createElement("li");
    li.innerHTML = `📅 ${sub.day}<br>📘 ${sub.name}<br>⏰ ${sub.hours} ساعة`;
    plan.appendChild(li);
  });
}

showPlan();
