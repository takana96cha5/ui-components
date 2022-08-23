function leftThumbFunc() {
    // DOM取得
    const leftThumb = document.querySelector("#left-thumb");

    // 左右のつまみが持つ値を取得
    let leftValue = Number(leftThumb.value);
    let rightValue = Number(leftThumb.parentNode.childNodes[5].value);

    // 左のつまみが右のつまみを超えないようにする処理
    if (leftValue >= rightValue) {
        return
    };

    // style を更新

    // slider-distanceのidを持つdivの 子要素のdiv の子要素のリスト
    const children = leftThumb.parentNode.childNodes[1].childNodes;

    // console.log(children[1]); // 下限から左のつまみまでのグレーアウトしている範囲
    children[1].style.width = leftValue + '%';

    // console.log(children[5]); // 左のつまみから右のつまみまでの色がついている範囲
    children[5].style.left = leftValue + '%';

    // console.log(children[7]); // 左のつまみ
    children[7].style.left = leftValue + '%';

    // console.log(children[11]); // マウスカーソルが当たった時につまみの上に表示される値のラベル部分
    children[11].style.left = leftValue + '%';

    // マウスカーソルが当たった時に表示される sign の数値を設定
    children[11].childNodes[1].innerHTML = leftValue;
}

function rightThumbFunc() {
    const rightThumb = document.querySelector("#right-thumb");

    const leftValue = Number(rightThumb.parentNode.childNodes[3].value);
    let rightValue = Number(rightThumb.value);

    // 右のつまみが左のつまみを超えないようにする処理
    if (leftValue >= rightValue) {
        return
    };

    // slider-distanceのidを持つdivの 子要素のdiv の子要素のリスト
    const children = rightThumb.parentNode.childNodes[1].childNodes;

    // console.log(children[1]); // 下限から左のつまみまでのグレーアウトしている範囲
    children[3].style.width = (100 - rightValue) + '%';

    // console.log(children[5]); // 左のつまみから右のつまみまでの色がついている範囲
    children[5].style.right = (100 - rightValue) + '%';

    // console.log(children[9]); // 右のつまみ
    children[9].style.left = rightValue + '%';

    // console.log(children[13]); // マウスカーソルが当たった時につまみの上に表示される値のラベル部分
    children[13].style.left = rightValue + '%';

    // マウスカーソルが当たった時に表示される sign の数値を設定
    children[13].childNodes[1].innerHTML = rightValue;
}

addEventListener("input", leftThumbFunc);
addEventListener("input", rightThumbFunc);
