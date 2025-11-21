import { FoodList } from "./types";

const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export const foodLists: FoodList[] = [
    {
    id: "about-me",
    slug: "about-me",
    emoji: "👧",
    title: "about me",
    category: "pinned",
    created_at: today,
    content: `hey! i'm elena. thanks for visiting my fun collection of lists!

**what is chompedup?**

* creative outlet for good food (check out [chompeddown](https://www.instagram.com/chompeddown), the villain alter ego)
* started during covid quarantine because i had too many pictures
* fun fact: started out as a book review account!
* [instagram](https://www.instagram.com/chompedup), [tiktok](https://www.tiktok.com/@chompedup)(~60K likes)
* website predecessor [notion page](https://elenaalimin.notion.site/Chomped-Up-16c7cf019680471c8885410d3bb04ceb?source=copy_link) 

**currently:**

* studying technology management at [columbia university](https://www.columbia.edu/) 
* exploring growth & product management roles in tech
* food-related content creation

**previously:**

* built agents & owned documentation for [salesforce design systems](https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2) as an [associate product manager intern](https://www.salesforce.com/company/careers/university/associate-program-manager/) 
* launched visa sponsorship / monetization features by [apm season](https://www.apmseason.com/) before they got acquired by [leland](https://www.joinleland.com/coach/elena-a-1) - which i now coach for
* interned at [pimco](https://www.pimco.com/us/en) and understood how mortgages were traded
* interned at [intudo](https://intudovc.com/manifesto/) and gained an understanding of indonesia’s startup scene
* improved customer-facing shipping fee estimates through excel data automation at my [shopee](https://shopee.com/) internship
* studied economics & entrepreneurship at [ucla](https://www.ucla.edu/), grew so much
* born and raised in jakarta, indonesia!




about this website: thank you and credits to [alana goyal](https://www.alanagoyal.com/notes/how-this-works) for open-sourcing this apple notes look`,
  },
  {
    id: "food-for-thought",
    slug: "food-for-thought",
    emoji: "📚",
    title: "food for thought",
    category: "pinned",
    created_at: today,
    content: `adding depth to an everyday experience

**things in the field i'm inspired by:**

* 📚 setting the table - danny meyer (union square group, eleven madison park, shake shack, the modern, etc.)
* 📹 tastefully yours - kdrama that's not that deep but i thought was fun to watch
* 🔊 acquired (trader joes episode) - podcast on how tj's became what it is today


**creators in the field i'm inspired by (to name a few by ig handles):**

* celineyrs
* tofueeats
* bagussoo
* ernst.zine
* kohki
* daiki.shino
* nytimestravel
* covacut
* lindayecookingtime
* we.are.ona
* laganalondon
* wuminations
* withbrandonn
* maristicreative
* jiro ono (chef)


**disclaimer**

thoughts are subjective, restaurants have off-days, and the opinion of some girl with a camera and extra time on her hands won't always represent the thought/care put into making the food reviewed. i have only the highest level of respect for those who choose food as their craft✌🏻`,
  },
  {
    id: "all-time-highlights",
    slug: "all-time-highlights",
    emoji: "⭐",
    title: "all-time highlights",
    category: "pinned",
    created_at: today,
    content: `fav collection of experiences

* studio bumi: indonesian communal dining, brooklyn
* published on main: one michelin star, vancouver
* han bat sul lung tang: homey food, los angeles
* tea at shiloh: interesting experience, los angeles
* kurasu menteng private session: got to speak with yozo utsuki, founder, jakarta`,
  },
  {
    id: "nyc-list",
    slug: "nyc-list",
    emoji: "🌃",
    title: "nyc list",
    category: "today",
    created_at: today,
    content: `2 years of grad school at columbia

[gmaps link](https://maps.app.goo.gl/r4yjaDWfs1REBXYx9) 


**must-eats:**

- [x] [bangkok supper club](https://www.google.com/maps/search/?api=1&query=bangkok+supper+club+new+york+city)  - pork jowl fried rice, pandan pudding (upscale thai)
- [x] [nubiani](https://www.google.com/maps/search/?api=1&query=nubiani+new+york+city)  - package for 3 (kbbq)
- [x] chinatown food crawl (bring cash) - [mei lai wah](https://www.google.com/maps/search/?api=1&query=mei+lai+wah+new+york+city), [wah fung](https://www.google.com/maps/search/?api=1&query=wah+fung+new+york+city), [wang lao ji museum](https://www.google.com/maps/search/?api=1&query=wang+lao+ji+museum+new+york+city)
- [x] [adel's famous halal food](https://www.google.com/maps/search/?api=1&query=adel%27s+famous+halal+food+new+york+city)  - use grubhub if you don't wanna wait
- [x] [prince street pizza](https://www.google.com/maps/search/?api=1&query=prince+street+pizza+new+york+city) - honey vodka slice 
- [x] [essa bagel](https://www.google.com/maps/search/?api=1&query=essa+bagel+new+york+city) - lox bagel
- [x] [caffe panna](https://www.google.com/maps/search/?api=1&query=caffe+panna+new+york+city) - ice cream that rotates flavors daily


**unique food (less generalist palette):**

- [x] [okdongsik](https://www.google.com/maps/search/?api=1&query=okdongsik+new+york+city) - mandu, gukbap (clean tasting)
- [x] [hungry thirsty](https://www.google.com/maps/search/?api=1&query=hungry+thirsty+nyc) - super spicy, but fire thai food
- [x] [shukette](https://www.google.com/maps/search/?api=1&query=shukette+new+york+city) - mixed reviews, i think one of the best meditteranean
- [x] [secchu yokota](https://www.google.com/maps/search/?api=1&query=secchu+yokota+new+york+city) - tempura omakase, amazing service
- [x] [dashi okume](https://www.google.com/maps/search/?api=1&query=dashi+okume+new+york+city) - if you've been to japan recently, skip
- [x] [madison fare](https://www.google.com/maps/search/?api=1&query=madison+fare+new+york+city)  / [butterfield market](https://www.google.com/maps/search/?api=1&query=butterfield+market+new+york+city)  - the latter is more creamy, upper east side yogurt
- [x] [paloma bakery](https://www.google.com/maps/search/?api=1&query=paloma+bakery+new+york+city) - imo, shakshuka bread so well done
- [x] [radio bakery](https://www.google.com/maps/search/?api=1&query=radio+bakery+new+york+city)  / [l'appartement 4f](https://www.google.com/maps/search/?api=1&query=l%27appartement+4f+new+york+city)  - focaccia, seasonal bread / croissant
- [x] [cha-an](https://www.google.com/maps/search/?api=1&query=cha-an+new+york+city) - everything matcha dessert shop, matcha tiramisu, affogato


**michelin/baller food:**

- [x] [jungsik](https://www.google.com/maps/search/?api=1&query=jungsik+new+york+city) - if you were gonna ball on food, this is where you do it
- [x] [jua](https://www.google.com/maps/search/?api=1&query=jua+new+york+city) - korean tasting, safe option
- [x] [tuome](https://www.google.com/maps/search/?api=1&query=tuome+new+york+city) - more affordable ala carte
- [x] [hyun](https://www.google.com/maps/search/?api=1&query=hyun+new+york+city) - recently increased $$, wagyu a5 ayce
- [x] [massara](https://www.google.com/maps/search/?api=1&query=massara+new+york+city) - only if you want quality food for tiny portions
- [x] [le coucou](https://www.google.com/maps/search/?api=1&query=le+coucou+new+york+city) - french ala carte


**bars:**

- [x] [double chicken please](https://www.google.com/maps/search/?api=1&query=double+chicken+please+new+york+city)(the coop) - almost every drink on the menu fire especially key lime pie, popcorn chicken yum
- [x] [angel's share](https://www.google.com/maps/search/?api=1&query=angel%27s+share+new+york+city) - walk-in only, painted paradise one of my favs ever
- [x] [george bang bang](https://www.google.com/maps/search/?api=1&query=george+bang+bang+new+york+city) - the chloe is so yum, big groups friendly
- [x] [attaboy](https://www.google.com/maps/search/?api=1&query=attaboy+new+york+city)(speakeasy) - walk-in only, spirit-forward and no menu
- [x] [experimental cocktail club](https://www.google.com/maps/search/?api=1&query=experimental+cocktail+club+new+york+city) - milk money is good
- [x] [clemente](https://www.google.com/maps/search/?api=1&query=clemente+new+york+city)  - ambiance, drinks p good overall
- [x] [overstory](https://www.google.com/maps/search/?api=1&query=overstory+new+york+city) - yummy drinks
- [x] [mace](https://www.google.com/maps/search/?api=1&query=mace+new+york+city) - walk-in able even on a weekend, solid drinks
- [x] [sip & guzzle](https://www.google.com/maps/search/?api=1&query=sip+&+guzzle+new+york+city)(sip) - yummy drinks, expensive tho
- [x] [so&so's neighborhood piano bar](https://www.google.com/maps/search/?api=1&query=so&so%27s+neighborhood+piano+bar+new+york+city) - drinks just ok, but the piano chill vibe!!


**matcha (it's a tough scene… but it's getting better):**

- [x] [12 matcha](https://www.google.com/maps/search/?api=1&query=12+matcha+new+york+city) - most photogenic + bitterness flavor
- [x] [mika's direction](https://www.google.com/maps/search/?api=1&query=mika%27s+direction+new+york+city) - for the LA girlies
- [x] [nippon cha](https://www.google.com/maps/search/?api=1&query=nippon+cha+new+york+city) - more generalist matcha
- [x] [hey tea lab](https://www.google.com/maps/search/?api=1&query=hey+tea+lab+new+york+city) - nyc only, experimental drinks
- [x] [tearoom by calmplex](https://www.google.com/maps/search/?api=1&query=tearoom+by+calmplex+new+york+city) - cute vibe and matcha is not bad
- [x] [uniqlo matcha](https://www.google.com/maps/search/?api=1&query=uniqlo+matcha+new+york+city) - im not even joking, it's not bad lol


**big group-friendly food** / **places i would bring my family to:**

- [x] [olle*](https://www.google.com/maps/search/?api=1&query=olle+new+york+city) - unlimited pajeon (clean korean food)
- [x] [dubuhaus*](https://www.google.com/maps/search/?api=1&query=dubuhaus+new+york+city) - good soondubbu, tofu ice cream (korean)
- [x] [sushi by m](https://www.google.com/maps/search/?api=1&query=sushi+by+m+new+york+city) - ~$100 omakase, a lot of indos like + free sake shots
- [x] [pranakhon*](https://www.google.com/maps/search/?api=1&query=pranakhon+new+york+city)  / [fish cheeks*](https://www.google.com/maps/search/?api=1&query=fish+cheeks+new+york+city)  - classic thai
- [x] [sichuan mountain house*](https://www.google.com/maps/search/?api=1&query=sichuan+mountain+house+new+york+city) - green peppercorn fish soup
- [x] [che li*](https://www.google.com/maps/search/?api=1&query=che+li+new+york+city) - always call to reserve, resy never shows up
- [x] [xi'an famous foods](https://www.google.com/maps/search/?api=1&query=xi%27an+famous+foods+new+york+city) - if you like mala/oil
- [x] [sushiro](https://www.google.com/maps/search/?api=1&query=sushiro+new+york+city)  / [nami nori](https://www.google.com/maps/search/?api=1&query=nami+nori+new+york+city)  - ppl are usually team either or, i'm the former
- [x] [cho dang gol](https://www.google.com/maps/search/?api=1&query=cho+dang+gol+new+york+city) - so homey, eggplant rice, wouldn't wait in line tho
- [x] [konban*](https://www.google.com/maps/search/?api=1&query=konban+new+york+city) - katsu, corn ribs
- [x] [uluh*](https://www.google.com/maps/search/?api=1&query=uluh+new+york+city) - walk-in only, generally good chinese
- [x] [mala panda*](https://www.google.com/maps/search/?api=1&query=mala+panda+new+york+city) - best mala so far in manhattan (nyc standard)
- [x] [onga](https://www.google.com/maps/search/?api=1&query=onga+new+york+city)  - every post-ski fav, sun nong dan but in fort lee


**flushing food crawl:**

- [x] [chongqing laozao](https://www.google.com/maps/search/?api=1&query=chongqing+laozao+flushing) - broth, ambiance, quirky meat dishes
- [x] [new world food court](https://www.google.com/maps/search/?api=1&query=new+world+food+court+flushing) - highlights are the sheng jian bao & lao ma spicy
- [x] [old luo yang](https://www.google.com/maps/search/?api=1&query=old+luo+yang+flushing) - seasoned noodles
- [x] [yuanyang dessert](https://www.google.com/maps/search/?api=1&query=yuanyang+dessert+flushing) - ginger pudding
- [x] [asian jewels](https://www.google.com/maps/search/?api=1&query=asian+jewels+flushing) - v family friendly dimsum choice


**want to try:**
- [ ] theodora
- [ ] birds of a feather
- [ ] ilis (noma's chef)
- [ ] don angie
- [ ] sushi ishikawa
- [ ] icca
- [ ] torrisi
- [ ] atomix
- [ ] césar
- [ ] casa mono
- [ ] semma
- [ ] una pizza napoletana`,
  },
  {
    id: "los-angeles-list",
    slug: "los-angeles-list",
    emoji: "🏞️",
    title: "los angeles list",
    category: "yesterday",
    created_at: yesterday,
    content: `as of 3 years of undergrad at ucla

(this is a long one)


[gmaps link](https://maps.app.goo.gl/jGoCHZCocAbhY5Az5) 


**must-eats:**

- [x] [sun nong dan](https://www.google.com/maps/search/?api=1&query=sun+nong+dan+los+angeles) - west 4th for big groups, og place for more consistent flavor
- [x] [han bat sul lung tang](https://www.google.com/maps/search/?api=1&query=han+bat+sul+lung+tang+los+angeles) - tongue cut with 3.5 spoonfuls of salt + sesame soil dipping
- [x] [jinsol gukbap](https://www.google.com/maps/search/?api=1&query=jinsol+gkbap+los+angeles) - boiled pork
- [x] [go greek](https://www.google.com/maps/search/?api=1&query=go+greek+beverly+hills) - bevhills branch <3
- [x] [tsujita sawtelle](https://www.google.com/maps/search/?api=1&query=tsujita+sawtelle+los+angeles) - tsukemen with charred chashu, extra hot broth, side dish fermented veggie
- [x] [surawon tofu house](https://www.google.com/maps/search/?api=1&query=surawon+tofu+house+los+angeles) - best high-protein soondubu i think
- [x] [madeo](https://www.google.com/maps/search/?api=1&query=madeo+los+angeles) - good classic italian, italian roommate rec
- [x] [community goods](https://www.google.com/maps/search/?api=1&query=community+goods+los+angeles) - a must in LA
- [x] [majordomo](https://www.google.com/maps/search/?api=1&query=majordomo+los+angeles) - unique fusion food, bing and pre-order the meat
- [x] [pigya](https://www.google.com/maps/search/?api=1&query=pigya+los+angeles)(with the set) - such a value
- [x] [yup dduk](https://www.google.com/maps/search/?api=1&query=yup+dduk+los+angeles) - idk who does tteokbokki better
- [x] [izakaya osen](https://www.google.com/maps/search/?api=1&query=izakaya+osen+los+angeles) - chirashi with brown rice omg
- [x] [hangari kalguksu](https://www.google.com/maps/search/?api=1&query=hangari+kalguksu+los+angeles) - kalguksu so good, bossam better
- [x] [pa ord](https://www.google.com/maps/search/?api=1&query=pa+ord+los+angeles) - a lot of people like the crispy pork, i think it's usually like rocks, i like tom yum noodle
- [x] [holbox](https://www.google.com/maps/search/?api=1&query=holbox+los+angeles) - yummy mexican
- [x] [urth caffe](https://www.google.com/maps/search/?api=1&query=urth+caffe+los+angeles) - just bc it's such an LA thing
- [x] [tea master la](https://www.google.com/maps/search/?api=1&query=tea+master+la+los+angeles) - just for the matcha soft serve. omg


**proximity favs (west la):**

- [x] [tokyo galbi](https://www.google.com/maps/search/?api=1&query=tokyo+galbi+los+angeles) - yazawa but lighter, cheaper
- [x] [wadaya](https://maps.app.goo.gl/jSMxU8DreZkWha187) - mogu-mogu, recently rebranded to wadaya
- [x] [killer noodle tsujita](https://www.google.com/maps/search/?api=1&query=killer+noodle+tsujita+los+angeles)  - [x] [heng-heng chicken rice](https://www.google.com/maps/search/?api=1&query=heng-heng+chicken+rice+los+angeles)  - [x] [layla's bagels](https://www.google.com/maps/search/?api=1&query=layla%27s+bagels+los+angeles)  / [jyan isaac bread](https://www.google.com/maps/search/?api=1&query=jyan+isaac+bread+los+angeles)  - lox!
- [x] [colapasta](https://www.google.com/maps/search/?api=1&query=colapasta+los+angeles) - only the lasagna
- [x] [sichuan impression](https://www.google.com/maps/search/?api=1&query=sichuan+impression+los+angeles)  - [x] [brother's cousins](https://www.google.com/maps/search/?api=1&query=brothers+cousins+los+angeles) - yummy tacos
- [x] [el chato](https://www.google.com/maps/search/?api=1&query=el+chato+los+angeles) - good taco truck
- [x] [zzamong](https://www.google.com/maps/search/?api=1&query=zzamong+los+angeles) - spicy jajjangmyeon, but do not get tangsuyuk
- [x] [crispy pork gang](https://www.google.com/maps/search/?api=1&query=crispy+pork+gang+los+angeles) - open 24 hrs, indonesian style + half duck/half pork + morning glory + sunny side up
- [x] [big boi](https://www.google.com/maps/search/?api=1&query=big+boi+los+angeles) - filipino food, sinigang
- [x] [gogobop](https://www.google.com/maps/search/?api=1&query=gogobop+los+angeles) - omg i lived on this. poke bowl but korean and so good
- [x] [tenkatori](https://www.google.com/maps/search/?api=1&query=tenkatori+los+angeles) - the chicken lol
- [x] [tang huo kungfu spicy](https://www.google.com/maps/search/?api=1&query=tang+huo+kungfu+spicy+los+angeles) - contender to wok bar, zhangliang malatang
- [x] [toranj](https://www.google.com/maps/search/?api=1&query=toranj+los+angeles)  - underrated persian food in westwood


**baller food (not a fan of michelin stars in LA):**

- [x] [yazawa](https://www.google.com/maps/search/?api=1&query=yazawa+los+angeles) - if you were recently in japan, skip
- [x] [genwa](https://www.google.com/maps/search/?api=1&query=genwa+los+angeles) - boujee kbbq
- [x] [matsuhisa](https://www.google.com/maps/search/?api=1&query=matsuhisa+los+angeles) - don't even go to nobu
- [x] [crustacean](https://www.google.com/maps/search/?api=1&query=crustacean+los+angeles) - garlic noodles


**matcha:**

- [x] [community goods](https://www.google.com/maps/search/?api=1&query=community+goods+los+angeles) - relisted bc it's that big of a highlight, i like their hojicha + maple half sweet
- [x] [damo tea house](https://www.google.com/maps/search/?api=1&query=damo+tea+house+los+angeles) - hojicha and matcha
- [x] [yeem's coffee](https://www.google.com/maps/search/?api=1&query=yeem%27s+coffee+los+angeles) - matcha, but coffee also not bad
- [x] [camel coffee](https://www.google.com/maps/search/?api=1&query=camel+coffee+los+angeles) - matcha is gas
- [x] [maru coffee bar](https://www.google.com/maps/search/?api=1&query=maru+coffee+bar+beverly+hills)(beverly hills) - i don't drink coffee but the drink in the small cup… so good


**honorable mentions (less generalist palette):**

- [x] [borit gogae](https://www.google.com/maps/search/?api=1&query=borit+gogae+los+angeles) - unique healthy food, fam loves this
- [x] [lonzo's](https://www.google.com/maps/search/?api=1&query=lonzo%27s+los+angeles) - peruvian yummy
- [x] [luv2eat thai](https://www.google.com/maps/search/?api=1&query=luv2eat+thai+los+angeles) - generally good thai food
- [x] [sqirl](https://www.google.com/maps/search/?api=1&query=sqirl+los+angeles) - unique brunch food
- [x] [seoul garden](https://www.google.com/maps/search/?api=1&query=seoul+garden+los+angeles) - on the plainer side for hotpot, but so good on a rainy day
- [x] [red rock](https://www.google.com/maps/search/?api=1&query=red+rock+torrance) - torrance find
- [x] [dan sung sa](https://www.google.com/maps/search/?api=1&query=dan+sung+sa+los+angeles) - for finger food and drinks
- [x] [bavel](https://www.google.com/maps/search/?api=1&query=bavel+los+angeles) - yummy mediterranean food
- [x] [seong buk dong](https://www.google.com/maps/search/?api=1&query=seong+buk+dong+los+angeles) - super homey, pajeon
- [x] [cento](https://www.google.com/maps/search/?api=1&query=cento+los+angeles) - vodka pasta, generally good
- [x] [harriet's rooftop](https://www.google.com/maps/search/?api=1&query=harriet%27s+rooftop+los+angeles) - nice vibe for drinks
- [x] [republique](https://www.google.com/maps/search/?api=1&query=republique+los+angeles) - the pastries are good


**desserts:**

- [x] [oakobing](https://www.google.com/maps/search/?api=1&query=oakobing) - green melon
- [x] [bhan kanom thai](https://www.google.com/maps/search/?api=1&query=bhan+kanom+thai) - naya SF but in LA
- [x] [baccio di latte](https://www.google.com/maps/search/?api=1&query=baccio+di+latte) - chocolate gelato fav
- [x] [bumsan](https://www.google.com/maps/search/?api=1&query=bumsan) - milk ice cream
- [x] [honeymee](https://www.google.com/maps/search/?api=1&query=honeymee) - honey ice cream


**best study cafe's (vibe-focused):**

- [x] [dinosaur coffee](https://www.google.com/maps/search/?api=1&query=dinosaur+coffee) - parking at the back, street
- [x] [lala land kind cafe](https://www.google.com/maps/search/?api=1&query=lala+land+kind+cafe) - street parking, valet, big blue bus
- [x] [highly likely](https://www.google.com/maps/search/?api=1&query=highly+likely) - street parking
- [x] [coffee mco](https://www.google.com/maps/search/?api=1&query=coffee+mco) - limited parking
- [x] [about time](https://www.google.com/maps/search/?api=1&query=about+time) - thurs-sun paid parking, usually v crowded


**east la:**

- [x] [golden deli](https://www.google.com/maps/search/?api=1&query=golden+deli) - egg rolls
- [x] [bopomofo cafe](https://www.google.com/maps/search/?api=1&query=bopomofo+cafe) - mapo tofu tater tots
- [x] [newport seafood](https://www.google.com/maps/search/?api=1&query=newport+seafood)  / [henry's cuisine](https://www.google.com/maps/search/?api=1&query=henry%27s+cuisine)  - lobster
- [x] [five star seafood](https://www.google.com/maps/search/?api=1&query=five+star+seafood) - dimsum in carts
- [x] [medan kitchen](https://www.google.com/maps/search/?api=1&query=medan+kitchen) - takeout indo food
- [x] [mandarin coffee](https://www.google.com/maps/search/?api=1&query=mandarin+coffee) - unique
- [x] [xinjiang bbq](https://www.google.com/maps/search/?api=1&query=xinjiang+bbq) - best skewers
- [x] [ipoh kopitiam](https://www.google.com/maps/search/?api=1&query=ipoh+kopitiam) - singapore here
- [x] [menya hanabi](https://www.google.com/maps/search/?api=1&query=menya+hanabi) - mazemen but yummy, personally too creamy
- [x] [dai ho](https://www.google.com/maps/search/?api=1&query=dai+ho) - taiwanese beef noodle soup
- [x] [banana leaf](https://www.google.com/maps/search/?api=1&query=banana+leaf) - most indo-tasting indo restaurant in east la imo
- [x] [borneo](https://www.google.com/maps/search/?api=1&query=borneo) - noodles southeast asian


**places i would drive to irvine for (as of 3 months interning here):**

- [x] [brodard](https://www.google.com/maps/search/?api=1&query=brodard+irvine) - the pork rolls omg
- [x] [gyutan tsukasa](https://www.google.com/maps/search/?api=1&query=gyutan+tsukasa+irvine) - in mitsuwa, so good
- [x] [pho 79](https://www.google.com/maps/search/?api=1&query=pho+79+irvine) - broth
- [x] [mokkoji](https://www.google.com/maps/search/?api=1&query=mokkoji+irvine) - shabu shabu
- [x] [tsuruhashi](https://www.google.com/maps/search/?api=1&query=tsuruhashi+irvine) - not an anjin (competitor) fan
- [x] [meiji seimen](https://www.google.com/maps/search/?api=1&query=meiji+seimen+irvine) - unique udon dishes
- [x] [cream pan](https://www.google.com/maps/search/?api=1&query=cream+pan+irvine) - strawberry croissant pastries


**didn't get to try:**

- [ ] rok matcha
- [ ] stagger coffee
- [ ] all the mala restaurants that just opened up in westwood after i left? smh
- [ ] pizzeria sei
- [ ] louders (criminal i didn't end up trying this tbh)
- [ ] danbi
- [ ] pasjoli
- [ ] antico nuovo
- [ ] bistro na's
- [ ] bar sawa
- [ ] n/naka`,
  },
  {
    id: "vancouver-list",
    slug: "vancouver-list",
    emoji: "🌌 ",
    title: "vancouver list",
    category: "yesterday",
    created_at: yesterday,
    content: `collections from various visits

as a regular visitor, this is the list i live by to make sure my culinary needs are met


[gmaps link](https://maps.app.goo.gl/xXVHbDw8WGASxM5N6) 


**must-eats (in order of priority):**

- [x] [chef pin](https://www.google.com/maps/search/?api=1&query=chef+pin+vancouver) - has off days, but mala is so good + udon pasta
- [x] [sura korean restaurant](https://maps.app.goo.gl/mJ85eZ2T8RnGu5QU6) - good generalist food, their galbi used to be so good
- [x] [linh cafe](https://maps.app.goo.gl/orQAh8dy8PsTG3mw5) - LOVE their pho bo, white wine mussels
- [x] [big way hot pot](https://www.google.com/maps/search/?api=1&query=big+way+hot+pot+vancouver) - diy so you can't really go wrong here
- [x] [hk bbq master](https://www.google.com/maps/search/?api=1&query=hk+bbq+master+vancouver) - so good
- [x] [published on main](https://www.google.com/maps/search/?api=1&query=published+on+main+vancouver) - very consistently good and innovative
- [x] [pnomh penh](https://maps.app.goo.gl/KDfPMb1Hx7HYcpZM8) - good food
- [x] [pampanga’s](https://maps.app.goo.gl/yNcAxaV2F3vyEou77) - good filipino, sinigang
- [x] [tendon kohaku](https://maps.app.goo.gl/1z2GB7vSUreycjXr9) - idk any north american spot that tastes the same?
- [x] [nero belgian waffle](https://maps.app.goo.gl/ev5qh1ZKcR7iinUi7) - good waffles but you can get waffles elsewhere


**honorable mentions with sentimental value:**

- [x] [sushi bar maumi](https://www.google.com/maps/search/?api=1&query=sushi+bar+maumi+vancouver) - first omakase ever
- [x] [the fish man](https://maps.app.goo.gl/PQfUhSfZGvXcixwy5) - bit oily
- [x] [pokerrito](https://maps.app.goo.gl/3xWiaZDEkH6Jqn5v5) - a family favorite bc it’s so healthy and well done
- [x] [raisu](https://www.google.com/maps/search/?api=1&query=raisu+vancouver) - good chirashi
- [x] [miku](https://www.google.com/maps/search/?api=1&query=miku+vancouver) - good for big group dinners
- [x] [oeb breakfast co](https://www.google.com/maps/search/?api=1&query=oeb+breakfast+co+vancouver) - brunch
- [x] [pin pin](https://www.google.com/maps/search/?api=1&query=pin+pin+vancouver) - decent filipino food
- [x] [masayoshi](https://www.google.com/maps/search/?api=1&query=masayoshi+vancouver) - only complaint is just music soundtrack. beautiful food
- [x] [st lawrence](https://www.google.com/maps/search/?api=1&query=st+lawrence+vancouver) - good french, i remember eating a lot of pate`,
  },
  {
    id: "san-francisco-list",
    slug: "san-francisco-list",
    emoji: "🌉",
    title: "san francisco list",
    category: "yesterday",
    created_at: yesterday,
    content: `as of 3 months of sf summer

the want to try list is clearly a lot longer


[collective bay area gmaps link](https://maps.app.goo.gl/BhuZKHEi55utZqyG9) 


**what made an impression:**

- [x] [state bird provisions](https://www.google.com/maps/search/?api=1&query=state+bird+provisions+san+francisco) - it's giving wedding buffet but the food comes to you instead and it's not actually a buffet
- [x] [the progress](https://www.google.com/maps/search/?api=1&query=the+progress+san+francisco) - the duck fried rice omg
- [x] [burma love](https://www.google.com/maps/search/?api=1&query=burma+love+san+francisco) - the tea leaf salad, most menu appeals to indo palette
- [x] [mensho](https://www.google.com/maps/search/?api=1&query=mensho+san+francisco) - tori paitan, not a fan of duck matcha
- [x] [blindpig speakeasy](https://www.google.com/maps/search/?api=1&query=blindpig+speakeasy+san+francisco) - good drinks but maybe low alc content
- [x] [kin khao](https://www.google.com/maps/search/?api=1&query=kin+khao+san+francisco) - the rice krispies and the veggie dip
- [x] [daeho](https://www.google.com/maps/search/?api=1&query=daeho+san+francisco) - of course
- [x] [san ho won](https://www.google.com/maps/search/?api=1&query=san+ho+won+san+francisco) - the hassle to get a table, but unique and good
- [x] [pineapple king bakery](https://www.google.com/maps/search/?api=1&query=pineapple+king+bakery+san+francisco) - LOVE
- [x] [naya dessert](https://www.google.com/maps/search/?api=1&query=naya+dessert+san+francisco) - their pork fried rice also used to be so good
- [x] [muukata6395](https://www.google.com/maps/search/?api=1&query=muukata6395+san+francisco) - thai bbq
- [x] [san tung](https://www.google.com/maps/search/?api=1&query=san+tung+san+francisco) - just the chicken wings
- [x] [beit rima](https://www.google.com/maps/search/?api=1&query=beit+rima+san+francisco) - fire
- [x] [foodhall mission district](https://www.google.com/maps/search/?api=1&query=foodhall+mission+district+san+francisco) - the yogurt!!!! peak


**bakeries:**

- [x] [arsicault](https://www.google.com/maps/search/?api=1&query=arsicault+san+francisco) - the blackberry croissant omg
- [x] [maison nico](https://www.google.com/maps/search/?api=1&query=maison+nico+san+francisco) - the pate, croissant
- [x] [jina bakes](https://www.google.com/maps/search/?api=1&query=jina+bakes+san+francisco) - galbijjim croissant that is well executed
- [x] [jane the bakery](https://www.google.com/maps/search/?api=1&query=jane+the+bakery+san+francisco) - savory was done pretty well
- [x] [juniper](https://www.google.com/maps/search/?api=1&query=juniper+san+francisco) - yummy


**matcha:**

- [x] [maruwu seicha](https://www.google.com/maps/search/?api=1&query=maruwu+seicha+san+francisco) - the affogato
- [x] [komeya no bento](https://www.google.com/maps/search/?api=1&query=komeya+no+bento+san+francisco) - most decent matcha + toppings


**napa valley:**

- [x] [understudy](https://www.google.com/maps/search/?api=1&query=understudy+san+francisco) - bakery of press restaurant, so innovative


**south bay area:**

- [x] [qq noodle](https://www.google.com/maps/search/?api=1&query=qq+noodle+cupertino) - cupertino, spicy hot oil noodles
- [x] [kunjip](https://www.google.com/maps/search/?api=1&query=kunjip+santa+clara) - santa clara, daeho alternative
- [x] [kunjip tofu](https://www.google.com/maps/search/?api=1&query=kunjip+tofu+mountainview) - mountainview,  v good soondubu but usually a bit of a wait
- [x] [10 butchers kbbq](https://www.google.com/maps/search/?api=1&query=10+butchers+kbbq+sunnyvale) - sunnyvale, kbbq
- [x] [kali noodle bar](https://www.google.com/maps/search/?api=1&query=kali+noodle+bar+san+jose) - san jose, like dry viet noodles
- [x] [jin gege](https://www.google.com/maps/search/?api=1&query=jin+gege+milpitas) - milpitas, hk style chicken and pork fire lowkey
- [x] [demiya](https://www.google.com/maps/search/?api=1&query=demiya+valley+fair) - valley fair, fire curry
- [x] [shang cafe](https://www.google.com/maps/search/?api=1&query=shang+cafe+cupertino) - cupertino, really good sichuan food (the boiled fish!)
- [x] [one pot shabu shabu](https://www.google.com/maps/search/?api=1&query=one+pot+shabu+shabu+cupertino) - cupertino, pretty good shabu shabu
- [x] [santo cafe](https://www.google.com/maps/search/?api=1&query=santo+cafe+san+jose+japantown) - san jose japantown, good poke
- [x] [top cafe](https://www.google.com/maps/search/?api=1&query=top+cafe+cupertino) - cupertino, homey hk food
- [x] [pho hanoi](https://www.google.com/maps/search/?api=1&query=pho+hanoi+cupertino+branch) - cupertino, pho


**want to try:**

- [ ] ju-ni - my manager talked about a shaved swordfish omakase
- [ ] robin - omakase slider?
- [ ] burma superstar / teakwood
- [ ] nari
- [ ] bar iris
- [ ] aji kiji
- [ ] rintaro
- [ ] mister jiu's
- [ ] four kings
- [ ] cotogna
- [ ] abacá
- [ ] butter & crumble - signed up for their pickup drops but its so hard to get every time
- [ ] thanh long
- [ ] thai nghiep ky my gia
- [ ] plow
- [ ] sohn coffee
- [ ] hk lounge bistro
- [ ] neighbor bakehouse
- [ ] tano
- [ ] house of prime rib
- [ ] madcap (michelin north of sf)
- [ ] maison benoit (east bay), awarded best croissant`,
  },
  {
    id: "jakarta-bakmie-list",
    slug: "jakarta-bakmie-list",
    emoji: "🍜",
    title: "jakarta bakmie list",
    category: "yesterday",
    created_at: yesterday,
    content: `a crowdsourced project


**chompedup's tried and true:**

- [x] bakmi orpa (the bakso goreng)
- [x] bakmi kenanga
- [x] bakmi lamlo pasar pik
- [x] bakmi tan
- [x] bakmi aloi
- [x] bakmi krekot
- [x] bakmi alok


**crowdsourced (thank you!):**

- [ ] bakmie fuk
- [ ] bakmi rica kejaksaan bandung
- [ ] bakmi gading permai kelapa gading
- [ ] bakmi bule mangga besar 
- [ ] bakmi khek pluit
- [ ] bakmi gm
- [ ] demie
- [ ] bakmi alip
- [ ] mie keriting p siantar 57 golf island
- [ ] bakmi aka
- [ ] bakmi ahiung khas jambi
- [ ] bakmi planet pasar puri
- [ ] bakmi akai
- [ ] bakmi aguan/agoan
- [ ] bakmi ridho on gofood
- [ ] bakmi mg (gatekept)
- [ ] bakmi tiga marga
- [ ] bakmi 16
- [ ] citra noodle plus karawaci
- [ ] bakmie aboen pasar baru
- [ ] hock seng/fong sheng
- [ ] keriting asli siantar pluit/siantar 19`,
  },
];

