var user = document.querySelector("#user"); /*사용자가 입력한 이름을 가져오기 위해 사용*/ 
var place = document.querySelector("#place"); /*사용자가 입력한 지역을 가져오기 위해 사용*/

function getJoin() {

    if(user.value.length == 0 || place.value.length == 0){
        alert("모두 입력해주세요!"); /*이름과 지역이 모두 입력되어야 함을 알려주기 위해 사용*/
    }else{

        getSearch(); /* getSearch함수는 해당지역의 날씨를 가져오기 위함이다. 
                        로그인 시에 같이 값이 구해질 수 있도록 getJoin 함수 내부에 호출을 하였다. */

        localStorage["name"] = user.value; /*localStorage의 사용을 통해 로그인 페이지를 벗어나더라도 입력값을 계속해서 사용할 수 있게 하였다.*/
        localStorage["place"] = place.value;

        alert("안녕하세요 " + localStorage.getItem("name") + "님!"); /*로그인이 정상적으로 수행되었음을 알려주기 위해 사용*/

        location.href = "intro.html"; /*로그인이 성공적으로 이루어졌다면 intro.html 페이지로 넘어가게 된다.*/
    }

}

function getSearch(){
    var SEARCH_CITY = document.getElementById("place").value; /*사용자가 입력한 지역을 가져오기 위해 사용*/
    var API_KEY = "17fff3203f2c7d915e714afcb9ff008f"; /*OpenWeather에서 받은 나의 인증키값*/
    var lon =""; /*요청 url로 경도와 위도가 필요*/
    var lat = "";
    switch(SEARCH_CITY){  /*switch문을 사용하여 해당지역에 맞는 경도와 위도를 설정*/
        case "강서구":
            lon = "128.9829083"; lat = "35.20916389";
            break;
        case "금정구":
            lon = "129.0943194"; lat = "35.24007778";
            break;
        case "해운대구":
            lon = "129.1658083"; lat = "35.16001944";
            break;
        case "중구":
            lon = "129.0345083"; lat = "35.10321667";
            break;
        case "영도구":
            lon = "129.0701861"; lat = "35.08811667";
            break;
        case "연제구":
            lon = "129.082075"; lat = "35.17318611";
            break;
        case "수영구":
            lon = "129.115375"; lat = "35.14246667";
            break;
        case "서구":
            lon = "129.0263778"; lat = "35.09483611";
            break;
        case "사하구":
            lon = "128.9770417"; lat = "35.10142778";
            break;
        case "사상구":
            lon = "128.9933333"; lat = "35.14946667";
            break;
        case "북구":
            lon = "128.992475"; lat = "35.19418056";
            break;
        case "부산진구":
            lon = "129.0553194"; lat = "35.15995278";
            break;
        case "동래구":
            lon = "129.0858556"; lat = "35.20187222";
            break;
        case "동구":
            lon = "129.059175"; lat = "35.13589444";
            break;
        case "남구":
            lon = "129.0865"; lat = "35.13340833";
            break;
        case "기장군":
            lon = "129.2222873"; lat = "35.24477541";
            break;
        default:/*default값으로 부산 경도 위도*/
            lon = "129.05562775"; lat = "35.1379222";
            break;
    }
    var URL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+API_KEY+"&units=metric";
    
    if(location.protocol == "http:"){ /*기본적인 url이 https:로 설정되어있어서 http:일 경우를 대비*/
       URL =  "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+API_KEY+"&units=metric";
    } 

    fetch(URL)
        .then((response)=>
            response.json()  /*json방식으로 응답을 받음*/
        )
        .then((data)=>{
            console.log(data.weather[0].main); /*원하는 결과 값인 날씨를 받음*/
            localStorage["weather_En"] = data.weather[0].main; /*날씨를 localStorage에 저장하여 계속 사용할 수 있게 함*/
        });
        englishToKorean_and_recommend(); /*날씨가 영어로 반환되기 때문에 이를 한국어로 바꾸고 동시에 날씨에 따른 음식과 장소를 추천하기 위해 사용*/
}

function englishToKorean_and_recommend(){
    var weather = localStorage["weather_En"]; /*localStorage에 저장된 weather값을 가져온다.*/

    switch(weather){ /*weather 값에 따라 결과값을 달리 저장하기 위해 switch문 사용*/
        case "Thunderstorm":  
            localStorage["weather"] = "뇌우";
            var arr_f = ["따뜻한 집밥","라면"]; /*추천 결과는 구글링을 통해 최대한 날씨에 맞게 추천결과를 낼 수 있도록 하였습니다. 주관적인 생각도 조금은 들어있습니다.*/
            var arr_p = ["집"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        case "Drizzle":
            localStorage["weather"] = "이슬비";
            var arr_f = ["파전과 막걸리","삼겹살","돈까스","김치찌개","짜장면"];
            var arr_p = ["부산 아쿠아리움","자갈치 시장","서면 지하도상가","신세계 백화점 센텀시티","부산 시립 미술관"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        case "Rain":
            localStorage["weather"] = "비";
            var arr_f = ["파전과 막걸리","삼겹살","부대찌개","짬뽕","국밥"];
            var arr_p = ["벡스코","롯데백화점 부산본점","트릭아이 미술관 부산","부산 근대 역사관","부산 영화 체험 박물관"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        case "Snow":
            localStorage["weather"] = "눈";
            var arr_f = ["따뜻한 커피","군고구마","찐빵","칼국수","우동"];
            var arr_p = ["허심청","브레이크아웃 이스케이프 부산","제로레이턴시 VR - 부산 남포점","신세계 센텀시티 스파랜드","양산 에덴벨리 스키장"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        case "Clear":
            localStorage["weather"] = "맑음";
            var arr_f = ["시원한 음료","치킨과 맥주","아이스크림","팥빙수","냉면"];
            var arr_p = ["영화의 전당","부산시민공원","삼락생태공원","다대포 해수욕장","감천문화마을"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        case "Clouds":
            localStorage["weather"] = "구름";
            var arr_f = ["떡볶이","피자","비빔밥","초밥","햄버거","회"]; 
            var arr_p = ["사직야구장","부산박물관","청사포","범어사","송도해상케이블카"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
        default:
            localStorage["weather"] = "흐림";
            var arr_f = ["따뜻한 집밥","라면"];
            var arr_p = ["집"];
            localStorage.setItem("food",JSON.stringify(arr_f));
            localStorage.setItem("re_place",JSON.stringify(arr_p));
            break;
    }
}