import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../Commons/Button'
import MovieInfo from './MovieInfo';
import classes from './SelectedMovie.module.css'

const MOVIES = [
    {
        id: "MOVIE1",
        name: "신비한 동물들과 덤블도어의 비밀",
        rate: "23.7%",
        likeRate: "82%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85712/85712_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggood.png",
        alt: "Golden Egg good",
        description: `가장 위험한 마법에 맞선, 세상을 구할 전쟁이 시작된다!
    
          1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서
          강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다.
          덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손,
          마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다.
          이에 뉴트와 친구들은 머글과의 전쟁을 선포한
          그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다.
          한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는
          더이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데`,
    },
    {
        id: "MOVIE2",
        name: "앵커",
        rate: "10.9%",
        likeRate: "89%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85772/85772_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png",
        alt: "Golden Egg great",
        description: `“제 죽음이 정세라 앵커의 입을 통해 보도되면 너무 기쁠 것 같아요”
    
            생방송 5분 전, 방송국 간판 앵커 ‘세라’(천우희)에게
            자신이 살해될 것이라며 죽음을 예고하는 제보전화가 걸려온다.
            장난전화로 치부하기에는 찝찝한 마음을 감출 수 없는 ‘세라’.
            진짜 앵커가 될 기회라는 엄마 ‘소정’(이혜영)의 말에
            ‘세라’는 제보자의 집으로 향하고 제보자인 ‘미소’와 그녀의 딸의 시체를 목격한다.
            
            그날 이후, ‘세라’의 눈앞에 죽은 ‘미소’의 모습이 자꾸만 떠오르기 시작한다.
            사건 현장에서 미소의 주치의였던 정신과 의사 ‘인호’(신하균)를 마주하게 되며
            그에 대한 ‘세라’의 의심 또한 깊어지는데…
            
            완벽했던 앵커를 뒤흔들 충격적인 진실을 확인하라!`,
    },
    {
        id: "MOVIE3",
        name: "닥터 스트레인지-대혼돈의 멀티버스",
        rate: "33.3%",
        likeRate: "99%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85715/85715_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png",
        alt: "Golden Egg Preegg",
        description: `지금껏 본 적 없는 마블의 극한 상상력!
        5월, 광기의 멀티버스가 깨어난다!
          
        끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며
        오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.
        대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….`,
    },
    {
        id: "MOVIE4",
        name: "로스트 시티",
        rate: "6.1%",
        likeRate: "77%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggood.png",
        alt: "Golden Egg good",
        description: `전설의 트레저를 차지하기 위해 재벌 페어팩스(다니엘 래드클리프)는 
        유일한 단서를 알고 있는 베스트셀러 작가 로레타(산드라 블록)를 납치하게 된다. 
        어쩔 수 없는 비지니스 관계로 사라진 그녀를 찾아야만 하는 
        책 커버모델 앨런(채닝 테이텀)은 의문의 파트너(브래드 피트)와 함께 
        위험한 섬에서 그녀를 구하고 무사히 탈출해야만 하는데…
        
        적과 자연의 위험이 도사리는 일촉즉발 화산섬
        대환장 케미의 그들이 생존하여 섬을 탈출할 수 있을까? `,
    },
    {
        id: "MOVIE5",
        name: "공기살인",
        rate: "4.3%",
        likeRate: "98%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85780/85780_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png",
        alt: "Golden Egg Preegg",
        description: `“알고 있었죠, 사람이 죽을 수도 있다는 거”

        봄이 되면 나타났다 여름이 되면 사라지는 죽음의 병.
        공기를 타고 대한민국에 죽음을 몰고 온 살인무기의 실체를 밝히기 위한 그들의 사투.
        증발된 범인, 피해자는 증발되지 않았다!`,
    }, 
    {
        id: "MOVIE6",
        name: "세븐틴 파워 오브 러브 - 더 무비",
        rate: "18.9%",
        likeRate: "99%",
        img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85791/85791_320.jpg",
        icon: "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png",
        alt: "Golden Egg great",
        description: `2021년 열린 온라인 콘서트 ‘POWER OF LOVE’의 감동이 스크린으로 다시 펼쳐진다!

        5연속 밀리언셀러, 빌보드 200 2주 연속 차트인, 오리콘 차트 정상을 꿰차며        
        매번 새로운 역사를 써 내려가는 글로벌 아티스트 SEVENTEEN의 첫 번째 영화!
        풍성한 퍼포먼스부터, 13인 멤버들의 속마음 인터뷰,
        과거와 현재 그리고 캐럿과 함께 그려나갈 미래를 담은 다채로운 코멘터리까지 전부 담았다!         
        세상의 모든 사랑을 담아 캐럿에게 보내는 SEVENTEEN의 무비 러브레터!`,
    },
]


// Cart 대신 SelectedMovie
const SelectedMovie = (props) => {
    const [movies, setMovies] = useState(MOVIES);

    // Movie{id, name, img, description}
    const movieinfo = (
        <ul className={classes.movieinfo}>
            {movies.map(movie => (
                <MovieInfo
                id={movie.id}
                key={movie.id}
                name={movie.name}
                img={movie.img}
                description={movie.description}
                />
            ))}
        </ul>
    )
    
    // 예매, 닫기 버튼
    const modalButton = (
        <div className={classes.button}>
            <Button>예매</Button>
            <Button onClick={props.onClose}>닫기</Button>
        </div>
    )

    const movieModalContent = (
        <>
            {movieinfo}
            {modalButton}
        </>
    )

  return <Modal onClose={props.onClose}>{movieModalContent}</Modal>
}

export default SelectedMovie