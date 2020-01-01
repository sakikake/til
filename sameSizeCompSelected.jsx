/*
プロジェクトパネル上で選択したコンポジションと同じサイズのコンポジションを全て選択するスクリプト
プロジェクトパネル上で選択したコンポジションと同じサイズのコンポジションを全て選択します。
コンポジション以外の物を選択して実行するとアラートが出ます。
*/


app.beginUndoGroup("同一サイズのコンポジションを選択");

//変数宣言＆初期化
var currentComp, oldName, i, j;
var selCompWidth = 0;
var selCompHeight = 0;
var sameSizeComp = []; 


var activeItem = app.project.activeItem;

 if((activeItem instanceof CompItem)){
    selCompWidth = activeItem.width;
    selCompHeight = activeItem.height;

//プロジェクトに含まれるすべてのアイテムを取得するためにapp.project.itemsを変数「allItems」に格納します。

    var allItems = app.project.items;

//allItemsから総当たりでアイテムがCompItemか確認します。

    for(i =1; i<= app.project.items.length; i++){
        currentItem = app.project.items[i];

    //アイテムがCompItemで、かつ幅と高さが同じコンポの場合、sameSizeCompの配列に、そのCompItemを追加します。

    if((currentItem instanceof CompItem)&&(currentItem.width == selCompWidth)&&(currentItem.height == selCompHeight)) {
        sameSizeComp.push(currentItem);
    } 
}

// sameSizeCompの配列を取得し選択します。

for(j =0; j < sameSizeComp.length; j++){
    sameSizeComp[j].selected = true;
}


}else{
    alert("コンポジションが選択されていません");
}

app.endUndoGroup();