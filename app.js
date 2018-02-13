const express = require("express"),
    app = express(),
    path = require("path");


var sass = require('node-sass');
sass.render({
  file: "style.scss",
}, function(err, result) { /*...*/ });

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'views')));




// app.use((req,res,next)=>{
//     mongo.connect(dbUrl, function(err,db){
//         var collection = db.collection("menu");
//         collection.find().toArray().then((data)=>{
//             // console.log(menu);
//             res.locals.menu = data;
//             var collection = db.collection("footer");
//             collection.find().toArray().then((data)=>{
//                 // console.log(footer);
//                 res.locals.footer = data;
//                 db.close();
//                 next();
//             });
//         });  
//     });
// });

app.set('view engine', 'pug')

app.get("/", function(req,res){
    res.redirect("/home");
})

app.get("/home", function(req,res){
    // console.log(res.locals);
    // mongo.connect(dbUrl, function(err,db){
    //     var collection = db.collection("mainPage");
    //     collection.find().toArray().then((data)=>{
    //         // console.log(menu);
    //         db.close();
    //         // console.log(data);
    //         if(req.session.user) res.render("index",{mainPage:data}) 
    //         else res.render("index",{mainPage:data});
    //     });  
    // });
    res.render("index");
});

app.get("/:art", (req,res)=>{
    res.render(req.params.art);
});

app.get("/edit",(req,res)=>{
    mongo.connect(dbUrl, function(err,db){
        var collection = db.collection("mainPage");
        collection.find().toArray().then((data)=>{
            // console.log(menu);
            db.close();
            // console.log(data);
            if(req.session.user) res.render("edit",{mainPage:data}) 
            else res.redirect("/login");
        });
    });
});

// app.post("/edit",(req,res)=>{
//     if(req.body._method === "PUT"){
//         mongo.connect(dbUrl, function(err,db){
//             var count = 0;
//             var collection = db.collection("mainPage");
//             req.body.section_id.forEach(function(id_from_page) {
//                 var page_header = req.body.section_header[count];
//                 var page_css = req.body.section_css[count];
//                 if(page_css == "review-section"){
//                     var r_count = 0;
//                     var reviews = [];
//                     req.body.review_header.forEach((name)=>{
//                        reviews.push({
//                         "img": req.body.review_img[r_count],
//                         "name": req.body.review_header[r_count],
//                         "stars": parseInt(req.body.review_stars[r_count]),
//                         "text": req.body.review_text[r_count]
//                        });
//                        r_count++
//                     });
//                     collection.updateOne({
//                         "_id": id_from_page
//                     },
//                     {
//                         $set: {
//                             "name": page_header,
//                             "css": page_css,
//                             "content": {
//                                 reviews:reviews
//                             }
//                         }
//                     }).then((data)=>{
//                         count++
//                     }).catch((e)=>{
//                         console.log(e);
//                     });
//                 } else {
//                     var css = req.body.section_css[count];
//                     var desc = req.body.section_text[count];
//                     var img = req.body.section_img[count];
//                     var button_type = req.body.section_button_type[count];
//                     var button_link = req.body.section_button_link[count];
//                     collection.updateOne({
//                         "_id": id_from_page
//                     },
//                     {
//                         $set: {
//                             "name": page_header,
//                             "css": css,
//                             "content": {
//                                 "header": page_header,
//                                 "desc": desc,
//                                 "img":img,
//                                 "button": {
//                                     "exists": true,
//                                     "type": button_type,
//                                     "link": button_link
//                                 }
//                             }
//                         }
//                     }).then((data)=>{
//                         count++
//                     }).catch((e)=>{
//                         console.log(e);
//                     });
//                 }
//             }, this);
//             db.close();
//             res.redirect("/home");
//         });
        
//     } else if(req.body._method === "DELETE"){
//         mongo.connect(dbUrl, function(err,db){
//             var collection = db.collection("mainPage");
//             collection.remove({name: req.body.item_to_delete}).then((data)=>{
//                 console.log(data);
//                 res.redirect("/home");
//             })
//         });
//     } else if(req.body._method === "POST"){
//         console.log(req.body);
//         mongo.connect(dbUrl, function(err,db){
//             var collection = db.collection("mainPage");
//             var page_css = req.body.section_css;
//             var page_header = req.body.section_header;
//             if(page_css == "review-section"){
//                 var r_count = 0;
//                 var reviews = [];
//                 req.body.review_header.forEach((name)=>{
//                     reviews.push({
//                         "img": req.body.review_img[r_count],
//                         "name": req.body.review_header[r_count],
//                         "stars": parseInt(req.body.review_stars[r_count]),
//                         "text": req.body.review_text[r_count]
//                     });
//                     r_count++
//                 });
//                 collection.insertOne(
//                 {
//                     "name": page_header,
//                     "css": page_css,
//                     "content": {
//                         reviews:reviews
//                     }
//                 }).then((data)=>{
//                     res.redirect("/home");
//                 }).catch((e)=>{
//                     console.log(e);
//                 });
//             } else {
//                 var css = req.body.section_css[count];
//                 var desc = req.body.section_text[count];
//                 var img = req.body.section_img[count];
//                 var button_type = req.body.section_button_type[count];
//                 var button_link = req.body.section_button_link[count];
//                 collection.insertOne({
//                     "name": page_header,
//                     "css": css,
//                     "content": {
//                         "header": page_header,
//                         "desc": desc,
//                         "img":img,
//                         "button": {
//                             "exists": true,
//                             "type": button_type,
//                             "link": button_link
//                         }
//                     }
//                 }).then((data)=>{
//                     res.redirect("/home");
//                 }).catch((e)=>{
//                     console.log(e);
//                 });
//             }
//         });
            
//     }
    
// })

// app.get("/login", function(req,res){
//     console.log(req.session.user);
//     if(req.session.user) res.render("login",{user:req.session.user}) 
//     else res.render("login")
    
// });

// app.post("/login",[
//     check("username")
//         .trim(),
//     check("password")
//         .trim()
//         .escape(),
//     sanitize().trim().escape(),
// ], function(req,res){
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     return res.status(422).json({ errors: errors.mapped() });
//     // };
//     if(req.session.user){
//         res.redirect("index",{error:"already logged in!"});
//     }
//     const name = req.body.username;
//     const pass = req.body.password;

//     mongo.connect(dbUrl, function(err, db) {
//         var collection = db.collection("auth");
//         collection.findOne({"name":name}, function(err, data){
//             if(!data) console.log("bad username!");
//             else{
//                 bcrypt.compare(pass, data.pass, function(err, response) {
//                     if(!response) console.log("bad password!");
//                     else{
//                         //logged in!
//                         req.session.user = data;
//                         console.log(req.session);
//                         db.close();
//                         res.redirect("/");
//                         // res.render("other", {user: req.session.user});
//                     }
//                 });
//             }
//         })
//     });
    
// });
// app.get('/logout', function(req, res){
//     req.session.destroy(function(){
//        console.log("user logged out.")
//     });
//     res.redirect('/login');
//  });



// app.get("/kek", function(req, res){
//     console.log(req.session.user);
//     if(req.session.user){
//         res.render("kek",{user:req.session.user});
//     }
//     else{
//         res.render("kek")
//     }
// });

// app.get("/:art", function(req, res){
//     mongo.connect(dbUrl, function(err, db) {
//         var collection = db.collection("otherPage");
//         var name = req.params.art;
//         collection.findOne({"page_name":name}, function(err, data){
//             if(!data) res.send("theres no article like this!");
//             else{
//                 console.log(data.content);
//                 res.render("other",{page:data});
//                 db.close();
//             }
//         })
//     });
// });

// app.get("/:nazov-clanku/edit", function(req,res){
//     res.render("edit");
// })

// app.put("/:nazov-clanku", function(req, res){
//     mongo.connect(dbUrl, function(err, db) {
//         var collection = db.collection("articles");
//         var name = req.params.name;
//         collection.findOne({"name":name}, function(err, data){
//             if(!data) console.log("theres no article like this!");
//             else{
//                 res.render("other",{data});
//             }
//             db.close();
//         })
//     });
// });

// app.get("/new", function(req, res){
//    res.render("new");
// });

// app.post("/new", function(req, res){
//     mongo.connect(dbUrl, function(err, db) {
//         var collection = db.collection("articles");
//         collection.insertOne({"name":name}, function(err, data){
//             if(err) throw err;
//             res.render("other",{data});
//             db.close();
//         })
//     });
// })

// app.delete("/:nazov-clanku",function(req,res){
//     mongo.connect(dbUrl, function(err, db) {
//         var collection = db.collection("articles");
//         var name = req.params.name;
//         collection.deleteOne({"name":name}, function(err, data){
//             if(err) throw err;
//             res.render("other",{data});
//             db.close();
//         })
//     });
// })



app.listen(process.env.PORT || 1080, function(){
    console.log("Listening on port 1080!");
});

// mongo.connect(dbUrl, function(err, db) {
//     bcrypt.hash("kikoamaros123", saltRounds, function(err, hash) {
//         // Store hash in your password DB.
//         var collection = db.collection("auth");
//         collection.insert({"name":"admin","pass":hash},function(err, data){
//             if(err) throw err;
//             console.log(data);
                // db.close();
//         })
//     });
// });

// mongo.connect(dbUrl, function(err, db) {
//     var footer = [
//     {
//         "name":"Kde nás nájdete?",
//         "content": {
//             "google-maps-url":'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.309475028372!2d17.476507715900787!3d48.18138845608711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b7d522c98e9b9%3A0x8b8b6709abac3602!2zSHJ1YsOhIEJvcsWhYSAxODIsIDkyNSAyMyBIcnViw6EgQm9yxaFh!5e0!3m2!1ssk!2ssk!4v1504255161884',
//             "nazov-firmy":"Temptec s.r.o",
//             "adresa":"č.d. 182, Hrubá Borša, 925 23 Jelka"
//         }
//     },
//     {
//         "name":"Info o predajni",
//         "content": {
//             "ICO":"47067021",
//             "DIC":"2023746296",
//             "Prevádzková doba": "Pondelok - piatok: 7:00 - 18:30",
//             "telefon": "+421 911 753 646"
//         }
//     },
//     {
//         "name":"social media",
//         "content": {
//             "mail": "pcbastlersk@gmail.com",
//             "facebook": "http://facebook.com/PCBastlerSK/"
//         }
//     }];

//     var menu = [
//         {
//             "name":"Hlavná Stránka",
//             "link": "/"
//         },
//         {
//             "name": "PC na mieru",
//             "link": "/pc-na-mieru"
//         },
//         {
//             "name":"Delid CPU",
//             "link": "/delid-cpu"
//         },
//         {
//             "name":"Doprava a Platba",
//             "link": "/doprava-a-platba"
//         },
//         {
//             "name":"Kontakt",
//             "link": "/kontakt"
//         }
//     ];

// mongo.connect(dbUrl, function(err, db) {
//     var mainPage = [
//         {
//             "name": "PC Bastler",
//             "css": "main-section",
//             "content": {
//                 "header": "PC Bastler",
//                 "desc": "Zložíme PC presne podľa Vašich potrieb a očakávaní. Skúsenosti a kvalita za tu najvýhodnejšiu cenu.",
//                     "img":"https://static.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg",
//                 "button": {
//                     "exists": true,
//                     "type": "arrow-down",
//                     "text": "Prečo práve my?",
//                     "link": ""
//                 }
//             }
//         },
//         {
//             "name": "PC zostavy na mieru",
//             "css": "side-section",
//             "content": {
//                 "header": "PC zostavy na mieru",
//                 "desc": "Každý potrebuje PC na to svoje. Vašnivý hráč, ktorý si chce vychutnať tie najlepšie detaily? Práca v kancelárii, Microsoft Office, tlač dokumentov? Dizajn, grafika, strih videa či úprava hudby? Zložíme PC presne podľa Vašich potrieb a očakávaní!",
//                 "img":"https://static.pexels.com/photos/259803/pexels-photo-259803.jpeg",
//                 "button": {
//                     "exists": false
//                 }
//             }
//         },
//         {
//             "name": "Servis a poradenstvo",
//             "css": "side-section",
//             "content":{
//                 "header": "Servis a poradenstvo",
//                 "desc": "Pomalý a prehrievajúci sa PC, či nefunkčný displej na notebooku? Zavírený počítač či množstvo nepotrebných programov? Inštalácia operačného systému alebo potrebujete pomôcť s prvým spustením počítača? Ochotne Vám pomôžeme!",
//                 "img":"https://static.pexels.com/photos/263370/pexels-photo-263370.jpeg",
//                 "button": {
//                     "exists": false
//                 }
//             }
//         },
//         {
//             "name": "Delid CPU",
//             "css": "side-section",
//             "content": {
//                 "header": "Delid CPU",
//                 "desc": "Delid je slúži hlavne na zníženie teplôt, ktoré môžu vo výsledku byť až o 20°C nižšie! Svoje uplatnenie má hlavne pri taktovaní a pre dosiahnutie tichšieho chodu PC. Pri objednávke PC na mieru s procesorom Intel rady \"K\" dostanete 20% zľavu na delid \"Profi\".",
//                 "img":"https://static.pexels.com/photos/40879/cpu-processor-macro-pen-40879.jpeg",
//                 "button": {
//                     "exists": true,
//                     "type": "bullseye",
//                     "text": "Vediet viac",
//                     "link": "/delid-cpu"
//                 }
//             }
//         },
//         {
//             "name": "Recenzie",
//             "css": "review-section",
//             "content": {
//                 "reviews": [
//                     {
//                         "img": "http://files.temptec.webnode.sk/200000035-1b2541c1fe/200/19702074_1814144758914588_8940003566711964845_n.jpg",
//                         "name": "Bender Blahovsky",
//                         "stars": 5,
//                         "text": "Maximálna spokojnosť."
//                     },
//                     {
//                         "img": "http://files.temptec.webnode.sk/200000034-9871e996c2/200/19275170_1215204021940025_8500336787225476774_n.jpg",
//                         "name": "Lukáš Elner",
//                         "stars": 5,
//                         "text": "Super dohoda, prijemný pán, 100% doporučuji."
//                     }
//                 ]
//             }
//         }
//     ]
//     var collection = db.collection("mainPage");
//     collection.drop(()=>{
//         collection.insertMany(mainPage,(err,data) =>{
//             console.log(data);
//             db.close();
//         });
//     })
// });

// mongo.connect(dbUrl, function(err, db) {
//     var otherPage = {
//         page_name: "delid-cpu",
//         "content": [
//             {
//                 "name": "Čo je to delid CPU a na čo slúži?",
//                 "css": "doubleContent-section",
//                 "content": {
//                     "img":"https://static.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg",
//                     "sections": [
//                         {
//                             "header": "",
//                             "img": "http://files.temptec.webnode.sk/200000025-82cdf83c8a/700/32969531363_e2746b217a_k.jpg",
//                             "text": "V skratke jedná sa o manuálne odstránenie (odkrytovanie) tzv. IHS ( Integrated Heat Spreader), ktorý odvádza teplo do samotného CPU chladiča. Priamo na čip nanesie pasta na báze tekutého kovu, ktoré majú najlepšie výsledky (prípadne inú pastu, ktorú si zákazník vyberie). Následne pomocou špeciálneho lepidla upevníme IHS na PCB (PCB (printed‑circuit board) → karta procesora)."
//                         },
//                         {
//                             "header": "",
//                             "img": "http://files.temptec.webnode.sk/200000026-be605bf58f/450/maxresdefault.jpg",
//                             "text": "Pre dosiahnutie čo najlepších výsledkov používame produkty firmy Thermal Grizzly. Pod IHS priamo na čip aplikujeme teplovodivú pastu na báze tekutého kovu Thermal Grizzly Conductonaut pre jej vysokú tepelnú vodivosť. Na IHS aplikujeme teplovodivú pastu Thermal Grizzly Kryonaut."
//                         }
//                     ]
//                 }
//             },
//             {
//                 "name": "Ako prebieha delid",
//                 "css": "media-section",
//                 "content": {
//                     "media": "https://www.youtube.com/watch?v=AfVa5qaKSe4"
//                 }
//             },
//             {
//                 "name": "Ponuka",
//                 "css": "table-section",
//                 "content": {
//                     "tables": [
//                         {
//                             "type": "th",
//                             "table": [
//                                 "Delid",
//                                 "Basic",
//                                 "Profi"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Odstránenie IHS od PCB",
//                                 "Áno",
//                                 "Áno"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Vyčistenie Isopropyl alkoholom",
//                                 "Áno",
//                                 "Áno"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Aplikácia Thermal Grizzly Conductonaut",
//                                 "Nie",
//                                 "Áno"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Lepenie IHS na PCB",
//                                 "Nie",
//                                 "Áno"
//                             ]
//                         },
//                         {
//                             "type": "th",
//                             "table": [
//                                 "Cena:",
//                                 "15€",
//                                 "35€"
//                             ]
//                         }
//                     ]
//                 }
//             },
//             {
//                 "name": "Delid ponúkame pre procesory so socketom:",
//                 "css": "multiParagraph-section",
//                 "content":{
//                     "items": [
//                         "1150 (Intel) - celý zoznam podporovaných procesorov (Haswell).",
//                         "1155 (Intel) - celý zoznam podporovaných procesorov (Sandy Bridge a Ivy Bridge).",
//                         "1151 (Intel) - celý zoznam podporovaných procesorov (Skylake, Kaby Lake a Coffee Lake)."
//                     ]
//                 }
//             },
//             {
//                 "name": "Upozornenie",
//                 "css": "multiParagraph-section",
//                 "content":{
//                     "items": [
//                         "Delid 'Basic' je možný len pre procesory so socketom 1150, 1155 a 1151. Delid 'Profi' je možný len pre procesory so socketom 1150 a 1151.",
//                         "Procesor, ktorý prejde delidom 'Basic' nie je funkčný a je potrebné ho ešte následne zlepiť! Tento úkon si vyžaduje odbornú manipuláciu s procesorom!",
//                         "Úkonom odstránenia IHS sa stráca záruka na CPU tzn. nie je možné ho reklamovať . Každé CPU, ktorému sa odstráni IHS je testované na funkčnosť..",
//                         "V prípade, že CPU poškodíme a znefunkčníme, zákazníkovi dodávame nové."
//                     ]
//                 }
//             }
//         ]
//     }
// });

        
//     var collection = db.collection("otherPage");
//     collection.insert(otherPage,(err,data) =>{
//         console.log(data);
//         db.close();
//     });
// });

//     var otherPage = {
//         page_name: "pc-na-mieru",
//         "content": [
//             {
//                 "name": "3 Jednoduché kroky",
//                 "css": "doubleHeader-setion",
//                 "content": {
//                     "second_header": "Ku Vášmu vysnenému PC",
//                     "img":"https://static.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg",
//                     "button": {
//                         "exists": true,
//                         "type": "arrow-down",
//                         "text": "Pozrieť",
//                         "link": ""
//                     }
//                 }
//             },
//             {
//                 "name": "Požiadavka zákazníka a návrh zostavy",
//                 "css": "side-section",
//                 "content": {
//                     "header": "Požiadavka zákazníka a návrh zostavy",
//                     "desc": "Vaše požiadavky radi prediskutujeme telefonicky, prostredníctvom e-mailu či Facebooku. Taktiež osobne v našej kancelárii alebo po dohode kdekoľvek v okrese Senec a Bratislava. Po vytvorení návrhu zostavy Vám ho predložíme na schválenie.",
//                     "img":"",
//                     "button": {
//                         "exists": false
//                     }
//                 }
//             },
//             {
//                 "name": "Realizácia Projektu",
//                 "css": "side-section",
//                 "content":{
//                     "header": "Realizácia Projektu",
//                     "desc": "Po schválení návrhu nasleduje objednávka a kompletizácia zostavy. Všetky komponenty sú starostlivo skontrolované a namontované. Na procesor aplikujeme prvotriednu teplovodivú pastu pre dosiahnutie čo najnižších teplôt. Taktiež je možný aj tzv. 'delid' a následný 'relid' procesoru. Po osadení všetkých komponentov sa dbá na inštaláciu a vedenie kabeláže, tak aby nebránila prietoku vzduchu a zároveň vyzerala esteticky.",
//                     "img":"",
//                     "button": {
//                         "exists": false
//                     }
//                 }
//             },
//             {
//                 "name": "Prvé spustenie a inštalácia",
//                 "css": "main-section",
//                 "content": {
//                     "header": "Prvé spustenie a inštalácia",
//                     "desc": "Nasleduje spustenie zostavy a overenie jej správneho fungovania. Ďalej sa aktualizuje rozhranie BIOS na najnovšiu verziu. Ak si zákaznik spolu so zostavol zakúpil OS alebo dodá svoj už vlastnený, tak ho nainštaluje spolu s najnovšími ovládačmi zariadení, ktoré sú v zostave. Taktiež je možné nainštalovať programy ako sú internetové prehliadače, - Mozilla Firefox, Google Chrome a pod. - programy na komunikáciu, - Skype, TeamSpeak 3, Discord. Na požiadanie zákazníka môžeme nainštalovať aj iné programy.",
//                     "img":"https://static.pexels.com/photos/40879/cpu-processor-macro-pen-40879.jpeg",
//                     "button": {
//                         "exists": true,
//                         "type": "bullseye",
//                         "text": "Vediet viac",
//                         "link": "/delid-cpu"
//                     }
//                 }
//             },
//             {
//                 "name": "Prečo práve my?",
//                 "css": "tripleItem-section",
//                 "content": {
//                     "items": [
//                         {
//                             "img": "http://files.temptec.webnode.sk/200000035-1b2541c1fe/200/19702074_1814144758914588_8940003566711964845_n.jpg",
//                             "text": "Naše zostavy skladáme tak, aby dosiahli vysoký výkon a zároveň najvyššiu kvalitu za Vaše peniaze."
//                         },
//                         {
//                             "img": "http://files.temptec.webnode.sk/200000034-9871e996c2/200/19275170_1215204021940025_8500336787225476774_n.jpg",
//                             "text": "Zostavy vždy pred odovdzaním riadne preverujeme a testujeme."
//                         },
//                         {
//                             "img": "http://files.temptec.webnode.sk/200000034-9871e996c2/200/19275170_1215204021940025_8500336787225476774_n.jpg",
//                             "text": "Vzdelávame sa, sledujeme trendy a trh aby sme Vám vždy to najlepšie čo PC svet ponúka."
//                         }
//                     ]
//                 }
//             },
//             {
//                 "name": "Dodatočné služby",
//                 "css": "doubleContent-section",
//                 "content": {
//                     "img":"https://static.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-159731.jpeg",
//                     "sections": [
//                         {
//                             "header": "Pretaktovanie a odladenie",
//                             "img": "",
//                             "text": "Ak is zákazník želá, vybrané komponenty pretaktujeme na najvyšší možný výkon pri zachovaní nízkych teplôt a efektivity zostavy. Následne pretaktovanie testujeme dôslednými záťažovými testami. Samozrejmosťou je nastavenie otáčok ventilátorov, tak aby dosiahli čo nízku hlučnosť."
//                         },
//                         {
//                             "header": "Delid CPU",
//                             "img": "",
//                             "text": "V prípade, že v zostave máte procesor rady 'K' od Intelu (napr. Intel Core i7-6700K), dostanete zľavu 30% na delid 'Profi'. Viac info tu: Delid CPU"
//                         }
//                     ]
//                 }
//             },
//             {
//                 "name": "Ukážka stavby",
//                 "css": "media-section",
//                 "content": {
//                     "media": "//www.youtube.com/embed/r3Bz6SosiJU?wmode=opaque"
//                 }
//             }
//         ]
//     }

// mongo.connect(dbUrl, function(err, db) {
//     var otherPage = {
//         page_name: "doprava-a-platba",
//         "content": [
//             {
//                 "name": "Platba",
//                 "css": "header-section"
//             },
//             {
//                 "name": "PC Na Mieru",
//                 "css": "multiParagraph-section",
//                 "content":{
//                     "items": [
//                         "Platba je možná len vopred, nakoľko sa jedná o jedinečné zostavy na mieru, ktoré by inak boli nepredajné. Možnosti platby za zostavy sú následovné:",
//                         "Bankový prevod na účet firmy",
//                         "Vklad na účet firmy (možnosť aj osobného stretnutia)"
//                     ]
//                 }
//             },
//             {
//                 "name": "Služby a servis",
//                 "css": "multiParagraph-section",
//                 "content":{
//                     "items": [
//                         "Platba je možná len vopred, okrem prípadov kedy sa dá uplatniť dobierka, napr. Delid CPU. Možnosti platby za zostavy sú následovné:",
//                         "Bankový prevod na účet firmy",
//                         "Vklad na účet firmy (možnosť aj osobného stretnutia)",
//                         "Dobierka"
//                     ]
//                 }
//             },
//             {
//                 "name": "Doprava",
//                 "css": "table-section",
//                 "content": {
//                     "tables": [
//                         {
//                             "type": "th",
//                             "table": [
//                                 "Spôsob dopravy:",
//                                 "Cena:"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Osobný odber v sídle firmy",
//                                 "Zdarma"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Osobný dovoz zo strany firmy:",
//                                 "Pre SC a BA Zdarma, ostatné dohodou"
//                             ]
//                         },
//                         {
//                             "type": "td",
//                             "table": [
//                                 "Kuriér",
//                                 "od 5€ - cena závisí od hmotnosti"
//                             ]
//                         }
//                     ]
//                 }
//             },
//             {
//                 "name": "Pri objednávke nad 2000€ doprava zdarma.",
//                 "css": "paragraph-section"
//             }
//         ]
//     }

        
//     var collection = db.collection("otherPage");
//     collection.insert(otherPage,(err,data) =>{
//         console.log(data);
//         db.close();
//     });
// });