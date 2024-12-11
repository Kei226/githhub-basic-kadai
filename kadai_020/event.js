//text,btnというidを持つhtml要素を取得、定数に代入
const text=document.getElementById('text');
const btn=document.getElementById('btn');

//ボタンクリック時にテキストを「ボタンをクリックしました」へ変更
btn.addEventListener('click',()=>{

    text.textContent='ボタンをクリックしました';

});