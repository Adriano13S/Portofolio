import {createGlobalStyle} from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
}

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      text-decoration: none;
      font-family: 'Lucida Console', sans-serif;
      scroll-behavior: smooth;
  }
  :root{
    --bck-color:#f7f6f6;
    --dark-blue: #061d34;
    --avg-blue: #082746;
    --text-gradient-nice-blue-bronze: linear-gradient(-70deg, #d75800 0%, #1e9ddc 100%);
    --gradient-avg-blue-dark-blue: linear-gradient(180deg, rgba(8,39,70,1) 0%, rgba(8,39,70,1) 39%, rgba(6,29,52,1) 100%);
    --nice-blue: #1e9ddc;
    --grey:#666f77;
    --light-grey:#7b858b;
    --bronze:#d75800;
    --main-box-shadow: 0px 5px 13px -7px #000000, -6px 13px 10px 2px rgba(0,0,0,0);
    // --p-size: 1.2vmin;
    // --h1-size: 4vmin;
    // --h2-size: 2.5vmin;
    // --h3-size: 2.2vmin;
    // --h4-size: 1.8vmin;
    // --h5-size: 1.5vmin;
    --p-size: 15px;
    --h1-size: 45px;
    --h2-size: 35px;
    --h3-size: 30px;
    --h4-size: 25px;
    --h5-size: 18px;
    --pimage-size: 3.5vmin;
    --linkimage-size: 25px;
    --box-width: 35%;
    --skill-size: 8vmin;
    --project-width: 420px;
    @media screen and (max-width: ${size.laptopL}) {
      --box-width: 45%;
      --skill-size: 10vmin;
      --project-width: 400px;
    }
    @media screen and (max-width: ${size.laptop}) {
      --box-width: 55%;
      --pimage-size: 4vmin;
      --p-size: 13px;
      --h1-size: 38px;
      --h2-size: 30px;
      --h3-size: 25px;
      --h4-size: 21px;
      --project-width: 370px;
    }
    @media screen and (max-width: ${size.tablet}) {
      --box-width: 68%;
      --h2-size: 30px;
      --pimage-size: 5.5vmin;
      --skill-size: 12vmin;
      --project-width: 340px;
    }
    @media screen and (max-width: ${size.mobileL}) {
      --project-width: 100%;
      --p-size: 10px;
      --h1-size: 25px;
      --h2-size: 20px;
      --h3-size: 17px;
      --h4-size: 14px;
      --h5-size: 12.5px;
      --pimage-size: 6.5vmin;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bck-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--nice-blue); 
    border-radius: 50px;
  }
`