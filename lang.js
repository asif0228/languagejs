var lang_all = [
				[
					'This is a Heading',
					'This is a paragraph.',
					'Personal information:',
					'First name',
					'Last name',
					'image File',
					'Submit'
				],
				[
					'এটি একটি শিরোনাম',
					'এটি একটি অনুচ্ছেদ।',
					'ব্যক্তিগত তথ্য:',
					'নামের প্রথম অংশ',
					'নামের শেষ অংশ',
					'চিত্র',
					'দাখিল'
				],
				[
					'यह एक शीर्षक है',
					'यह एक अनुच्छेद है।',
					'व्यक्तिगत जानकारी:',
					'पहला नाम',
					'अंतिम नाम',
					'छवि',
					'जमा करें'
				]
			];
var lang_state = -1;
function setLang(cnt){
	if(lang_state!=cnt) lang_state = cnt; else return;
	var tags = document.querySelectorAll('[lno]');
	for (var i=0, max=tags.length; i < max; i++) {
	    console.log(tags[i].tagName);
	    if(tags[i].tagName=="INPUT"){
	    	//console.log(tags[i].getAttribute("lno"));
	    	tags[i].title = lang_all[cnt][tags[i].getAttribute("lno")];
	    	tags[i].placeholder = lang_all[cnt][tags[i].getAttribute("lno")];
	    }else if(tags[i].tagName=="IMG"){
	    	//console.log(tags[i].getAttribute("lno"));
	    	tags[i].alt = lang_all[cnt][tags[i].getAttribute("lno")];
	    	tags[i].title = lang_all[cnt][tags[i].getAttribute("lno")];
	    }else{
	    	//console.log(tags[i].getAttribute("lno"));
	    	tags[i].innerHTML = lang_all[cnt][tags[i].getAttribute("lno")];
	    }
	}
}