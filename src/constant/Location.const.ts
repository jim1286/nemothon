import { Route, Estimated, Location } from "@/interface";

export const origin: Location = {
  name: "스시진초밥",
  address: "서울 은평구 진흥로15길 26-1",
  latitude: "37.6116756",
  longitude: "126.9319037",
};

export const routeList: Route[] = [
  {
    name: 7212,
    stationList: [
      {
        name: "불광역.불광1동주민센터",
        address: "서울 은평구 불광동 285-14",
        latitude: "37.609491462156264",
        longitude: "126.93216475867953",
        duration: 420,
      },
      {
        name: "양광교회",
        address: "서울 은평구 대조동 68-2",
        latitude: "37.60904750826858",
        longitude: "126.9238687306278",
        duration: 60,
      },
      {
        name: "대조시장",
        address: "서울 은평구 대조동 231",
        latitude: "37.60878330000133",
        longitude: "126.92189618951642",
        duration: 60,
      },
      {
        name: "역촌오거리",
        address: "서울 은평구 역촌동 3-38",
        latitude: "37.60771799999949",
        longitude: "126.91982238951842",
        duration: 60,
      },
      {
        name: "녹번초등학교.은평세무서",
        address: "서울 은평구 역촌동 28-64",
        latitude: "37.60371799999973",
        longitude: "126.92085338951844",
        duration: 120,
      },
      {
        name: "은평세무서",
        address: "서울 은평구 응암동 88-1",
        latitude: "37.60142200000057",
        longitude: "126.92205238951507",
        duration: 60,
      },
      {
        name: "본서부병원",
        address: "서울 은평구 역촌동 42-53",
        latitude: "37.60090399999949",
        longitude: "126.91959138952299",
        duration: 60,
      },
      {
        name: "신진과학기술고교.이마트은평점",
        address: "서울 은평구 신사동 1-95",
        latitude: "37.59978839999948",
        longitude: "126.914355689518",
        duration: 120,
      },
      {
        name: "응암역.신사오거리",
        address: "서울 은평구 신사동 29-178",
        latitude: "37.59792499999951",
        longitude: "126.91103938951989",
        duration: 120,
      },
    ],
  },
  {
    name: 571,
    stationList: [
      {
        name: "신흥시장",
        address: "서울 은평구 신사동 38-10",
        latitude: "37.59539599999898",
        longitude: "126.91038538952097",
        duration: 120,
      },
      {
        name: "세절역",
        address: "서울 은평구 신사동 353-6",
        latitude: "37.59119599999885",
        longitude: "126.90926838952007",
        duration: 60,
      },
      {
        name: "와산교",
        address: "서울 은평구 증산동 131-106",
        latitude: "37.58793599999874",
        longitude: "126.90853438951731",
        duration: 60,
      },
      {
        name: "연서중학교입구",
        address: "서울 은평구 증산동 205-2",
        latitude: "37.58612499999879",
        longitude: "126.90757538952293",
        duration: 60,
      },
      {
        name: "증산역.증산동주민센터",
        address: "서울 은평구 증산동 207-16",
        latitude: "37.58392299999909",
        longitude: "126.90526438951443",
        duration: 60,
      },
      {
        name: "증산종합시장.증산중학교입구",
        address: "서울 은평구 수색동 413",
        latitude: "37.58091099999872",
        longitude: "126.9238687306278",
        duration: 60,
      },
      {
        name: "월드컵경기장서측.문화비축기지",
        address: "서울 마포구 상암동 1538",
        latitude: "37.56944399999994",
        longitude: "126.89070238952021",
        duration: 300,
      },
      {
        name: "마포농수산물시장.월드컵공원",
        address: "서울 마포구 상암동 1535",
        latitude: "37.566136999999564",
        longitude: "126.89263038952282",
        duration: 120,
      },
      {
        name: "영등포아리수정수센터",
        address: "서울 강서구 염창동 284-81",
        latitude: "37.54788200000006",
        longitude: "126.87923938951982",
        duration: 240,
      },
      {
        name: "신목동역",
        address: "서울 양천구 목동 521-13",
        latitude: "37.54600799999901",
        longitude: "126.87731038951888",
        duration: 120,
      },
      {
        name: "신목동역-서울지방식품의약품안전청",
        address: "서울 양천구 목동 199-51",
        latitude: "37.54348400000037",
        longitude: "126.87915838951976",
        duration: 60,
      },
      {
        name: "월촌중학교.목동1단지",
        address: "서울 양천구 목동 902",
        latitude: "37.53800299999919",
        longitude: "126.87789338952074",
        duration: 60,
      },
      {
        name: "목동2단지",
        address: "서울 양천구 목동 902",
        latitude: "37.536520999999766",
        longitude: "126.87360438952207",
        duration: 120,
      },
      {
        name: "목동3단지",
        address: "서울 양천구 목동 903",
        latitude: "37.53470799999989",
        longitude: "126.87153838951677",
        duration: 60,
      },
      {
        name: "목동4단지상가.목동종합운동장",
        address: "서울 양천구 목동 904",
        latitude: "37.53225200000039",
        longitude: "126.87091838951774",
        duration: 60,
      },
      {
        name: "목1동주민센터",
        address: "서울 양천구 목동 925",
        latitude: "37.529866000000524",
        longitude: "126.87789338952074",
        duration: 60,
      },
      {
        name: "목동7단지",
        address: "서울 양천구 목동 925",
        latitude: "37.52848220000161",
        longitude: "126.86603578952091",
        duration: 60,
      },
      {
        name: "하이스트학원.종로학원",
        address: "서울 양천구 목동 925",
        latitude: "37.52486299999978",
        longitude: "126.8652483895194",
        duration: 60,
      },
      {
        name: "목동8단지.한전",
        address: "서울 양천구 신정동 312",
        latitude: "37.52021200000037",
        longitude: "126.86603578952091",
        duration: 120,
      },
      {
        name: "양천구청.양천보건소",
        address: "서울 양천구 신정동 311",
        latitude: "37.51693999999986",
        longitude: "126.85834338951982",
        duration: 60,
      },
      {
        name: "양천문화회관.양천일자리센터",
        address: "서울 양천구 목동 925",
        latitude: "37.52848220000161",
        longitude: "126.86603578952091",
        duration: 60,
      },
      {
        name: "목동10단지상가",
        address: "서울 양천구 신정동 310-6",
        latitude: "37.516020999999384",
        longitude: "126.8555633895219",
        duration: 60,
      },
      {
        name: "목동12단지",
        address: "서울 양천구 목동 925",
        latitude: "37.51429899999878",
        longitude: "126.85644938952052",
        duration: 60,
      },
      {
        name: "양천구민체육센터.양천일자리센터",
        address: "서울 양천구 신정동 324-8",
        latitude: "37.51553199999962",
        longitude: "126.8599933895207",
        duration: 60,
      },
      {
        name: "양천구청",
        address: "서울 양천구 신정동 323-1",
        latitude: "37.51651770000013",
        longitude: "126.86274058951804",
        duration: 60,
      },
      {
        name: "목동13단지",
        address: "서울 양천구 신정동 327",
        latitude: "37.51457999999812",
        longitude: "126.86500738951835",
        duration: 60,
      },
      {
        name: "갈산초등학교정문",
        address: "서울 양천구 신정동 328-5",
        latitude: "37.512804999999595",
        longitude: "126.86593938952156",
        duration: 120,
      },
      {
        name: "목적지",
        address: "서울 양천구 목동동로 130",
        latitude: "37.512804999999595",
        longitude: "126.86593938952156",
        duration: 300,
      },
    ],
  },
];

export const totalEstimated: Estimated = {
  distance: 16000,
  duration: 4200,
};
