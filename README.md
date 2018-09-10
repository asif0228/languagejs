
# Language js

It is a javascript library that helps to make multilingual website.

just import the file lang.js then edit this file.

in the file lang.js add languages like below:

var lang_all = [['ভাষা 1', 'বাক্য 1'],['Language 1','Sentence 1'],['भाषा 1', 'वाक्य 1']];

then where ever you want to use the sentence 'বাক্য 1' or, 'Sentence 1' or,  'वाक्य 1' 
Just give that html element a lno attribute like below

<span lno="0">Language 1</span>
<div lno="0">Language 1</div>
<input lno="1" type="text" title="Sentence 1" placeholder="Sentence 1">
<button lno="1" type="submit">Sentence 1</button>


After that whenever you cal setLang(0), setLang(1), setLang(2) etc with desired language index
the whole site will be changed to that language.

Check out the index.html for sample.

The whole library is javascript based so the full conversation is done on client side
As a result not hessale in server side. This library is plain and simple with just pure js no other dependency.
