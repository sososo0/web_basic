var input = document.querySelector("#search_input");

function getSearch(){
    if(input.value.length == 0){ /*검색어가 입력되지 않은 채로 버튼을 누르면 경고창이 뜨게 함*/
        alert("검색어를 입력해주세요!");
    }
}