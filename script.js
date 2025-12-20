console.log("🚀 التطبيق بدأ العمل");

// محتوى اللغات مع أقسام
let defaultConcepts = {
  javascript: {
    Syntax:[
      {name:"المتغيرات", desc:"var, let, const لتخزين البيانات"},
      {name:"الدوال", desc:"function myFunc() {...}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(let i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
    ],
    DOM:[
      {name:"DOM", desc:"document.getElementById() للتعامل مع العناصر"}
    ]
  },
  python: {
    Syntax:[
      {name:"المتغيرات", desc:"x = 5"},
      {name:"الدوال", desc:"def my_func():"}
    ],
    Loops:[
      {name:"for loop", desc:"for i in range(5):"},
      {name:"while loop", desc:"while condition:"}
    ]
  },
  cpp: {
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5;"},
      {name:"الدوال", desc:"void myFunc() {}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
    ]
  },
  java: {
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5;"},
      {name:"الدوال", desc:"void myFunc() {}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
    ]
  }
};

let concepts = defaultConcepts;
let isPremium = JSON.parse(localStorage.getItem("isPremium")) || false;
let currentLang = "javascript";

// تغيير اللغة
function changeLanguage() {
  currentLang = document.getElementById("languageSelect").value;
  console.log("🔄 تم تغيير اللغة إلى:", currentLang);
  showConcepts();
}

// عرض المفاهيم حسب الأقسام
function showConcepts() {
  let list = document.getElementById("conceptList");
  list.innerHTML = "";
  let sections = concepts[currentLang] || {};
  for(let section in sections){
    let liSection = document.createElement("li");
    liSection.innerHTML = `<strong>${section}</strong>`;
    list.appendChild(liSection);
    sections[section].forEach(con=>{
      let li = document.createElement("li");
      li.innerHTML = `💡 ${con.name}<br>📝 ${con.desc}`;
      list.appendChild(li);
    });
  }
  console.log("📚 تم عرض المفاهيم للغة:", currentLang);
}

// بحث داخلي
function searchConcepts() {
  let term = document.getElementById("searchInput").value.toLowerCase();
  let list = document.getElementById("conceptList");
  list.innerHTML = "";
  let sections = concepts[currentLang] || {};
  for(let section in sections){
    sections[section].forEach(con=>{
      if(con.name.toLowerCase().includes(term) || con.desc.toLowerCase().includes(term)){
        let li = document.createElement("li");
        li.innerHTML = `💡 ${con.name} <br> 📝 ${con.desc} <br><em>${section}</em>`;
        list.appendChild(li);
      }
    });
  }
}

// تفعيل ميزات البريميم
function unlockPremiumFeatures() {
  document.getElementById("premiumFeatures").style.display = "block";
  loadNotes();
  console.log("🌟 البريميم مفعل");
}

// زر البريميم
document.getElementById("premiumBtn").onclick = function() {
  document.getElementById("paymentSection").style.display = "block";
  console.log("💰 بدأ المستخدم عملية تفعيل البريميم");
};

// اختيار طريقة الدفع
document.getElementById("paymentMethod").onchange = function() {
  let method = this.value;
  let number = method === "vodafone" ? "0123456789" :
               method === "orange" ? "0112345678" :
               "0101234567";
  document.getElementById("walletNumber").innerText = number;
  console.log("💳 تم اختيار طريقة الدفع:", method);
};

// تأكيد الدفع
function confirmPayment() {
  let txn = document.getElementById("transactionId").value;
  if(txn===""){ alert("من فضلك اكتب رقم التحويل / Receipt"); return; }
  isPremium = true;
  localStorage.setItem("isPremium", true);
  alert("تم تفعيل البريميم! 🌟");
  unlockPremiumFeatures();
  document.getElementById("paymentSection").style.display="none";
  console.log("✅ الدفع مؤكد، البريميم مفعل");
}

// حفظ النوتة
function saveNotes() {
  let notes = document.getElementById("personalNotes").value;
  localStorage.setItem("personalNotes", notes);
  alert("تم حفظ النوتة!");
  console.log("📝 النوتة تم حفظها");
}

// تحميل النوتة لو سبق حفظها
function loadNotes() {
  let saved = localStorage.getItem("personalNotes") || "";
  document.getElementById("personalNotes").value = saved;
  console.log("📄 تم تحميل النوتة السابقة");
}

// تفعيل الثيم
document.getElementById("themeBtn").onclick = function() {
  document.body.classList.toggle("dark-theme");
  console.log("🎨 تم تغيير الثيم");
};

// عند التحميل
showConcepts();
if(isPremium) unlockPremiumFeatures();
