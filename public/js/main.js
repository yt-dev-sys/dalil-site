/* ====== EDIT HERE ======
   downloadUrl : link of the download button. Paste the exact pre-release URL if you want,
                 e.g. https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/v1.0.7
   seatsLeft   : seats remaining in the promo. Change this number any time.
   promoTotal  : total promo seats. */
var CONFIG={
  downloadUrl:"https://github.com/yt-dev-sys/Dalil-Pub/releases",
  promoTotal:50,
  seatsLeft:50
};
var T={
ar:{promo_cta:"كيف أسجّل؟",promo_live:"التسجيل مفتوح",promo_t:"عرض الإطلاق: خصم 50% لأول 50 مسجّلًا",promo_d:"سجّل الآن لتحصل على خصم 50% على السعر عند إطلاق النسخة المدفوعة.",promo_reg:"للتسجيل، تواصل معي:",seats_l:"مقعدًا متبقيًا",promo_full:"اكتملت المقاعد",q0:"كيف أسجّل؟",a0:"تواصل مع المطوّر عبر تيليجرام أو واتساب وسيتم تسجيلك. أول 50 مسجّلًا يحصلون على خصم 50%.",nav1:"المزايا",nav2:"كيف يعمل",nav3:"أسئلة شائعة",dl:"تحميل",dl2:"حمّل النسخة التجريبية المجانية",
badge:"نسخة تجريبية مجانية",
h1:"ابحث عن أي كلمة داخل كل ملفاتك.",
lead:"دليل يفهرس ملفات Word وExcel وPDF على حاسوبك، فتكتب الكلمة وتظهر لك كل الملفات التي تحتوي عليها في ثوانٍ، بدون إنترنت.",
meta:"ويندوز 10/11 · نسخة 32 و64 بت · مجاني خلال فترة التجربة",
fh:"ما الذي يقدمه دليل",
f1t:"بحث داخل الملفات",f1d:"يقرأ محتوى ملفات Word وExcel وPDF والنصوص وMarkdown، لا أسماء الملفات فقط.",
f2t:"عربية مفهومة",f2d:"يتجاهل التشكيل والتطويل، ويوحّد أشكال الألف والياء والتاء المربوطة والأرقام الهندية.",
f3t:"نتائج فورية",f3d:"فهرس محلي سريع يعرض النتائج أثناء الكتابة، حتى مع آلاف الملفات.",
f4t:"خصوصية كاملة",f4d:"لا حساب ولا سحابة ولا رفع للملفات. كل شيء يبقى على جهازك.",
f5t:"ملفات PDF الممسوحة",f5d:"قراءة ضوئية للنصوص العربية بأفضل جهد، وتتطلب حزمة اللغة العربية في ويندوز. بدونها يُعثر على الملف باسمه.",
f6t:"بثلاث لغات",f6d:"واجهة بالعربية والفرنسية والإنجليزية مع دعم الكتابة من اليمين، وتحديث تلقائي للنسخ.",
hh:"ثلاث خطوات فقط",
s1t:"اختر المجلدات",s1d:"حدد المجلدات التي تريد البحث فيها.",
s2t:"دليل يفهرس",s2d:"تُبنى القاعدة المحلية مرة واحدة، ثم تُحدَّث عند الحاجة.",
s3t:"اكتب كلمة",s3d:"تظهر كل الملفات التي تحتوي عليها، مع المقطع الذي وردت فيه.",
ph:"ملفاتك تبقى عندك.",
pp:"يعمل دليل بدون اتصال. الفهرس قاعدة بيانات على حاسوبك، ولا يُرسل أي ملف أو كلمة بحث إلى أي خادم. مناسب للمحامين وكل من يتعامل مع ملفات حساسة.",
qh:"أسئلة شائعة",
q1:"هل دليل مجاني؟",a1:"نعم، النسخة التجريبية الحالية مجانية. لم يُحدد السعر بعد، وأول 50 مسجّلًا يحصلون على خصم 50% عند إطلاقه.",
q2:"ظهر تحذير من ويندوز عند التثبيت، هل هذا طبيعي؟",a2:"نعم. التطبيق غير موقّع رقميًا بعد، لذلك يعرض SmartScreen تحذيرًا. اضغط «مزيد من المعلومات» ثم «تشغيل على أي حال».",
q3:"هل يقرأ الملفات الممسوحة؟",a3:"بأفضل جهد، وبشرط تثبيت حزمة اللغة العربية في ويندوز. الملفات المحمية بكلمة مرور يُبحث عنها باسمها فقط.",
q4:"هل يعمل على ماك أو الهاتف؟",a4:"لا، دليل لويندوز فقط حاليًا. لا يدعم PowerPoint.",
q5:"هل يُرسل ملفاتي إلى الإنترنت؟",a5:"لا. الفهرس محلي بالكامل، والإنترنت يُستعمل فقط للتحقق من التحديثات.",
fin:"جرّب دليل اليوم",finp:"حمّله، اختر مجلدًا، واكتب أول كلمة. وإن أردت مساعدة، راسلني.",
ftc:"تواصل مع المطوّر",rights:"جميع الحقوق محفوظة"},
fr:{promo_cta:"Comment s’inscrire ?",promo_live:"Inscriptions ouvertes",promo_t:"Offre de lancement : 50 % de réduction pour les 50 premiers inscrits",promo_d:"Inscrivez-vous maintenant pour bénéficier de 50 % de réduction sur le prix à la sortie de la version payante.",promo_reg:"Pour vous inscrire, contactez-moi :",seats_l:"places restantes",promo_full:"Toutes les places sont prises",q0:"Comment s’inscrire ?",a0:"Contactez le développeur sur Telegram ou WhatsApp pour être inscrit. Les 50 premiers inscrits bénéficient de 50 % de réduction.",nav1:"Fonctionnalités",nav2:"Fonctionnement",nav3:"FAQ",dl:"Télécharger",dl2:"Télécharger la bêta gratuite",
badge:"Bêta gratuite",
h1:"Retrouvez n’importe quel mot dans tous vos fichiers.",
lead:"Dalil indexe vos documents Word, Excel et PDF. Tapez un mot et voyez en quelques secondes tous les fichiers qui le contiennent, sans connexion internet.",
meta:"Windows 10/11 · versions 32 et 64 bits · gratuit pendant la bêta",
fh:"Ce que fait Dalil",
f1t:"Recherche dans le contenu",f1d:"Lit Word, Excel, PDF, texte et Markdown, pas seulement les noms de fichiers.",
f2t:"Un arabe bien compris",f2d:"Ignore voyelles brèves et tatwil, unifie les formes d’alef, de yé, de tā’ marbūta et les chiffres arabo-indiens.",
f3t:"Résultats instantanés",f3d:"Un index local rapide affiche les résultats pendant la frappe, même avec des milliers de fichiers.",
f4t:"Vie privée totale",f4d:"Pas de compte, pas de cloud, aucun envoi de fichier. Tout reste sur votre PC.",
f5t:"PDF numérisés",f5d:"OCR arabe au mieux de ses capacités, avec le pack de langue arabe de Windows. Sans lui, le fichier est trouvé par son nom.",
f6t:"Trois langues",f6d:"Interface en arabe, français et anglais, écriture de droite à gauche, mises à jour automatiques.",
hh:"Trois étapes",
s1t:"Choisissez vos dossiers",s1d:"Indiquez où Dalil doit chercher.",
s2t:"Dalil indexe",s2d:"La base locale est créée une fois, puis mise à jour au besoin.",
s3t:"Tapez un mot",s3d:"Tous les fichiers concernés s’affichent, avec l’extrait où le mot apparaît.",
ph:"Vos fichiers restent chez vous.",
pp:"Dalil fonctionne hors ligne. L’index est une base de données sur votre ordinateur et aucun fichier ni mot recherché n’est envoyé à un serveur. Idéal pour les avocats et les dossiers sensibles.",
qh:"Questions fréquentes",
q1:"Dalil est-il gratuit ?",a1:"Oui, la bêta actuelle est gratuite. Le prix n’est pas encore fixé, et les 50 premiers inscrits auront 50 % de réduction à sa sortie.",
q2:"Windows affiche un avertissement à l’installation, est-ce normal ?",a2:"Oui. L’application n’est pas encore signée, donc SmartScreen avertit. Cliquez sur « Informations complémentaires » puis « Exécuter quand même ».",
q3:"Lit-il les PDF numérisés ?",a3:"Au mieux, à condition d’installer le pack de langue arabe de Windows. Les fichiers protégés par mot de passe sont trouvés par leur nom seulement.",
q4:"Existe-t-il sur Mac ou mobile ?",a4:"Non, Dalil fonctionne uniquement sous Windows pour l’instant. PowerPoint n’est pas pris en charge.",
q5:"Mes fichiers sont-ils envoyés sur internet ?",a5:"Non. L’index est entièrement local. Internet sert uniquement à vérifier les mises à jour.",
fin:"Essayez Dalil aujourd’hui",finp:"Téléchargez-le, choisissez un dossier et tapez votre premier mot. Besoin d’aide ? Écrivez-moi.",
ftc:"Contacter le développeur",rights:"Tous droits réservés"},
en:{promo_cta:"How to register?",promo_live:"Registration open",promo_t:"Launch offer: 50% off for the first 50 users",promo_d:"Register now to get 50% off the price when the paid version launches.",promo_reg:"To register, contact me:",seats_l:"seats left",promo_full:"All seats are taken",q0:"How do I register?",a0:"Contact the developer on Telegram or WhatsApp and you’ll be registered. The first 50 users get 50% off.",nav1:"Features",nav2:"How it works",nav3:"FAQ",dl:"Download",dl2:"Download the free beta",
badge:"Free beta",
h1:"Find any word inside all your files.",
lead:"Dalil indexes your Word, Excel and PDF files. Type a word and see every file that contains it in seconds, with no internet connection.",
meta:"Windows 10/11 · 32-bit and 64-bit · free during the beta",
fh:"What Dalil does",
f1t:"Search inside files",f1d:"Reads Word, Excel, PDF, text and Markdown content, not just file names.",
f2t:"Arabic done right",f2d:"Ignores vowel marks and tatweel, and unifies alef, yeh and teh marbuta variants and Arabic-Indic digits.",
f3t:"Instant results",f3d:"A fast local index shows results as you type, even across thousands of files.",
f4t:"Fully private",f4d:"No account, no cloud, no file uploads. Everything stays on your PC.",
f5t:"Scanned PDFs",f5d:"Best-effort Arabic OCR, which needs the Windows Arabic language pack. Without it, files are found by name.",
f6t:"Three languages",f6d:"Arabic, French and English interface with right-to-left support and automatic updates.",
hh:"Three steps",
s1t:"Pick your folders",s1d:"Tell Dalil where to look.",
s2t:"Dalil indexes",s2d:"The local database is built once, then refreshed when needed.",
s3t:"Type a word",s3d:"Every matching file appears, with the passage where the word occurs.",
ph:"Your files stay with you.",
pp:"Dalil works offline. The index is a database on your own computer, and no file or search term is sent to any server. Built for lawyers and anyone handling sensitive documents.",
qh:"Frequently asked questions",
q1:"Is Dalil free?",a1:"Yes, the current beta is free. No price is set yet, and the first 50 registered users get 50% off when it launches.",
q2:"Windows showed a warning during install. Is that normal?",a2:"Yes. The app is not code-signed yet, so SmartScreen warns you. Click “More info”, then “Run anyway”.",
q3:"Does it read scanned PDFs?",a3:"On a best-effort basis, and only with the Windows Arabic language pack installed. Password-protected files are found by name only.",
q4:"Does it run on Mac or mobile?",a4:"No, Dalil is Windows-only for now. PowerPoint files are not supported.",
q5:"Are my files sent over the internet?",a5:"No. The index is fully local. The internet is used only to check for updates.",
fin:"Try Dalil today",finp:"Download it, pick a folder and type your first word. Need help? Message me.",
ftc:"Contact the Dev",rights:"All rights reserved"}
};
function setLang(l){
  var d=T[l];document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i]").forEach(function(e){var v=d[e.getAttribute("data-i")];if(v!==undefined)e.textContent=v});
  document.title="Dalil — "+(l==="ar"?"دليل":l==="fr"?"Recherche dans vos fichiers":"Search your files");
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
  try{localStorage.setItem("dalil-lang",l)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
var s="ar";try{s=localStorage.getItem("dalil-lang")||"ar"}catch(e){}
setLang(T[s]?s:"ar");

document.querySelectorAll("a[data-dl]").forEach(function(a){a.href=CONFIG.downloadUrl});
(function(){
  var t=CONFIG.promoTotal,l=Math.max(0,Math.min(t,Number(CONFIG.seatsLeft)||0));
  var n=document.getElementById("left"),g=document.getElementById("grid"),box=document.getElementById("promo");
  document.getElementById("tot").textContent=t;n.textContent=l;
  for(var i=0;i<t;i++){var d=document.createElement("i");if(i<t-l)d.className="taken";else d.style.animationDelay=((i*137)%1400)+"ms";g.appendChild(d)}
  box.classList.toggle("full",l===0);
  if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var io=new IntersectionObserver(function(e){
    if(!e[0].isIntersecting)return;io.disconnect();var s=null;
    function f(ts){s=s||ts;var q=Math.min(1,(ts-s)/1100);n.textContent=Math.round(l*(1-Math.pow(1-q,3)));if(q<1)requestAnimationFrame(f)}
    requestAnimationFrame(f)},{threshold:.4});
  io.observe(box);
})();
