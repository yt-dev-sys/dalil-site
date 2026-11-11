/* ====== EDIT HERE ======
   downloadUrl : release page, used by the header and footer buttons.
                 e.g. https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/V1.0.0
   dl64 / dl32 : direct .exe files (no GitHub page in between).
                 To ship a new build, upload the new exes under the SAME filenames
                 in the same release; these two URLs then never change.
   seatsLeft   : seats remaining in the promo. Change this number any time.
   promoTotal  : total promo seats.
   videoId     : YouTube video id (the part after youtu.be/). */
var CONFIG={
  downloadUrl:"https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/V1.0.0",
  dl64:"https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-64bit.exe",
  dl32:"https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-32bit.exe",
  promoTotal:50,
  seatsLeft:50,
  videoId:"apQj7ovwVSE"
};
var T={
ar:{vid_t:"شاهد كيف تثبّت دليل وتستعمله",vid_play:"تشغيل الفيديو",vid_yt:"شاهده على يوتيوب",promo_cta:"كيف أصبح مستخدمًا نشطًا؟",promo_live:"العرض مفتوح",promo_t:"150 درهمًا في السنة بدل 300 — لأول 50 مستخدمًا نشطًا",promo_d:"العرض للمستخدمين النشطين فقط: ثبّت دليل، فهرس مجلدًا واحدًا على الأقل، وابحث عن أول كلمة خلال التجربة. التسجيل وحده لا يكفي.",promo_reg:"للتسجيل، تواصل معي:",seats_l:"مقعدًا مؤسسًا متبقيًا",promo_full:"اكتملت المقاعد",q0:"كيف أستفيد من 150 درهمًا؟",a0:"1) حمّل النسخة التجريبية وثبّتها. 2) اختر مجلدًا وخلّي دليل يفهرسه. 3) ابحث عن أول كلمة. 4) صوّر شاشة النتائج وأرسلها على واتساب مع اسمك ومدينتك ورقم هاتفك. أو أرسل الطلب من زر «طلب رخصة». أول 50 محاميًا يكملون هذه الخطوات يحتفظون بسعر 150 درهمًا في السنة مدى الحياة. التسجيل وحده لا يكفي.",nav1:"المزايا",nav2:"كيف يعمل",nav3:"أسئلة شائعة",dl:"تحميل",dl2:"حمّل النسخة التجريبية",dl32:"نسخة 32 بت",dlhint:"كل الملفات والتحقق من SHA-256",
badge:"تجربة مجانية 14 يومًا",
h1:"ابحث عن أي كلمة داخل كل ملفاتك.",
lead:"دليل يفهرس ملفات Word وExcel وPDF على حاسوبك، فتكتب الكلمة وتظهر لك كل الملفات التي تحتوي عليها في ثوانٍ، بدون إنترنت. مصمّم للمحامين ومكاتب المحاماة.",
meta:"ويندوز 10/11 · 64 و32 بت · بلا إنترنت · 150 درهمًا لأول 50 مستخدمًا نشطًا",
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
q1:"ما السعر؟",a1:"التجربة مجانية 14 يومًا. السعر العادي 300 درهم في السنة، وأول 50 مستخدمًا نشطًا عندهم 150 درهمًا في السنة، وهذا السعر يبقى معهم مدى الحياة ما داموا يجددون بلا انقطاع. الدفع بتحويل بنكي، وتوصلك الرخصة من بعد الأداء.",
q2:"ظهر تحذير من ويندوز عند التثبيت، هل هذا طبيعي؟",a2:"نعم. التطبيق غير موقّع رقميًا بعد، لذلك يعرض SmartScreen تحذيرًا. اضغط «مزيد من المعلومات» ثم «تشغيل على أي حال».",
q3:"هل يقرأ الملفات الممسوحة؟",a3:"بأفضل جهد، وبشرط تثبيت حزمة اللغة العربية في ويندوز. الملفات المحمية بكلمة مرور يُبحث عنها باسمها فقط.",
q4:"هل يعمل على ماك أو الهاتف؟",a4:"لا، دليل لويندوز فقط حاليًا. لا يدعم PowerPoint.",
q5:"هل يُرسل ملفاتي إلى الإنترنت؟",a5:"لا. الفهرس محلي بالكامل، والإنترنت يُستعمل فقط للتحقق من التحديثات.",
q6:"ماذا يحدث بعد 14 يومًا؟",a6:"يتوقف البرنامج حتى تجدد الرخصة: 150 درهمًا في السنة إذا كنت من أول 50 مستخدمًا نشطًا، أو 300 درهمًا. ملفاتك لا تُحذف ولا تتبدل.",
modalTitle:"اختر نسخة التثبيت",modalDesc:"اختر النسخة المناسبة لنظام ويندوز لديك:",dl64:"نسخة 64 بت",dl32:"نسخة 32 بت",modalNote:"معظم الأجهزة الحديثة تعمل بنسخة 64 بت.",register:"تسجيل",regForm:"نموذج التسجيل",
fin:"ثبّت دليل اليوم",finp:"حمّله، فهرس مجلدًا، وابحث عن أول كلمة. وإذا احتجت مساعدة، راسلني على واتساب.",
ftc:"تواصل مع المطوّر",rights:"جميع الحقوق محفوظة",made:"صُنع في خريبكة، المغرب",licBtn:"طلب رخصة",licTitle:"طلب رخصة",licDesc:"املأ المعلومات وأرفق صورة لشاشة نتائج البحث. ستصلك الرخصة بعد التحقق.",fName:"الاسم الكامل *",fCity:"المدينة *",fPhone:"الهاتف *",fEmail:"البريد الإلكتروني (اختياري)",fMachine:"رمز الجهاز إن ظهر في البرنامج (اختياري)",fShot:"صورة لشاشة نتائج البحث *",licNote:"تُرسل الصورة فقط للتحقق من أنك مستخدم نشط. لا تُرسل أي ملفات أخرى.",licSend:"إرسال الطلب",licSending:"جارٍ الإرسال…",licOk:"تم استلام طلبك. سأراسلك بعد التحقق.",licErr:"تعذّر الإرسال. حاول مرة أخرى أو راسلني على واتساب.",licSize:"الصورة كبيرة جدًا (الحد 10 ميغابايت).",licType:"اختر ملف صورة."},
fr:{vid_t:"Voyez comment installer et utiliser Dalil",vid_play:"Lire la vidéo",vid_yt:"Regarder sur YouTube",promo_cta:"Comment devenir utilisateur actif ?",promo_live:"Offre ouverte",promo_t:"150 DH/an au lieu de 300 — pour les 50 premiers utilisateurs actifs",promo_d:"Offre réservée aux utilisateurs actifs : installez Dalil, indexez au moins un dossier et lancez une première recherche pendant l’essai. Une simple inscription ne suffit pas.",promo_reg:"Pour vous inscrire, contactez-moi :",seats_l:"places fondateur restantes",promo_full:"Toutes les places sont prises",q0:"Comment obtenir le tarif de 150 DH ?",a0:"1) Installez la bêta. 2) Indexez au moins un dossier. 3) Lancez une première recherche. 4) Envoyez une capture des résultats sur WhatsApp avec votre nom, votre ville et votre téléphone. Ou envoyez la demande via le bouton « Demander une licence ». Les 50 premiers avocats à le faire gardent 150 DH/an à vie. L’inscription seule ne suffit pas.",nav1:"Fonctionnalités",nav2:"Fonctionnement",nav3:"FAQ",dl:"Télécharger",dl2:"Télécharger la version bêta",dl32:"Version 32 bits",dlhint:"Tous les fichiers et vérification SHA-256",
badge:"Essai gratuit 14 jours",
h1:"Retrouvez n’importe quel mot dans tous vos fichiers.",
lead:"Dalil indexe vos documents Word, Excel et PDF. Tapez un mot et voyez en quelques secondes tous les fichiers qui le contiennent, sans connexion internet. Conçu pour les avocats et les cabinets.",
meta:"Windows 10/11 · 64 et 32 bits · hors ligne · 150 DH pour les 50 premiers utilisateurs actifs",
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
q1:"Combien ça coûte ?",a1:"L’essai est gratuit 14 jours. Ensuite 300 DH/an, ou 150 DH/an pour les 50 premiers utilisateurs actifs, à vie tant qu’ils renouvellent sans interruption. Paiement par virement bancaire ; la licence est envoyée après réception.",
q2:"Windows affiche un avertissement à l’installation, est-ce normal ?",a2:"Oui. L’application n’est pas encore signée, donc SmartScreen avertit. Cliquez sur « Informations complémentaires » puis « Exécuter quand même ».",
q3:"Lit-il les PDF numérisés ?",a3:"Au mieux, à condition d’installer le pack de langue arabe de Windows. Les fichiers protégés par mot de passe sont trouvés par leur nom seulement.",
q4:"Existe-t-il sur Mac ou mobile ?",a4:"Non, Dalil fonctionne uniquement sous Windows pour l’instant. PowerPoint n’est pas pris en charge.",
q5:"Mes fichiers sont-ils envoyés sur internet ?",a5:"Non. L’index est entièrement local. Internet sert uniquement à vérifier les mises à jour.",
q6:"Que se passe-t-il après les 14 jours ?",a6:"Le logiciel s’arrête jusqu’au renouvellement : 150 DH/an pour les 50 premiers utilisateurs actifs, sinon 300 DH/an. Vos fichiers ne sont ni supprimés ni modifiés.",
modalTitle:"Choisir la version d'installation",modalDesc:"Choisissez la version adaptée à votre Windows :",dl64:"Version 64 bits",dl32:"Version 32 bits",modalNote:"La plupart des appareils modernes utilisent la version 64 bits.",register:"S'inscrire",regForm:"Formulaire d'inscription",
fin:"Installez Dalil aujourd’hui",finp:"Téléchargez, indexez un dossier, tapez votre premier mot. Besoin d’aide ? Écrivez-moi sur WhatsApp.",
ftc:"Contacter le développeur",rights:"Tous droits réservés",made:"Fait à Khouribga, Maroc",licBtn:"Demander une licence",licTitle:"Demande de licence",licDesc:"Remplissez les informations et joignez une capture des résultats de recherche. La licence vous sera envoyée après vérification.",fName:"Nom complet *",fCity:"Ville *",fPhone:"Téléphone *",fEmail:"E-mail (facultatif)",fMachine:"Code machine s'il est affiché (facultatif)",fShot:"Capture des résultats de recherche *",licNote:"La capture sert uniquement à vérifier que vous êtes un utilisateur actif. Aucun autre fichier n'est envoyé.",licSend:"Envoyer la demande",licSending:"Envoi…",licOk:"Demande reçue. Je vous répondrai après vérification.",licErr:"L'envoi a échoué. Réessayez ou contactez-moi sur WhatsApp.",licSize:"L'image est trop lourde (max 10 Mo).",licType:"Choisissez un fichier image."},
en:{vid_t:"Watch how to install and use Dalil",vid_play:"Play video",vid_yt:"Watch on YouTube",promo_cta:"How do I become an active user?",promo_live:"Offer open",promo_t:"150 MAD a year instead of 300 — for the first 50 active users",promo_d:"Active users only: install Dalil, index at least one folder and run your first search during the trial. Registering alone does not count.",promo_reg:"To register, contact me:",seats_l:"founding seats left",promo_full:"All seats are taken",q0:"How do I get the 150 MAD price?",a0:"1) Install the beta. 2) Index at least one folder. 3) Run your first search. 4) Send a screenshot of the results on WhatsApp with your name, city and phone. Or send the request with the “Request a license” button. The first 50 lawyers to do this keep 150 MAD/year for life. Registering alone does not count.",nav1:"Features",nav2:"How it works",nav3:"FAQ",dl:"Download",dl2:"Download Beta",dl32:"32-bit version",dlhint:"All files and SHA-256 check",
badge:"14-day free trial",
h1:"Find any word inside all your files.",
lead:"Dalil indexes your Word, Excel and PDF files. Type a word and see every file that contains it in seconds, with no internet connection. Built for lawyers and law firms.",
meta:"Windows 10/11 · 64-bit and 32-bit · offline · 150 MAD for the first 50 active users",
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
q1:"What does it cost?",a1:"The trial is free for 14 days. Then 300 MAD a year, or 150 MAD a year for the first 50 active users, for life as long as they renew without a break. Payment by bank transfer; the licence file is sent after payment.",
q2:"Windows showed a warning during install. Is that normal?",a2:"Yes. The app is not code-signed yet, so SmartScreen warns you. Click “More info”, then “Run anyway”.",
q3:"Does it read scanned PDFs?",a3:"On a best-effort basis, and only with the Windows Arabic language pack installed. Password-protected files are found by name only.",
q4:"Does it run on Mac or mobile?",a4:"No, Dalil is Windows-only for now. PowerPoint files are not supported.",
q5:"Are my files sent over the internet?",a5:"No. The index is fully local. The internet is used only to check for updates.",
q6:"What happens after 14 days?",a6:"The app stops until you renew: 150 MAD a year for the first 50 active users, otherwise 300 MAD. Your files are never deleted or modified.",
modalTitle:"Choose Install Version",modalDesc:"Choose the version for your Windows:",dl64:"64-bit Version",dl32:"32-bit Version",modalNote:"Most modern devices use the 64-bit version.",register:"Register",regForm:"Registration Form",
fin:"Install Dalil today",finp:"Download it, index a folder and type your first word. Need help? Message me on WhatsApp.",
ftc:"Contact the Dev",rights:"All rights reserved",made:"Made in Khouribga, Morocco",licBtn:"Request a license",licTitle:"License request",licDesc:"Fill in your details and attach a screenshot of your search results. Your license will be sent after verification.",fName:"Full name *",fCity:"City *",fPhone:"Phone *",fEmail:"Email (optional)",fMachine:"Machine code if shown (optional)",fShot:"Screenshot of search results *",licNote:"The screenshot is only used to verify that you are an active user. No other files are sent.",licSend:"Send request",licSending:"Sending…",licOk:"Request received. I will reply after verification.",licErr:"Could not send. Please try again or message me on WhatsApp.",licSize:"Image is too large (max 10 MB).",licType:"Choose an image file."}
};
var LANG="ar";
function tr(k){var d=T[LANG]||T.ar;return d[k]!==undefined?d[k]:(T.ar[k]||k)}
function setLang(l){
  var d=T[l];LANG=l;document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i]").forEach(function(e){var v=d[e.getAttribute("data-i")];if(v!==undefined)e.textContent=v});
  document.title=l==="ar"?"دليل — بحث داخل ملفاتك بالعربية، بدون إنترنت":l==="fr"?"Dalil — Recherche dans vos documents, hors ligne":"Dalil — Search your documents offline";
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
  try{localStorage.setItem("dalil-lang",l)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
var s="ar";try{s=localStorage.getItem("dalil-lang")||"ar"}catch(e){}
setLang(T[s]?s:"ar");

document.querySelectorAll("a[data-dl]").forEach(function(a){a.href=CONFIG.downloadUrl});
(function(){
  var m={dl64:CONFIG.dl64,dl32:CONFIG.dl32,dlall:CONFIG.downloadUrl};
  Object.keys(m).forEach(function(id){var e=document.getElementById(id);if(e&&m[id])e.href=m[id]});
})();
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
(function(){
  var v=document.getElementById("vid"),id=CONFIG.videoId;if(!v||!id)return;
  var base="https://i.ytimg.com/vi/"+id+"/";
  v.style.backgroundImage="url("+base+"mqdefault.jpg)";
  var im=new Image();im.onload=function(){if(im.naturalWidth>300)v.style.backgroundImage="url("+im.src+")"};
  im.src=base+"maxresdefault.jpg";
  document.getElementById("vyt").href="https://youtu.be/"+id;
  v.querySelector(".vplay").addEventListener("click",function(){
    var f=document.createElement("iframe");
    f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0";
    f.title="Dalil";
    f.allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen=true;
    v.innerHTML="";v.appendChild(f);
  });
})();
// Modal logic for beta install
(function(){
  var modal=document.getElementById("betaModal"),openBtn=document.getElementById("installBetaBtn"),closeBtn=document.getElementById("modalClose");
  if(!modal||!openBtn||!closeBtn)return;
  openBtn.addEventListener("click",function(){modal.hidden=false;document.body.style.overflow="hidden";closeBtn.focus()});
  function closeModal(){modal.hidden=true;document.body.style.overflow=""}
  closeBtn.addEventListener("click",closeModal);
  modal.addEventListener("click",function(e){if(e.target===modal)closeModal()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!modal.hidden)closeModal()});
})();
// Licence request modal + form
(function(){
  var modal=document.getElementById("licModal"),form=document.getElementById("licForm");
  if(!modal||!form)return;
  var status=document.getElementById("licStatus"),ts=document.getElementById("licTs"),closeBtn=document.getElementById("licClose");
  var submit=form.querySelector('button[type="submit"]');
  function setStatus(kind,msg){status.className="form-status"+(kind?" "+kind:"");status.textContent=msg||""}
  function open(){
    modal.hidden=false;document.body.style.overflow="hidden";
    ts.value=Date.now();setStatus("","");
    var first=form.querySelector('input[name="name"]');if(first)first.focus();
  }
  function close(){modal.hidden=true;document.body.style.overflow=""}
  var head=document.getElementById("licBtn");
  if(head)head.addEventListener("click",open);
  document.querySelectorAll("[data-lic]").forEach(function(b){b.addEventListener("click",open)});
  closeBtn.addEventListener("click",close);
  modal.addEventListener("click",function(e){if(e.target===modal)close()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!modal.hidden)close()});

  function shrink(file){
    return new Promise(function(resolve){
      if(!file||!/^image\//.test(file.type)||file.size<700*1024)return resolve(file);
      var url=URL.createObjectURL(file),img=new Image();
      img.onload=function(){
        try{
          var max=1600,w=img.naturalWidth||img.width,h=img.naturalHeight||img.height;
          if(Math.max(w,h)>max){var r=max/Math.max(w,h);w=Math.round(w*r);h=Math.round(h*r)}
          var c=document.createElement("canvas");c.width=w;c.height=h;
          var ctx=c.getContext("2d");ctx.fillStyle="#fff";ctx.fillRect(0,0,w,h);ctx.drawImage(img,0,0,w,h);
          c.toBlob(function(b){
            URL.revokeObjectURL(url);
            if(!b||b.size>=file.size)return resolve(file);
            resolve(new File([b],"screenshot.jpg",{type:"image/jpeg"}));
          },"image/jpeg",.82);
        }catch(err){URL.revokeObjectURL(url);resolve(file)}
      };
      img.onerror=function(){URL.revokeObjectURL(url);resolve(file)};
      img.src=url;
    });
  }

  form.addEventListener("submit",function(e){
    e.preventDefault();
    var file=form.querySelector('input[name="screenshot"]').files[0];
    if(file&&!/^image\//.test(file.type)){setStatus("err",tr("licType"));return}
    if(file&&file.size>10*1024*1024){setStatus("err",tr("licSize"));return}
    if(!form.checkValidity()){form.reportValidity();return}
    submit.disabled=true;setStatus("",tr("licSending"));
    shrink(file).then(function(out){
      if(out&&out.size>6*1024*1024)throw new Error("too_large");
      var fd=new FormData(form);
      if(out&&out!==file){fd.delete("screenshot");fd.append("screenshot",out)}
      return fetch(form.action,{method:"POST",body:fd});
    }).then(function(r){
      return r.json().catch(function(){return {}}).then(function(d){
        if(!r.ok||!d.ok){
          var err=new Error(d.error||"failed");
          err.code=d.error;
          throw err;
        }
        setStatus("ok",tr("licOk"));
        form.reset();ts.value=Date.now();
      });
    }).catch(function(err){
      if(err&&err.code==="too_large"||err&&err.message==="too_large")setStatus("err",tr("licSize"));
      else setStatus("err",tr("licErr"));
      console.error(err);
    }).then(function(){submit.disabled=false});
  });
})();
