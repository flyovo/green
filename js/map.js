
    var placeOverlay = new daum.maps.CustomOverlay({zIndex:1});
    var contentNode = document.createElement('div');
    var selectedPlace = null;

    contentNode.className = 'placeinfo_wrap';
    placeOverlay.setContent(contentNode);

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new daum.maps.LatLng(37.4817688, 127.0411486), // 지도의 중심좌표
          level: 8 // 지도의 확 대 레벨
        };
    var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
          {
              place_url: 'http://place.map.daum.net/1330470219',
              place_name: '그린어스 본사',
              road_address_name: '서울 강남구 논현로 134 연산MS 503호',
              address_name: '서울 강남구 도곡동 425-7  연산MS 503호',
              phone: '1661-0844',
              latlng: new daum.maps.LatLng(37.4817688, 127.0411486)
          },
          {
              place_url: 'http://place.map.daum.net/2070167182',
              place_name: '그린어스 도곡 타워팰리스',
              road_address_name: '서울 강남구 언주로30길 56',
              address_name: '서울 강남구 도곡동 467',
              phone: '02-529-1194',
              latlng: new daum.maps.LatLng(37.488286, 127.0522183)
          },
          {
              place_url: 'http://place.map.daum.net/223600301',
              place_name: '그린어스 잠실 엘스',
              road_address_name: '서울 송파구 올림픽로 119',
              address_name: '서울 송파구 잠실동 19-9',
              phone: '02-424-0844',
              latlng: new daum.maps.LatLng(37.5126307, 127.0812662)
          },
          {
              place_url: 'http://place.map.daum.net/966506322',
              place_name: '그린어스 삼성 현대아이파크',
              road_address_name: '서울 강남구 영동대로 640',
              address_name: '서울 강남구 삼성동 87',
              phone: '02-540-6664',
              latlng: new daum.maps.LatLng(37.5181027, 127.0569655)
          },
          {
              place_url: 'http://place.map.daum.net/874801269',
              place_name: '그린어스 이촌 첼리투스',
              road_address_name: '서울 용산구 이촌로 260',
              address_name: '서울 용산구 이촌동 300-301',
              phone: '02-540-6664',
              latlng: new daum.maps.LatLng(37.5181027, 127.0569655)
          },
          {
              place_url: 'http://place.map.daum.net/1941796046',
              place_name: '그린어스 방배',
              road_address_name: '서울 서초구 방배로28길 50-3',
              address_name: '서울 서초구 방배동 849-12',
              phone: '02-536-0844',
              latlng: new daum.maps.LatLng(37.4910075, 126.9926723)
          },
          {
              place_url: 'http://place.map.daum.net/1565645771',
              place_name: '그린어스 합정 메세나폴리스',
              road_address_name: '서울 마포구 양화로 45',
              address_name: '서울 마포구 서교동 490',
              phone: '010-8446-0844',
              latlng: new daum.maps.LatLng(37.5513066, 126.911442)
          },
          {
              place_url: 'http://place.map.daum.net/1071082839',
              place_name: '그린어스 성수 갤러리아포레',
              road_address_name: '서울 성동구 서울숲2길 32-14',
              address_name: '서울 성동구 성수동1가 685-696',
              phone: '02-540-7947',
              latlng: new daum.maps.LatLng(37.5457024, 127.0405324)
          },
          {
              place_url: 'http://place.map.daum.net/16383079',
              place_name: '그린어스 자양 클래식500',
              road_address_name: '서울 광진구 능동로 90',
              address_name: '서울 광진구 자양동 227-342',
              phone: '02-456-6435',
              latlng: new daum.maps.LatLng(37.5387807, 127.0688944)
          },
          {
              place_url: 'http://place.map.daum.net/855194797',
              place_name: '그린어스 자양 스타시티',
              road_address_name: '서울 광진구 아차산로 262',
              address_name: '서울 광진구 자양동 227-7',
              phone: '02-2024-1456',
              latlng: new daum.maps.LatLng(37.5376169, 127.0704296)
          },
          {
              place_url: 'http://place.map.daum.net/589886013',
              place_name: '그린어스 반포 래미안퍼스티지',
              road_address_name: '서울 서초구 신반포로 100',
              address_name: '서울 서초구 반포동 18-4',
              phone: '02-591-9669',
              latlng: new daum.maps.LatLng(37.5030535,126.9935038)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=38456938&_ts=1511314005511',
              place_name: '그린어스 한남 아이파크',
              road_address_name: '서울 용산구 독서당로 46 한남아이파크 상가 1층',
              address_name: '서울 용산구 한남동 828',
              phone: '02-796-5825',
              latlng: new daum.maps.LatLng(37.5311362,127.0061749)
          },
          {
              place_url: 'http://www.greenearthkorea.co.kr',
              place_name: '그린어스 동대문 리마크빌',
              road_address_name: '서울시 중구 다산로 258',
              address_name: '',
              phone: '1661.0844',
              latlng: new daum.maps.LatLng(37.5658085,127.014393)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1101319332',
              place_name: '그린어스 영등포 리마크빌',
              road_address_name: '서울 영등포구 영중로 119',
              address_name: '서울 영등포구 영등포동8가 35-1',
              phone: '1661.0844',
              latlng: new daum.maps.LatLng(37.5267963,126.9025171)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1057943273',
              place_name: '그린어스 관악 리마크빌',
              road_address_name: '서울 관악구 남부순환로216길 24',
              address_name: '서울 관악구 봉천동 880-41',
              phone: '1661.0844',
              latlng: new daum.maps.LatLng(37.4803095,126.9465133)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1015219392',
              place_name: '그린어스 대연 리마크빌',
              road_address_name: '부산 남구 수영로 324',
              address_name: '부산 남구 대연동 54-5',
              phone: '051-524-0306',
              latlng: new daum.maps.LatLng(35.1376393,129.1008867)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1023429707',
              place_name: '그린어스 반포 아크로리버파크',
              road_address_name: '서울 서초구 신반포로15길 19 105동 지하3층',
              address_name: '서울 서초구 반포동 2-12',
              phone: '010-6236-0844',
              latlng: new daum.maps.LatLng(37.5062446,126.991665)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1180482748',
              place_name: '그린어스 해운대 제니스',
              road_address_name: '부산광역시 해운대구 마린시티2로 33 103동 지하1층',
              address_name: '부산광역시 해운대구 우동 1407',
              phone: '051-524-0306',
              latlng: new daum.maps.LatLng(35.1575431,129.1422601)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1304696543',
              place_name: '그린어스 고덕래미안힐스테이트',
              road_address_name: '서울 강동구 아리수로50길 50 래미안힐스테이트고덕',
              address_name: '서울 강동구 고덕동 688 117동 1층 코인세탁실',
              phone: '010-2181-0844',
              latlng: new daum.maps.LatLng(37.5588264,127.1462866)
          },
          {
              place_url: 'http://www.greenearthkorea.co.kr',
              place_name: '그린어스 장산 세탁 도우미',
              road_address_name: '부산광역시 해운대구 세실로 30 경동지플러스 1층 상가',
              address_name: '',
              phone: '051-702-4080',
              latlng: new daum.maps.LatLng(35.1684542,129.1772212)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=1620830067',
              place_name: '그린어스 성수 트리마제',
              road_address_name: '서울특별시 성동구 성수동1가 547-1 트리마제 단지 1층',
              address_name: '',
              phone: '1661-0844',
              latlng: new daum.maps.LatLng(37.5391293,127.0424336)
          },
          {
              place_url: 'http://www.greenearthkorea.co.kr',
              place_name: '그린어스 롯데시그니엘 롯데타워',
              road_address_name: '서울특별시 송파구 올림픽로 300 롯데월드타워',
              address_name: '',
              phone: '1661-0844',
              latlng: new daum.maps.LatLng(37.5132377,127.1013235)
          },
          {
              place_url: 'http://map.naver.com/local/siteview.nhn?code=38448416',
              place_name: '그린어스 도곡 대치펠리스',
              road_address_name: '서울 강남구 삼성로51길 37 래미안 대치 팰리스 1단지',
              address_name: '서울 강남구 대치동 1027',
              phone: '02-529-1195',
              latlng: new daum.maps.LatLng(37.4942054,127.0562965)
          }
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://s3.ap-northeast-2.amazonaws.com/www.greenearthkorea.co.kr/image/KakaoTalk_2017-11-17-12-44-11_Photo_14.png";

    for (var i = 0; i < positions.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new daum.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            image : markerImage // 마커 이미지
        });
        daum.maps.event.addListener(marker, 'click', makeOverListener(map, marker, positions[i]));
    }

    // daum.maps.event.addListener(map, 'click', clearMap());

    // function clearMap() {
    //     return function() {
    //         placeOverlay.setMap(null);
    //     }
    // }

    function makeOverListener(map, marker, place) {
        return function() {

          if (place != selectedPlace) {

            selectedPlace = place

            map.setCenter(place.latlng);

            if($('#landing_m').length > 0){
              map.panBy(0, -50);
            }

            var content = '<div class="placeinfo"><a class="title_a" href="' +
                place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';

            if (place.road_address_name) {
              content += '<span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                         '<span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
            }else{
              content += '<span title="' + place.address_name + '">' + place.address_name + '</span>';
            }

            content += '<span class="tel">' + place.phone + '</span></div><div class="after"></div>';
            contentNode.innerHTML = content;
            placeOverlay.setPosition(place.latlng);
            placeOverlay.setMap(map);
          } else {
            selectedPlace = null;
            placeOverlay.setMap(null);
          }
        };
    }
