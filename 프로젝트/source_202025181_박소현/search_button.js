var input = document.querySelector("#search_input");
/*사용자가 검색어를 입력하지 않고 검색을 하였을 때 경고창이 뜨게함*/
function getSearch(){
    if(input.value.length == 0){
        alert("검색어를 입력해주세요!");
    }
}