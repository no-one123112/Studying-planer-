console.log("🚀 التطبيق بدأ العمل");

// حالة البريميم
let isPremium = JSON.parse(localStorage.getItem("isPremium")) || false;

// بيانات المفاهيم لكل لغة
const loopsData = {
  javascript:[
    {name:"for loop", desc:"for loop للتكرار عدد محدد.", example:`for(let i=0;i<5;i++){\n  console.log(i);\n}`},
    {name:"while loop", desc:"while loop تستمر طالما الشرط صحيح.", example:`let i=0;\nwhile(i<5){\nconsole.log(i);\ni++;\n}`},
    {name:"do-while loop", desc:"do-while تنفذ مرة واحدة على الأقل.", example:`let i=0;\ndo{\nconsole.log(i);\ni++;\n}while(i<5);`}
  ],
  python:[
    {name:"for loop", desc:"for loop عبر قائمة أو نطاق.", example:`for i in range(5):\n    print(i)`},
    {name:"while loop", desc:"while loop طالما الشرط صحيح.", example:`i=0\nwhile i<5:\n print(i)\n i+=1`}
  ],
  cpp:[
    {name:"for loop", desc:"for loop للتكرار.", example:`for(int i=0;i<5;i++){\n cout<<i<<endl;\n}`},
    {name:"while loop", desc:"while loop طالما الشرط صحيح.", example:`int i=0;\nwhile(i<5){\n cout<<i<<endl;\n i++;\n}`},
    {name:"do-while loop", desc:"do-while تنفذ مرة واحدة على الأقل.", example:`int i=0;\ndo{\n cout<<i<<endl;\n i++;\n}while(i<5);`}
  ],
  java:[
    {name:"for loop", desc:"for loop للتكرار.", example:`for(int i=0;i<5;i++){\n System.out.println(i);\n}`},
    {name:"while loop", desc:"while loop طالما الشرط صحيح.", example:`int i=0;\nwhile(i<5){\n System.out.println(i);\n i++;\n}`},
    {name:"do-while loop", desc:"do-while تنفذ مرة واحدة.", example:`int i=0;\ndo{\n System.out.println(i);\n i++;\n}while(i<5);`}
  ],
  c:[
    {name:"for loop", desc:"for loop للتكرار.", example:`for(int i=0;i<5;i++){\n printf("%d\\n",i);\n}`},
    {name:"while loop", desc:"while loop طالما الشرط صحيح.", example:`int i=0;\nwhile(i<5){\n printf("%d\\n",i);\n i++;\n}`},
    {name:"do-while loop", desc:"do-while تنفذ مرة واحدة.", example:`int i=0;\ndo{\n printf("%d\\n",i);\n i++;\n}while(i<5);`}
  ],
  html:[
    {name:"HTML Basics", desc:"HTML لغة ترميز لبناء صفحات الويب.", example:`<h1>مرحبا</h1>\n<p>فقرة</p>`},
    {name:"Links & Images", desc:"روابط وصور.", example:`<a href='#'>رابط</a>\n<img src='img.jpg'>`}
  ]
};

let currentLang = "javascript";

// عرض المفاهيم
function showConcepts(){
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const concepts = loopsData[currentLang] || [];
  concepts.forEach(c=>{
    const li = document.createElement("li");
    li.innerHTML = `<strong>${c.name}</strong><br>📝 ${c.desc.replace(/\n/g,"<br>")}<br>💻 مثال:<pre>${c.example}</pre>`;
    list.appendChild(li);
  });
}

// تغيير اللغة
function changeLanguage(){
  currentLang = document.getElementById("languageSelect").value;
  showConcepts();
}

// البحث
function searchConcepts(){
  const term = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const concepts = loopsData[currentLang] || [];
  concepts.forEach(c=>{
    if(c.name.toLowerCase().includes(term) || c.desc.toLowerCase().includes(term)){
      const li = document.createElement("li");
      li.innerHTML = `<strong>${c.name}</strong><br>📝 ${c.desc.replace(/\n/g,"<br>")}<br>💻 مثال:<pre>${c.example}</pre>`;
      list.appendChild(li);
    }
  });
}

// تفعيل المميزات للبريميم
function unlockPremiumFeatures(){
  document.getElementById("noteContainer").style.display="block";
  document.getElementById("themeSwitcher").style.display="block";
}

// النوتة الشخصية
function saveNote(){
  const note = document.getElementById("userNote").value;
  localStorage.setItem("userNote", note);
  alert("تم حفظ الملاحظات ✅");
}
function loadNote(){
  const note = localStorage.getItem("userNote") || "";
  document.getElementById("userNote").value = note;
}

// زر تسجيل الخروج
function logout(){
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", ()=>{
  // زر اللوج اوت
  document.getElementById("logoutBtn").onclick = logout;

  // تغيير اللغة
  document.getElementById("languageSelect").onchange = changeLanguage;

  // البحث
  document.getElementById("searchInput").onkeyup = searchConcepts;

  // زر البريميم
  document.getElementById("premiumBtn").onclick = ()=>{
    let paymentSuccess = confirm("✨ هل تمت عملية الدفع؟ اضغطي OK للتأكيد");
    if(paymentSuccess){
      isPremium = true;
      localStorage.setItem("isPremium", true);
      alert("تم تفعيل البريميم! 🌟");
      unlockPremiumFeatures();
      loadNote();
    } else {
      alert("المميزات البريميم لم تُفعّل.");
    }
  };

  // زر حفظ النوتة
  document.getElementById("saveNoteBtn").onclick = saveNote;

  // زر تغيير الثيم
  document.getElementById("themeBtn").onclick = ()=>{
    if(!isPremium){ alert("المميزات البريميم فقط!"); return;}
    document.body.classList.toggle("dark-theme");
  };

  // تفعيل تلقائي لو سبق الدفع
  if(isPremium){
    unlockPremiumFeatures();
    loadNote();
  }

  // عرض المفاهيم عند تحميل الصفحة
  showConcepts();
});
