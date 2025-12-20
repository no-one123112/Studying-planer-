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
// حالة البريميم
let isPremium = JSON.parse(localStorage.getItem("isPremium")) || false;

// تفعيل المزايا البريميم
function unlockPremiumFeatures() {
  document.getElementById("themeSwitcher").style.display = "block";
  document.getElementById("mindMap").style.display = "block";
}

// تغيير الثيم
function toggleTheme() {
  if(!isPremium){
    alert("المميزات البريميم فقط!");
    return;
  }
  document.body.classList.toggle("dark-theme");
}

// تفعيل المزايا تلقائيًا لو سبق تفعيلها
if(isPremium){
  unlockPremiumFeatures();
}

// زر البريميم
document.getElementById("premiumBtn").onclick = function () {
  let paymentSuccess = confirm("✨ هل تمت عملية الدفع؟ اضغطي OK للتأكيد");

  if(paymentSuccess){
    isPremium = true;
    localStorage.setItem("isPremium", true);
    alert("تم تفعيل البريميم! 🌟");
    unlockPremiumFeatures();
  } else {
    alert("المميزات البريميم لم تُفعّل.");
  }
};

// ربط زر تغيير الثيم
document.getElementById("themeBtn").onclick = toggleTheme;

